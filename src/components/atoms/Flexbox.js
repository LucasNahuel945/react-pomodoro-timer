import styled from 'styled-components';

export const Flexbox = styled.div`
  display: flex;
  overflow: 'hidden';
  transition: 0.2s ease-in-out 0s !important;
  box-shadow: ${({ shadows }) => (
    shadows && (` 
      0px 3px 1px -2px rgba(0,0,0,0.2),
      0px 2px 2px 0px rgba(0,0,0,0.14),
      0px 1px 5px 0px rgba(0,0,0,0.12)
    `)
  )};

  flex-direction: ${
    ({
      column,
      columnReverse,
      direction,
      row,
      rowReverse,
    }) => (
      (row && 'row') ||
      (column && 'column') ||
      (rowReverse && 'row-reverse') ||
      (columnReverse && 'column-reverse') ||
      (direction || 'row')
    )};
`;
