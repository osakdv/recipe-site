import { Component } from "react";
// style
import styles from "./dropdown-checkbox.module.css";

class DropdownCheckbox extends Component {
    render = () => {
        const { title, titleIcon, filterOpts, hasDifficulty } = this.props;

        return(
            <div className={styles.dropdown_checkbox_container}>
                {/* tile */}
                <div className={styles.dropdown_head}>
                    <span>
                        <span className={`material-symbols-outlined ${styles.title_icon}`}>
                            {titleIcon}
                        </span>
                        {/* title */}
                        <p>{title}</p>
                    </span>

                    {/* button */}
                    <span className={`material-symbols-outlined ${styles.dropdown_btn_icon}`}>
                        arrow_drop_down_circle
                    </span>
                </div>
                {/* dropdown content */}
                <div className={styles.dropdown_body}>
                   {
                    !hasDifficulty ? 
                        <label htmlFor={`id`}>
                            <input type="checkbox" id="id" />
                            <p>{`Nigeria`}</p>
                        </label>
                        :
                        <div className={styles.difficulty_level_container}>
                            <button>Easy</button>
                            <button>Moderate</button>
                            <button>Hard</button>
                        </div>
                   }
                </div>
            </div>
        );
    }
}

export default DropdownCheckbox;