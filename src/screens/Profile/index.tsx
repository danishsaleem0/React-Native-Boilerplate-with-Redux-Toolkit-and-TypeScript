import React, {ReactElement} from 'react';
import {Container, Header} from '../../components';
import styles from './styles';

export default function Profile(): ReactElement {
  return (
    <Container isPadding={false}>
      <Header isBack={true} title="Profile" />
    </Container>
  );
}
