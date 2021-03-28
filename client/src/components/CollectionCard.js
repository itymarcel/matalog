import styled from 'styled-components'

export default function CollectionCard() {
    return(
        <StyledCollectionCard>
            <div class="header">
                <span>UOB</span>
                <span>Main Library</span>
                <span>Created by: James Tooze</span>
            </div>
            <div class="footer">
                <span>67</span>
                <span>Public</span>
            </div>

        </StyledCollectionCard>
    )
}

const StyledCollectionCard = styled.div`
    width: 18rem;
    height: 10rem;
    margin: 0 1rem 1rem 0;
    padding: 1rem;
    background: #6CE87D;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .header {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .footer {
        display: flex;
        justify-content: space-between;

        span {
            display: flex;
            align-items: flex-end;
        }

        span:first-child {
            font-size: 2rem;
        }

        span:last-child {
            font-size: 0.75rem;
        }
    }
`