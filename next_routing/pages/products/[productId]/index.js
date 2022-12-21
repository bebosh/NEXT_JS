import {useRouter} from 'next/router'

const ProductDetail = () => {
    const route = useRouter();
    console.log(route);
  return (
    <div>ProductDetail {route.query.productId}</div>
  )
}

export default ProductDetail;