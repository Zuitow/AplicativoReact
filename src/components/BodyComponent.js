import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { estilos } from "../styles/StylesText";
import LoginText from "./LoginText";
import LogButton from "./LogButton";
import LoginInput from "./LoginInput";
const imagem2 = {
  uri: "https://images.vexels.com/media/users/3/272047/isolated/preview/2e1f0b20d5863bd3531aae733df2b6ba-a-cone-de-gato-preto-de-desenho-animado.png",
};

pressButton = () => {
  alert("Eu não funciono *carinha triste*");
};

mensagem = () => {
  alert("Miau");
};

export default function BodyComponent() {
  return (
    <View style={estilos.secondaryContainer}>
     <LoginText/>
     <LoginInput/>
      <LogButton/>

      
    </View>
  );
}
