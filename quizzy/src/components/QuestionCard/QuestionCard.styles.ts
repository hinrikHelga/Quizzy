import styled from 'styled-components';

export const QuestionCardWrapper = styled.div `
    max-width: 1100px;
    background: #FC4827;
    opacity: 0.8;
    border-radius: 20px;
    border: 2px solid #FBFFFF;
    box-shadow: 0px, 5px, 10px, rgba(0, 0, 0, 0,25);
    padding: 20px;
    text-align: center;

    p {
        font-size: 1rem;
    } 
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps> `
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClicked }) => 
            correct
            ? '-webkit-linear-gradient(90deg, #39FF14, #39FF14)'
            : !correct && userClicked
                ? '-webkit-linear-gradient(90deg, #E51616, #720B0B)'
                : '-webkit-linear-gradient(90deg, #FC4827, #E51616)'  
        };
        border: 3px solid #fff;
        border-radius: 10px;
        box-shadow: 1px, 2px 0px rgba(0, 0, 0, 0,1);
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0,25);
    }
`