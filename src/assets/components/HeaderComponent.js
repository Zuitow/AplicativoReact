import { Text, View, StyleSheet } from 'react-native';
import { estilos } from '../../styles/StylesText';

export default function HeaderComponent() {

    return (


<View style={[estilos.header, { backgroundColor: 'gray', width: '100%', height: 110 }]}>
        <Text style={{fontSize: 25,}}>Bem-vindo  Página de Paulo</Text>
      </View>




    )}

  