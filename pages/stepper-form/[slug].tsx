import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Document } from "../../src/components/utrecht/Document";
import { Page } from "../../src/components/utrecht/Page";
import { useRouter } from "next/router";
import { PageContent } from "../../src/components/utrecht/PageContent";
import { FormEvent } from "react";
import { Button } from "../../src/components/utrecht/Button";
import { PersonalDetails } from "../../src/components/stepper-form/PersonalDetails";
import { Address } from "../../src/components/stepper-form/Address";
import { ContactDetails } from "../../src/components/stepper-form/ContactDetails";
import { LastStep } from "../../src/components/stepper-form/LastStep";
import { PageHeader } from "../../src/components/utrecht/PageHeader";
import { ThemeSwitcher } from "../../src/components/ThemeSwitcher";
import { Summary } from "../../src/components/stepper-form/Summary";
import { Complete } from "../../src/components/stepper-form/Complete";
import { LanguageToggle } from "../../src/components/LanguageToggle";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["stepper-form", "theme-switcher"])),
  },
});

const FORM_STEPS = 4;

const PreviousStep: { [key: string]: string } = {
  "step-2": "step-1",
  "step-3": "step-2",
  "step-4": "step-3",
  summary: "step-4",
};

const NextStep: { [key: string]: string } = {
  "step-1": "step-2",
  "step-2": "step-3",
  "step-3": "step-4",
  "step-4": "summary",
};

const FormStep = ({ step }: { step?: string | string[] }) => {
  if (step === "step-1") {
    return <PersonalDetails />;
  }
  if (step === "step-2") {
    return <Address />;
  }
  if (step === "step-3") {
    return <ContactDetails />;
  }
  if (step === "step-4") {
    return <LastStep />;
  }
  return null;
};

export default function StepperForm() {
  const { t } = useTranslation("stepper-form");
  const router = useRouter();
  const formData = {}; //TODO keep track of state
  const { slug } = router.query;
  const step = slug && typeof slug === "string" ? slug : "step-1";

  const submit = () => {
    const request = new Request("/api/stepper-form", { method: "POST", body: JSON.stringify({ formData, step }) });

    return fetch(request);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submit().then(() => {
      const next = NextStep[step];
      if (next) {
        console.log("NEXT", next);
        router.push(next);
      }
    });
  };

  const previousStep = () => {
    submit().then(() => {
      if (PreviousStep[step]) {
        router.push(PreviousStep[step]);
      }
    });
  };

  const sendForm = () => {
    submit().then(() => {
      router.push("complete");
    });
  };

  const closeForm = () => {
    router.push("/");
  };

  return (
    <Document>
      <Head>
        <title>{t("page-title")}</title>
      </Head>
      <Page>
        <PageHeader>
          <ThemeSwitcher />
          <LanguageToggle />
        </PageHeader>
        <main>
          <PageContent>
            {step.includes("step") ? (
              <>
                <div className="todo-form-stepper todo-form-stepper--distanced">
                  <p>{t("stepper", { step: step.replace("step-", ""), total: FORM_STEPS })}</p>
                </div>
                <form onSubmit={handleSubmit} id="stepper-form" className="todo-form">
                  <FormStep step={step} />
                  <div className="todo-button-group todo-button-group--reverse">
                    {NextStep[step] && (
                      <Button type="submit" form="stepper-form" className="utrecht-button--primary-action">
                        {NextStep[step] === "summary" ? t("to-summary") : t("next-step")} →
                      </Button>
                    )}
                    {PreviousStep[step] && <Button onClick={previousStep}>{t("previous-step")}</Button>}
                  </div>
                </form>
              </>
            ) : step === "summary" ? (
              <>
                <Summary />
                <div className="todo-button-group todo-button-group--reverse">
                  <Button onClick={sendForm} className="utrecht-button--primary-action">
                    {t("send-form")}
                  </Button>
                  <Button onClick={previousStep}>{t("previous-step")}</Button>
                </div>
              </>
            ) : (
              <>
                <Complete />
                <div className="todo-button-group">
                  <Button onClick={closeForm} className="utrecht-button--primary-action">
                    {t("close-form")}
                  </Button>
                  <Button
                    onClick={() => {
                      /**TODO print form */
                    }}
                  >
                    🗳 {t("download-form")}
                  </Button>
                </div>
              </>
            )}
          </PageContent>
        </main>
      </Page>
    </Document>
  );
}
