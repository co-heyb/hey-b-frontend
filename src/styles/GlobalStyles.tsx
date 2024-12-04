import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import emotionReset from 'emotion-reset';

const globalStyles = css`
  ${emotionNormalize};
  ${emotionReset};
  * {
    box-sizing: border-box;
  }
  html,
  body {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.5px;
    font-family: 'Noto Sans CJK KR', sans-serif;
    padding: 0;
    margin: 0;
  }
  button {
    border: none;
    background-color: transparent;
  }
`;

const GlobalStyles = () => <Global styles={globalStyles} />;
export default GlobalStyles;
