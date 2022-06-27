import { initialState } from "./initialState"
import { LIKE_CLICK, DELETE_IMG, ADD_IMG, SHOW_LIKED } from "./actions"

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_CLICK: {
            const likedImage = state.images.filter(image => image.image_id === action.image_id)[0]
            const cloneImage = { ...likedImage }
            cloneImage.liked === false ? cloneImage.liked = true : cloneImage.liked = false
            const modImages = state.images.map(image => image.image_id === action.image_id ? cloneImage : image)
            const modResImages = state.reservedImages.map(image => image.image_id === action.image_id ? cloneImage : image)
            return {
                ...state,
                images: state.showLikedImgs ? modImages.filter(image => image.liked) : modImages,
                reservedImages: modResImages
            }
        }
        case DELETE_IMG: {
            const newImages = state.images.filter(image => image.image_id !== action.image_id)
            return {
                ...state,
                images: newImages,
                reservedImages: newImages
            }
        }
        case ADD_IMG: {
            const newImages = [...state.images, ...action.imgs]
            return {
                ...state,
                images: newImages,
                reservedImages: newImages
            }
        }
        case SHOW_LIKED: {
            const resImages = [...state.reservedImages]
            const filterLiked = state.images.filter(image => action.show ? image : image.liked)
            return {
                ...state,
                images: action.show ? resImages : filterLiked,
                showLikedImgs: action.show ? false : true
            }
        }
        default:
            return state
    }
}