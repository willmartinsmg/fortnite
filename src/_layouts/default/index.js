import React from 'react';

import Navbar from '~/components/Navbar';

import { Wrapper, Content } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Navbar />
      <Content>{children}</Content>
    </Wrapper>
  );
}
