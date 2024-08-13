import React, {ReactElement} from 'react';
import {Container, Header} from '../../components';
import styles from './styles';

export default function Visits(): ReactElement {
  return (
    <Container isPadding={false}>
      <Header isBack={true} title="Visits" />
    </Container>
  );
}
