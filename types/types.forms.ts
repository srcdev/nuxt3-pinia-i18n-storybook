export interface IValidationPatterns {
  pattern: string;
  minlength: string;
  maxlength: string;
  hint: string;
}

export interface IFieldsInitialState {
  [key: string]: string | boolean | number | URL;
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
  [x: string]: any;
  formId: string;
  data: IFieldsInitialState;
  validityState: IValidityStateArrShort;
  doSubmit: boolean;
  errorCount: number;
  customErrorMessages: ICustomErrorMessagesArr;
}
