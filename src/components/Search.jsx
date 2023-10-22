import React, { useState, useEffect, useRef } from 'react';
import '../styles/home.css';
import '../styles/Login.css';
import data from '../mock_backend/ListData.json';
/* import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'; */

const SearchBar = () => {
  const [inputText, setInputText] = useState("");
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  /* const [isSearchBarVisible, setIsSearchBarVisible] = useState(false); */
  const searchBarRef = useRef(null);

  const inputHandler = (e) => {
    e.preventDefault();
    const lowerCase = (e.target.value || '').toLowerCase();
    setInputText(lowerCase);
  };

  const handleOptionSelect = (selectedOption) => {
    setInputText(selectedOption);
    setIsSearchBarExpanded(true);
  };


  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target) &&
        /* isSearchBarVisible && */
        isSearchBarExpanded
      ) {
        setIsSearchBarExpanded(false);
      }
    }

    if (isSearchBarExpanded /* && isSearchBarVisible */) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [/* isSearchBarVisible, */ isSearchBarExpanded]);

  return (
    <>
      {/* {isSearchBarVisible && ( */}
      <div
        className={`search${!isSearchBarExpanded ? "-icon" : /* "-expanded" */ ''}`}
        ref={searchBarRef}
      >
        <input
          type="search"
          name="autocomplete"
          id="text-field"
          autoComplete="off"
          value={inputText}
          placeholder="Search"
          onChange={inputHandler}
        />

        {inputText && (
          <div className="search-options">
            {data
              .filter((item) => item.text.toLowerCase().includes(inputText))
              .map((item, index) => (
                <div
                  key={index}
                  className="search-option"
                  onClick={() => handleOptionSelect(item.text)}
                >
                  {item.text}
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
