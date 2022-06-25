import React from 'react'

import { ImageCard } from '../ImageCard/ImageCard'
import { useImage } from '../api/useImage'

import './ImageCardList.css'

export const ImageCardList = () => {
    const data = useImage()
    if (!data) return null

    return (
        <div className='ImageCardList'>
                { data.map(image => <ImageCard key={image.image_id} image={image} /> ) }
        </div>
    )
}