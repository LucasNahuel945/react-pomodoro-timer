import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items }) => (
  <ul>
    {
      items.map(
        item => <li key={item.id}> {item.content} </li>
      )
    }
  </ul>
);

List.propTypes = { items: PropTypes.array.isRequired };

export { List };
