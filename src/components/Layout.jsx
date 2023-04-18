import Anchor from "./Anchor";
export default function Layout({ children, navData }) {
  return (
    <>
      <nav>
        {navData.map((obj) => {
          /* this do so that we get our nav elements and their titles from our json data */
          return <Anchor href={"/dogs/" + obj.slug}>{obj.title}</Anchor>;
        })}
      </nav>
      {/* children gør at vi får vores layout fra Layout components */}
      {children}
      <footer>Footer</footer>
    </>
  );
}
