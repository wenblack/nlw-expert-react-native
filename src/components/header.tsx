import { TextInput, Text, View, TouchableOpacity, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors, { gray } from "tailwindcss/colors";
import { Link, router } from "expo-router";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

type HeaderProps = {
  title: string;
  cartQuantityItems?: number;
  type?: "HomePage" | "Cart" | "ResultPage";
};

export function Header({ title, cartQuantityItems = 0, type }: HeaderProps) {
  const [inputValue, setInputValue] = useState("");

  function goToPage() {
    if (inputValue === "" || inputValue === undefined) {
      Alert.alert("Aviso", "Por favor informe algo para pesquisar");
    } else {
      router.push(`/result/${inputValue}`);
    }
  }

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

  if (type === "ResultPage") {
    return (
      <View className="flex-row items-center  mx-5">
        <Link href={"/"}>
          <MaterialIcons name="arrow-back-ios" size={28} color={"white"} />
        </Link>
        <View className=" bg-white p-2 rounded-md flex-1 flex-row  justify-between">
          <MaterialIcons name="search" size={28} color={"gray"}></MaterialIcons>
          <TextInput
            className="w-[90%] pl-1"
            placeholder={title}
            onChangeText={(value) => setInputValue(value)}
            onSubmitEditing={() => {
              goToPage();
            }}
            placeholderTextColor={gray[700]}
          />
        </View>
        {cartQuantityItems > 0 && (
          <Link href="/cart" asChild className="ml-3 mb-2">
            <TouchableOpacity className="relative" activeOpacity={0.7}>
              <View className="bg-white w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
                <Text className="text-red-800 font-bold text-xs">
                  {cartQuantityItems}
                </Text>
              </View>

              <Feather name="shopping-bag" color={"white"} size={24} />
            </TouchableOpacity>
          </Link>
        )}
      </View>
    );
  }

  return (
    <View className="flex-row items-center  mx-5">
      <View className=" bg-white p-2 rounded-md flex-1 flex-row  justify-between">
        <MaterialIcons name="search" size={28} color={"gray"}></MaterialIcons>
        <TextInput
          className="w-[90%] pl-1"
          placeholder={title}
          onChangeText={(value) => setInputValue(value)}
          onSubmitEditing={() => {
            goToPage();
          }}
          placeholderTextColor={gray[700]}
        />
      </View>
      {cartQuantityItems > 0 && (
        <Link href="/cart" asChild className="ml-3 mb-2">
          <TouchableOpacity className="relative" activeOpacity={0.7}>
            <View className="bg-white w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
              <Text className="text-red-800 font-bold text-xs">
                {cartQuantityItems}
              </Text>
            </View>

            <Feather name="shopping-bag" color={"white"} size={24} />
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
}
