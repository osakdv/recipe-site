import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// style
import './App.css';
// context
import { SearchResultProvider } from './context/search-result/search-result.context';
// pages
import HomePage from './pages/home/home.page';
import SearchResult from './pages/search-result/search-result.page';

function App() {
  const [searchResult, setSearchResult] = useState(null)
  const getSearchResultData = (data) => {
    setSearchResult(data);
    console.log(data)
  }

  return (
    <SearchResultProvider.Provider value={{searchResult}}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage makeSearchResultGlobal={getSearchResultData}/>} />
              <Route path="/search"  element={<SearchResult />}/>
            </Routes>
          </div>
      </Router>
    </SearchResultProvider.Provider>
  );
}

export default App;
