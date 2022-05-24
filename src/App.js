import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import './App.css'

import SearchBox from './components/searchbox'
import ImageListShow from './components/imagelistshow'
function App() {
  const [imglist, setImgList] = useState('')
  return (
    <Container className="App">
      <SearchBox setImgList = {setImgList}/>
      <ImageListShow imglist = {imglist} />
    </Container>
  )
}

export default App
