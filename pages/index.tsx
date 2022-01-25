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
                <Link href="/react-components">React components</Link>
              </li>
              <li>
                <Link href="/marriage-witness-form">Getuigen uitnodigen</Link>
              </li>
              <li>
                <Link href="/marriage-witness-data">Getuigen overzicht</Link>
              </li>
              <li>
                <Link href="/huwelijksplanner-step-0">Huwelijksplanner stap 0</Link>
              </li>
            </ul>
            <form>
              <input type="radio" name="a" value="1" />
              <input type="radio" name="a" value="2" />
              <input type="radio" name="a" value="3" />
              <input type="submit" />
            </form>
          </nav>
        </header>
      </Document>
    </>
  );
}
