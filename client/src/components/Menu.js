import styled from 'styled-components'

export default function Menu() {
    return(
        <StyledMenu>
            Hello
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    grid-row-start: span 2; 
    background: black;
    color: white;
    width: 100%;
    height: 100%;
`