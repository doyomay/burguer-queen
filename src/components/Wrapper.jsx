import React from 'react';
import PropTypes from 'prop-types';

export default function Wrapper(props) {
  const { children } = props;
  return (
    <section className="container">
      {children}
    </section>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
