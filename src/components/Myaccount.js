import React,{useEffect,useState} from 'react'
import Submenu from "./SubMenu"
// import axios from "axios";
import Myacc from "./Myacc"
export default function Myaccount() {
  const[perform,setPer]=useState([]);
  const fetchApiData= async ()=>{
    try{
      const response = await fetch('http://localhost:5000/api/event/myaccount',{
        method:"GET",
      });

      if(response.ok)
      {
        const data=await response.json();
        console.log(data.data);
        setPer(data.data);
      }
      
    }
    catch(error)
    {
      console.log(`error${error}`);
    }

  }
  // const getApiData= async ()=>{
  //   try{
  //     const res = await axios.get(API);
  //     console.log(res);
  //     setData(res);
  //   }
  //   catch(error)
  //   {
  //     console.log(error);
  //   }
  // }
  useEffect(()=>{
    fetchApiData();
  },[])
  return (
    <>
        <div className='mb-10'>
            <Submenu/>
        </div>
        <ul>
          {
            perform.map((curElem) => {
              return <Myacc 
              key={curElem.id}
              mData={curElem}/>
            })
          } 
        </ul>
    </>
  )
}
