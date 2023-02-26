import { 
    HeaderContainer,
    Logo} from './header.style';

export default function Header(){
    return(
        <HeaderContainer>
            <Logo 
            src="/images/host-info.png"
            alt="Host-info"
            />
        </HeaderContainer>
    )
};
