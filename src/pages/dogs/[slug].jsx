import Image from "next/image";
import Head from "next/head";
export default function Dogs({ data }) {
  const { content } = data;
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h1>{content.heading}</h1>
      <p>{content.text}</p>
      <Image className="img" src={content.image.src} alt={content.image.alt} width={content.image.width} height={content.image.height} sizes="(max-width: 750px) 100vw, 750px" />
    </>
  );
}

/* Makes a list of all the pages that is needed to be remebered by the server meaninng  */
/* SERVER SITE BACKEND */
export async function getStaticProps(context) {
  /* write dogs/some-slug then u see the page */
  const slug = context.params.slug;
  const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs/" + slug;
  const res = await fetch(api);
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  console.log(data);

  return {
    /*this makes sure we run the request only once */
    props: {
      data: data,
    },
  };
}

/* Generates one static page */
/* CLIENT SITE BACKEND */
export async function getStaticPaths() {
  const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs";
  const res = await fetch(api);
  const data = await res.json();
  /* generates a page for each "dog" */
  const paths = data.map((object) => {
    console.log(object.slug);
    return { params: { slug: object.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
