import { Component } from "react";
// styles
import styles from "./search-result.module.css";
// hook
import ContextHook from "../../hooks/useContext/useContextHook";
// component
import FilterMeal from "../../components/filter-meal/filter-meal.component";
import Searchbox2 from "../../components/searchbox-2/searchbox2.component";
import SearchResultMealPreview from "../../components/search-result-meal-prev/search-result-meal-prev.component";
// content

class SearchResult extends Component {
    render = () => {        
        // NOTE: search result data is available here
        const { searchResult } = this.props;
        return(
            <main className={styles.search_result_page_container}>
                {/* search box here for mobile */}
                <div className={styles.filter_and_preview_container}>
                    <div className={styles.filter_search_wrapper}>
                        <FilterMeal bgColor="#F0EDF8"/>
                    </div>
                    {/* meal preview */}
                    <div className={styles.meal_preview_item_container}>
                        {/* search box */}
                        <div className={styles.desktop_search_bar}>
                            <Searchbox2 />
                        </div>
                        <div className={styles.meal_preview_items}>
                            <div className={styles.meal_preview_heading}>
                                <p>{`Meals Result ${searchResult.length = 0 ? "0" : searchResult.length}`}</p>
                            </div>
                            {
                                searchResult.length === 0 ? (
                                    <div>Search for meals</div>
                                ) : (
                                    <>
                                    {searchResult.map((meal) => (
                                        <SearchResultMealPreview key={meal.idMeal} mealItem={meal} />
                                    ))}
                                    </>
                                )
                            }
                                
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default ContextHook(SearchResult);