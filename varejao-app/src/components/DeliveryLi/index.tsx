import { Li } from "./styles";

interface IDeliveryLi {
    icon: any;
    title: string;
    content: string;
    button: string;
}

export const DeliveryLi = ({icon, title, content, button}: IDeliveryLi) => {
    return (
        <Li>
            <span>{icon}</span>
            <h3>{title}</h3>
            <p>{content}</p>
            <button>{button}</button>
        </Li>
    )
}