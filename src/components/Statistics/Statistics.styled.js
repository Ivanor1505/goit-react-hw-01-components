import styled from 'styled-components';

// const getBcgColor = props => {
//   switch (props.stat.label) {
//     case '.docx':
//       return "green";
//     case '.pdf':
//       return "orange";
//     case '.mp3':
//           return "red";
//       case '.psd':
//           return "red";
//       case '.pdf':
//       return "red";
//     default:
//       return null;
//   }
// };

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
margin: 10px 20px;
display: flex;
flex-direction: column;
gap: 10px;
:nth-child(even) {
  background-color: #87d8f2;
}
`;