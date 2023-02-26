import { Link } from "react-router-dom";
import { Header } from "./styles"

export const HeaderComponent = () => {
    const logo = require("./../../assets/logo.png") as string;

    return (
        <Header>
            <Link to={"/home"} className="linkLogo">
                <img src={logo} alt="" className="logo" />
            </Link>
            <button>lll</button>
        </Header>
    )
}