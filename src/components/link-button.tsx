import { MaterialIcons } from "@expo/vector-icons";
import { Link, LinkProps } from "expo-router";
import { black } from "tailwindcss/colors";
import { Text } from "react-native";

type LinkButtonProps = LinkProps<string> & {
  title: string;
};

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Link
      className=" font-semibold bg-gray-500 text-gray-900 text-center text-base "
      {...rest}
    >
      <MaterialIcons
        name="chevron-left"
        size={28}
        color={black}
      ></MaterialIcons>
      <Text>{title}</Text>
    </Link>
  );
}
