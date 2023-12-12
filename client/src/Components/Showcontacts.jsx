import React, { useEffect, useState } from "react";
import axios from "axios";
import Contactlist from "./Contactlist";


const ShowContact = () => {
  const [contact,SetContact]=useState([]);
  useEffect(() => {
    fetchContact();
  }, []);
  const fetchContact = async () => {
    try {
      const response = await axios.get('http://localhost:3030/contact');
      console.log(response.data);
      SetContact(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error.message);
    }
  };
  
  return (
    <div className="">
      <table className="text-white text-center table-auto  mx-auto">
        <thead className="bg-red-500 text-white   font-bold text-center">
          <th className="w-1/6 p-4">Id</th>
          <th className="w-1/6 p-4">First Name</th>
          <th className="w-1/6 p-4">Last Name</th>
          <th className="w-1/6 p-4">Phone</th>
          <th className="w-1/6 p-4">Email</th>
          <th className="w-1/6 p-4">Action</th>
        </thead>
         <Contactlist contact={contact}/>
      </table>
    </div>
  );
};

export default ShowContact;
