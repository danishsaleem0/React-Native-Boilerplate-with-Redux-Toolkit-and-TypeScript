import React, {Fragment, ReactElement} from 'react';
import NoData from '../NoData';
import {IEmptyComponentProps} from './types';

export default function RenderEmpty({
  loading,
  text,
}: IEmptyComponentProps): ReactElement {
  return <Fragment>{!loading && <NoData text={text} />}</Fragment>;
}
