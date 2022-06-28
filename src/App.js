import React from 'react'
import { ImageCardList } from './components/ImageCardList/ImageCardList'
import { OnlyLikesBtn } from './components/OnlyLikesBtn/OnlyLikesBtn'

import { useImages } from './hooks/useImages'
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
