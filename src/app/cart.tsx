import { useState } from "react";
import { router, useNavigation } from "expo-router";
import { Text, View, ScrollView, Alert, Linking } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { ProductCartProps, useCartStore } from "@/stores/cart-store";

import { formatCurrency } from "@/utils/functions/format-currency";

import { Header } from "@/components/header";
import { Product } from "@/components/product";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";

const PHONE_NUMBER = process.env.EXPO_PUBLIC_PHONE_NUMBER;

export default function Cart() {
  const [address, setAddress] = useState("");
  const cartStore = useCartStore();
  const navigation = useNavigation();

  const total = formatCurrency(
    cartStore.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  );

  function handleProductRemove(product: ProductCartProps) {
    Alert.alert("Remover", `Desejar remover ${product.title} do carrinho?`, [
      {
        text: "Cancelar",
      },
      {
        text: "Remover",
        onPress: () => cartStore.remove(product.id),
      },
    ]);
  }

  function handleOrder() {
    if (address.trim().length === 0) {
      return Alert.alert("Pedido", "Informe os dados da entrega.");
    }

    const products = cartStore.products
      .map((product) => `\n ${product.quantity}x ${product.title}`)
      .join("");

    const message = `
    🍔 NOVO PEDIDO
    \n Entregar em: ${address}

    ${products}

    \n Valor total: ${total}
    `;

    Linking.openURL(
      `http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`
    );

    cartStore.clear();
    navigation.goBack();
  }

  if (cartStore.products.length === 0) {
    return (
      <View className="flex-1 items-center justify-between pt-8 bg-white">
        <Header type="Cart" title="Seu carrinho" />
        <Text className="font-body text-slate-400 text-center my-8">
          Seu carrinho está vazio 😭
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
    <View className="flex-1 pt-8 bg-white">
      <Header type="Cart" title="Seu carrinho" />
      <KeyboardAwareScrollView>
        <ScrollView>
          <View className="p-5 flex-1">
            <View className="border-b border-slate-100 border-opacity-70">
              {cartStore.products.map((product) => (
                <Product
                  type="Cart"
                  key={product.id}
                  data={product}
                  onPress={() => handleProductRemove(product)}
                />
              ))}
            </View>
            <View className="flex-row gap-2 items-center mt-5 mb-4">
              <Text className="text-slate-700 text-xl font-subtitle">
                Total:
              </Text>
              <Text className="text-red-600 text-2xl font-heading">
                {total}
              </Text>
            </View>
            <Input
              placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..."
              onChangeText={setAddress}
              blurOnSubmit={true}
              onSubmitEditing={handleOrder}
              returnKeyType="next"
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>

      <View className="p-5 gap-5">
        <Button onPress={handleOrder}>
          <Button.Text>Enviar pedido</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} color={"white"} />
          </Button.Icon>
        </Button>

        <Button type="transparent">
          <Button.Icon>
            <Feather name="chevron-left" size={20} color={"black"} />
          </Button.Icon>

          <Button.Text type="text-black">Voltar ao cardápio</Button.Text>
        </Button>
      </View>
    </View>
  );
}
