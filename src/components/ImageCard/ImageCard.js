import React, { memo } from 'react'

import { like, deleteImg } from '../../redux/actionCreators'
import { useDispatch } from 'react-redux'
import './ImageCard.css'

const ImageCardNoMemo = ({ image }) => {
    const dispatch = useDispatch()

    const handleOnLike = () => {
        dispatch(like(image.id))
    }
    const handleOnDelete = () => {
        dispatch(deleteImg(image.id))
    }

    return (
        <div className='ImageCard'>
            <img className='Img' src={`${image.url}`} style={{height: image.height / image.width * 250 + 'px'}} alt='cat' />
            <div className='Source'>
                Source:
                <a href={`${image.url}`} className='SourceLink'>{` ${image.url}`}</a>
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
