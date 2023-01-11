import React from 'react'
import Image from 'next/image'
const pets = () => {
  return (
    <div>
        {
            [1,2,3,4,5].map((path)=>{
                return(
                    <div key={path} >
                        <Image src={`/${path}.jpg`} alt='pet' width='280' height='280' />
                    </div>
                )
            })
        }
        </div>
  )
}

export default pets