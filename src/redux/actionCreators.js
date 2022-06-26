import { LIKE_CLICK, DELETE_IMG, ADD_IMG, SHOW_LIKED } from './actions'

export const like = (image_id) => {
    return {
        type: LIKE_CLICK,
        image_id
    }
}

export const deleteImg = (image_id) => {
    return {
        type: DELETE_IMG,
        image_id
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