describe("getTotalInvestmentYears", () => {
  describe("given an investment amount of $1000 and a desired accrued amount of $1100", () => {
    describe("when the interest rate is 5% and tax rate is 18%", () => {
      it("should return 3 years", () => {
        // Enter test details here
      });
    });
  });

  describe("given an investment amount of $1000 and a desired accrued amount of $1100", () => {
    describe("when the interest rate is 1.625% and tax rate is 18%", () => {
      it("should return 7 years", () => {
        // Enter test details here
      });
    });
  });

  describe("given an investment amount of $1000 and a desired accrued amount of $1000", () => {
    describe("when the interest rate is 5% and tax rate is 18%", () => {
      it("should return 0 years", () => {
        // Enter test details here
      });
    });
  });
});

describe("calculateTotalInvestmentYears", () => {
  describe("given an investment amount of $1000 and a desired accrued amount of $1100", () => {
    describe("when the interest rate is 5% and tax rate is 18%", () => {
      it("should return 3 years", () => {
        // Enter test details here
      });
    });
  });

  describe("given an investment amount of $1000 and a desired accrued amount of $1200", () => {
    describe("when the interest rate is 1.625% and tax rate is 18%", () => {
      it("should return 4 years", () => {
        // Enter test details here
      });
    });
  });
});

describe("getNetBalanceAmount", () => {
  describe("given a principal amount of $1000", () => {
    describe("when the interest rate is 5% and tax rate is 18%", () => {
      it("should return a net balance amount of $1041", () => {
        // Enter test details here
      });
    });

    describe("when the interest rate is 1.625% and tax rate is 18%", () => {
      it("should return a net balance amount of $1013.325", () => {
        // Enter test details here
      });
    });
  });
});

describe("getInterestAmount", () => {
  describe("given a balance amount of $1000", () => {
    describe("when the interest rate is 5%", () => {
      it("should return an interest amount of $50", () => {
        // Enter test details here
      });
    });

    describe("when the interest rate is 1.625%", () => {
      it("should return an interest amount of $16.25", () => {
        // Enter test details here
      });
    });
  });
});

describe("getTaxAmount", () => {
  describe("given an interest amount of $50", () => {
    describe("when tax rate is 18%", () => {
      it("should return a tax amount of $9", () => {
        // Enter test details here
      });
    });
  });

  describe("given an interest amount of $16.25", () => {
    describe("when tax rate is 18%", () => {
      it("should return a tax amount of $2.925", () => {
        // Enter test details here
      });
    });
  });
});
