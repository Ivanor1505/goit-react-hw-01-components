import styled from 'styled-components'

const getColor = props => (props.isOnline ? "green" : "red");

export const FriendCard = styled.li`
margin: 10px auto;
width: 170px;
height: 100px;
border: 2px solid black; 
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
`;

export const Status = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${getColor};
`;