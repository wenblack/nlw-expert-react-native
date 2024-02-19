import { forwardRef } from "react";
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type ProductDataProps = {
  title: string;
  description: string;
  thumbnail: ImageProps;
  quantity?: number;
};

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps;
  type?: "Home" | "Cart";
};

export const Product = forwardRef<TouchableOpacity, ProductProps>(
  ({ data, type, ...rest }, ref) => {
    if (type === "Cart") {
      return (
        <TouchableOpacity
          ref={ref}
          className="w-full flex-row items-center pb-4"
          {...rest}
        >
          <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />

          <View className="flex-1 ml-3">
            <View className="flex-row items-center">
              <Text className=" font-subtitle text-red-700 text-base flex-1">
                {data.title}
              </Text>

              {data.quantity && (
                <Text className="text-slate-500 font-subtitle text-sm">
                  x {data.quantity}
                </Text>
              )}
            </View>

            <Text className="text-slate-600 text-xs leading-5 mt-0.5">
              {data.description}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        ref={ref}
        className="w-full flex-row items-center pb-4"
        {...rest}
      >
        <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />

        <View className="flex-1 ml-3">
          <View className="flex-row items-center">
            <Text className="text-slate-100 font-subtitle text-base flex-1">
              {data.title}
            </Text>

            {data.quantity && (
              <Text className="text-slate-200 font-subtitle text-sm">
                x {data.quantity}
              </Text>
            )}
          </View>

          <Text className="text-slate-200 text-xs leading-5 mt-0.5">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);
