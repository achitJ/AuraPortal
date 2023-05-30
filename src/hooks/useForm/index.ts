import { DateValue } from "@mantine/dates";
import { Reducer, useReducer } from "react";
import { IStateValues, IFormArgs, IDispatchArgs } from "@/types/hooks/useForm";

export default function useForm<T extends object>({ 
    initialValues,
    validate
}: IFormArgs<T>) {
    const values: T = initialValues;    
    const reducer: Reducer<IStateValues<T>, IDispatchArgs<T>> = (
            state, 
            { field, value, error, type }
        ) => {
        switch (type) {
            case "UPDATE":
                return {
                    ...state,
                    [field]: {
                        value: value as T[keyof T],
                        error: null
                    }
                };
            case "VALIDATE":
                return {
                    ...state,
                    [field]: {
                        value: state[field as string].value,
                        error: error as string
                    }
                };
            default:
                return state;
        }
    };

    const stateValues = 
        (Object.keys(values) as string[]) // Get keys of object as array of strings
        .reduce((acc: IStateValues<T>, key: string) => {
            acc[key] = {
                value: values[key as keyof T],
                error: null
            }
            return acc;
        }, {} as IStateValues<T>);

    const [state, dispatch] = useReducer(reducer, stateValues);

    const resetField = (field: keyof T) => {
        dispatch({
            field,
            value: initialValues[field],
            error: null,
            type: "UPDATE"
        });
    };

    const resetAll = () => {
        (Object.keys(state) as string[])
        .forEach((key: string) => {
            resetField(key as keyof T);
        });
    };


    const validateField = (field: keyof T) => {
        const value = state[field as string].value;
        const error = validate[field](value);

        // console.log("validateField", {field, value, error})

        if(error !== null) {
            dispatch({
                field,
                value: null,
                error,
                type: "VALIDATE"
            });
        }
    };

    const validateAll = () => {
        (Object.keys(state) as string[])
        .forEach((key: string) => {
            validateField(key as keyof T);
        });
    };

    const isValid = () => {
        const nextState = 
            (Object.keys(state) as string[])
            .reduce((acc: IStateValues<T>, key: string) => {
                const value = state[key].value;
                const error = validate[key as keyof T](value);
                const currState = reducer(state, {
                    field: key as keyof T,
                    value,
                    error,
                    type: "VALIDATE"
                });


                acc[key] = currState[key as keyof IStateValues<T>];

                return acc;
            }, {} as IStateValues<T>);

        const isValid: boolean = 
            (Object.keys(nextState) as string[])
            .every((key: string) => {
                return nextState[key as any].error === null;
            });
        
        return isValid;
    };

    const getInputProps = (field: keyof T) => {
        const getValue = (field: keyof T) => {
            const value = state[field as string].value;

            if(value instanceof Date) {
                return value as DateValue;
            }

            return value as string;
        };

        const value: any = getValue(field);
        const error = state[field as string].error;

        return {
            value,
            error,
            onChange: (e: React.ChangeEvent<unknown> | DateValue | undefined) => {
                if (e !== null &&typeof e === 'object' && 'nativeEvent' in e) {
                    const { currentTarget } = e;
                    if(
                        currentTarget instanceof HTMLInputElement ||
                        currentTarget instanceof HTMLTextAreaElement ||
                        currentTarget instanceof HTMLSelectElement
                    ) {
                        dispatch({
                            field,
                            value: currentTarget.value as T[keyof T],
                            error: null,
                            type: "UPDATE"
                        });
                    }
                } else {
                    dispatch({
                        field,
                        value: e as T[keyof T],
                        error: null,
                        type: "UPDATE"
                    });
                }
            } 
        };

    };

    const getValues = () : T => {
        const values = 
            (Object.keys(state) as string[])
            .reduce((acc: T, key: string) => {
                acc[key as keyof T] = state[key as keyof IStateValues<T>].value;
                return acc;
            }, {} as T);

        return values;
    };

    return {
        getValues,
        getInputProps,
        validateField,
        validateAll,
        isValid,
        resetField,
        resetAll
    };
}