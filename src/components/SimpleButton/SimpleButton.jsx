import React from 'react';
import PropTypes from 'prop-types';
import styles from './SimpleButton.module.scss';

/** 
 * @render react
 * @name SimpleButton
 * @description Simple button for click actions
 * @example
 * <SimpleButton text="Click Me!" primary />
 */
const SimpleButton = ({ text, primary }) => (
  <button className={styles.Button} data-primary={primary}>
    {text}
  </button>
);

SimpleButton.propTypes = {
  primary: PropTypes.bool,
  text: PropTypes.string
}

SimpleButton.defaultProps = {
  text: 'Simple Button',
  primary: true,
}

export default SimpleButton;