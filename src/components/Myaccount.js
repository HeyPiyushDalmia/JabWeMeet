import React,{useEffect,useState} from 'react'
import Submenu from "./SubMenu"
import axios from "axios";
import Myacc from "./Myacc"
export default function Myaccount() {
  const [data,setData]=useState([]);
  const API='https://dummyjson.com/users';
  // const fetchApiData= async (url)=>{
  //   try{
  //     const res = await fetch(url);
  //     const data=await res.json();
  //     console.log(data);
  //   }
  //   catch(error)
  //   {
  //     console.log(error);
  //   }

  // }
  const getApiData= async ()=>{
    try{
      const res = await axios.get(API);
      console.log(res.data.users);
      setData(res.data.users);
    }
    catch(error)
    {
      console.log(error);
    }
  }
  useEffect(()=>{
    getApiData(API);
  },[])
  return (
    <>
        <div>
            <Submenu/>
        </div>
        <ul>
          {
            data.map((curElem) => {
              return <Myacc 
              key={curElem.id}
              mData={curElem}/>
            })
          }
        </ul>
    </>
  )
}
