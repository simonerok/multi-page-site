import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* Head ændre i urlens navn istedet for at der står localhost */}
      <Head>Welcome </Head>
      <h1>Hello</h1>
      <Link href="/dogs/henry">Henry -nono</Link>
    </>
  );
}
