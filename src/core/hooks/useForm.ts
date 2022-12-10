import { useRef, useState } from "react";
import { createFormControl } from "../logic/createFormControl";

export function useForm(props = { defaultValues: "" }) {
  const _formControl = useRef<any>();
  const [formState, updateFormState] = useState({
    errors: {},
    defaultValues: props.defaultValues,
  });
  if (!_formControl.current) {
    _formControl.current = {
      ...createFormControl(props, () => {}),
    };
  }

  return _formControl.current;
}
