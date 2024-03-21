import { FlatList, Text } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Product } from "@/components/product";

import { useCartStore } from "@/stores/cart-store";

import { PRODUCTS } from "@/utils/data/products";

export default function Result() {
  const { name } = useLocalSearchParams();
  let nameConverted = String(name);
  const productFilter = PRODUCTS.filter((product) =>
    product.title.includes(nameConverted)
  );

  return (
    <FlatList
      data={productFilter}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Product type="Home" data={item} />}
      className="max-h-10 mt-5"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
    />
  );
}
