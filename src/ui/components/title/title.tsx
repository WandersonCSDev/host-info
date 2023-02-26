import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { TitleStyled, SubTitleStyled } from "./title.style";

export default function Title(props){
    return (
    <>
    <TitleStyled>{props.title}</TitleStyled>
    <SubTitleStyled>{props.subtitle}</SubTitleStyled>
    </>
    )
}