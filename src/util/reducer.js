import { createSlice } from "@reduxjs/toolkit";

export const gallerySlice = createSlice({
	name: "gallery",
	initialState: {
		thumbs: [],
	},
	reducers: {
		set: (state, action) => {
			state.thumbs = action.payload;
		},
	},
});

export const { set } = gallerySlice.actions;

export default gallerySlice.reducer;
