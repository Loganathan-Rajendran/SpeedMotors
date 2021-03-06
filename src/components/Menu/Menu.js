import React from 'react';
import { Text, View } from 'react-native';
import { DrawerView } from 'react-navigation';

import styles from './styles';

/**
 * Container displayed into the drawer
 * The menu items is generated by DrawerView
 */
const Menu = props => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>HEADER</Text>
    </View>
    <DrawerView.Items {...props} />
  </View>
);

export default Menu;
