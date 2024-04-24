import { IoIosArrowDropdown } from "react-icons/io"
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className='absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black'>
      <Link to="/">
        <img className='w-48 mt-4 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
      </Link>
      {
        (
          <div className='flex items-center mt-2'>
            <IoIosArrowDropdown size="24px" color='white' />
            <h1 className='text-lg font-medium text-white'>hi</h1>
            <div className='ml-4 '>
              <button className='bg-red-800 text-white px-4 py-2'>LogIn</button>
              <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
            </div>

          </div>
        )
      }

    </div>
  )
}

export default Header;