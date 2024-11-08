//useForm.js
import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const resetForm = () => {
    setFormState(initialForm);
  };

  return {
    //states
    ...formState,
    formState,
    //change functions
    onInputChange,
    resetForm,
  };
};
