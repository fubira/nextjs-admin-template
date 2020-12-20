import { createGlobalStyle, css } from 'styled-components';
import GlobalStyle from '@paljs/ui/GlobalStyle';

const BaseStyle = createGlobalStyle`
${({ theme }) => css`
  ${GlobalStyle}

  html {
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smooting: grayscale;
  }

  body {
    font-size: 16px;
  }

  h1 {
    font-size: 26px;
    margin: 0;
    padding-bottom: 1.2rem;
  }

  h2 {
    font-size: 22px;
    padding-bottom: 0.8rem;
  }

  h3 {
    font-size: 18px;
    padding-bottom: 0.4rem;
  }

  h4 {
    font-size: 15px;
    padding-bottom: 0.2rem;
  }

  h5 {
    font-size: 13px;
    margin-bottom: 0.1rem;
  }

  a {
    text-decoration: none;
  }

  p {
    padding-bottom: 0.2rem;
  }

  ul,
  ol {
    margin: 1rem 1rem;
    padding-left: 1.2rem;
  }
  ul li,
  ol li {
    padding-left: 0.2rem;
  }

  aside.settings-sidebar {
    transition: transform 0.3s ease;
    width: 19rem;
    overflow: hidden;
    transform: translateX(${theme.dir === 'rtl' && '-'}100%);
    &.start {
      transform: translateX(${theme.dir === 'ltr' && '-'}100%);
    }

    &.expanded,
    &.expanded.start {
      transform: translateX(0);
    }

    .scrollable {
      width: 19rem;
      padding: 3.4rem 0.25rem;
    }

    .main-container {
      width: 19rem;
      transition: width 0.3s ease;
      overflow: hidden;

      .scrollable {
        width: 19rem;
      }
    }
  }

  .main-content {
    padding: 0 !important;
  }

  .with-margin {
    margin: 0 0.75rem 2rem 0;
  }
  .inline-block {
    display: inline-block;
  }
  .popover-card {
    margin-bottom: 0;
    width: 300px;
    box-shadow: none;
  }
  .btn {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 500;
    border: 2px solid transparent;
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
  .ck-content {
    min-height: 20rem;
  }
`}
`;
export default BaseStyle;
