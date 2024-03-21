import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors, { gray } from "tailwindcss/colors";
import { Link } from "expo-router";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

type HeaderProps = {
  title: string;
  cartQuantityItems?: number;
  type?: "HomePage" | "Cart";
};

export function Header({ title, cartQuantityItems = 0, type }: HeaderProps) {
  const [inputValue, setInputValue] = useState("");

  if (type === "Cart") {
    return (
      <View className="flex-row items-center border-b border-slate-300 pb-5 mx-5">
        <View className="flex-1">
          <Text className="text-slate-700 text-xl font-subtitle">{title}</Text>
        </View>
        {cartQuantityItems > 0 && (
          <Link href="/cart" asChild>
            <TouchableOpacity className="relative" activeOpacity={0.7}>
              <View className="bg-white w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
                <Text className="text-red-800 font-bold text-xs">
                  {cartQuantityItems}
                </Text>
              </View>

              <Feather name="shopping-bag" color={colors.white} size={24} />
            </TouchableOpacity>
          </Link>
        )}
      </View>
    );
  }

  return (
    <View className="flex-row items-center  border-b border-slate-100 pb-3 mx-5">
      <View className=" bg-white p-2 rounded-md flex-1 flex-row  justify-between">
        <TextInput
          placeholder={title}
          onChangeText={(value) => setInputValue(value)}
          placeholderTextColor={gray[700]}
        />
        <Link href={`/result/${inputValue}`}>
          <MaterialIcons name="send" size={24} color="black" />
        </Link>
      </View>
      {cartQuantityItems > 0 && (
        <Link href="/cart" asChild className="ml-3 mb-2">
          <TouchableOpacity className="relative" activeOpacity={0.7}>
            <View className="bg-white w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
              <Text className="text-red-800 font-bold text-xs">
                {cartQuantityItems}
              </Text>
            </View>

            <Feather name="shopping-bag" color={colors.white} size={24} />
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
}
