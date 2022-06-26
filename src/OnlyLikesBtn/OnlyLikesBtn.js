import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { showLiked } from '../redux/actionCreators'
import './OnlyLikesBtn.css'

export const OnlyLikesBtn = () => {
    const dispatch = useDispatch()
    const show = useSelector(state => {
        const { Reducer } = state
        return Reducer.showLikedImgs
    })

    const handleOnShowLiked = () => {
        dispatch(showLiked(show))
    }

    return (
        <>
            {
                show
                    ?
                    <button onClick={handleOnShowLiked} className='OnlyLikes'>Show All</button>
                    :
                    <button onClick={handleOnShowLiked} className='OnlyLikes'>Only Liked</button>
            }
        </>
    )
}