import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import HeaderComponent from './src/components/HeaderComponent';
import FooterComponent from './src/components/FooterComponent';
import BodyComponent from './src/components/BodyComponent';
import { estilos } from './src/styles/StylesText';
export default function App() {
  const imagem = { uri: 'https://img.freepik.com/fotos-premium/imagem-de-desenho-de-contorno-branco-de-gato-simples-fundo-preto-arte-gerada-por-ia_848903-3510.jpg' }


  return (

    <View style={estilos.container}>

<ImageBackground style={estilos.img} source={imagem} >
     
     <HeaderComponent></HeaderComponent>
      {/* <View style={[estilos.header, { backgroundColor: 'gray', width: '100%', height: 110 }]}>
        <Text style={{fontSize: 25,}}>Bem-vindo  Página de Paulo</Text>
      </View> */}
     
{/* // Body */}
<BodyComponent/>

     <FooterComponent/>
      </ImageBackground>
    </View>

  );
}

