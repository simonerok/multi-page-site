import "@/styles/globals.css";
import Layout from "@/components/Layout";
import App from "next/app";

/* OBS this is a Next.js project */
export default function MyApp({ Component, pageProps, navData }) {
  return (
    <>
      <Layout navData={navData}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
/* this makes sure that the url works on all pages */
MyApp.getInitialProps = async (appContext) => {
  // Provide the appContext, in order to do 404's
  const appProps = await App.getInitialProps(appContext);
  /* her indsætter vi vores url */
  const res = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs");
  const navData = await res.json();
  return { ...appProps, navData };
};
