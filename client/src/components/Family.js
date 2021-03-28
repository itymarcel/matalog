import styled from 'styled-components'
import image from '../images/image.svg';

export default function Family() {
    return (
        <Wrapper>
            <h2>Family</h2>
            <StyledTable>
                <tr>
                    <th>Ingredients</th>
                    <td>
                        <div><img src={image}/></div>
                        <div><img src={image}/></div>
                        <div><img src={image}/></div>
                    </td>
                </tr>
                <tr>
                    <th>Used to make</th>
                    <td>
                        <div><img src={image}/></div>
                        <div><img src={image}/></div>
                    </td>
                </tr>
                <tr>
                    <th>Similar materials</th>
                    <td>
                        <div><img src={image}/></div>
                        <div><img src={image}/></div>
                        <div><img src={image}/></div>
                    </td>
                </tr>
         
            </StyledTable>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    border-top: 0.125rem solid black;
    padding-top: 1rem;
`

const StyledTable = styled.table`
    width: 100%;
    margin-top: 2rem;


    th{
        width: 32%;
    }
    
    td {
        display: flex;
        flex-wrap: wrap;
    }

    div {
        margin-right: 1rem;
        width: 5rem;
        height: 5rem;
        border: 0.125rem solid black;
        display:flex;
        justify-content: center;
        align-items: center;
    }

`