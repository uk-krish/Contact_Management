import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";

const Contactlist = ({contact}) => {

  return (
    <tbody>
      {
        contact.map((detail)=>(
            <tr className='border border-t-0  border-l-0 border-r-0 border-b-1 ' key={detail.id}>
            
            <td className="p-3">{detail.id}</td>
            <td className="p-3">{detail.Fname}</td>
            <td className="p-3">{detail.Lname !== null ? detail.Lname : "-"}</td>
            <td className="p-3">{detail.phone}</td>
            <td className="p-3">{detail.email}</td>
            <td className="flex items-center justify-center p-3 "><HiDotsHorizontal/></td>
          </tr>
        ))
      }
    </tbody>
  )
}

export default Contactlist
