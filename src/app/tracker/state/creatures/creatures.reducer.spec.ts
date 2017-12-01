import { creaturesReducer, initialState } from './';

describe('creaturesReducer', () => {
  it('should default to empty array', () => {
    const result = creaturesReducer(null, null);
    expect(result).toBe(initialState);
  });
});
