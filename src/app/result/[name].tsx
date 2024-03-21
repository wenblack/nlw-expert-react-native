import { FlatList, View, Text } from "react-native";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Product } from "@/components/product";
import { PRODUCTS } from "@/utils/data/products";
import { Header } from "@/components/header";
import { useCartStore } from "@/stores/cart-store";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";

export default function Result() {
  const cartStore = useCartStore();
  const cartQuantityItems = cartStore.products.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const { name } = useLocalSearchParams();
  let nameConverted = String(name).toLowerCase();
  const productFilter = PRODUCTS.filter((product) =>
    product.title.includes(String(nameConverted))
  );

  if (productFilter.length === 0) {
    return (
      <View className="flex-1 items-center justify-between pt-8 bg-white">
        <Header type="ResultPage" title="Seu carrinho" />
        <Text className="font-body text-slate-400 text-center my-8">
          Nenhum produto encontrado 😭
        </Text>
        <View className="w-[90%] mb-8">
          <Button onPress={() => router.push("/")}>
            <Button.Icon>
              <Feather name="chevron-left" size={20} color={"white"} />
            </Button.Icon>
            <Button.Text>Voltar ao Cardápio</Button.Text>
          </Button>
        </View>
      </View>
    );
  }

  return (
    <View className="h-full w-full">
      <Header
        type="ResultPage"
        cartQuantityItems={cartQuantityItems}
        title="Buscar Produtos"
      ></Header>
      <View className="w-[90%] mt-4 self-center border-b pb-1 border-blue-100">
        <Text className="text-slate-50 text-xl font-subtitle">
          Encontramos{" "}
          {productFilter.length === 1
            ? `${productFilter.length} Produto`
            : `${productFilter.length} Produtos`}
        </Text>
      </View>
      <FlatList
        data={productFilter}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        className="mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
}
