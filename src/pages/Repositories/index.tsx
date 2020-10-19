import AsyncStorage from '@react-native-community/async-storage';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import api from '../../services/api';
import {NextIcon} from '../Home/styles';
import {
  Avatar,
  RepositoryContainer,
  RepositoryName,
  RepositoryUserName,
} from './styles';

// import { Container } from './styles';

interface Repository {
  id: string;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const Repositories: React.FC = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [repositories, setRepositories] = React.useState<Repository[]>([]);
  const [end, setEnd] = React.useState(false);

  const {colors} = useTheme();

  async function getRepositories() {
    const response = await api.get(`/repos?page=${page}&per_page=10`);
    setRepositories(response.data);
  }

  React.useEffect(() => {
    getRepositories();
  }, []);

  const renderFooter = () => loading && <ActivityIndicator />;

  const loadMore = React.useCallback(async () => {
    if (end) return;
    setPage(page + 1);
    setLoading(true);
    const response = await api.get(`/repos?page=${page}&per_page=10`);
    if (response.data.lenght === 0) {
      setEnd(true);
    }
    setLoading(false);
    console.log(response);
    setRepositories((prevState) => [...prevState, ...response.data]);
    console.log(repositories);
  }, [page]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    getRepositories();
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <FlatList
      contentContainerStyle={{
        padding: 10,
        paddingHorizontal: 0,
      }}
      contentInsetAdjustmentBehavior="automatic"
      data={repositories}
      renderItem={({item}) => (
        <RepositoryContainer
          style={{
            backgroundColor: colors.border,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Avatar source={{uri: item.owner.avatar_url}} />
            <View style={{paddingHorizontal: 10}}>
              <RepositoryUserName>{item.owner.login}</RepositoryUserName>
              <RepositoryName>{item.name}</RepositoryName>
            </View>
          </View>
          <NextIcon color={colors.text} style={{opacity: 0.3}} />
        </RepositoryContainer>
      )}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={renderFooter}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default Repositories;
