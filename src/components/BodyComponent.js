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
