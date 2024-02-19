import { Image, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Link } from "expo-router";

type HeaderProps = {
  title: string;
  cartQuantityItems?: number;
  type?: "HomePage" | "Cart";
};

export function Header({ title, cartQuantityItems = 0, type }: HeaderProps) {
  if (type === "Cart") {
    return (
      <View className="flex-row items-center border-b border-slate-300 pb-5 mx-5">
        <View className="flex-1">
          <Text className=" text-xl text-gray-900 font-heading mt-2">
            {title}
          </Text>
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
    <View className="flex-row items-center border-b border-slate-100 pb-5 mx-5">
      <View className="flex-1">
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
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
