import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
//import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={9434} />);
  expect(wrapper.find('h1').text()).toBe('Viewing 1 expense totaling $94.34');
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={1234590} />);
  expect(wrapper.find('h1').text()).toBe('Viewing 2 expenses totaling $12,345.90');
});

test('should correctly render ExpensesSummar with no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />);
  expect(wrapper.find('h1').text()).toBe('Viewing 0 expenses totaling $0.00');
});