import { Component } from "react";
// style
import styles from "./home.module.css";
// components
import Hero1 from "../../components/hero-1/hero.component";

class HomePage extends Component {
    render = () => {
        const { makeSearchResultGlobal } = this.props;
        return(
            <main className={styles.home_content_container}>
                {/* hero */}
                <Hero1 makeSearchResultGlobal={makeSearchResultGlobal}/>
            </main>
        );
    }
}

export default HomePage;