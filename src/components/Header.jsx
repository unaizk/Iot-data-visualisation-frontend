import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  const [logoutApiCall, {isLoading}] = useLogoutMutation()
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth);


  React.useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
      // Close the navbar if the window width is greater than or equal to 960 pixels
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleLogoutClick = async() => {
    try {
        await logoutApiCall().unwrap()
        dispatch(logout())
        navigate('/login')
    } catch (err) {
        console.log(err);
    }
    
  };
  

  return (
    <div className="overflow-x-hidden shadow-md">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium font-bold pl-3"
            onClick={() =>{navigate('/')}}
          >
            IOT DATA
          </Typography>
          <div className="flex items-center gap-4">
          {userInfo ? (
            <>
          <div className="bg-gray-50 rounded-full p-3 mr-4 cursor-pointer">
          <span className='mx-auto text-sm'>{`Welcome ${userInfo.name}`}</span>
          </div>
    <Button
      variant="gradient"
      size="sm"
      className="hidden lg:inline-block ml-2"
      onClick={handleLogoutClick}
    >
      <span>Logout</span>
    </Button>
    </>
  
) : (
  <div className="flex items-center gap-x-1">
    <Button
      variant="text"
      size="sm"
      className="hidden lg:inline-block"
      onClick={() => navigate('/login')}
    >
      <span>Log In</span>
    </Button>
    <Button
      variant="gradient"
      size="sm"
      className="hidden lg:inline-block"
      onClick={() => navigate('/signin')}
    >
      <span>Sign in</span>
    </Button>
  </div>
)}

            
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {userInfo ? (<Button fullWidth variant="gradient" size="sm" className="pt-5 lg:pt-0" onClick={handleLogoutClick}>
              <span>Logout</span>
            </Button>) : (<div className="flex flex-col lg:flex-row lg:items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="pt-5 lg:pt-0" onClick={() =>{navigate('/login')}}>
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="pt-5 lg:pt-0" onClick={() =>{navigate('/signin')}}>
              <span>Sign in</span>
            </Button>
          </div>)}
          
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
