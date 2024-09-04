import { Component } from "react";
// style
import styles from "./meal-category.module.css";
// image
import placeholderImg from "../../assets/placehold-img.jpg";

class MealCategoryCard extends Component {
    constructor() {
        super()
        this.state = {
            hasImgLoaded: false
        }
    }

    hasImgLoadedHandler = () => {
        this.setState({hasImgLoaded: true}, () => {
        });
    }
    
    render = () => {
        const { hasImgLoaded } = this.state;
        const { categoryOfMeal } = this.props
        
        return(
            <div className={styles.meal_category_card_container}>
                {/* img container */}
                <div className={styles.category_img} style={{backgroundImage: !hasImgLoaded ? `url(${placeholderImg})` : 'none'}}>
                    <img
                        src={categoryOfMeal.imgLink} 
                        alt={categoryOfMeal.category} 
                        onLoad={this.hasImgLoadedHandler}
                        style={{ display: hasImgLoaded ? 'block' : 'none' }}
                    />
                </div>
                {/* name */}
                <h4>{categoryOfMeal.category}</h4>
            </div>
        );
    }
}

export default MealCategoryCard;