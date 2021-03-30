import styled from "styled-components"
import logo from '../images/logo.svg';
import menu from '../images/menu.svg';

export default function Header(){
    return (
        <StyledHeader>
            <div class="logo" />
            <input type="text" name="mainSearch"/>
            <div class="menu" />
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width: 90%;
    height: 3.375rem;
    margin: 1.25rem auto;
    display: flex;
    justify-content: space-between;
    opacity: 0.2;

    .logo {
        width: 3.375rem;
        height: 3.375rem;
        background: url(${logo});
        background-repeat: no-repeat;
        background-position: center;
    }

    input {
        border-radius: 1.875rem;
        border: none;
        background-color: #CACACA;
        width: 70%;
        padding: 0 1.25rem;
    }

    .menu {
        width: 3.375rem;
        height: 3.375rem;
        background: url(${menu});
        background-repeat: no-repeat;
        background-position: center;
    }
`