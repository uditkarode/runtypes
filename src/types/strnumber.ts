import { Runtype, create } from '../runtype';

/* taken from joi */
const numberRegex = /^\s*[+-]?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+))(?:e([+-]?\d+))?\s*$/i;

interface StrNumber extends Runtype<string> {
    tag: 'strnumber';
}
  
/**
 * Validates that a value is a number but as the data type string.
 */
export const StrNumber = create<StrNumber>(
  value =>
    (typeof value === 'string' && numberRegex.test(value))
      ? { success: true, value }
      : {
          success: false,
          message: `Expected string number, but was ${value === null ? value : typeof value}`,
        },
  { tag: 'strnumber' },
);
