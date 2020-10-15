import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NextIcon, ProblemIcon} from './styles';

function Items(props: {title: string}) {
  const {colors} = useTheme();
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Repositories')}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 7,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'green',
            width: 35,
            height: 35,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <ProblemIcon />
        </View>
        <Text style={{color: 'white', fontSize: 16}}>{props.title}</Text>
      </View>
      <NextIcon color={colors.text} style={{opacity: 0.3}} />
    </Pressable>
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
        <Text style={{color: colors.text, fontSize: 23, fontWeight: '600'}}>
          Meu Trabalho
        </Text>
        <View
          style={{
            backgroundColor: colors.card,
            width: '100%',
            marginTop: 10,
            borderRadius: 10,
            padding: 10,
          }}>
          <Items title="Problemas" />
          <Items title="Pull Requests" />
          <Items title="Repositórios" />
          <Items title="Organizações" />
        </View>
      </View>
      <View>
        <Text style={{color: colors.text, fontSize: 23, fontWeight: '600'}}>
          Meu Trabalho
        </Text>
        <View
          style={{
            backgroundColor: colors.card,
            width: '100%',
            marginTop: 10,
            borderRadius: 10,
            padding: 10,
          }}>
          <Items title="Problemas" />
          <Items title="Pull Requests" />
          <Items title="Repositórios" />
          <Items title="Organizações" />
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
