import { useState } from 'react'
import './App.css'

import SearchBox from './components/searchbox'
import ImageListShow from './components/imagelistshow'
function App() {
  const [imglist, setImgList] = useState('')
  return (
    <div className="App">
      <SearchBox setImgList = {setImgList}/>
      <ImageListShow imglist = {imglist} />
    </div>
  )
}

export default App
