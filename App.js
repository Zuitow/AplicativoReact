import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

// Componente de Estilização 
import { estilos } from './src/styles/StylesText';
// Chamar a Página Login 
import Login from './src/pages/Login';
export default function App() {
  const imagem = { uri: 'https://img.freepik.com/fotos-premium/imagem-de-desenho-de-contorno-branco-de-gato-simples-fundo-preto-arte-gerada-por-ia_848903-3510.jpg' }


  return (

    <View style={estilos.container}>

<Login/>

    </View>

  );
}

