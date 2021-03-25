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
        </StyledTable>
    )
}

const StyledTable = styled.table`
    grid-row-start: 3;
    margin-top: 2rem;
    border-spacing: 0px 30px;
    border-collapse: separate;

    tr {
        position: relative;
        td {
            border-top: 1px solid black;
        }
    }
    
    th {
        width: 40%;
        text-align: left;
        vertical-align: text-top;
        border-top: 1px solid black;
    }    

    
`