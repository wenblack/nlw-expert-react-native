import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors, { gray, white } from "tailwindcss/colors";
import { router } from "expo-router";
import { Link } from "expo-router";

type HeaderProps = {
  title: string;
  cartQuantityItems?: number;
  type?: "HomePage" | "Cart";
};

function goToPage(name: string) {
  router.push(`../result/calabresa`);
}

export function Header({ title, cartQuantityItems = 0, type }: HeaderProps) {
  if (type === "Cart") {
    return (
      <View className="flex-row items-center border-b border-slate-300 pb-5 mx-5">
        <View className="flex-1">
          <TextInput
            placeholder={title}
            onSubmitEditing={() => {
              goToPage("");
            }}
          />
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
        <TextInput
          placeholder={title}
          placeholderTextColor={gray[700]}
          onSubmitEditing={() => {
            goToPage("");
          }}
          style={{
            backgroundColor: "white",
            padding: 8,
            marginRight: 16,
            borderColor: "white",
            borderRadius: 8,
          }}
        />
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
