import Logo from './assets/Logo.png';
import Home from './assets/Home.png';
import Search from './assets/Search.png';
import Library from './assets/Library.png';
import Create from './assets/Create.png';
import Liked from './assets/Liked.png';

import './Sidebar.css';

function Sidebar() {
  return (
    <nav className="Sidebar">
      <a href="#" className="Sidebar-Logo">
        <img src={Logo} alt="Spotify Logo" />
      </a>

      <ul className="Sidebar-Menu">
        <li className="Sidebar-Item">
          <img src={Home} alt="Home Icon" />
          <span>Home</span>
        </li>
        <li className="Sidebar-Item">
          <img src={Search} alt="Search Icon" />
          <span>Search</span>
        </li>
        <li className="Sidebar-Item">
          <img src={Library} alt="Library Icon" />
          <span>Your Library</span>
        </li>
      </ul>

      <ul className="Sidebar-Menu">
        <li className="Sidebar-Item">
          <img src={Create} alt="Create Playlist Icon" />
          <span>Create Playlist</span>
        </li>
        <li className="Sidebar-Item">
          <img src={Liked} alt="Liked Songs Icon" />
          <span>Liked Songs</span>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
