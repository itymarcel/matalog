import styled from 'styled-components'
import CollectionCard from './CollectionCard'

export default function Collections() {
    return (
        <Wrapper>
            <h2>Collections</h2>
            <div class="container">
                <CollectionCard/>
                <CollectionCard/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 100%;
    border-top: 0.125rem solid black;
    padding-top: 1rem;

    .container {
        display: flex;
        flex-wrap: wrap;
        margin-top: 2rem;
    }

`