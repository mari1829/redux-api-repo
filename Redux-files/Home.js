import React,{useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import axios from "axios"
import { addCart } from './Slice'

const Home = () => {
    const dispatch = useDispatch();

    const state = useSelector((state) => state)
    console.log(state ,"state");
    const stro = state.cart.value
    console.log(stro , "val");

    useEffect (() =>{
        convert()
     },[])

     const convert =  async() =>{
  
        const res = await axios.get(stro)
        console.log(res)
       const listCart = res.data.data;
      
      dispatch(addCart(listCart))
      console.log(listCart , "res");
      
      }

      // To click more details
const clickMore = (el) =>{
    console.log(el);
  
  }

  const moreEle = state.cart.cartItem
console.log(moreEle);

  return (
    <div>
        {moreEle.map((ele,index)=>
        <div>
            {/* <button onClick={()=>clickMore(ele)}>Viewmore</button> */}
        

       <h1> {ele. attributeType}</h1>
       </div>
        )}
    </div>
  )
}

export default Home