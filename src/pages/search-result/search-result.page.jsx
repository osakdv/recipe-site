import { Component } from "react";
// hook
import ContextHook from "../../hooks/useContext/useContextHook";
// content

class SearchResult extends Component {
    render = () => {        
        const {searchResult} = this.props;
        return(
            <div>
                {
                    searchResult.map(data => {
                        return <p key={data.idMeal}>{data.strMeal}</p>
                    })
                }
            </div>
        )
    }
}

export default ContextHook(SearchResult);