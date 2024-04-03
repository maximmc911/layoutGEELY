export function formatCurrency(amount) {
    const roundedAmount = Math.floor(Number(amount));
    const formattedAmount = roundedAmount.toLocaleString();
    const formattedCurrency = formattedAmount;
  
    return formattedCurrency;
  }