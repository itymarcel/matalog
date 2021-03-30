import styled from 'styled-components'

export default function IntroTable() {
    return (
        <StyledTable>
            <tr>
                <th>Applications</th>
                <td>
                    <ul>
                        <li>This durable stone can be cut into blocks for dimensional stone</li>
                        <li>It can be used as flooring and walling</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Type</th>
                <td>Raw</td>
            </tr>
            <tr>
                <th>Additional Keywords</th>
                <td>Lava</td>
            </tr>
            <tr>
                <th>Format</th>
                <td>rectangular block</td>
            </tr>
            <tr>
                <th>Producer</th>
                <td>Stonward - Aberdeenshire, UK</td>
            </tr>
            <tr>
                <th>Suppliers</th>
                <td>
                    <ul>
                        <li>Tennants Elgin - Morayshire, UK</li>
                        <li>Tennants Elgin - Morayshire, UK</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Variations</th>
                <td>–</td>
            </tr>
        </StyledTable>
    )
}

const StyledTable = styled.table`
    grid-row-start: 3;
    margin-top: 2rem;
    
    th{
        width: 40%;
    }
    
`