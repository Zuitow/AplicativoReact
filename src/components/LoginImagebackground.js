import { ImageBackground } from 'react-native';
import { estilos } from '../styles/StylesText';

/* Componentes Básicos */
import FooterComponent from './FooterComponent';
import BodyComponent from './BodyComponent';
import HeaderComponent from './HeaderComponent';

const imagem = { uri: 'https://img.freepik.com/fotos-premium/imagem-de-desenho-de-contorno-branco-de-gato-simples-fundo-preto-arte-gerada-por-ia_848903-3510.jpg' }

export default function LoginImagebackground() {
    return (
<ImageBackground style={estilos.img} source={imagem}>

<HeaderComponent/>
<BodyComponent/>
<FooterComponent/>

</ImageBackground>

    )
}