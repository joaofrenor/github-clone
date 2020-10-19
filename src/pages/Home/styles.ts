import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import EIcon from 'react-native-vector-icons/EvilIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
EIcon.loadFont();
MIcon.loadFont();

export const ItemContainer = styled(Pressable)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 7px 5px;
`;

export const ItemTitle = styled.Text`
  color: white;
  font-size: 16px;
`;

export const ItemIconBadge = styled.View`
  background-color: green;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const ProblemIcon = styled(EIcon).attrs({
  name: 'exclamation',
  size: 30,
  color: 'white',
})``;

export const NextIcon = styled(MIcon).attrs({
  name: 'arrow-forward-ios',
  size: 18,
})``;

export const Title = styled.Text`
  color: white;
  font-size: 23px;
  font-weight: 600;
`;

export const ContainerBox = styled.View`
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
`;
