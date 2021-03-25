import styled from 'styled-components'
import DetailHeader from '../components/DetailHeader'
import Intro from '../components/Intro'

export default function DetailPage() {
    return (
    <>
        <DetailHeader />
        <Wrapper>
            <Intro>section 1</Intro>
            <div>section 2</div>
            <div>section 3</div>
            <div>section 4</div>
            <div>section 5</div>
            <div>section 6</div>
        </Wrapper>
    </>
    )
}

const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.25rem;
    row-gap: 5rem;
    width: 90%;
    margin: 0 auto;

    div {
        background: red;
    }
`