const evaluateLoan = (age, income, creditScore, employment) => {
  if (typeof age !== 'number' || age < 18 || age > 65) {
    return 'Invalid Input';
  }
  if (typeof income !== 'number' || income < 5.0 || income > 500.0) {
    return 'Invalid Input';
  }
  if (
    typeof creditScore !== 'number' ||
    creditScore < 300 ||
    creditScore > 850
  ) {
    return 'Invalid Input';
  }
  if (employment !== 'C' && employment !== 'F') {
    return 'Invalid Input';
  }

  let risk;
  if (creditScore >= 300 && creditScore <= 500) {
    risk = 'High';
  } else if (creditScore >= 501 && creditScore <= 700) {
    risk = 'Medium';
  } else if (creditScore >= 701 && creditScore <= 850) {
    risk = 'Low';
  }

  if (risk === 'High') {
    return 'REJECT';
  }

  if (income < 15.0) {
    if (risk === 'Low' && employment === 'C') {
      return 'MANUAL REVIEW';
    }
    if (risk === 'Medium') {
      return 'REJECT';
    }
    if (risk === 'Low' && employment === 'F') {
      return 'REJECT';
    }
  } else {
    if ((risk === 'Low' || risk === 'Medium') && employment === 'C') {
      return 'APPROVE';
    }
    if ((risk === 'Low' || risk === 'Medium') && employment === 'F') {
      return 'MANUAL REVIEW';
    }
  }

  return 'REJECT';
};

export default evaluateLoan;
