export default function RandomDog({ imgUrl }) {
  console.log(imgUrl);
  return (
    <>
      <h1>Random dog</h1>
      <img src={imgUrl} alt="random dog" />
    </>
  );
}

export async function getServerSideProps() {
  const api = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(api);
  const data = await res.json();

  return {
    props: {
      imgUrl: data.message,
    },
  };
}
