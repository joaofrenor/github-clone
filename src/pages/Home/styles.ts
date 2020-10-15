import styled from 'styled-components/native';
import EIcon from 'react-native-vector-icons/EvilIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`

`;

EIcon.loadFont();
MIcon.loadFont();

export const ProblemIcon = styled(EIcon).attrs({
  name: 'exclamation',
  size: 30,
  color: 'white'
})``;

export const NextIcon = styled(MIcon).attrs({
  name: 'arrow-forward-ios',
  size: 18,
})``;

