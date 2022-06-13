import fetchMock from 'fetch-mock';

export const enableMock = () => {
  fetchMock.config.fallbackToNetwork = true;
};

export const disableMock = () => {
  fetchMock.reset();
};
