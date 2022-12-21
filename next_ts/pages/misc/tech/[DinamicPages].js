import {useRouter} from "next/router"
const DinamicPage = () => {
  const index = useRouter();
    return (
      <div>DinamicPage {index.query.DinamicPages} </div>
    )
  }
  
  export default DinamicPage;