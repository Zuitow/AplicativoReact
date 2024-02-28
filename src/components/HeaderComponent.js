import { Text, View, StyleSheet } from "react-native";
import { estilos } from "../styles/StylesText";
import LoginText from "./LoginText";

export default function HeaderComponent() {
  return (
    <View
      style={estilos.header}>
      <Text style={{ fontSize: 25 }}>Bem-vindo Página de Paulo</Text>
    </View>
  );
}
