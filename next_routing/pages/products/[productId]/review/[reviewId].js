import {useRouter} from 'next/router'

const ProductReview = () => {
    const route = useRouter();
   
    const {productId, reviewId} = route.query;
    console.log(route);
  return (
    <div>Productreview Page {productId} - rewiew {reviewId}</div>
  )
}

export default ProductReview;