import { Component } from "react";
// style
import styles from "./search-result-meal-prev.module.css";
// image
import PlaceholderImg from "../../assets/placehold-img.jpg";

class SearchResultMealPreview extends Component {
    constructor() {
        super()
        this.state = {
            hasRecipeImgLoaded: false,
        }
    }

    // TODO: I'll have to move this function to the main search result page - so i can proper write the filter by difficulty level logic
    calMealDifficulty = () => {
        const mealIngredients = [];
        const mealArr = Object.entries(this.props.mealItem);
        mealArr.filter(meal => {
            if(meal[0].includes("strIngredient")) {
                if(meal[1] !== "" && meal[1] !== null) {
                    mealIngredients.push(meal[1])
                }
            }
        })

        let level;
        if(mealIngredients.length <= 8) {
            level = "Easy"
        } else if(mealIngredients.length > 8) {
            level = "Medium"
        } else if(mealIngredients.length >= 15) {
            level = "Hard"
        }
        return level;
    }
    
    render = () => {
        const { 
            idMeal,
            strMeal, 
            strCategory, 
            strInstructions, 
            strMealThumb, 
            strIngredient1, 
            strIngredient2, 
            strIngredient3, 
            strIngredient4 
        } = this.props.mealItem;
        const { hasRecipeImgLoaded } = this.state;
        
        const difficultyLevel = this.calMealDifficulty()
        return(
            <div className={styles.meal_preview_container}>
                <div className={styles.food_details_wrapper}>
                    {/* food img */}
                    <div className={styles.food_img} style={{background: !hasRecipeImgLoaded ? `url(${PlaceholderImg})` : "none", border: !hasRecipeImgLoaded ? "1px solid #eeeeee" : "none"}}>
                        <img src={strMealThumb} alt="recipe img" style={{display: !hasRecipeImgLoaded ? "none" : "block"}} onLoad={() => {
                            this.setState({hasRecipeImgLoaded: true})
                        }}/>
                    </div>
                    {/* food desc */}
                    <div className={styles.food_desc}>
                        <div className={styles.title_and_difficulty}>
                            <p>{strMeal}</p>
                            <span>{difficultyLevel}</span>
                        </div>
                        <p className={styles.desc_paragraph}>
                            {strInstructions}
                        </p>
                        <ul className={styles.ingridients_preview}>
                            <li>{strIngredient1}</li>
                            <li>{strIngredient2}</li>
                            <li>{strIngredient3}</li>
                            <li>{strIngredient4}</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.actions_and_engagement}>
                        <div className={styles.top_container}>
                            {/* add to grocery list */}
                        <div className={styles.add_to_grocery_list_btn}>
                            <span>Add to grocery</span>
                            <span className="material-symbols-outlined">
                                stockpot
                            </span>
                        </div>
                        {/* view */}
                        <button className={styles.view_recipe_full_details}>View</button>
                        {/* options */}
                        <div className={styles.menu_btn}>
                            <span className="material-symbols-outlined">
                                more_horiz
                            </span>
                        </div>
                        {/* TODO: option menu component*/}
                    </div>

                    <div className={styles.like_container}>
                        <span>10 .</span>
                        <span className="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResultMealPreview;