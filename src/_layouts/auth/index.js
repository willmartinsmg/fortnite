import React from 'react';

import logo from '~/assets/logo.png';
import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper className="align-center">
      <div className="w-1/2 content-center align-center">
        <img src={logo} alt="fortnite" className="w-20 h-20 align-center" />
        <Content>{children}</Content>
      </div>
    </Wrapper>
  );
}
