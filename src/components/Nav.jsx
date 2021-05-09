import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <header className=" shadow-md pt-3 pb-3 pl-8 pr-8 w-full h-100px flex items-center justify-around">
        <h1 className="text-black hover:text-yellow-600 font-black font-serif text-6xl pl-1.5em cursor-pointer"><span className="text-yellow-600">*</span>crew</h1>
        <ul className="flex space-x-8 w-100% ml-auto">
          <Link to="/employees">
            <li className="font-bold text-2xl text-right hover:underline cursor-pointer">Crew Members</li>
          </Link>
          <Link to="/documents">
            <li className="font-bold text-2xl text-right hover:underline cursor-pointer">Documents</li>
          </Link>
          <Link>
            <li className="font-bold text-2xl text-right hover:underline cursor-pointer">My Profile</li>
          </Link>
        </ul>
      </header>
    </nav>
  )
}
