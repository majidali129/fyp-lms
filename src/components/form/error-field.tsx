import type { ActionState } from "./utils/to-action-state";

type ErrorFieldProps = {
  actionState: ActionState;
  name: string;
};
export const ErrorField = ({ actionState, name }: ErrorFieldProps) => {
  return <span className="text-sm text-red-500">{actionState.fieldErrors?.[name]}</span>;
};
