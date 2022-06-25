import React from 'react'
import './App.css'

import { ImageCardList } from './ImageCardList/ImageCardList'

import { useStore } from './store/store'

export const GlobalContext = React.createContext()

function App() {
  const [state, dispatch] = useStore()

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <ImageCardList />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
