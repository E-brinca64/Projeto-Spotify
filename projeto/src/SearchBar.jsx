import Left from './assets/Left.png';
import Right from './assets/Right.png';
import Search from './assets/SearchBar-Search.png';

import './SearchBar.css';

function SearchBar() {
  return (
    <header>
      <ul className="Search-arrows">
        <li className="arrow">
          <a href="#">
            <img src={Left} alt="left" />
          </a>
        </li>
        <li className="arrow">
          <a href="#">
            <img src={Right} alt="Right" />
          </a>
        </li>
      </ul>

      <div className="SearchBar">
        <img src={Search} alt="Search Icon" className="SearchBar-Icon" />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          className="SearchBar-Input"
        />
      </div>

      <div className="SearchBar-Login">
        <a href="#" className="SearchBar-SignUp">Sign up</a>
        <a href="#" className="SearchBar-LogIn">Log in</a>
      </div>
    </header>
  );
}

export default SearchBar;