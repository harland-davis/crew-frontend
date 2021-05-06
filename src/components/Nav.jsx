import React from 'react'

export default function Nav() {
  return (
    <div>
      <header className="pt-5 w-full h-100px flex items-center justify-around">
        <h1 className="text-black hover:text-yellow-600 font-black font-serif text-6xl pl-1.5em cursor-pointer"><span className="text-yellow-600">*</span>Crew</h1>
        <ul className="flex space-x-4 w-100% ml-auto">
          <li className="font-bold text-2xl text-right hover:underline cursor-pointer">Employees</li>
          <li className="font-bold text-2xl text-right hover:underline cursor-pointer">My Profile</li>
          <li className="font-bold text-2xl text-right hover:underline cursor-pointer">Documents</li>
        </ul>
      </header>
    </div>
  )
}


// .Header {
//   width: 100%;
//   height: 100px;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
// }

// Header .Logo {
//   font-weight: lighter;
//   font-weight: lighter;
//   font-size: 25pt;
//   padding-left: 1.5em;
// }

// Header .Logo:hover {
//   color: tomato;
//   cursor: pointer;
// }

// .Menu{ 
//   display: flex;
//   justify-content: space-around;
// }

// .Navigation {
//   display: flex;
//   justify-content: space-around;
//   width: 30%;
//   padding-right: 0em;
//   margin-left: auto;
// }

// .Navigation li {
//   list-style: none;
//   font-size: 18pt;
//   text-align: right;
// }

// .Navigation li:hover {
//   color: tomato;
//   cursor: pointer;
// }