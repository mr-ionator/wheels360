import React from 'react'

function ImageGallery({carDetail}) {
  return (
    <div>
        {carDetail && carDetail.images && carDetail.images.length && <img src={carDetail?.images[0].imageUrl}
         className='w-full h-[500px] object-cover rounded-xl' /> || ""
  }
    </div>
  )
}

export default ImageGallery