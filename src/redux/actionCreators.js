import { LIKE_CLICK, DELETE_IMG, ADD_IMG, SHOW_LIKED } from './actions'

export const like = (id) => {
    return {
        type: LIKE_CLICK,
        id
    }
}

export const deleteImg = (id) => {
    return {
        type: DELETE_IMG,
        id
    }
}

export const addImg = (imgs) => {
    return {
        type: ADD_IMG,
        imgs
    }
}

export const showLiked = (show) => {
    return {
        type: SHOW_LIKED,
        show
    }
}