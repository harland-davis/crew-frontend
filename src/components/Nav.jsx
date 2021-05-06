import React from 'react'

export default function Nav() {
  return (
    <div>
      <header className="pt-5 w-full h-100px flex items-center justify-around">
        <h1 className="text-black hover:text-yellow-600 font-black font-serif text-6xl pl-1.5em cursor-pointer"><span className="text-yellow-600">*</span>crew</h1>
        <ul className="flex space-x-8 w-100% ml-auto">
          <li className="font-bold text-2xl text-right hover:underline cursor-pointer">Crew Members</li>
          <li className="font-bold text-2xl text-right hover:underline cursor-pointer">Documents</li>
          <li className="font-bold text-2xl text-right hover:underline cursor-pointer">My Profile</li>
        </ul>
      </header>
    </div>
  )
}
