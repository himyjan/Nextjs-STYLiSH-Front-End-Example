import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import classNameProps from './types/styleComponentsType';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <ButtonStyledComponents
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </ButtonStyledComponents>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

const ButtonStyledComponents = styled.button<classNameProps>`
  ${(props) =>
    props.className.includes('storybook-button')
      ? `
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 700;
        border: 0;
        border-radius: 3em;
        cursor: pointer;
        display: inline-block;
        line-height: 1;
      `
      : null}

  ${(props) =>
    props.className.includes('primary')
      ? `
        color: white;
        background-color: #1ea7fd;
      `
      : null}

  ${(props) =>
    props.className.includes('secondary')
      ? `
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `
      : null}

    ${(props) =>
    props.className.includes('small')
      ? `
        font-size: 12px;
        padding: 10px 16px;
      `
      : null}

    ${(props) =>
    props.className.includes('medium')
      ? `
        font-size: 14px;
        padding: 11px 20px;
      `
      : null}

    ${(props) =>
    props.className.includes('large')
      ? `
        font-size: 16px;
        padding: 12px 24px;
      `
      : null}
`;
