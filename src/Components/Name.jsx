import React from 'react'
import { useState } from 'react';

function Name() {
    const [add, setadd] = useState(["riya", "geeta", "bhavna", "radha", "rama"])
    const [name, setname] = useState();

    function handleset() {
        setadd((pre) => ([...pre, name]))
    }
    return (



        <>

            <div>

                <input onChange={(e) => { setname(e.target.value) }} type="text" />
                <div className='flex'>
                    <ul className='mt-20 ml-10'>
                        {
                            add.map((value) => (
                                (<li>{value}</li>)
                            ))


                        }
                    </ul>
                    <button onClick={handleset} className='border pl-20 pr-20 h-10 mt-10 rounded-2xl bg-black text-white'>ADD</button>
                </div>


            </div>




        </>
    )
}

export default Name