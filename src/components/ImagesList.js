import React from 'react'
import Image from './Image'

function ImagesList({ images }) {
  return (
    <div className="col-12 p-5 row">
      {images.map(images => (
        <Image key={image.id} image={image} />
      ))}
    </div>
  )
}

export default ImagesList
