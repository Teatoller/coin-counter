function coinCounterWithClosures() {
    // Define the values of coins in cents
    const quartersValue = 25;
    const dimesValue = 10;
    const nickelsValue = 5;
    const penniesValue = 1;
  
    // Initialize counters using closures
    const quartersCounter = createCounter(quartersValue);
    const dimesCounter = createCounter(dimesValue);
    const nickelsCounter = createCounter(nickelsValue);
    const penniesCounter = createCounter(penniesValue);
  
    // Closure function to create counters
    function createCounter(coinValue) {
      let count = 0;
      return function(amount) {
        if (amount >= coinValue) {
          const numCoins = Math.floor(amount / coinValue);
          count += numCoins;
          amount -= numCoins * coinValue;
        }
        return { count, amount };
      };
    }
  
    return function(amount) {
      let remainingAmount = amount;
      let quartersResult = quartersCounter(remainingAmount);
      remainingAmount = quartersResult.amount;
      let dimesResult = dimesCounter(remainingAmount);
      remainingAmount = dimesResult.amount;
      let nickelsResult = nickelsCounter(remainingAmount);
      remainingAmount = nickelsResult.amount;
      let penniesResult = penniesCounter(remainingAmount);
  
      return {
        quarters: quartersResult.count,
        dimes: dimesResult.count,
        nickels: nickelsResult.count,
        pennies: penniesResult.count,
      };
    };
  }
  
  // Example usage:
  const amount = 499; // $4.99 in cents
  const calculateChange = coinCounterWithClosures();
  console.log(calculateChange(amount));
  