import authReducer from '../../reducers/auth';

test('should set uid', () => {
  const action = {
    type: 'LOGIN',
    uid: 'testLoginId'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe('testLoginId')
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'testLoginId'}, action);
  expect(state).toEqual({});
});