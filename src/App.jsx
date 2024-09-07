import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
// style
import './App.css';
// context
import { SearchResultProvider } from './context/search-result/search-result.context';
// pages
import HomePage from './routes/home/home.page';
import SearchResult from './routes/search-result/search-result.page';
import MealDetails from './routes/meal-details/meal-details.page';

function App() {
  // TODO: implement dynamic routing
  const urlParams = useParams()
  const [searchResult, setSearchResult] = useState([])
  
  const getSearchResultData = (data) => {
    setSearchResult(data);
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
