import {useRouter} from 'next/router'

const Doc = () => {
    const router = useRouter()
    const {params = []} = router.query
    
    if (params.length == 2){
        return (
            <h1>Docs page of {params[0]} and {params[1]} </h1>
          )
    }
    if (params.length == 1){
        return (
            <h1>Docs page of {params[0]} </h1>
          )
    }
   
    return (
        <h1>Docs home page  </h1>
      )
}

export default Doc;
