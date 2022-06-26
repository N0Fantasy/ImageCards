import React from 'react'
import { ImageCardList } from './ImageCardList/ImageCardList'
import { OnlyLikesBtn } from './OnlyLikesBtn/OnlyLikesBtn'

import { useImages } from './api/useImage'
import { useDispatch } from 'react-redux'
import { addImg } from './redux/actionCreators'
import './App.css'

function App() {
  const data = useImages()
  const dispatch = useDispatch(addImg)

  if (!data)
    return null

  const upgradedData = data.map(image => ({ ...image, liked: false }))
  dispatch(addImg(upgradedData))

  return (
      <div className="App">
        <OnlyLikesBtn />
        <ImageCardList />
      </div>
  )
}

export default App
