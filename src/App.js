import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import './App.css'

import ScrollRoading from './components/scrollroading'
import SearchBox from './components/searchbox'
import ImageListShow from './components/imagelistshow'
function App() {
  const [imglist, setImgList] = useState('')
  return (
    <Container className="App">
      <ScrollRoading setImgList = {setImgList}>
        <SearchBox setImgList = {setImgList}/>
        <ImageListShow imglist = {imglist} />
      </ScrollRoading>
    </Container>
  )
}

export default App
