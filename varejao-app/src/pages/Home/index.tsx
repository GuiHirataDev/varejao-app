import { LinkWpp, MainContent, DeliverySection } from "./styles";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { HiOutlineBuildingStorefront, HiOutlineTruck } from "react-icons/hi2";
import { MdOutlinePayment } from "react-icons/md";
import { HeaderComponent } from "../../components/Header";
import { FooterComponent } from "../../components/Footer";
import { Link } from "react-router-dom";
import { DeliveryLi } from "../../components/DeliveryLi";

export const HomePage = () => {
  const instaBanner = require("./../../assets/banner-insta.png");

  return (
    <>
      <LinkWpp to="">
        <AiOutlineWhatsApp style={{ marginRight: 5 }} /> Whatsapp
      </LinkWpp>
      <HeaderComponent />
      <MainContent>
        <Link
          to={"https://www.instagram.com/varejaobomretiro/"}
          target="_blank"
        >
          <img src={instaBanner} alt="" />
        </Link>
        <DeliverySection>
          <h1>DELIVERY</h1>
          <h2>ENTREGA APENAS PARA REGIÃO DO JARDIM BOM RETIRO (NOVA VENEZA)</h2>
          <p>Fale conosco via <span>WhatsApp</span> (19) 98182-3162</p>
          <ul>
            <DeliveryLi
              icon={<HiOutlineBuildingStorefront />}
              title="Entrega"
              content="Realizamos entrega de Segunda, Quarta e Sexta das 08h às 13hs, Terça e Quinta consultar no nosso WhatsApp"
              button="Faça seu pedido"
            />
            <DeliveryLi
              icon={<HiOutlineTruck />}
              title="Frete"
              content="FRETE GRÁTIS para a região do Jardim Bom Retiro, outras regiões
              por favor consultar frete através do WhatsApp"
              button="Consultar frete"
            />
            <DeliveryLi
              icon={<MdOutlinePayment />}
              title="Pagamento"
              content="Aceitamos Cartão, Dinheiro, Pix QR Code como forma de pagamento. Levamos nossa maquininha para receber no local de entrega"
              button="Ver política de Entregas"
            />
          </ul>
        </DeliverySection>
      </MainContent>
      <FooterComponent />
    </>
  );
};
