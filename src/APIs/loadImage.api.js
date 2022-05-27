import { createApi } from "unsplash-js"
import { MY_ACCESS_KEY } from "../constants/immutable"

const unsplash = createApi({
    accessKey: MY_ACCESS_KEY,
})

export const LoadImageAPI = async ({search, pg}) => {
    if(search.length){
        const result = await unsplash.search.getPhotos({
            query: search,
            page: pg,
            perPage: 10,
        })
        // console.log("result", result.type)
        if(result.type === 'success') {
            return result.response.results
        }
        else {
            console.log("err", result)
            return []
        }
    } else {
        return []
    }
}
export default LoadImageAPI