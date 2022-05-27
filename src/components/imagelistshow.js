import ImageShow from './imageshow'
const ImageListShow = ({ imglist }) => {
  console.log(imglist.data)
  return (
    <div className = "image-list">
      {
        imglist.data.length !== 0 
        && imglist.data.map((info, index) => {
          return(
            <ImageShow key={info.id+"_"+index} info = {info}/>
          )
        })
      }
    </div>
  )
}

export default ImageListShow