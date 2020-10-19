import styled from 'styled-components/native';

import MIcon from 'react-native-vector-icons/MaterialIcons';

export const NextIcon = styled(MIcon).attrs({
  name: 'arrow-forward-ios',
  size: 18,
})``;

export const Avatar = styled.Image`
  height: 35px;
  width: 35px;
  border-radius: 35px;
`;

export const RepositoryContainer = styled.View`
  width: 100%;
  padding: 12px;
  margin-bottom: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RepositoryUserName = styled.Text`
  color: white;
  opacity: 0.8;
`;
export const RepositoryName = styled.Text`
  color: white;
  font-size: 18px;
`;
