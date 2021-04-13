import styled from 'styled-components'
import DetailHeader from '../components/DetailHeader'
import Intro from '../components/Intro'
import Images from '../components/Images'
import Family from '../components/Family'
import Collections from '../components/Collections'
import TechnicalData from '../components/TechnicalData'
import Circularity from '../components/Circularity'

export default function DetailPage() {
    return (
    <StyledDetailPage>
        <DetailHeader />
        <Wrapper>
            <Intro/>
            <Images/>
            <Family/>
            <Collections/>
            <TechnicalData/>
            <Circularity/>
        </Wrapper>
    </StyledDetailPage>
    )
}

const StyledDetailPage = styled.section`
    grid-row-start: 2;
`

const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.25rem;
    row-gap: 5rem;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 10rem;

    @media (max-width: 1000px){
        grid-template-columns: 1fr;
    }
    
`