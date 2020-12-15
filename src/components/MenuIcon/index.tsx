import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import FA from 'react-native-vector-icons/FontAwesome5';
import { TMenuIcon } from '../../types/components';

import styles from './styles';

const MenuIcon: React.FC<TMenuIcon> = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FA name={icon} color="#333" size={24} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuIcon;
