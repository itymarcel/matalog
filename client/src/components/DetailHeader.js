import styled from 'styled-components'
import user from '../images/user.svg';
import boxSmall from '../images/boxSmall.svg';
import box from '../images/box.svg';
import edit from '../images/edit.svg';
import copy from '../images/copy.svg';

export default function DetailHeader() {
    return (
        <StyledHeader>
            <div class="info">
                <p>8c9860ee-828f-11eb-8dcd-0242ac130003</p>
                <p><img src={user}/><em>James Tooth</em></p>
                <p><img src={boxSmall}/><em>UoB: Main library</em></p>
                <p><em>UoB: Stone Materials</em></p>
                <p><em>more …</em></p>
            </div>
            <div class="actions">
                <p><img src={box}/>collect</p>
                <p><img src={edit}/>suggest to edit</p>
                <p><img src={copy}/>copy to create new</p>
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width: 90%;
    margin: 4rem auto;
    border-bottom: 0.125rem solid black;
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-family: 'Roboto Mono', sans-serif;

    .info {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        p {
            border-right: 0.063rem solid black;
            padding-right: 0.5rem;
            margin-right: 0.5rem;
            font-size: 0.75rem;
            display: flex;
            align-items: center;
            

            img {
                margin-right: 0.5rem;  
            }

            em {
                font-style: normal;
                color: blue;
            }
        }

        p:last-child {
            border: none;
        }
    }

    .actions {
        display: flex;
        flex-wrap: wrap;
        

        p {            
            margin-right: 1rem;
            font-size: 0.75rem;
            display: flex;
            align-items: center;

            img {
                margin-right: 0.5rem;  
            }

        }
    }
`