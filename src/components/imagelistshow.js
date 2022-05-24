import ImageShow from './imageshow'
const ImageListShow = ({ imglist }) => {
  return (
    <div>
      {
        imglist.length !== 0 && imglist.map((info) => {
          console.log(info.alt_description)
          return(
            <ImageShow key={info.id} info = {info}/>
          )
        })
      }
    </div>
  )
}

export default ImageListShow