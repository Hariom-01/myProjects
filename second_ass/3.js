function findTax(salary) {
  let tax;
  switch (true) {
    case salary > 0 && salary <= 50000: {
      tax = salary * 0;
      console.log(tax + ',' + '0% tax on the entire salary');
      break;
    }
    case salary > 500000 && salary <= 1000000: {
      tax = salary * 0.1;
      console.log(tax + ',' + '  10% tax on the entire salary');
      break;
    }
    case salary > 1000000 && salary <= 1500000: {
      tax = salary * 0.2;
      console.log(tax + ',' + '20% tax on the entire salary');
      break;
    }
    case salary > 1500000: {
      tax = salary * 0.3;
      console.log(tax + ',' + '30% tax on the entire salary');
      break;
    }
    default: {
      console.log('Enter the vaild salary');
    }
  }
}
findTax(5000);
findTax(100000);
findTax(1200000);