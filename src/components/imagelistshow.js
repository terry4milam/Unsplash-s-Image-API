import ImageShow from './imageshow'
const ImageListShow = ({ imglist }) => {
  return (
    <div className = "image-list">
      {
        imglist.length !== 0 && imglist.map((info) => {
          return(
            <ImageShow key={info.id} info = {info}/>
          )
        })
      }
    </div>
  )
}

export default ImageListShow