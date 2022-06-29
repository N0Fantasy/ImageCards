import React from 'react'
import { ImageCardList } from './components/ImageCardList/ImageCardList'
import { OnlyLikesBtn } from './components/OnlyLikesBtn/OnlyLikesBtn'
import { Loader } from './components/Loader/Loader'

import { useImages } from './hooks/useImages'
import { useDispatch } from 'react-redux'
import { addImg } from './redux/actionCreators'
import './App.css'

function App() {
  const data = useImages()
  const dispatch = useDispatch(addImg)

  if (data) {
    const upgradedData = data.map(image => ({ ...image, liked: false }))
    dispatch(addImg(upgradedData))
  }

  return (
    <div className="App">
      <OnlyLikesBtn />
      {
        data
          ? <ImageCardList />
          : <Loader />
      }
    </div>
  )
}

export default App