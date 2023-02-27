import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { TitleStyled, SubTitleStyled } from "./title.style";

interface TituloProps{
    title: string;
    subtitle?: string | JSX.Element;
}

export default function Title(props: TituloProps){
    return (
    <>
    <TitleStyled>{props.title}</TitleStyled>
    <SubTitleStyled>{props.subtitle}</SubTitleStyled>
    </>
    )
}