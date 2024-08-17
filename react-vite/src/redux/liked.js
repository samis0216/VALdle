const POST_LIKED = 'liked/postLike'
const GET_LIKED = 'liked/getLiked'
const RESET_LIKED = 'liked/resetLiked'

const getLiked = (liked) => ({
    type: GET_LIKED,

})

const resetLiked = () => ({
    type: RESET_LIKED,
    liked
})

const postLiked = (newLiked) => ({
    type: POST_LIKED,
    newLiked
})

export const getLikesThunk = () => async(dispatch) => {
    const res = await fetch('/api/likes')

    if (res.ok) {
        const data = res.json()
        dispatch(getLiked(data))
        return data
    }
}

export const resetLikesThunk = () => async(dispatch) => {
    const res = await fetch('/api/likes/reset')

    if (res.ok) {
        const data = res.json()
        dispatch(resetLiked(data))
        return data
    }
}

export const postLikesThunk = () => async(dispatch) => {
    const res = await fetch('/api/likes/new')

    if (res.ok) {
        const data = res.json()
        dispatch(postLiked(data))
        return data
    }
}

const initialState = {}

export default function likedReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LIKED: {
            const newState = {}
            action.liked.forEach(like => {
                newState[like.id] = like
            })
            return newState
        }
        default:
            return state
    }
}
