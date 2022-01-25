import Head from "next/head";
import Link from "next/link";
import { LanguageToggle } from "../src/components/LanguageToggle";
import { Document } from "../src/components/utrecht";

export default function Home() {
  return (
    <>
      <Document>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <nav>
            <LanguageToggle />
            <ul>
              <li>
                <Link href="/form">Form Example</Link>
              </li>
              <li>
                <Link href="/react-components">React components</Link>
              </li>
              <li>
                <Link href="/marriage-witness-form">Getuigen uitnodigen</Link>
              </li>
              <li>
                <Link href="/marriage-witness-data">Getuigen overzicht</Link>
              </li>
            </ul>
          </nav>
        </header>
      </Document>
    </>
  );
}
