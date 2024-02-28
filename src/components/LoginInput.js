import { TextInput, View } from "react-native";
import { estilos } from "../styles/StylesText";

export default function LoginInput() {
    return (
        <View>
      <TextInput style={estilos.inputName} placeholder="Digite seu Email" />
      <TextInput
        style={estilos.inputName}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        keyboardType="numeric"/>
    </View>
    )
}