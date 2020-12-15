import React, { useContext } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import PageContext from '../contexts/page';

import { FooterNavigation, PostBlock } from '../components';
import styles from './styles';

const Home: React.FC = () => {
  const { pages, posts } = useContext(PageContext);
  return (
    <>
      <SafeAreaView style={styles.container}>
        {pages?.map((page) => (
          <FlatList
            data={page.content}
            keyExtractor={(): string => String(Math.random())}
            renderItem={({ item }): JSX.Element => <PostBlock data={item} posts={posts} />}
          />
        ))}
      </SafeAreaView>
      <FooterNavigation data={pages} />
    </>
  );
};

export default Home;
