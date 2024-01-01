export interface IValidationPatterns {
  pattern: string;
  minlength: string;
  maxlength: string;
  hint: string;
}

export interface IValidityState {
  badInput: boolean;
  customError: boolean;
  patternMismatch: boolean;
  rangeOverflow: boolean;
  rangeUnderflow: boolean;
  stepMismatch: boolean;
  tooLong: boolean;
  tooShort: boolean;
  typeMismatch: boolean;
  valid: boolean;
  valueMissing: boolean;
}

export interface IValidityStateArr {
  [key: string]: {
    badInput: boolean;
    customError: boolean;
    patternMismatch: boolean;
    rangeOverflow: boolean;
    rangeUnderflow: boolean;
    stepMismatch: boolean;
    tooLong: boolean;
    tooShort: boolean;
    typeMismatch: boolean;
    valid: boolean;
    valueMissing: boolean;
  };
}

export interface IValidityStateArrShort {
  [key: string]: boolean;
}

export interface IFormData {
  formId: string;
  data: {
    username: string;
    password: string;
    mobile: string;
    url: string;
    email: string;
  };
  validityState: IValidityStateArr;
}
