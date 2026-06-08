import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type ConfirmOptions = {
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  destructive?: boolean;
};

type ConfirmState = ConfirmOptions & {
  open: boolean;
  resolve?: (value: boolean) => void;
};

let externalSetState: ((s: ConfirmState) => void) | null = null;

export function confirmAction(options: ConfirmOptions = {}): Promise<boolean> {
  return new Promise((resolve) => {
    if (!externalSetState) {
      resolve(window.confirm(options.description || options.title || "Are you sure?"));
      return;
    }
    externalSetState({
      open: true,
      title: options.title ?? "Are you sure?",
      description: options.description ?? "This action cannot be undone.",
      confirmText: options.confirmText ?? "Delete",
      cancelText: options.cancelText ?? "Cancel",
      destructive: options.destructive ?? true,
      resolve,
    });
  });
}

export const ConfirmDialogHost = () => {
  const [state, setState] = useState<ConfirmState>({ open: false });

  useEffect(() => {
    externalSetState = setState;
    return () => {
      externalSetState = null;
    };
  }, []);

  const handle = (value: boolean) => {
    state.resolve?.(value);
    setState((s) => ({ ...s, open: false, resolve: undefined }));
  };

  return (
    <AlertDialog open={state.open} onOpenChange={(o) => !o && handle(false)}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{state.title}</AlertDialogTitle>
          <AlertDialogDescription>{state.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => handle(false)}>{state.cancelText}</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handle(true)}
            className={state.destructive ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : ""}
          >
            {state.confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
