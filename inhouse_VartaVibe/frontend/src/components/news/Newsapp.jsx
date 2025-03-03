import React, { useState, useEffect } from 'react';
import { json, useNavigate } from 'react-router-dom';
import './newsapp.css';
import Card from '../card/Card.jsx';
import { auth, db } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";

const Newsapp = () => {
  const [search, setSearch] = useState("");
  const [newsData, setNewsData] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null); // Set to null initially
  const [userDetails, setUserDetails] = useState(null);
  const [query, setQuery] = useState("sports");
  const API_KEY = "926017471d90dcf8566635becfd7c928";

  const navigate = useNavigate();
  const languageMap = {
    English: "en",
    Hindi: "hi",
    Telugu: "te",
    Tamil: "ta",
    Marathi: "mr",
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) return;
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        // console.log("User Data from Firestore:", userData);

        // ✅ Convert full language name to API code
        const langCode = languageMap[userData.language] || "en";
        setSelectedLang(langCode);

      }
    });
    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   if (selectedLang) {
  //     console.log("Running getData() with language:", selectedLang); // ✅ Debugging log
  //     getData();
  //   }
  // }, [selectedLang]);

  useEffect(() => {
    console.log(query)
    const getData = async () => {
      try {
        // if (!selectedLang) return; // Ensure language is set before calling API
        console.log("Fetching news in language:", selectedLang);
        const response = await fetch(
          `https://gnews.io/api/v4/search?q=${query}&lang=${selectedLang}&country=in&max=10&apikey=${API_KEY}`
        );
        const jsonData = await response.json();

        console.log(jsonData); // ✅ Debugging log 
        if (jsonData.articles && jsonData.articles.length > 0) {
          setNewsData(jsonData.articles);
        } else {
          setNewsData([]);
          alert("No news found for the given search.");
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    if (query) {
      console.log("enter")
      getData();
    }

  }, [query])

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    getData("sports");
  };


  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    const query = search.trim();
    if (query === "") {
      alert("Please enter a topic or keyword.");
    } else {
      getData(query);
    }
  };

  useEffect(() => {
    if (!search) return;
    setQuery(search);

  }, [search]);

  const clearSearch = () => {
    setSearch("");
  };

  const handleCategoryClick = (category) => {
    getData(category);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleProfileClick = () => {
    setDropdownOpen(false);
    navigate('/profile');
  };
  
  console.log(query)
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Varta Vibe</h1>
        <nav>
          <ul className="language-list">
            <li><a href="#" onClick={() => handleLanguageChange("en")}>ENGLISH</a></li>
            <li><a href="#" onClick={() => handleLanguageChange("hi")}>HINDI</a></li>
            <li><a href="#" onClick={() => handleLanguageChange("te")}>TELUGU</a></li>
            <li><a href="#" onClick={() => handleLanguageChange("ta")}>TAMIL</a></li>
            <li><a href="#" onClick={() => handleLanguageChange("mr")}>MARATHI</a></li>
          </ul>
        </nav>
      </header>

      <nav className="navbar">
        <div className="menu">
          <div className="category-buttons">
            <div className="dropdown">
              <button className="menu-btn">Sports &#9662;</button>
              <div className="dropdown-content">
                <button onClick={() => handleCategoryClick("Football")}>Football</button>
                <button onClick={() => handleCategoryClick("Cricket")}>Cricket</button>
                <button onClick={() => handleCategoryClick("Wrestling")}>Wrestling</button>
                <button onClick={() => handleCategoryClick("Hockey")}>Hockey</button>
              </div>
            </div>

            <div className="dropdown">
              <button className="menu-btn">Entertainment &#9662;</button>
              <div className="dropdown-content">
                <button onClick={() => handleCategoryClick("Bollywood")}>Bollywood</button>
                <button onClick={() => handleCategoryClick("Hollywood")}>Hollywood</button>
              </div>
            </div>

            <div className="dropdown">
              <button className="menu-btn">Health &#9662;</button>
              <div className="dropdown-content">
                <button onClick={() => handleCategoryClick("General Health")}>General Health</button>
              </div>
            </div>

            <div className="dropdown">
              <button className="menu-btn">Fitness &#9662;</button>
              <div className="dropdown-content">
                <button onClick={() => handleCategoryClick("Fitness")}>Fitness</button>
              </div>
            </div>
          </div>
        </div>

        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="SEARCH NEWS"
            value={search}
            onChange={handleInput}
          />
          {search && (
            <button className="clear-btn" onClick={clearSearch}>
              &#10006;
            </button>
          )}
          <button className="search-btn" onClick={handleSearch}>&#128269;</button>

          <div className="profile-dropdown-container">
            <img
              src="https://cdn-icons-png.freepik.com/512/17735/17735516.png"
              alt="Profile"
              className="profile-icon"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="dropdown-content profile-dropdown">
                <button onClick={handleProfileClick}>My Profile</button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="news-container">
        {newsData && newsData.length > 0 ? (
          <Card data={newsData} selectedLang={selectedLang} category={query} />
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default Newsapp;
