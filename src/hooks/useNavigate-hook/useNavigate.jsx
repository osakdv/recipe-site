import { useNavigate } from "react-router-dom"

const Navigation = (Component) => {
    return function UseNavigation(props){
        const navigate = useNavigate()
        return <Component {...props} navigate={navigate}/>
    }
}

export default Navigation;