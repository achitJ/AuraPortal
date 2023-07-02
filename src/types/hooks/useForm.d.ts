export interface IFormArgs<T> {
    initialValues: T;
    validate: {
        [K in keyof T]: (value: T[K]) => string | null
    }
};

export interface IStateValues<T> {
    [key: string]: {
        value: T[keyof T];
        error: string | null;
    }
};

export interface IDispatchArgs<T> {
    field: keyof T;
    value: T[keyof T] | null;
    error: string | null;
    type: "UPDATE" | "VALIDATE";
};

export type IUseFormReturnType<T> = {
    getValues: () => T,
    getInputProps: (field: keyof T) => {
        value: T[keyof T],
        error: string | null,
        onChange: (e: React.ChangeEvent<unknown> | DateValue | undefined) => void
    },
    validateField: (field: keyof T) => void,
    validateAll: () => void,
    isValid: () => boolean,
    resetField: (field: keyof T) => void,
    resetAll: () => void
}