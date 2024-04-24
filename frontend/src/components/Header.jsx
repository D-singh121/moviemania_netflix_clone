import { IoIosArrowDropdown } from "react-icons/io"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { API_URL_POINT } from '../utils/constants';


const Header = () => {

  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    e.preventDefault();
    console.log("clicked");
    try {
      const logoutRes = await axios.get(`${API_URL_POINT}/logout`, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,

      });
      if (logoutRes.status === 200) {
        navigate("/");
      }
      console.log(logoutRes);

    } catch (error) {
      console.log(error);
    }
  }



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
              <button onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2'>Logout</button>
              <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
            </div>

          </div>
        )
      }

    </div>
  )
}

export default Header;