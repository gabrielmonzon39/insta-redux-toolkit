import { createSlice } from "@reduxjs/toolkit";
import { posts } from "./posts";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    posts: posts,
  },
  reducers: {
    addPhoto: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
  },
});

const { actions: galleryActions, reducer: galleryReducer } = gallerySlice;
export { galleryActions, galleryReducer };
