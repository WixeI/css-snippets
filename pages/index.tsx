import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CSS Snippets</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li>
          <Link href={"/header-no-flex"}>Header No Flex</Link>
        </li>
        <li>
          <Link href={"/glowing-card"}>Glowing Card</Link>
        </li>
      </ul>
    </div>
  );
}
