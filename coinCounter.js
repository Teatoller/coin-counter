function coinCounter(amount) {
    // Define the values of coins in cents
    const quartersValue = 25;
    const dimesValue = 10;
    const nickelsValue = 5;
    const penniesValue = 1;
  
    // Function to recursively calculate coins needed
    function countCoins(amount, coinValue) {
      if (amount === 0) {
        return {};
      } else if (amount >= coinValue) {
        const numCoins = Math.floor(amount / coinValue);
        const remainingAmount = amount % coinValue;
        return {
          ...countCoins(remainingAmount, coinValue),
          [coinValue]: numCoins,
        };
      } else {
        return countCoins(amount, coinValue / 10); // Handle floating point arithmetic in recursion
      }
    }
  
    // Calculate coins for each denomination
    const quarters = countCoins(amount, quartersValue);
    const dimes = countCoins(amount, dimesValue);
    const nickels = countCoins(amount, nickelsValue);
    const pennies = countCoins(amount, penniesValue);
  
    return {
      quarters,
      dimes,
      nickels,
      pennies,
    };
  }
  
  // Example usage:
  const amount = 499; // $4.99 in cents
  console.log(coinCounter(amount));
  