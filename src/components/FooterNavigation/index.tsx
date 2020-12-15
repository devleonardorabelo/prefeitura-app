import React from 'react';
import { FlatList, View } from 'react-native';
import { Page } from '../../types';
import MenuIcon from '../MenuIcon';

import styles from './styles';

const FooterNavigation = ({ data }: { data: Page[] | null }): JSX.Element => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }): JSX.Element => <MenuIcon icon={item.icon} title={item.title} />}
        keyExtractor={(): string => String(Math.random() * 100)}
      />
    </View>
  );
};

export default FooterNavigation;
