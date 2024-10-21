import axios from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    axios.create = jest.fn().mockReturnValue({
      get: jest.fn().mockResolvedValue({ data: 'data' }),
    });
    await throttledGetDataFromApi('/posts');
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const path = '/posts';
    axios.create = jest.fn().mockReturnValue({
      get: jest.fn().mockResolvedValue({ data: 'data' }),
    });

    await throttledGetDataFromApi(path);
    jest.runAllTimers();
    expect(axios.create().get).toHaveBeenCalledWith(path);
  });

  test('should return response data', async () => {
    const data = 'data';
    axios.create = jest.fn().mockReturnValue({
      get: jest.fn().mockResolvedValue({ data }),
    });

    const result = await throttledGetDataFromApi('/posts');

    jest.runAllTimers();
    expect(result).toBe(data);
  });
});
