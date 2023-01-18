import React from 'react'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const Header = () => {
  return (
    <>
      <header className=" mybg ">
        <div className="container mx-auto flex flex-wrap p-3 px-20 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <AssignmentTurnedInIcon style={{fontSize:'3rem'}}/>
            <span className="ml-3 text-xl">Make To Do</span>
          </a>

          <nav className="md:ml-auto flex flex-wrap space-x-4 items-center text-base justify-center">
            <a className="mr-5 font-Poppins text-xl">Home</a>
            <a className="mr-5 font-Poppins text-xl">Make ToDo</a>
            <a className="mr-5 font-Poppins text-xl">About Us</a>
            <a className="mr-5 font-Poppins text-xl">Contact Us</a>
          </nav>

        </div>
      </header>

    </>
  )
}

export default Header