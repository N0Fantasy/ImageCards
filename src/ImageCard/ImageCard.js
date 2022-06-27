import React, { memo } from 'react'

import { like, deleteImg } from '../redux/actionCreators'
import { useDispatch } from 'react-redux'
import './ImageCard.css'

const ImageCardNoMemo = ({ image }) => {
    const dispatch = useDispatch()

    const handleOnLike = () => {
        dispatch(like(image.image_id))
    }
    const handleOnDelete = () => {
        dispatch(deleteImg(image.image_id))
    }

    return (
        <div className='ImageCard'>
            <img className='Img' src={`${image.url}`} alt='waifu' />
            <div className='Source'>
                Source:
                <a href={`${image.source}`} className='SourceLink'>{` ${image.source ? image.source : ''}`}</a>
            </div>
            <div className='Btns'>
                {
                    image.liked
                        ?
                        <button onClick={handleOnLike} className='Liked'>♥</button>
                        :
                        <button onClick={handleOnLike} className='Unliked'>♡</button>
                }
                <button onClick={handleOnDelete} className='Delete'>Delete ✕</button>
            </div>
        </div>
    )
}

export const ImageCard = memo(ImageCardNoMemo)
