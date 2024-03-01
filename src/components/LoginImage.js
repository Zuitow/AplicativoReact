import { Image, View, TouchableOpacity } from "react-native";
import { estilos } from "../styles/StylesText";


const imagem2 = {
    uri: "https://images.vexels.com/media/users/3/272047/isolated/preview/2e1f0b20d5863bd3531aae733df2b6ba-a-cone-de-gato-preto-de-desenho-animado.png",
  };
export default function LoginImage() {

    return (

        <View style={{ backgroundColor: "gray", width: "100%", height: 80 }}>
      <TouchableOpacity onPress={mensagem}>
        <Image source={imagem2} style={estilos.img2} />
      </TouchableOpacity>
    </View>

    )

}