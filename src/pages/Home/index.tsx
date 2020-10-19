import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  ContainerBox,
  ItemContainer,
  ItemIconBadge,
  ItemTitle,
  NextIcon,
  ProblemIcon,
  Title,
} from './styles';

function Items(props: {title: string; color: string}) {
  const {colors} = useTheme();
  const navigation = useNavigation();
  return (
    <ItemContainer onPress={() => navigation.navigate('Repositories')}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ItemIconBadge style={{backgroundColor: props.color}}>
          <ProblemIcon />
        </ItemIconBadge>
        <ItemTitle>{props.title}</ItemTitle>
      </View>
      <NextIcon color={colors.text} style={{opacity: 0.3}} />
    </ItemContainer>
  );
}

const Home: React.FC = () => {
  const {colors} = useTheme();
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        paddingTop: 40,
        padding: 15,
      }}>
      <View>
        <Title>Meu Trabalho</Title>
        <ContainerBox
          style={{
            backgroundColor: colors.card,
          }}>
          <Items color="red" title="Problemas" />
          <Items color="green" title="Pull Requests" />
          <Items color="purple" title="Repositórios" />
          <Items color="blue" title="Organizações" />
        </ContainerBox>
      </View>
      <View style={{marginTop: 20}}>
        <Title>Favoritos</Title>
        <ContainerBox
          style={{
            backgroundColor: colors.card,
            width: '100%',
            height: 200,
            padding: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: colors.text, fontSize: 17}}>
            Adicione repositorios favoritos aqui para ter acesso rápido a
            qualquer momento, sem ter que pesquisar
          </Text>
        </ContainerBox>
      </View>
    </ScrollView>
  );
};
export default Home;
