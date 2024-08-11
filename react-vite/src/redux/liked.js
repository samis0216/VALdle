const POST_LIKED = 'liked/postLike'
const GET_LIKED = 'liked/getLiked'
const RESET_LIKED = 'liked/resetLiked'

const getLiked = (liked) => ({
    type: GET_LIKED,
    liked
})

const resetLiked = () => ({
    type: RESET_LIKED,
    liked
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
