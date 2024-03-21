import React from "react";
import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { router } from "expo-router";

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode;
  type?: "transparent";
};

type ButtonTextProps = {
  children: ReactNode;
  type?: "text-black";
};

type ButtonIconProps = {
  children: ReactNode;
};

function Button({ children, type, ...rest }: ButtonProps) {
  if (type === "transparent") {
    return (
      <TouchableOpacity
        className="h-12  rounded-md items-center justify-center flex-row"
        activeOpacity={0.7}
        onPress={() => router.back()}
        {...rest}
      >
        {children}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      className="h-12 bg-red-600 rounded-md items-center justify-center flex-row"
      activeOpacity={0.7}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

function ButtonText({ children, type }: ButtonTextProps) {
  if (type === "text-black") {
    return (
      <Text className=" text-black font-heading text-base mx-2">
        {children}
      </Text>
    );
  }
  return (
    <Text className=" text-white font-heading text-base mx-2">{children}</Text>
  );
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children;
}

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export { Button };
