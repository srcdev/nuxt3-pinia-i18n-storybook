export interface IValidationPatterns {
  pattern: string;
  minlength: string;
  maxlength: string;
  hint: string;
}

export interface IOptionsConfig {
  id: string;
  name: string;
  value: string;
  label: string;
}

export interface IOptionsValueArr {
  [key: string]: string | boolean | number | URL | object;
}

export interface IFieldsInitialState {
  [key: string]: null | string | boolean | number | URL | object | IOptionsValueArr[];
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

export interface ICustomErrorMessage {
  useCustomError: boolean;
  message: string;
}

export interface ICustomErrorMessagesArr {
  [x: string]: ICustomErrorMessage;
}

export interface IFormData {
  [x: string]: string | boolean | number | URL | object;
  data: IFieldsInitialState;
  validityState: IValidityStateArrShort;
  isPending: boolean;
  errorCount: number;
  customErrorMessages: ICustomErrorMessagesArr;
  formIsValid: boolean;
  showErrors: boolean;
  submitSuccess: boolean;
}
