import styled from 'styled-components'
import IntroTable from './IntroTable'

export default function Intro() {
    return (
        <StyledIntro>
            <h1>Avochie Granite</h1>
            <p>Dark grey with a medium texture, durable and hard igneous stone. Stone is a hard substance from the ground used for building or carving. It is the product of millions of years of movement, pressure, compaction and heat, forming a durable solid material.</p>
            <IntroTable/>
        </StyledIntro>
    )
}

const StyledIntro = styled.section`
    display: grid;
    grid-template-columns: 5fr 1fr;

    p {
        grid-row-start: 2;
    }
`