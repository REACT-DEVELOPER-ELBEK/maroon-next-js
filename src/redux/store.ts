"use client";
import { configureStore } from "@reduxjs/toolkit";
import furnitureSlice from "./features/furnitureSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      furnitures: furnitureSlice,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
