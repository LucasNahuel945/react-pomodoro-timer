import styled from 'styled-components';

export const Text = styled.div`
  color: ${({ fg, foreground }) => fg || foreground || ''};
  font-family: 'Poppins', sans-serif;
  text-transform: ${
    ({ 
      capitalize,
      lowercase,
      uppercase
    }) => (
      (capitalize && 'capitalize') ||
      (lowercase && 'lowercase') ||
      (uppercase && 'uppercase') || ''
    )
  };
`;
