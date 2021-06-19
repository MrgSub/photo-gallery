import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./reducer";

export default configureStore({
	reducer: {
		gallery: galleryReducer,
	},
});
