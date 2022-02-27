import { useDispatch, useSelector } from 'react-redux';

import { theme } from 'redux/actions';

export const useTheme = () => {
  const dispatch = useDispatch();
  const state = useSelector(store => store.theme);

  return ({
    state,
    toggleMode: () => { dispatch(theme.toggleMode()) },
    setDefault: () => { dispatch(theme.setDefault()) },
    setDracula: () => { dispatch(theme.setDracula()) },
    setNord: () => { dispatch(theme.setNord()) },
  })
};
