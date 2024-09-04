import { Component } from "react";
// custom hooks
import Navigation from "../../hooks/useNavigate-hook/useNavigate";
// style
import styles from "./search-result-list.module.css";

class SearchResultList extends Component {
    constructor() {
        super()
        this.state = {
            isListLong: false
        };
    }

    componentDidMount() {
        if(this.props.searchResultItem.length > 5 && !this.state.isListLong) {
            this.setState({
                isListLong: true
            });
        }
    }


    componentDidUpdate() {
        if(this.props.searchResultItem.length > 5 && !this.state.isListLong) {
            this.setState({
                isListLong: true
            });
        }

        if(this.props.searchResultItem.length <= 6 && this.state.isListLong) {
            this.setState({
                isListLong: false
            });
        }
    }

    viewFullListHandler = (meals) => {
        // TODO: make this navigate to a new page on click on view full list
        this.props.makeSearchResultGlobal(meals)
        this.props.navigate('/search');
    }

    viewIndividualMealDetailsHandler = () => {
        // TODO: attach this to each meal item result
    }
    
    render = () => {
        const { searchResultItem } = this.props;
        const { viewFullListHandler } = this
        
        
        return(
            <div className={styles.search_result_list_container}>
                <div className={styles.result_heading}>
                    <div className={styles.heading_text}>
                        <span className={`material-symbols-outlined ${styles.search_icon}`}>circle</span>
                        <span>Result</span>
                    </div>
                    <div className={styles.line_divider}></div>
                    <div className={styles.result_amount}>{searchResultItem.length}</div>
                </div>
                {
                    searchResultItem.length > 0 ?
                    (
                        <ul className={styles.result_item_container}>
                            {
                                searchResultItem.slice(0, 6).map(meal => {                
                                    return(
                                        <li className={styles.item_wrapper} key={meal.idMeal}>
                                            <div className={styles.details}>
                                                <div className={styles.img_content}>
                                                    <img src={meal.strMealThumb} alt="meal.strMeal" />
                                                </div>
                                                <div className={styles.text_content}>
                                                    <h4>{meal.strMeal}</h4>
                                                    <small>{`cat: ${meal.strCategory}`}</small>
                                                </div>
                                            </div>

                                            <span className={`material-symbols-outlined ${styles.link_btn}`}>link</span>
                                        </li> 
                                    );
                                })
                            }
                        </ul>
                    ) : 
                    <div className={styles.no_search_result}>
                        {/* empty */}
                        <span class="material-symbols-outlined">
                            filter_none
                        </span>
                        <p>No result</p>
                    </div>
                }

                {/* view full result */}
                {
                    this.state.isListLong && (
                        <div className={styles.view_full_result_container}>
                            <div className={styles.vfr_heading}>
                                <span>{searchResultItem.length - 6 < 0 ? "0" : searchResultItem.length - 6}</span>
                                <span>more remaining</span>
                            </div>
                            <button className={styles.vfr_btn} onClick={() => viewFullListHandler(searchResultItem)}>View entire list</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Navigation(SearchResultList);