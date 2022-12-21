import Link from "next/link";

function Home() {
  return (
    <>
    <h1>Next JS pre-rendering</h1>
    <Link href='/users' >
    <p>Users</p>
    </Link>
    <Link href='/posts' >
    <p>Posts</p>
    </Link>
    <Link href='/products' >
    <p>Products</p>
    </Link>
    </>
  )
}

export default Home;