import styled from 'styled-components'

export default function TechnicalData() {
    return (
        <Wrapper>
            <h2>Technical Data</h2>
            <StyledTable>
                <tr>
                    <th>Aprox. cost / kg</th>
                    <td>£ 130</td>
                </tr>
                <tr>
                    <th>Density</th>
                    <td>2.75 g / cm3</td>
                </tr>
                <tr>
                    <th>State at room temp.</th>
                    <td>solid</td>
                </tr>
                <tr>
                    <th>Hardness</th>
                    <td>31 N / mm2</td>
                </tr>
                <tr>
                    <th>Texture</th>
                    <td>Smooth</td>
                </tr>
                <tr>
                    <th>Opacity</th>
                    <td>100%</td>
                </tr>
                <tr>
                    <th>Data sheets</th>
                    <td>–</td>
                </tr>
                <tr>
                    <th>Health and Safety</th>
                    <td>–</td>
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