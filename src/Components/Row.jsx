import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { GrCurrency } from "react-icons/gr";

function Row(Props) {
  return (
    <>
     <tr className='border h-20 w-100 bg-white  rounded-3xl'>
                        <td className='rounded-l-3xl bg-red-950'>
                        <img className='h-15 w-15 rounded-2xl bg-green-600 '  src={Props.objdata.image} alt="" srcset="" />
                
                        </td>
                        <td className='text-2xl font-bold'>{Props.objdata.title}</td>
                        
                        <td className='w-10 text-[15px]'>{Props.objdata.country}</td>
                        <td className='w-20  text-[15px]'>{Props.objdata.contect}</td>
                        <td className='W-5 text-[15px] '>{Props.objdata.Email}</td>
                        <td><span className='bg-amber-50 pl-5 pr-5 text-center text-green-300 rounded-2xl'>{Props.objdata.status}</span></td>
                        <td>11 Mar 2021 9:37AM</td>
                        <td className='border bg-neutral-50'> {Props.objdata.balance}</td>
                         <div className=''><td className='flex m-10 justify-between '><span className='text-2xl text-white bg-blue-500 '><MdModeEdit /></span><div className='border '></div> <span className='text-2xl text-white  bg-red-500 rounded '><AiOutlineDelete /></span> </td></div>
                       
                    </tr>
    
    
    
    </>
  )
}

export default Row