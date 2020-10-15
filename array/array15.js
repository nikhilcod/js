/**
 * Find the leap years in a given range of years.
 */

function checkLeapYear(year) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return year;
  } else {
    return false;
  }
}

function leapYearRange(start, end) {
  const year_range = [];
  for (let i = start; i <= end; i++) {
    year_range.push(i);
  }
  
  const leapYears = [];
  year_range.forEach((year) => {
    if (checkLeapYear(year)) {
      leapYears.push(year);
    }
  });
  return leapYears;
}

console.log(leapYearRange(2000, 2012));
