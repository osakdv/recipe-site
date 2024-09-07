import { Component } from "react";
// style
import styles from "./filter-meal.module.css"
// component
import DropdownCheckbox from "./dropdown/dropdown-checkbox.component";

class FilterMeal extends Component {
    render = () => {
        const { bgColor } = this.props;

        return(
            <div className={styles.filter_meal_container} style={{backgroundColor: bgColor ? "#fff" : "#fff"}}>
                <div className={styles.heading}>
                    <p>Filters</p>
                    <small>0 selected</small>
                </div>
                <div className={styles.filter_options_container}>
                    <DropdownCheckbox titleIcon="category" title="Category" />
                    <DropdownCheckbox titleIcon="flag_circle" title="Country" />
                    <DropdownCheckbox titleIcon="flag_circle" title="Difficulty" hasDifficulty={true}/>
                </div>
            </div>
        )
    }
}

export default FilterMeal;