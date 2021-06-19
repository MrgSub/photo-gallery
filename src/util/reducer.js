import { createSlice } from '@reduxjs/toolkit'

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        thumbs: [],
    },
    reducers: {
        set: (state, action) => {
            state.thumbs = action.payload
        },
    },
})

export const { add } = gallerySlice.actions

export default gallerySlice.reducer
