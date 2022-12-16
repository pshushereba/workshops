import {
  getTotalInvestmentYears,
  calculateTotalInvestmentYears,
  getNetBalanceAmount,
  getInterestAmount,
  getTaxAmount,
} from './workshop-1.js';

describe('getTotalInvestmentYears', () => {
  describe('given an investment amount of $1000 and a desired accrued amount of $1100', () => {
    describe('when the interest rate is 5% and tax rate is 18%', () => {
      it('should return 3 years', () => {
        const principalAmount = 1000;
        const desiredAmount = 1100;
        const interestRate = 0.05;
        const taxRate = 0.18;

        const totalInvestmentYears = getTotalInvestmentYears(
          principalAmount,
          interestRate,
          taxRate,
          desiredAmount
        );
        expect(totalInvestmentYears).toEqual(3);
      });
    });
  });

  describe('given an investment amount of $1000 and a desired accrued amount of $1100', () => {
    describe('when the interest rate is 1.625% and tax rate is 18%', () => {
      it('should return 7 years', () => {
        const principalAmount = 1000;
        const desiredAmount = 1100;
        const interestRate = 0.01625;
        const taxRate = 0.18;

        const totalInvestmentYears = getTotalInvestmentYears(
          principalAmount,
          interestRate,
          taxRate,
          desiredAmount
        );

        expect(totalInvestmentYears).toEqual(7);
      });
    });
  });

  describe('given an investment amount of $1000 and a desired accrued amount of $1000', () => {
    describe('when the interest rate is 5% and tax rate is 18%', () => {
      it('should return 0 years', () => {
        const principalAmount = 1000;
        const desiredAmount = 1000;
        const interestRate = 0.05;
        const taxRate = 0.18;

        const totalInvestmentYears = getTotalInvestmentYears(
          principalAmount,
          interestRate,
          taxRate,
          desiredAmount
        );

        expect(totalInvestmentYears).toEqual(0);
      });
    });
  });
});

describe('calculateTotalInvestmentYears', () => {
  describe('given an investment amount of $1000 and a desired accrued amount of $1100', () => {
    describe('when the interest rate is 5% and tax rate is 18%', () => {
      it('should return 3 years', () => {
        // Enter test details here
        // calculateTotalInvestmentYears(principalAmount, interestRate, taxRate, desiredAmount)
        const principalAmount = 1000;
        const desiredAmount = 1100;
        const interestRate = 0.05;
        const taxRate = 0.18;

        const years = calculateTotalInvestmentYears(
          principalAmount,
          interestRate,
          taxRate,
          desiredAmount
        );
        expect(years).toEqual(3);
      });
    });
  });

  describe('given an investment amount of $1000 and a desired accrued amount of $1200', () => {
    describe('when the interest rate is 1.625% and tax rate is 18%', () => {
      it('should return 4 years', () => {
        const principalAmount = 1000;
        const desiredAmount = 1200;
        const interestRate = 0.01625;
        const taxRate = 0.18;

        const years = calculateTotalInvestmentYears(
          principalAmount,
          interestRate,
          taxRate,
          desiredAmount
        );
        expect(years).toEqual(4);
      });
    });
  });
});

describe('getNetBalanceAmount', () => {
  describe('given a principal amount of $1000', () => {
    describe('when the interest rate is 5% and tax rate is 18%', () => {
      it('should return a net balance amount of $1041', () => {
        // getNetBalanceAmount(principalAmount, interestRate, taxRate)
        const principalAmount = 1000;
        const interestRate = 0.05;
        const taxRate = 0.18;
        const netBalanceAmount = getNetBalanceAmount(principalAmount, interestRate, taxRate);

        expect(netBalanceAmount).toEqual(1041);
      });
    });

    describe('when the interest rate is 1.625% and tax rate is 18%', () => {
      it('should return a net balance amount of $1013.325', () => {
        const principalAmount = 1000;
        const interestRate = 0.01625;
        const taxRate = 0.18;
        const netBalanceAmount = getNetBalanceAmount(principalAmount, interestRate, taxRate);

        expect(netBalanceAmount).toEqual(1013.325);
      });
    });
  });
});

describe('getInterestAmount', () => {
  describe('given a balance amount of $1000', () => {
    describe('when the interest rate is 5%', () => {
      it('should return an interest amount of $50', () => {
        // getInterestAmount(principalAmount, interestRate)
        const principalAmount = 1000;
        const interestRate = 0.05;

        const interestAmount = getInterestAmount(principalAmount, interestRate);
        expect(interestAmount).toEqual(50);
      });
    });

    describe('when the interest rate is 1.625%', () => {
      it('should return an interest amount of $16.25', () => {
        const principalAmount = 1000;
        const interestRate = 0.01625;

        const interestAmount = getInterestAmount(principalAmount, interestRate);
        expect(interestAmount).toEqual(16.25);
      });
    });
  });
});

describe('getTaxAmount', () => {
  describe('given an interest amount of $50', () => {
    describe('when tax rate is 18%', () => {
      it('should return a tax amount of $9', () => {
        // getTaxAmount(interestAmount, taxRate)
        const interestAmount = 50;
        const taxRate = 0.18;

        const taxAmount = getTaxAmount(interestAmount, taxRate);

        expect(taxAmount).toEqual(9);
      });
    });
  });

  describe('given an interest amount of $16.25', () => {
    describe('when tax rate is 18%', () => {
      it('should return a tax amount of $2.925', () => {
        const interestAmount = 16.25;
        const taxRate = 0.18;

        const taxAmount = getTaxAmount(interestAmount, taxRate);

        expect(taxAmount).toEqual(2.925);
      });
    });
  });
});
