import Head from "next/head";
import { LanguageToggle } from "../src/components/LanguageToggle";
import {
  Document,
  Heading1,
  Link,
  UnorderedList,
  UnorderedListItem,
  Page,
  PageContent,
  PageHeader,
} from "../src/components/utrecht";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Document>
        <Page>
          <PageHeader>
            <LanguageToggle />
          </PageHeader>
          <PageContent>
            <Heading1>Sitemap</Heading1>
            <UnorderedList>
              <UnorderedListItem>
                <Link href="/form">Form of forms</Link>
              </UnorderedListItem>
              <UnorderedListItem>
                <Link href="/react-components">React components</Link>
              </UnorderedListItem>
              <UnorderedListItem>
                Components
                <UnorderedList>
                  <UnorderedListItem>
                    <Link href="/form-step-1">Form step #1</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="/form-step-2">Form step #2</Link>
                  </UnorderedListItem>
                </UnorderedList>
              </UnorderedListItem>
              <UnorderedListItem>
                Form inputs
                <UnorderedList>
                  <UnorderedListItem>
                    <Link href="/form-input-voornaam">Voornaam</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>Adelijke titel of predicaat</UnorderedListItem>
                  <UnorderedListItem>Tussenvoegsel</UnorderedListItem>
                  <UnorderedListItem>Achternaam</UnorderedListItem>
                  <UnorderedListItem>Voorletters</UnorderedListItem>
                  <UnorderedListItem>Geslacht</UnorderedListItem>
                  <UnorderedListItem>Naam in origineel schrift</UnorderedListItem>
                  <UnorderedListItem>Aanspreekvorm</UnorderedListItem>
                  <UnorderedListItem>Geboortedatum</UnorderedListItem>
                  <UnorderedListItem>Geboorteplaats</UnorderedListItem>
                  <UnorderedListItem>Geboorteland</UnorderedListItem>
                  <UnorderedListItem>Burgerservicenummer (BSN)</UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="/form-input-email">E-mailadres</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>Volledige naam</UnorderedListItem>
                  <UnorderedListItem>Roepnaam</UnorderedListItem>
                  <UnorderedListItem>Telefoonnummer</UnorderedListItem>
                  <UnorderedListItem>Mobiel Telefoonnummer</UnorderedListItem>
                  <UnorderedListItem>Telefoonnummer overdag</UnorderedListItem>
                  <UnorderedListItem>Telefoonnummer 's avonds</UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="/form-input-postcode">Postcode</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="/form-input-huisnummer">Huisnummer</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>Huisletter</UnorderedListItem>
                  <UnorderedListItem>Huisnummertoevoeging</UnorderedListItem>
                  <UnorderedListItem>Straat</UnorderedListItem>
                  <UnorderedListItem>Woonplaats</UnorderedListItem>
                  <UnorderedListItem>Gemeente</UnorderedListItem>
                  <UnorderedListItem>Land</UnorderedListItem>
                  <UnorderedListItem>Buitenlands adres</UnorderedListItem>
                  <UnorderedListItem>Woonplaats</UnorderedListItem>
                  <UnorderedListItem>Geboortedatum</UnorderedListItem>
                  <UnorderedListItem>Kenteken</UnorderedListItem>
                  <UnorderedListItem>KvK-nummer</UnorderedListItem>
                  <UnorderedListItem>Bedrijfsnaam</UnorderedListItem>
                  <UnorderedListItem>Jaar van oprichting</UnorderedListItem>
                  <UnorderedListItem>IBAN</UnorderedListItem>
                  <UnorderedListItem>BIC</UnorderedListItem>
                  <UnorderedListItem>Controle ingevoerde gegevens</UnorderedListItem>
                </UnorderedList>
              </UnorderedListItem>
              <UnorderedListItem>
                <Link href="/marriage-witness-form">Getuigen uitnodigen</Link>
              </UnorderedListItem>
              <UnorderedListItem>
                <Link href="/marriage-witness-data">Getuigen overzicht</Link>
              </UnorderedListItem>
              <UnorderedListItem>
                Huwelijksplanner
                <UnorderedList>
                  <UnorderedListItem>
                    <Link href="/huwelijksplanner-step-0">Stap 0: Regel je huwelijk of geregistreerd partnerschap</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="/huwelijksplanner-step-1">Stap 1: Trouwen of geregistreerd partnerschap</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="/huwelijksplanner-step-2">Stap 2</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="/huwelijksplanner-step-3">Stap 3</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="/huwelijksplanner-step-4">Stap 4</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="/huwelijksplanner-step-5">Stap 5</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="/huwelijksplanner-step-6">Stap 6</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="/huwelijksplanner-step-invite-witness">Stap: Nodig alvast getuigen uit</Link>
                  </UnorderedListItem>
                </UnorderedList>
              </UnorderedListItem>
            </UnorderedList>
          </PageContent>
        </Page>
      </Document>
    </>
  );
}
