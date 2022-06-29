import React from 'react'
import { ImageCardList } from './components/ImageCardList/ImageCardList'
import { OnlyLikesBtn } from './components/OnlyLikesBtn/OnlyLikesBtn'

import loader from './assets/images/loader.gif'
import { useImages } from './hooks/useImages'
import { useDispatch } from 'react-redux'
import { addImg } from './redux/actionCreators'
import './App.css'

function App() {
  const data = useImages()
  const dispatch = useDispatch(addImg)

  if (!data) {
    return (
      <div className='LoaderContainer'>
        <img className='Loader' src={loader}  alt='loader' />
      </div>
    )
  }

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