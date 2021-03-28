import styled from 'styled-components'

export default function Circularity() {
    return (
        <Wrapper>
            <h2>Circularity and Impact</h2>
            <StyledTable>
                <tr>
                    <th>Renewable</th>
                    <td>Yes</td>
                </tr>
                <tr>
                    <th>Recyclable</th>
                    <td>No</td>
                </tr>
                <tr>
                    <th>Compostable</th>
                    <td>No</td>
                </tr>
                <tr>
                    <th>Rate of biodegration land</th>
                    <td>undetermined</td>
                </tr>
                <tr>
                    <th>CO2 / kg in production</th>
                    <td>0.00</td>
                </tr>
                <tr>
                    <th>% recycled content</th>
                    <td>0.00</td>
                </tr>
                <tr>
                    <th>Certifications</th>
                    <td>
                        <ul>
                            <li>Green seal</li>
                            <li>Safer Choice EPA</li>
                        </ul>
                    </td>
                </tr>
         
            </StyledTable>
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

const StyledTable = styled.table`
    width: 100%;
    margin-top: 2rem;


    th{
        width: 50%;
    }
    
`