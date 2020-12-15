import React, { useContext } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import PageContext from '../contexts/page';

import { FooterNavigation, PostBlock } from '../components';
import styles from './styles';

const Home: React.FC = () => {
  const { pages, posts, selectedPage, selectPage } = useContext(PageContext);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={selectedPage?.content}
          keyExtractor={(): string => String(Math.random())}
          renderItem={({ item }): JSX.Element => <PostBlock data={item} posts={posts} />}
        />
      </SafeAreaView>
      <FooterNavigation data={pages} onPress={selectPage} />
    </>
  );
};

export default Home;
