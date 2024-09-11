import React,{useEffect} from 'react'
import Submenu from "./SubMenu"
export default function Myaccount() {
  const API="https://dummyapi.online/api/movies";
  const fetchApiData= async (url)=>{
    try{
      const res = await fetch(url);
      const data=await res.json();
      console.log(data);
    }
    catch(error)
    {
      console.log(error);
    }

  }
  useEffect(()=>{
    fetchApiData(API);
  },[])
  return (
    <>
        <div>
            <Submenu/>
        </div>
    </>
  )
}
