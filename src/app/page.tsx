"use client";
import React from "react";
import { fetchFurnitures } from "@/redux/features/furnitureSlice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Loading from "../loading";
import "./home.scss";
import { deleteStudent } from "@/redux/features/delete";
interface typ {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
}

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state.furnitures);
  const deleteSelector = useSelector((state:RootState)=>state.deleteStudent)
  useEffect(() => {
    dispatch(fetchFurnitures());
    dispatch(deleteStudent());
  }, []);
  return selector.loading ? (
    <Loading />
  ) : (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>First name</th>
            <th>Last nane</th>
            <th>Gender</th>
            <th>Functions</th>
          </tr>
        </thead>
        <tbody>
          {selector.data?.map((student: typ, index: number) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.gender}</td>
              <td>
                <button>
                  <BiEdit />
                </button>
                <button onClick={()=>deleteStudent(student.id)}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
