import { Reducer } from 'redux';

import { SAMPLE_ASYNC_ACTION, SAMPLE_SYNC_ACTION } from './';

export interface ISampleReducerState {
  data: any;
}

const initialState: ISampleReducerState = {
  data: ["test"],
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ASYNC_ACTION: {
      const data = [action.data];

      return { 
        ...state,
        data,
      };
    }
      
    case SAMPLE_SYNC_ACTION: {
      const data = [action.data];

      return { 
        ...state,
        data,
      };
    }
    default:
      return state;
  }
}