import React from 'react'
import Row from "./Row"
import data from "./Table.json";



function Table() {
    return (
        <div>
            <table className='text-center  w-full h-40 bg-blue-100 border-separate border-spacing-y-5  ' >
                <tr className='text-gray-600 ' >
                    <th></th>
                    <th className='ml-20'>client title</th>
                    <th>country</th>
                    
                    <th>contect</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Activation dote</th>
                    <th>balance</th>
                    <th>Action</th>
                </tr>
                {/* <tr className='border h-20 w-100 bg-cyan-50  rounded-2xl'>
                    <td>
                    <img className='h-15 rounded-2xl bg-green-600 '  src="https://static.vecteezy.com/system/resources/previews/014/018/571/large_2x/netflix-logo-on-transparent-background-free-vector.jpg" alt="" srcset="" />
                    </td>
                    <td className='text-2xl font-bold'></td>
                    
                    <td className='w-10 text-[15px]'>United kindom</td>
                    <td className='w-20 text-[15px]'>Maddox Biackmore</td>
                    <td className='w-5 text-[15px] '>Mblackmore @netflix.com</td>
                    <td><span className='bg-amber-50 pl-5 pr-5 text-center text-green-300 rounded-2xl'>Activated</span></td>
                    <td>11 Mar 2021 9:37AM</td>
                    <td className='border bg-gray-300'> 15,000,00 GBP</td>
                     <div className=''><td className='flex m-10 justify-between '><span className='text-2xl text-white bg-blue-500 rounded'><MdModeEdit /></span><div className='border '></div> <span className='text-2xl text-white  bg-red-500 rounded '><AiOutlineDelete /></span> </td></div>
                   
                </tr> */}
                {
                      data.map(function(obj) {
                            return  <Row objdata={obj}/>
                          })
                }
               















            </table>





        </div>
    )
}

export default Table