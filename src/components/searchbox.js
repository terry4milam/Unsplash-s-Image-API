import { Segment, Form } from "semantic-ui-react"
import { useState } from "react"
import LoadImageAPI from "../APIs/loadImage.api"
const SearchBox = ({setImgList}) => {
  // search key workd
  const [ search, setSearch] = useState('')
  // change the set keyword
  const setChange = (ev) => {
      setSearch(ev.target.value)
  }
  // when "enter"
  const onEnter = async (ev) => {
    ev.preventDefault()
    const res = await LoadImageAPI(search)
    console.log("list", search, res)
    setImgList(res)
  }
  return (
    <Segment>
      <Form onSubmit = {onEnter}>
        <div className = "field">
          <label>Image Search</label>
          <input 
            type = "text"
            value = {search} 
            onChange = {(ev)=>setChange(ev)}
          ></input>
        </div>
      </Form >
    </Segment>
  )
}

export default SearchBox