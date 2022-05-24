import { Segment, Form } from "semantic-ui-react"
import { useState } from "react"
import { createApi } from "unsplash-js"
import { MY_ACCESS_KEY } from "../constants/immutable"

const SearchBox = ({setImgList}) => {
  // search key workd
  const [ search, setSearch] = useState('')
  // change the set keyword
  const setChange = (ev) => {
      setSearch(ev.target.value)
  }
  // when "enter"
  const onEnter = (ev) => {
      ev.preventDefault()
      if(search){
          console.log(
            unsplash.search.getPhotos({
              query: search,
              page: 1,
              perPage: 10,
              orderBy: "",
            }).then(result => {
              if(result.type === 'success') {
                // const photos = result.response.results
                setImgList(result.response.results)
              }
            })
          )
      }

  }
  // unsplash API
  const unsplash = createApi({
    accessKey: MY_ACCESS_KEY,
  })

  return (
    <Segment>
      <Form onSubmit = {(ev) => onEnter(ev)}>
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