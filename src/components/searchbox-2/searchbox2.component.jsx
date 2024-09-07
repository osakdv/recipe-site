import { Component } from "react";
// styles
import styles from "./searchbox2.module.css";

class Searchbox2 extends Component {
    render = () => {
        return(
            <div className={styles.searchbox2_form_wrapper}>
                <form className={styles.search2_container_form}>
                    {/* search icon */}
                    {/* input field */}
                    <input type="text" placeholder="Search or filter for recipe"/>
                    {/* clear icon */}
                </form>
            </div>
        )
    }
}

export default Searchbox2;