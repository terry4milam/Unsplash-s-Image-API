import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import './App.css'

import ScrollRoading from './components/scrollroading'
import SearchBox from './components/searchbox'
import ImageListShow from './components/imagelistshow'
function App() {
  const [imglist, setImgList] = useState({data:[], pg:0, search:''})
  return (
    <Container className="App">
      <ScrollRoading imglist = {imglist} setImgList = {setImgList}>
        <SearchBox setImgList = {setImgList}/>
        <ImageListShow imglist = {imglist} />
      </ScrollRoading>
    </Container>
  )
}

export default App
