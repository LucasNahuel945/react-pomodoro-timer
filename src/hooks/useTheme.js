import { useDispatch } from 'react-redux';

import { theme  as themeActions} from 'redux/actions';

export const useTheme = () => {
  const dispatch = useDispatch();

  const setDefault = (event) => {
    event.preventDefault();
    return dispatch(themeActions.setDefault());
  };

  const setDracula = (event) => {
    event.preventDefault();
    return dispatch(themeActions.setDracula());
  };

  const setNord = (event) => {
    event.preventDefault();
    return dispatch(themeActions.setNord());
  };

  
  return ({
    setDefault,
    setDracula,
    setNord,
  })
};
