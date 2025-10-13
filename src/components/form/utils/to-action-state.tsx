import z, { ZodError } from "zod";


export type ActionState<T=unknown> = {
    message: string;
    timestamp: number;
    status?: 'ERROR' | 'SUCCESS';
    fieldErrors?: Record<string, undefined | string[]>
    payload?: FormData;
    data?: T;
}


export const Empty_Initial_State: ActionState = {
     message: "",
     fieldErrors: {},
     payload: undefined,
     timestamp: Date.now()
};


export const fromErrorToActionState = (error: unknown, FormData?: FormData): ActionState => {
    if(error instanceof ZodError) {
        return {
            status: "ERROR",
            message: "",
            fieldErrors: z.treeifyError(error),
            payload: FormData,
            timestamp: Date.now(),
        };
    }
       else  if(error instanceof Error) {
            return {
                status: 'ERROR',
                message: error.message,
                fieldErrors: {},
                payload: FormData,
                timestamp: Date.now(),
            };
        }else return {
            status: 'ERROR',
            message: "Unknown error occured",
            fieldErrors: {},
            payload: FormData,
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