import moment from 'moment';

// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {  
  return expenses.filter((expense) => {   
    // First, set createdAt to moment objects to pass in to filter  
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes (text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return (a.createdAt < b.createdAt ? 1 : -1);
    } else if (sortBy === 'amount') {     
      return (a.amount < b.amount ? 1 : -1);
    }
  });
};

export default getVisibleExpenses;
