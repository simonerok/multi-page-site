import Anchor from "@/components/Anchor";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* Head ændre i urlens navn istedet for at der står localhost */}
      <Head>Welcome </Head>
      <h1>Hello</h1>
      {/* anchor behaves like a link */}
      <Anchor href="/dogs/henry">Henry -nono</Anchor>
    </>
  );
}
