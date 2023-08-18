import styled from 'styled-components';

export const UserCard = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
width: 400px;
height: 500px;
border: 2px solid black;
border-radius: 5px;
text-align: center;
background-color: #ebedf0;
`;

export const Avatar = styled.img`
width: 280px;
height: 250px;
border-radius: 50%;
`;

export const Name = styled.p`
font-size: 25px;
font-weight: bold;
`;

export const Stats = styled.ul`
margin: 20px 0px;
padding: 0px;
display: flex;
justify-content: center;
`;

export const StatsItem = styled.li`
margin: 15px auto;
display: flex;
flex-direction: column;
gap: 10px;
`;