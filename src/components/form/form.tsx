import { toast } from "sonner";
import { ActionState } from "./utils/to-action-state";
import { useActionFeedback } from "./hooks/use-actions-feedback";

type FormProps = {
  action: (payload: FormData) => void;
  children: React.ReactNode;
  actionState: ActionState;
  onSuccess?: (actionState: ActionState) => void;
  onError?: (actionState: ActionState) => void;
};

const Form = ({ action, children, actionState, onSuccess, onError }: FormProps) => {
  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      if (actionState.message) toast.success(actionState.message);
      onSuccess?.(actionState);
    },
    onError: ({ actionState }) => {
      if (actionState.message) toast.error(actionState.message);
      onError?.(actionState);
    },
  });

  return (
    <form action={action}  className="space-y-3">
      {children}
    </form>
  );
};
export default Form;
