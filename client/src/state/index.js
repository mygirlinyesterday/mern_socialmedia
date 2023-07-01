import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode: 'dark',
    user: null,
    token: null,
    posts: []
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        },
        setLogin: (state, action) => {
            console.log('login: ',action.payload.user)
            state.user = action.payload.user
            state.token = action.payload.token

        },
        setLogout: (state) => {
            console.log('logout: ',state)
            state.user = null
            state.token = null
        },
        setFriends: (state, action) => {
            if(state.user) {
                state.user.friends = action.payload.friends
            } else {
                console.error('user friends non-existent :(')
            }
        },
        setPosts: (state, action) => {
            console.log('post here: ', action)
            state.posts = action.payload.posts
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if(post._id === action.payload.post_id) return action.payload.post
                return post
            })
            state.posts = updatedPosts
        }
    }
})

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions
export default authSlice.reducer