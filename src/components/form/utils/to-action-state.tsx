import z, { ZodError } from "zod";


export type ActionState<T=unknown> = {
    message: string;
    timestamp: number;
    status?: 'ERROR' | 'SUCCESS';
    fieldErrors?: Record<string, undefined | string[]>
    payload?: FormData;
    data?: T;
}


export const Initial_Empty_State: ActionState = {
     message: "",
     fieldErrors: {},
     payload: undefined,
     timestamp: Date.now()
};


export const fromErrorToActionState = (error: unknown, formData?: FormData): ActionState => {
    if(error instanceof ZodError) {
        return {
            status: "ERROR",
            message: "",
            fieldErrors: error.flatten().fieldErrors,
            payload: formData,
            timestamp: Date.now(),
        };
    }
       else  if(error instanceof Error) {
            return {
                status: 'ERROR',
                message: error.message,
                fieldErrors: {},
                payload: formData,
                timestamp: Date.now(),
            };
        }else return {
            status: 'ERROR',
            message: "Unknown error occured",
            fieldErrors: {},
            payload: formData,
            timestamp: Date.now(),
        }
};




export const toActionState = (status: ActionState['status'], message: string, formData?: FormData, data?: unknown): ActionState => {
    return {
        status,
        message,
        payload: formData,
        fieldErrors: {},
        timestamp: Date.now(),
        data

    }
}