import Head from 'next/head';
import AboutLayout from '../components/about-layout'

const About = ({articles}) => {
  return <div style={ {padding:"40px"}} >About -- {articles} - {process.env.NEXT_PUBLIC_ANALITICS}</div>;
};

export default About;

About.getLayout = function getLayout(About) {
  return (
    <>
    <Head>
      <meta name='description' content='abaut page'></meta>
    </Head>
    <AboutLayout>
      {About}
      </AboutLayout>
    </>
      
  )
}

export async function getServerSideProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(user +' - ' +password);
  return {
    props: {
      articles: "this is an article",
    },
  };
}