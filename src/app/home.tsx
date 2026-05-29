import Item from "@/components/itemProduto";
import { Plus, ShoppingBag } from "lucide-react-native";

import { useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const [items, setItems] = useState<string[]>([]);
  const [itemInput, setInput] = useState<string>("");
  const [itemsCount, setItemsCount] = useState<number>(0);

  //remove um item da lista baseado no seu index.
  const removerItem = (removed: number) => {
    setItems(items.filter((_, index) => index !== removed));
    setItemsCount(itemsCount - 1);
  };

  //adiciona um item ao final da lista desde que nao seja vazio.
  const addItem = () => {
    if (itemInput.trim() == "") {
      if (Platform.OS == "web") {
        alert("É necessario inserir o nome do produto.");
      } else if (Platform.OS == "android") {
        Alert.alert(
          "Erro ao adicionar produto.",
          "Nome do produto deve ser inserido.",
        );
      }
      return;
    }
    setItems([...items, itemInput]);
    setInput("");
    setItemsCount(itemsCount + 1);
  };

  const setItemTexto = (text: string) => {
    setInput(text);
  };
  return (
    <ScrollView>
      <View style={styles.head}>
        <ShoppingBag color="white" size={90} />
        <View>
          <Text style={styles.head_title}>Lista de Compras</Text>
          <Text style={styles.head_subtext}>Organize suas compras</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.content_item}>
          <TextInput
            placeholder="Digite o nome do produto"
            style={styles.input_item}
            value={itemInput}
            onChangeText={(novoTexto) => setItemTexto(novoTexto)}
          ></TextInput>
          <TouchableOpacity style={styles.botao_adicionar} onPress={addItem}>
            <Plus color="white" size={24} />
            <Text style={{ color: "white", fontSize: 24 }}>Adicionar</Text>
          </TouchableOpacity>
          <View style={styles.items_count}>
            <Text style={{ fontSize: 16 }}>Itens na lista</Text>
            <Text
              style={{
                backgroundColor: "black",
                color: "white",
                padding: 4,
                borderRadius: 16,
                fontSize: 16,
              }}
            >
              {itemsCount} itens
            </Text>
          </View>
        </View>

        {items.length > 0 ? (
          <Item listaDeProdutos={items} removerItem={removerItem} />
        ) : (
          <View style={styles.lista_vazia}>
            <Text style={styles.lista_vazia_texto}>Nenhum item na lista.</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  head: {
    justifyContent: "center",
    flexDirection: "row",
    maxHeight: 96,
    width: "100%",
    backgroundColor: "black",
  },
  head_title: {
    fontSize: 32,
    color: "white",
  },
  head_subtext: {
    fontSize: 16,
    color: "white",
  },
  content_item: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: 24,
    width: "80%",
  },
  input_item: {
    width: "100%",
    borderColor: "#808080",
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    marginBottom: 6,
  },
  botao_adicionar: {
    backgroundColor: "black",
    borderRadius: 8,
    padding: 6,
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    marginBottom: 6,
  },
  items_count: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    borderColor: "#808080",
    borderWidth: 2,
    borderRadius: 16,
    padding: 6,
  },
  lista_vazia: {},
  lista_vazia_texto: {
    fontSize: 24,
  },
});
