import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        {" "}
        {product.id} - {product.title}
      </h2>
      <p> {product.description}</p>
    </>
  );
};

export default Product;

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:4000/products`);
  const data = await response.json();
console.log(response);
  // const paths = data.map((product) => {
  //   // this function creates all the page routes for the products provided by the API
  //   return {
  //     params: { productId: `${product.id}` },
  //   };
  // });

  return {
    paths: [
      { params: { productId: "1" } },
      { params: { productId: "2" } },
      { params: { productId: "3" } },
     
    ],
    //paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: data,
    },
  };
}
