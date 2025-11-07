import React from 'react'




function Hoocs() {
  return (
    <div>
      <form action="">
        <table>
          <caption className='text-red-400'>Sign up</caption>
          <tr>
            <td>
              <label htmlFor="Name" className='ml-2'>Name : </label>
            </td>
            <td>
              <input className='border rounded-xl px-2 m-2' type="text" name="name" id="Name" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="Email" className='ml-2'>Email : </label>
            </td>
            <td>
              <input className='border rounded-xl px-2 m-2' type="email" name="Email" id="Email" />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="Contact" className='ml-2'>contact no : </label>
            </td>
            <td>
              <input className='border rounded-xl px-2 m-4' type="tel" name="Contact" id="Contact" />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="Password" className='ml-2'>password : </label>
            </td>
            <td>
              <input className='border rounded-xl px-2 m-4' type="password" name="Password" id="Password" />
            </td>
          </tr>


          <tr>
            <td></td>
            <td>
              <input className='border bg-blue-900 text-white px-2 rounded-xl' type="submit" value="submit" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}



export default Hoocs