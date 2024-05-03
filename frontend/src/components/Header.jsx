import { IoIosArrowDropdown } from "react-icons/io"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { API_URL_POINT } from '../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux_store/userSlice";
import toast from "react-hot-toast";

import { setSearchToggle } from "../redux_store/movieSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  // console.log(user);

  const isSearchToggled = useSelector((state) => state.movies.isSearchToggle);



  const logoutHandler = async () => {
    console.log("clicked");

    if (!user) {
      // If user is not present, do nothing or handle the case accordingly
      console.log("User is not logged in.");
      return;
    }

    try {
      const res = await axios.get(`${API_URL_POINT}/logout`, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true

      });
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");

      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }


  const toggleSearch = () => {
    dispatch(setSearchToggle(true))
  }


  return (
    <div className='absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black'>
      <Link to="/browse">
        <img className='w-48 mt-4 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
      </Link>
      {
        user &&
        (
          <div className='flex items-center mt-2'>
            <IoIosArrowDropdown size="24px" color='white' />
            <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>
            <div className='ml-4 '>
              <button onClick={() => logoutHandler()} className='bg-red-800 text-white px-4 py-2'>Logout</button>
              <button onClick={() => toggleSearch()} className='bg-red-800 text-white px-4 py-2 ml-2'>{isSearchToggled === true ? "All Movies " : "Search Movie"}</button>
            </div>

          </div>
        )
      }

    </div>
  );
}

export default Header;