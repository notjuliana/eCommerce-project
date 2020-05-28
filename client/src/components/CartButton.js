import styled from "styled-components";

export const CartButton = styled.button `
button {
    text-transform: capitalize; 
    background: #2d2d2d;
    color: white;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    padding: 0.2rem 0.5rem;

    transition: all 0.5s ease-in-out;

}
.span {
    color: white;
}
&:hover {

}
&:focus {
    outline: none;
}
`