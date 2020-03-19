import validator from 'validator';

export default function(val) {
  const valNoSpaces = val.split(' ').join('');

  return validator.isAlpha(valNoSpaces);
}
