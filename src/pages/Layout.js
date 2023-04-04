import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun } from '@fortawesome/free-solid-svg-icons'


function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

function Logo() {
  return (
    <FontAwesomeIcon icon={faMountainSun} size="xl" />
  );
}



const Layout = () => {
  return (
    <>
      <nav>
        <ul className='ul'>
        <li className='navLeft'>
        <Logo/>
          </li>
          <li className='navCentre'>
            MY TRAVEL DIARY
          </li>
          <li className='navCentre'>
            <Link to="/">HOME</Link>
          </li>
          <li className='navCentre'>
            <Link to="/products">AUSTRALIA</Link>
          </li>
          <li className='navCentre'>
            <Link to="/services">SPAIN</Link>
          </li>
          <li className='navCentre'>
            <Link to="/services">VIETNAM</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;