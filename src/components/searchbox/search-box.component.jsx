import { Component } from "react";
// api 
import { getMealByName } from "../../libs/api";
// style 
import styles from "./search-box.module.css";
// component
import SearchResultList from "../search-result-list/search-result.component";

class SearchBox extends Component {
    constructor() {
        super()
        this.state = {
            searchResult: [],
            searchQuery: "",
            isSearchResultListOpen: false,
        }
    }

    componentDidUpdate = () => {
        if (!this.state.searchQuery && this.state.isSearchResultListOpen) {
            this.setState({ isSearchResultListOpen: false });
        }

        if (this.state.searchQuery && !this.state.isSearchResultListOpen) {
            this.setState({ isSearchResultListOpen: true });
        }
    }

    debounceTimer;

    searchForMealHandler =  (event) => {
        const queryString = event.target.value;
        clearTimeout(this.debounceTimer);
        
        this.debounceTimer = setTimeout( async () => {
            try {
                const searchResult =  await getMealByName(queryString) || [];

                this.setState({
                    searchQuery: queryString,
                    searchResult: searchResult
                }); 
            } catch (error) {
                console.log(`Error fetching meal: ${error}`)
            }
        }, 1000)
    }

    clearSearchInput = () => {
        this.setState(
            {
                searchResult: [],
                searchQuery: "",
                isSearchResultListOpen: false
            }
        )
    }
    
    render = () => {
        const { searchResult, isSearchResultListOpen } = this.state;

        const { makeSearchResultGlobal } = this.props;
        
        return(
            <div className={`${styles.search_box_container}`}>
                <form className={`${styles.search_box_form}`}>
                    <div className={styles.input_container}>
                        <input type="text" placeholder="Search recipe" onChange={this.searchForMealHandler}/>
                        <span 
                        className={`material-symbols-outlined ${styles.clear_input_btn}`}
                        onClick={this.clearSearchInput}
                        >
                            close
                        </span>
                    </div>
                </form>
                {/* search result */}
                {
                    isSearchResultListOpen &&
                     <div className={styles.search_entry_result}>
                        <SearchResultList searchResultItem={searchResult} makeSearchResultGlobal={makeSearchResultGlobal}/>
                    </div>
                }
            </div>
        );
    }
}

export default SearchBox;