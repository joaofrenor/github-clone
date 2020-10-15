import styled from 'styled-components/native';

import EIcon from 'react-native-vector-icons/Entypo';
import FIcon from 'react-native-vector-icons/Feather';
import IIcon from 'react-native-vector-icons/Ionicons';

IIcon.loadFont();
EIcon.loadFont();
FIcon.loadFont();

export const HomeIcon = styled(EIcon).attrs({
  name: 'home',
})``;
export const NotificationIcon = styled(FIcon).attrs({
  name: 'bell',
})``;
export const ExploreIcon = styled(FIcon).attrs({
  name: 'search',
})``;

export const AddRepositoryIcon = styled(IIcon).attrs({
  name: 'add-circle-outline',
  size: 30,
})``;

export const Avatar = styled.Image.attrs({
  source: {uri: 'https://avatars3.githubusercontent.com/u/39568828?v=4'},
})`
  height: 30px;
  width: 30px;
  border-radius: 30px;
`;
