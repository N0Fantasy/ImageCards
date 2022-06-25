import { useReducer } from 'react';

const iniState = {
    images: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LIKED': {
            console.log('LIKED ', action.payload)
            return { ...state }
        }
        case 'DELETE': {
            console.log('DELETE ', action.payload)
            return { ...state }
        }
        case 'FILL_CONTENT': {
            //const newImage = state.images.push(action.payload)
            console.log(action.payload)
            return { ...state }
        }
        
        default:
            return iniState
    }
}

export const useStore = () => {
    const [state, dispatch] = useReducer(reducer, iniState)

    return [state, dispatch]
}
