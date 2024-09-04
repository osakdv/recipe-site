import { Component } from "react";
// style
import styles from "./achievement.module.css";

class AchievementShowCase extends Component {
    render() {
        const { number, desc } = this.props.achieved
        return(
            <div className={styles.achievement_container}>
                <h4>{number}</h4>
                <p>{desc}</p>
            </div>
        );
    }
}

export default AchievementShowCase;