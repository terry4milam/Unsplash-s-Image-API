// import { Image } from 'semantic-ui-react'
const ImageShow = ({info}) => {
    console.log(info)
    return(
        <div>
            <img
                alt = {info.alt_description}
                src = {info.urls.small_s3}
            />
        </div>
    )
}

export default ImageShow