import { Link } from "react-router-dom"
import { Footer } from "./styles"
import { AiOutlineWhatsApp, AiOutlineFacebook ,AiOutlineInstagram } from "react-icons/ai"

export const FooterComponent = () => {
    return (
        <Footer>
            <p className="logo">logo</p>
            <p className="alldress-phone">R. Eng. Jaime Pinheiro Ulhôa Cintra, 1502 - Jardim Bom Retiro (Nova Veneza), Sumaré - SP, 13181-743, Brazil, São Paulo</p>
            <p className="alldress-phone">TELEFONE: (19) 98382-3162</p>
            <div className="divButtons">
                <Link to="">INÍCIO</Link>
                <Link to="">SOBRE NÓS</Link>
                <Link to="">PROMOÇÕES</Link>
                <Link to="">CONTATO</Link>
            </div>
            <div className="divSocialMedias">
                <Link to=""> <AiOutlineWhatsApp /> </Link>
                <Link to=""> <AiOutlineFacebook /> </Link>
                <Link to=""> <AiOutlineInstagram /> </Link>
            </div>
            <p className="copyright">Todos os direitos Reservados - Varejão Bom Retiro | Bebidas e mercearia em Geral </p>
        </Footer>
    )
}