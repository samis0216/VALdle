const GET_RANDOM_DJ = 'djs/getRandom'
const GET_ALL_DJ = 'djs/getAll'
const GET_ONE_DJ = 'djs/getOne'

const getDJ = (dj) => ({
    type: GET_ONE_DJ,
    dj
})

const getAllDJ = (djs) => ({
    type: GET_ALL_DJ,
    djs
})

export const getAllDJThunk = () => async (dispatch) => {
    const res = await fetch(`/api/djs/all`)

    if (res.ok) {
        const data = await res.json()
        if (data.errors) {
            return;

        }
        dispatch(getAllDJ(data))
        return data
    }
}

export const getOneDJThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/djs/${id}`)

    if (res.ok) {
        const data = await res.json()
        if (data.errors) {
            return;

        }
        dispatch(getDJ(data))
        return data
    }
}

export const getRandomDJThunk = () => async (dispatch) => {
    const res = await fetch(`/api/djs/random`)

    if (res.ok) {
        const data = await res.json()
        if (data.errors) {
            return;

        }
        dispatch(getDJ(data))
        return data
    }
}

const initialState = {};

function djsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ONE_DJ: {
            const newState = { ...state };
            newState.dj = action.dj;
            return newState;
        }
        case GET_ALL_DJ: {
            const newState = { ...state }
            action.djs.forEach( dj => {
                newState[dj.id] = dj;
            })
            return newState;
        }
        case GET_RANDOM_DJ: {
            const newState = { ...state }
            newState.random = action.dj
            return newState
        }
        default: {
            return state;
        }
    }
}

export default djsReducer

