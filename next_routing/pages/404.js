import React from 'react'
import Image from 'next/image'

const FourOFour = () => {
  return (
    <div>
        <Image src="https://media.giphy.com/media/mvyvXwL26FfAtRCLPk/giphy.gif" 
        alt="404" 
        width={300} 
        height= {200}
        />
        <h3>OOPS! no pages like this, sorry</h3>
    </div>
  )
}

export default FourOFour;
