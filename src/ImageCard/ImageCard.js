import React, { memo } from 'react'

import './ImageCard.css'

const ImageCardNoMemo = ({ image }) => {
    return (
        <div className='ImageCard'>
            <img className='Img' src={`${image.url}`} alt='waifu' />
            <div className='TagList'>
                {image.tags.map(item => <div className='Tag' key={item.tag_id}>{item.name}</div>)}
            </div>
            <div className='Btns'>
                <button className='Like'></button>
                <button className='Delete'> Delete</button>
            </div>
        </div>
    )
}

export const ImageCard = memo(ImageCardNoMemo)