/**
 * Password validator for login pages
 */

export type LevelType = { label: string; color: string };

// has number
const hasNumber = (number: string) => new RegExp(/[0-9]/).test(number);

// has mix of small and capitals
const hasMixed = (number: string) => new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

// has special chars
const hasSpecial = (number: string) => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

// set color based on password strength
export const strengthColor = (count: number | string) => {
  let countValue: number;
  typeof count === 'string' ? (countValue = parseInt(count)) : (countValue = count);
  if (countValue < 2) return { label: 'Poor', color: 'error.main' };
  if (countValue < 3) return { label: 'Weak', color: 'warning.main' };
  if (countValue < 4) return { label: 'Normal', color: 'warning.dark' };
  if (countValue < 5) return { label: 'Good', color: 'success.main' };
  if (countValue < 6) return { label: 'Strong', color: 'success.dark' };
  return { label: 'Poor', color: 'error.main' };
};

// password strength indicator
export const strengthIndicator = (number: string) => {
  let strengths = 0;
  if (number.length > 5) strengths += 1;
  if (number.length > 7) strengths += 1;
  if (hasNumber(number)) strengths += 1;
  if (hasSpecial(number)) strengths += 1;
  if (hasMixed(number)) strengths += 1;
  return strengths;
};
