import axios from "axios";
import React, { useEffect, useState } from "react";


const Practice = () => {

  const [users,setusers]=useState([])


  useEffect(()=>{

    try{

      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{
        console.log(res.data)
        setusers(res.data)
      })
    }
    catch (err){
      console.log(err)
    }
  },[])

  if(users.length==0){
    return (
      <>
      <h1>user not fund</h1>
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        User Details
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            {/* Basic Info */}
            <h2 className="text-xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-sm text-gray-500 mb-3">
              @{user.username}
            </p>

            {/* Contact Info */}
            <div className="text-sm text-gray-700 space-y-1">
              <p><span className="font-medium">Email:</span> {user.email}</p>
              <p><span className="font-medium">Phone:</span> {user.phone}</p>
              <p>
                <span className="font-medium">Website:</span>{" "}
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {user.website}
                </a>
              </p>
            </div>

            {/* Address */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">Address</h3>
              <p className="text-sm text-gray-700">
                {user.address.street}, {user.address.suite}
              </p>
              <p className="text-sm text-gray-700">
                {user.address.city} - {user.address.zipcode}
              </p>
              <p className="text-xs text-gray-500">
                Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
              </p>
            </div>

            {/* Company */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">Company</h3>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Name:</span> {user.company.name}
              </p>
              <p className="text-sm text-gray-700 italic">
                “{user.company.catchPhrase}”
              </p>
              <p className="text-xs text-gray-500">
                {user.company.bs}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice;
