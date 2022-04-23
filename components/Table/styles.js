import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
`;

export const StyledThead = styled.thead`
  background-color: #36304a;
  color: white;
`;

export const StyledTr = styled.tr`
  margin: 0;
`;

export const StyledTh = styled.th`
  padding: 10px;
  font-weight: normal;

  &:first-child {
    border-radius: 15px 0px 0px 0px;
  }

  &:last-child {
    border-radius: 0px 15px 0px 0px;
  }
`;

export const StyledTbody = styled.tbody`
  & tr td {
    padding: 10px;
    color: #999999;
  }

  tr:nth-child(odd) {
    background-color: #ffffff;
  }

  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
`;
