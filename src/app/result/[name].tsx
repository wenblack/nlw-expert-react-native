import { FlatList, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Product } from "@/components/product";
import { PRODUCTS } from "@/utils/data/products";

export default function Result() {
  const { name } = useLocalSearchParams();
  let nameConverted = String(name).toLowerCase();
  const productFilter = PRODUCTS.filter((product) =>
    product.title.includes(String(nameConverted))
  );

  return (
    <View className="h-full">
      <FlatList
        data={productFilter}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Product type="Home" data={item} />}
        className="mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
}
