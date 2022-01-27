/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import {
  Document,
  Fieldset,
  FieldsetLegend,
  Paragraph,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
  Button,
  Page,
  PageContent,
  PageContentMain,
  PageHeader,
  TextInput,
} from "../src/components/utrecht";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LanguageToggle } from "../src/components/LanguageToggle";
import { exampleState } from "../src/data/huwelijksplanner-state";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["huwelijksplanner-step-4", "form"])),
  },
});

export default function MultistepForm1() {
  const { t } = useTranslation(["huwelijksplanner-step-4", "form"]);
  const data = { ...exampleState };

  return (
    <Document>
      <Head>
        <title>
          {t("huwelijksplanner-step-4:title")}
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
            <Heading1>Jullie reservering</Heading1>
            {/*TODO: Previous button */}
            {/*TODO: Step indicator component */}
            <Paragraph lead>Stap 3 — Meld je voorgenomen huwelijk</Paragraph>
            {/*TODO: Banner / card */}
            <div>
              <div>LOCATIE STADSKANTOOR - EENVOUDIG TROUWEN</div>
              <div>14 April 2021 (10.00 - 10.15 uur)</div>
              <div>Kosten: € 168</div>
            </div>
            <section>
              <Heading2>Nodig je partner uit</Heading2>
              <Paragraph>
                We hebben jouw gegevens ontvangen. Je kunt nu je partner uitnodigen om ook in te loggen met DigID. Zo
                bevestigt je partner dat jullie het huwelijk willen regelen.
              </Paragraph>
              <Fieldset>
                <FieldsetLegend>Partner</FieldsetLegend>
                <FormField>
                  <FormLabel htmlFor="partner-name">{t("form:name")}</FormLabel>
                  <TextInput
                    id="partner-name"
                    autoComplete="section-partner name"
                    type="text"
                    value={data.partnerInvitation["name"]}
                    required
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="partner-email">{t("form:email")}</FormLabel>
                  <TextInput
                    id="partner-email"
                    autoComplete="section-partner email"
                    type="email"
                    value={data.partnerInvitation["email"]}
                    required
                  />
                </FormField>
              </Fieldset>
              <Button type="submit" name="type">
                Verstuur uitnodiging
              </Button>
            </section>
          </PageContentMain>
        </PageContent>
      </Page>
    </Document>
  );
}
