/**
 * Gets the number of years it will take for the initial amount to
 * accrue to the desired amount with the specified interest rate
 * and tax rate
 * @param {Number} principalAmount - the initial amount invested
 * @param {Number} interestRate - the current interest rate
 * @param {Number} taxRate - the current tax rate
 * @param {Number} desiredAmount - the desired total balance amount
 * @returns {Number} the number of years
 */
export const getTotalInvestmentYears = (
  principalAmount,
  interestRate,
  taxRate,
  desiredAmount
) => {
  if (principalAmount === desiredAmount) {
    return 0;
  }

  return (calculateTotalInvestmentYears =
    (principalAmount, interestRate, taxRate, desiredAmount));
};

/**
 * Calculates the number of years the initial amount invested will
 * take to accrue to the desired amount
 * @param {Number} principalAmount - the initial amount invested
 * @param {Number} interestRate - the current interest rate
 * @param {Number} taxRate - the current tax rate
 * @param {Number} desiredAmount - the desired total balance amount
 * @returns {Number} the number of years
 */
export const calculateTotalInvestmentYears = (
  principalAmount,
  interestRate,
  taxRate,
  desiredAmount
) => {
  let netBalanceAmount = principalAmount;
  let years = 0;

  while (netBalanceAmount < desiredAmount) {
    years++;

    netBalanceAmount = getNetBalanceAmount(
      netBalanceAmount,
      interestRate,
      taxRate
    );
  }

  return years;
};

/**
 * Gets the net balance amount
 * @param {Number} principalAmount - the initial amount invested
 * @param {Number} interestRate - the current interest rate
 * @param {Number} taxRate - the current tax rate
 * @returns {Number} the total net balance amount
 */
export const getNetBalanceAmount = (principalAmount, interestRate, taxRate) => {
  const interestAmount = getInterestAmount(principalAmount, interestRate);
  const taxAmount = getTaxAmount(interestAmount, taxRate);

  return principalAmount + interestAmount - taxAmount;
};

/**
 * Gets the interest amount from the principal amount
 * @param {Number} balanceAmount - the current balance amount
 * @param {Number} interestRate - the current interest rate
 * @returns {Number} the total interest amount
 */
export const getInterestAmount = (balanceAmount, interestRate) => {
  return balanceAmount * interestRate;
};

/**
 * Gets the tax amount for the accrued interest amount
 * @param {Number} interestAmount - the accrued interest amount
 * @param {Number} taxRate - the current tax rate
 * @returns {Number} the tax amount for the interest amount
 */
export const getTaxAmount = (interestAmount, taxRate) => {
  return interestAmount * taxRate;
};
