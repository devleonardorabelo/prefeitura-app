import React from 'react';
import { View, Text } from 'react-native';
import MI from 'react-native-vector-icons/FontAwesome5';
import { TMenuIcon } from '../../types/components';

import styles from './styles';

const MenuIcon: React.FC<TMenuIcon> = ({ icon, title }) => {
  return (
    <View style={styles.container}>
      <MI name={icon} color="#333" size={24} />
      <Text>{title}</Text>
    </View>
  );
};

export default MenuIcon;
