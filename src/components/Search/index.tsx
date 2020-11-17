import React from 'react';
import styled from 'styled-components';
import { InputGroup } from '@paljs/ui/Input';
import { EvaIcon } from '@paljs/ui/Icon';

const InputStyled = styled(InputGroup)`
  display: flex;
  justify-content: center;

  border: 1px solid #e4e9f2;
  border-radius: 0.25rem;
  background-color: #f7f9fc;
`;

const SearchStyle = styled.div`
  display: flex;
  justify-content: center;

  input {
    padding: 0.25rem 0.5rem;
    border: none;
    background-color: none;
  }
  input:focus {
    background-color: inherit;
  }

  .icon {
    margin: auto;
    margin-left: 0.25rem;
  }

  .right > div {
    height: auto;
    display: flex;
    white-space: nowrap;
    align-content: center;
  }
  .left > div {
    display: flex;
    align-items: center;
  }
  .logo {
    font-size: 1.25rem;
    white-space: nowrap;
    text-decoration: none;
  }
`;
const Header: React.FC<unknown> = () => {
  return (
    <SearchStyle>
      <InputStyled className="input" fullWidth size="Small">
        <EvaIcon className="icon" name="search" />
        <input type="text" placeholder="キーワードで検索" />
      </InputStyled>
    </SearchStyle>
  );
};
export default Header;
