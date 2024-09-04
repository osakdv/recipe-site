import { Component } from "react";
// style
import styles from "./hero.component.module.css";
// img
import PlaceholderImg from "../../assets/placehold-img.jpg";
// component
import SearchBox from "../searchbox/search-box.component";
import MealCategoryCard from "../meal-category-card/meal-category.component";
import AchievementShowCase from "../achievement-num/achievement.component";

class Hero1 extends Component {
    constructor() {
        super()
        this.state = {
            hasMainHeroImg1Loaded: false,
            hasMainHeroImg2Loaded: false,
        }
    }
    
    categoryOfMeal = [
        {
            id: crypto.randomUUID(),
            category: "Vegetarian",
            imgLink: "https://images.pexels.com/photos/27583274/pexels-photo-27583274/free-photo-of-a-white-plate-with-several-bowls-of-salad-and-sauces.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: crypto.randomUUID(),
            category: "Dessert",
            imgLink: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: crypto.randomUUID(),
            category: "Pasta",
            imgLink: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ];

    achievements = [
        {
            id: crypto.randomUUID(),
            number: "8k+",
            desc: "Total Food Recipes"
        },
        {
            id: crypto.randomUUID(),
            number: "100k+",
            desc: "Monthly Visitors"
        },
        {
            id: crypto.randomUUID(),
            number: "120+",
            desc: "Country Delicacies"
        }
    ]

    onImgLoadedHandler = (currentImg) => {
        if(currentImg === "img1") {
            this.setState({hasMainHeroImg1Loaded: true})
        }

        if(currentImg === "img2") {
            this.setState({hasMainHeroImg2Loaded: true})
        }
    }
    
    render = () => {
        const { hasMainHeroImg1Loaded, hasMainHeroImg2Loaded } = this.state;
        const { onImgLoadedHandler, categoryOfMeal, achievements } = this

        // props
        const { makeSearchResultGlobal } = this.props;
        
        return(
            <div className={styles.hero_content_container}>
                {/* content 1 */}
                <div className={styles.content_1}>
                    <div className={styles.text_content_1}>
                        <h1>We curate the world's largest collection of food recipe</h1>
                        <SearchBox makeSearchResultGlobal={makeSearchResultGlobal}/>
                    </div>
                    <div className={styles.img_content_1}>
                        <div className={styles.img} style={{background: !hasMainHeroImg1Loaded ? `url(${PlaceholderImg})` : "none"}}>
                            <img 
                                src="https://images.unsplash.com/photo-1505253668822-42074d58a7c6?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt="food banner" style={{display: !hasMainHeroImg1Loaded ? "none" : "block"}}
                                onLoad={() => {onImgLoadedHandler("img1")}}
                            />
                        </div>
                        <div className={styles.img} style={{background: !hasMainHeroImg2Loaded ? `url(${PlaceholderImg})` : "none"}}>
                            <img 
                                src="https://images.unsplash.com/photo-1519996409144-56c88c9aa612?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt="food banner" style={{display: !hasMainHeroImg2Loaded ? "none" : "block"}}
                                onLoad={() => {onImgLoadedHandler("img2")}}
                            />
                        </div>
                    </div>
                </div>
                {/* content 2  - food categories*/}
                <div className={styles.content_2}>
                    <div className={styles.meal_category_card_container}>
                        {
                            categoryOfMeal.map(category => {
                                return(
                                    <MealCategoryCard categoryOfMeal={category} key={category.id}/>
                                );
                            })
                        }
                    </div>
                    <div className={styles.numbers_achivements}>
                        {
                            achievements.map(achieved => {
                                return(
                                    <AchievementShowCase key={achieved.id} achieved={achieved}/>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero1;