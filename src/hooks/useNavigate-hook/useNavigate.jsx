import { useNavigate } from "react-router-dom"

const NavigationHook = (Component) => {
    return function FunctionComponent(props){
        const navigate = useNavigate();

        const navigationHandler =  (pageLink) => {
            navigate(pageLink)
        }
        return <Component {...props} navigate={navigationHandler}/>
    }
}

export default NavigationHook;