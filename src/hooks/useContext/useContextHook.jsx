import { useContext } from "react";
import { SearchResultProvider } from "../../context/search-result/search-result.context";

const ContextHook = (Component) => {
    return function FunctionComponent(props){
        const { searchResult } = useContext(SearchResultProvider)
        return <Component {...props} searchResult={searchResult}/>
    }
}

export default ContextHook;