import React from 'react'

const ArticleListByCategory = ({articles, category}) => {
  return (
    <div>
         <h1>Article category: {category}</h1>
    {articles.map((article)=>{
        return (
            <div key={article.id} >
                <h2>
                    {article.id} - {article.title}
                </h2>
                <p>{article.description}</p>
                <hr/>
            </div>
        )
    })}
    </div>
   
  )
}

export default ArticleListByCategory

export async function getServerSideProps(context) {
    const {params, req, res, query} = context;
    console.log(req.headers.cookie);
    console.log(query);
    const {category} = params;
    res.setHeader('Set-Cookie',[`category= ${category}`])
    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();
    return {
      props: {
        articles: data,
        category
      },
    };
  }
  