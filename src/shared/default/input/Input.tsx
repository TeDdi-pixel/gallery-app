import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
type TypeInputProps = {
  type: string;
  label: string;
  register: UseFormRegister<any>;
  name: string;
};
const Input = ({ type, label, register, name }: TypeInputProps) => {
  return (
    <TextField
      fullWidth
      style={{ color: "white" }}
      {...register(name)}
      variant="outlined"
      className="signUp__form-input"
      label={label}
      type={type}
    />
  );
};

export default Input;
