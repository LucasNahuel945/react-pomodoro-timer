import { useDispatch, useSelector } from 'react-redux';

import { visibility } from 'redux/actions';

export const useVisibility = () => {
  const dispatch = useDispatch();
  const state = useSelector(store => store.visibility);

  return ({
    on: () => { dispatch(visibility.on()) },
    off: () => { dispatch(visibility.off()) },
    toggle: () => { dispatch(visibility.toggle()) },
    state,
  })
};
