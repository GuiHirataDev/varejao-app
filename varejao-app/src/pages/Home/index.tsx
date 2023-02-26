import { LinkWpp, MainContent } from "./styles"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { HeaderComponent } from "../../components/Header"
import { FooterComponent } from "../../components/Footer"
import { Link } from "react-router-dom"

export const HomePage = () => {

    const instaBanner = require("./../../assets/banner-insta.png")

    return (
        <>
            <LinkWpp to=""><AiOutlineWhatsApp style={{marginRight: 5}}/> Whatsapp</LinkWpp>
            <HeaderComponent />
            <MainContent>
                <Link to={"https://www.instagram.com/varejaobomretiro/"} target="_blank">
                    <img src={instaBanner} alt="" />
                </Link>
            </MainContent>
            <FooterComponent />
        </>
    )
}