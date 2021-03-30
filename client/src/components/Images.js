import styled from 'styled-components'
import avochieGraniteImage from '../images/avochieGranite.png';

export default function Images() {
    
    return (

        <Image src={avochieGraniteImage} />

    )
}

const Image = styled.img`
        width: 100%;
        height: auto;
        object-fit: cover;
`