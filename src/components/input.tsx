import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      multiline
      textAlignVertical="top"
      placeholderTextColor={colors.slate[500]}
      className="h-32 bg-white border shadow-sm border-slate-300 rounded-md px-4 py-3 font-body text-sm "
      {...rest}
    />
  );
}
