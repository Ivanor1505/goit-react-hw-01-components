import styled from 'styled-components';

export const TableItem = styled.tr`
height: 40px;
padding-top: 10px;
padding-bottom: 10px;
:nth-child(even) {
  background-color: white;
}
`;

export const TableCell = styled.td`
width: 150px;
text-align: center;
`;