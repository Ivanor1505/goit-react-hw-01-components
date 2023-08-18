import styled from 'styled-components';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const StatisticsBoard = styled.section`
display: block;
text-align: center;
`;

export const StatList = styled.ul`
padding: 5px;
display: flex;
justify-content: center;
`;

export const StatListItem = styled.li`
padding: 10px;
height: 70px;
width: 90px;
font-size: 20px;
font-weight: bold;
display: flex;
flex-direction: column;
gap: 10px;
background-color: ${getRandomColor};

`;