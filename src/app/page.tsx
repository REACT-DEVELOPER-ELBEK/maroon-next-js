"use client";
import React from 'react'
import { fetchFurnitures } from "@/redux/features/furnitureSlice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.furnitures);
    useEffect(() => {
      dispatch(fetchFurnitures());
    }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Home