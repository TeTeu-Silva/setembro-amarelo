import React from 'react';
import { View, Text, Image, ScrollView,StyleSheet } from 'react-native';
export default function Cartilha() {
return (
  <ScrollView>
<Text>
<Image source={require('../assets/sa5.jpg')} />
<b>Olá Estudantes da Unibra!</b><br/>
<b>Aqui vai algumas informações para você, ou para ajudar alguem próximo a respeito de transtornos psicológicos.</b>

<b>você sabia que praticamente todas as pessoas que cometeram suicidio apresentavam pelo menos um transtorno psiquiátrico???</b><br/>
Pessoas com depressão, transtorno bipolar, transtornos relacionados ao uso de drogas lícitas ou ilícitas (álcool, maconha, crack e cocaína, por exemplo), esquizofrenia e transtorno de personalidade fazem parte do grupo de risco. Dessa forma a identificação e o tratamento dos transtornos mentais pelo médico psiquiatra estão entre os principais fatores de proteção na prevenção do suicídio.

<b><br/>HISTÓRICO PESSOAL: </b>
<br/>Tentativa prévia é o principal fator de risco para o suicídio. Indivíduos que já tentaram o suicídio tem de cinco a seis vezes mais chances de tentar novamente. <br/>

<b>IDEAÇÃO SUICIDA: </b><br/>
Comentários que demonstrem desespero, desesperança e desamparo podem ser manifestação de uma ideação suicida. Atenção a expressões como "eu desejaria não ter nascido", "caso não nos encontremos de novo", "eu preferia estar morto" - são sinais de alerta!<br/>

<b>FATORES ESTRESSORES CRÔNICOS E RECENTES: </b><br/>
Eventos estressores significativos, como separação conjugal, migração ou perda de uma pessoa próxima, além daqueles que levem a prejuízo econômico e social, como falência e perda do emprego, estão associados ao surgimento de pensamentos suicidas.

</Text>
</ScrollView>
)
}