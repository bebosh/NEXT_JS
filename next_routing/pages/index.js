import Link from 'next/link';
import {useRouter} from "next/router";

const Home = () => {
  const router = useRouter();

  const handleClick = () =>{
    console.log("redirected");
    router.push('/products')
  }
  return (
    <div>
      <h1>Home page</h1>
      <Link href="blog">
        <h3>To blog page </h3>
      </Link>
      <Link href="products">
        <h3>To products page </h3>
      </Link>
      <button onClick={handleClick}>Redirect</button>
      
    </div>
  );
};
export default Home;
