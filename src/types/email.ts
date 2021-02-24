import { Runtype, create } from '../runtype';

const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface StrEmail extends Runtype<string> {
  tag: 'stremail';
}

/**
 * Validates that a value is a email with the data type string.
 */
export const StrEmail = create<StrEmail>(
  value =>
    (typeof value === 'string' && emailRegex.test(value))
      ? { success: true, value }
      : {
        success: false,
        message: `Expected string email, but was ${value !== null ? value : typeof value}`,
      },
  { tag: 'stremail' },
);
