import { Dispatch } from "react";

export const SAMPLE_ASYNC_ACTION =  'SAMPLE_ASYNC_ACTION';
export const SAMPLE_SYNC_ACTION =  'SAMPLE_SYNC_ACTION';

// async example
export const sampleAsyncAction = (ticker: string) => async (dispatch: Dispatch<any>) => {
  const url = `/api/overview/${ticker}.json`;
  const response = await fetch(url);
  dispatch({ type: SAMPLE_ASYNC_ACTION, data: response });
}

// sync example
export const sampleSyncAction = (data: any) => {
  return { type: SAMPLE_SYNC_ACTION, data };
}