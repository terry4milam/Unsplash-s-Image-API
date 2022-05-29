import { Segment, Form } from "semantic-ui-react"
import { useState } from "react"
import LoadImageAPI from "../APIs/loadImage.api"
const SearchBox = ({setImgList}) => {
  // search key workd
  const [ search, setSearch] = useState('')
  // const [ isFetching, setIsFetching ] = useState()
  // change the set keyword
  const setChange = (ev) => {
      setSearch(ev.target.value)
  }
  // when "enter"
  const onEnter = (ev) => {
    ev.preventDefault()
    LoadImageAPI({search, pg:1}).then(res=> {
      console.log("list", search, res)
      setImgList({data:res, pg:1, search})
    })
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