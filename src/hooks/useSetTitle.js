import { useEffect } from 'react';

export const useSetTitle = (title = 'Pomometro') => {
  return useEffect(() => {
    document.title = title;
  }, [title]);
};
