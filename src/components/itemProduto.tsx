import { Trash2 } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type listaDeItens = {
  listaDeProdutos: string[];
  removerItem: (index: number) => void;
};

export default function Item({ listaDeProdutos, removerItem }: listaDeItens) {
  return (
    <View style={styles.items_list}>
      <View>
        {listaDeProdutos.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.item_text}>{item}</Text>
            <TouchableOpacity onPress={() => removerItem(index)}>
              <Trash2 color="black" size={24} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  items_list: {
    // borderColor: "#808080",
    // borderWidth: 2,
    // borderRadius: 8,
    width: "80%",
    overflow: "hidden",
    marginTop: 12,
  },
  item: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: "#ccc",
    borderRightColor: "#ccc",
    backgroundColor: "white",
    marginBottom: 4,
  },
  item_text: {
    color: "black",
    fontSize: 18,
  },
});
