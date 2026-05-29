import { useRouter } from "expo-router";
import { Lock, Mail } from "lucide-react-native";
import { useState } from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function Login() {
  const router = useRouter();
  const [emailTexto, setEmailTexto] = useState<string>("");
  const [senhaTexto, setSenhaTexto] = useState<string>("");

  const entrar = () => {
    if (emailTexto.trim() == "" || senhaTexto.trim() == "") {
      if (Platform.OS == "android") {
        Alert.alert(
          "Erro ao entrar em conta",
          "é necessario prencher ambos os campos.",
        );
      } else if (Platform.OS == "web") {
        alert("É necessario prencher ambos os campos.");
      }
    } else {
      router.navigate("/home");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.login_card}>
        <Text style={styles.card_title}>Login</Text>
        <View style={styles.card_input_section}>
          <View style={styles.card_input_view}>
            <Mail color="black" size={24} />
            <TextInput
              placeholder="Digite seu e-mail"
              style={styles.card_input}
              value={emailTexto}
              onChangeText={(value) => setEmailTexto(value)}
            ></TextInput>
          </View>
          <View style={styles.card_input_view}>
            <Lock color="black" size={24} />
            <TextInput
              placeholder="Digite sua senha"
              style={styles.card_input}
              value={senhaTexto}
              onChangeText={(value) => setSenhaTexto(value)}
              secureTextEntry={true}
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.card_botao} onPress={() => entrar()}>
          <Text style={styles.card_botao_texto}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  login_card: {
    width: "70%",
    maxWidth: 500,
    height: "auto",
    aspectRatio: 3 / 4,
    backgroundColor: "white",
    borderRadius: 32,
    alignItems: "center",
    paddingVertical: 12,
  },
  card_title: {
    color: "black",
    textAlign: "center",
    fontSize: 32,
  },
  card_input_section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card_input_view: {
    flexDirection: "row",
    marginBottom: "4%",
    borderColor: "#aaaaaa",
    borderWidth: 1,
    borderRadius: 16,
    padding: 4,
  },
  card_input: {
    backgroundColor: "white",
    fontSize: 16,
    padding: 4,
  },
  card_botao: {
    backgroundColor: "black",
    width: "80%",
    padding: 4,
    borderRadius: 16,
  },
  card_botao_texto: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
