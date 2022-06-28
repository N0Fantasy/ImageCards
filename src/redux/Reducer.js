import { initialState } from "./initialState"
import { LIKE_CLICK, DELETE_IMG, ADD_IMG, SHOW_LIKED } from "./actions"

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_CLICK: {
            const likedImage = state.images.filter(image => image.id === action.id)[0]
            const cloneImage = { ...likedImage }
            cloneImage.liked === false ? cloneImage.liked = true : cloneImage.liked = false
            const changeImages = state.images.map(image => image.id === action.id ? cloneImage : image)
            const changeReservedImages = state.reservedImages.map(image => image.id === action.id ? cloneImage : image)
            return {
                ...state,
                images: state.showLikedImgs ? changeImages.filter(image => image.liked) : changeImages,
                reservedImages: changeReservedImages
            }
        }
        case DELETE_IMG: {
            const newImages = state.images.filter(image => image.id !== action.id)
            const newReservedImages = state.reservedImages.filter(image => image.id !== action.id)
            return {
                ...state,
                images: newImages,
                reservedImages: newReservedImages
            }
        }
        case ADD_IMG: {
            const newImages = [...state.images, ...action.images]
            return {
                ...state,
                images: newImages,
                reservedImages: newImages
            }
        }
        case SHOW_LIKED: {
            const resImgs = [...state.reservedImages]
            const filterLiked = state.images.filter(image => action.show ? image : image.liked)
            return {
                ...state,
                images: action.show ? resImgs : filterLiked,
                showLikedImgs: action.show ? false : true
            }
        }
        default:
            return state
    }
}