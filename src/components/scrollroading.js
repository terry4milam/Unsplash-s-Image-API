import { useEffect, useRef, useState } from "react"
import LoadImageAPI from "../APIs/loadImage.api"
const ScrollRoading = ({setImgList, imglist, children}) => {
    // const ref = useRef(null)
    const [isFetching, setIsFetching] = useState(false)
    const ref = useRef(0)
    useEffect(() => {
        console.log(Math.ceil(window.scrollY + window.innerHeight), ref.current.offsetHeight)
        window.addEventListener('scroll', handleScroll)
    })
    const handleScroll = () => {
        if( // over scroll?
            Math.ceil(window.scrollY + window.innerHeight) < ref.current.offsetHeight 
            && !isFetching
        ) return
        else if (isFetching) return
        setIsFetching(true)
    }
    /** Call API to get Images and add to list
     * @param {}
     */
    const fetchMoreData = async () => {
        const {search, data, pg} = imglist
        const res = await LoadImageAPI({search, pg:pg+1}) || []
        setImgList({data:[...data, ...res], pg:pg+1, search})
        setIsFetching(false)
    }

    /**
     * Call fetchMoreData
     */
    useEffect( () => {
        if(!isFetching) return
        fetchMoreData()
    }, [isFetching])
    

    return (
        <div ref = {ref}>
            {children}
        </div>
    )
}
export default ScrollRoading