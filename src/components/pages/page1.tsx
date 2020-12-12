import React from 'react';
import { useSelector } from 'react-redux';

import { IStoreState } from '../../redux';

export const Page1: React.FC = () => {
  const { data } = useSelector((state: IStoreState) => state.sampleReducer);

  return (
    <div>
      <h3>Page 1</h3>
      <div>Data: <span>{JSON.stringify(data)}</span></div>
    </div>
  )
}