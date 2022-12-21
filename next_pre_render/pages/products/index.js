import Link from "next/link";

const ProductList = ({products})=>{
    return (
    <>
        <h1>List of products</h1>
        {
            products.map(product =>{
                return(
                   
                    <div key= {product.id}>
                        <Link href={`products/${product.id}`}  >
                       {product.id} - {product.title} - {product.price}
                       </Link>
                       <hr />
                    </div>
                   
                )
            })
        }
    </>
    )
}

export default ProductList

export async function getStaticProps() {
    console.log("regenerate");
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()
    return{
        props:{
            products:data,
        },
        revalidate:10,
    }
}