import Link from 'next/link';
const ProductList = ({ productId = 100 }) => {
  return (
    <div>
      ProductList
      <Link href="/products/1">
        <h1>Product 1</h1>
      </Link>
      <Link href="/products/2">
        <h1>Product 2</h1>
      </Link>
      <Link href="/products/3" replace>
        <h1>Product 3</h1>
      </Link>
      <Link href={`/products/${productId}`}>
        <h1>Product 100</h1>
      </Link>
    </div>
  );
};
export default ProductList;
