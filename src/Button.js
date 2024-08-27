import styled from "styled-components";

const StyledButton = styled.div`
    width: ${props=>props.width || '80px'};
    background: #2ed573;
`

export function Button({width, onClick, label, children}){
    return (
        <StyledButton width={width} onClick={onClick}>
            <button>{label}</button>
            {children}
        </StyledButton>
    )
}