import { useEffect, useRef, useState } from 'react'
import { Image } from 'semantic-ui-react'
const ImageShow = ({info}) => {
    const ref = useRef(null)
    const [CSSstyle, setCSSstyle] = useState({"gridRowEnd":""})
    useEffect( ()=>{
        setCSSstyle({"gridRowEnd":"span "+Math.floor(info.height*ref.current.offsetWidth/info.width/10)})
    }, [ref.current])
    console.log(CSSstyle)
    return(
        <div style = {CSSstyle} ref = {ref}>
            <Image
                alt = {info.alt_description}
                src = {info.urls.small_s3}
                wrapped
            />
        </div>
    )
}

export default ImageShow