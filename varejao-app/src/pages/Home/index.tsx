import { LinkWpp, MainContent } from "./styles"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { HeaderComponent } from "../../components/Header"
import { FooterComponent } from "../../components/Footer"

export const HomePage = () => {
    return (
        <>
            <LinkWpp to=""><AiOutlineWhatsApp style={{marginRight: 5}}/> Whatsapp</LinkWpp>
            <HeaderComponent />
            <MainContent>

            </MainContent>
            <FooterComponent />
        </>
    )
}