"use client";
import { fetchFurnitures } from "@/redux/features/furnitureSlice";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.furnitures);
  useEffect(() => {
    dispatch(fetchFurnitures());
  }, []);
  return <div>Home</div>;
};

export default Home;
