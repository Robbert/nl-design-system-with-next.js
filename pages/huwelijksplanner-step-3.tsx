/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import {
  Document,
  RadioButton,
  Fieldset,
  FieldsetLegend,
  Paragraph,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
  Link,
  Button,
  Page,
  PageContent,
  PageContentMain,
  PageHeader,
} from "../src/components/utrecht";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LanguageToggle } from "../src/components/LanguageToggle";
import { DateInput } from "../src/components/DateInput";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["huwelijksplanner-step-3"])),
  },
});

export default function MultistepForm1() {
  const { t } = useTranslation("huwelijksplanner-step-3");
  return (
    <Document>
      <Head>
        <title>
          {t("huwelijksplanner-step-3:title")}
          {" — "}
          {t("common:website-name")}
        </title>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/component-library-css/dist/bem.css" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@gemeente-denhaag/design-tokens-components/dist/theme/index.css"
        />
      </Head>
      <Page>
        <PageHeader>
          <LanguageToggle />
        </PageHeader>
        <PageContent>
          <PageContentMain>
            <form method="POST" action="/api/huwelijksplanner-step-3">
              <Heading1>{t("huwelijksplanner-step-3:heading-1")}</Heading1>
              {/*TODO: Previous button */}
              {/*TODO: Step indicator component */}
              {/*TODO: Banner / card */}
              <div>
                <div>LOCATIE STADSKANTOOR - EENVOUDIG TROUWEN</div>
                <div>14 April 2021 (10.00 - 10.15 uur)</div>
                <div>Kosten: € 168</div>
              </div>
              <section>
                <Heading2>Meld je voorgenomen huwelijk</Heading2>
                <Paragraph>
                  Je logt hier in met DigID. Zo geef je door aan de gemeente dat je wil gaan trouwen.
                </Paragraph>
                <Paragraph>Na deze stap vragen we ook aan je partner om in te loggen met DigID.</Paragraph>
                {/*TODO: DigiD button */}
                <Button type="submit" name="type">
                  Meld voorgenomen huwelijk
                </Button>
              </section>
              <section>
                <Heading2>Meer informatie</Heading2>
                <Paragraph>
                  <Link href="/" external target="_blank">
                    Vraag DigiD aan
                  </Link>
                </Paragraph>
              </section>
            </form>
          </PageContentMain>
        </PageContent>
      </Page>
    </Document>
  );
}
