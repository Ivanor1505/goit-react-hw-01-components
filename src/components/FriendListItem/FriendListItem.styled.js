import styled from 'styled-components'

const getColor = props => (props["data-isonline"] ? "green" : "red");

export const FriendCard = styled.li`
margin: 10px auto;
width: 350px;
height: 150px;
border: 2px solid black; 
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
`;

export const Status = styled.span`
margin-right:10px;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${getColor};
`;

export const Name = styled.p`
margin-left: 10px;
font-size: 25px;
`;

export const Ava = styled.img`
width: 130px;
`;