import { Component } from "react";
// style
import styles from "./meal-details.module.css";

class MealDetails extends Component {
    render = () => {
        return(
            <main className={styles.meal_details_page_container}>
                Meal details page
            </main>
        )
    }
}

export default MealDetails;