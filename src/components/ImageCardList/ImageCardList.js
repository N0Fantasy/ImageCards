import React from 'react'

import { ImageCard } from '../ImageCard/ImageCard'
import { useSelector } from 'react-redux'
import './ImageCardList.css'

export const ImageCardList = () => {
    const images = useSelector(state => {
        const { reducer } = state
        return reducer.images
    })

    return (
        <div className='ImageCardList'>
                { images.map(image => <ImageCard key={image.id} image={image} /> ) }
        </div>
    )
}
