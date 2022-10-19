import React from 'react'
import Image from 'next/image'
import img from '../public/1.jpg'

const NaturePage = () => {
  return (
    <div>
      {/* this is blur placeholder as the image is loading but only work fopr static path and not dynamic ones */}
      <Image src={img} placeholder='blur' alt='pet' width='280' height='420' />
      {
        ['1','2','3','4','5'].map(path => {
          return(
            <div key={path}>
              {/* the blurDataURL must be used only for base 64 small images (10px)  */}
              <Image src={`/${path}.jpg`} placeholder='blur' blurDataURL='' alt='pet' width='280' height='420' />
            </div>
          )
        })
      }
    </div>
  )
}

export default NaturePage
