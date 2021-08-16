import { configureStore } from "@reduxjs/toolkit";

import { rtkClient } from "../services/rtkQueryClient";

export const store = configureStore({
  reducer: {
    [rtkClient.reducerPath]: rtkClient.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkClient.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
