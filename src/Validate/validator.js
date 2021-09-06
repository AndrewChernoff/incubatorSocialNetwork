
export const required = (value) => value && value ? undefined : "Required";

export const maxValue = (max) => (value) => value && value.length > max ? `Should be less than ${max}` : undefined;

export const minValue = (min) => (value) =>
    value && min >= value.length ? `Should be greater than ${min}` : undefined;


export const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);
