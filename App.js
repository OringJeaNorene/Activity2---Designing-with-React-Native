import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('./assets/download.png')} style={styles.logo} />
        <Text style={styles.headerText}>HELLO!</Text>
      </View>

      {/* Balance */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>AVAILABLE BALANCE</Text>
        <Text style={styles.balanceAmount}>$500.00</Text>
      </View>

      {/* Actions */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('./assets/send.png')} style={styles.icon} />
          <Text>Send Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('./assets/pay.png')} style={styles.icon} />
          <Text>Pay Bills</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('./assets/add.jpeg')} style={styles.icon} />
          <Text>Add Money</Text>
        </TouchableOpacity>
      </View>
      

      {/* Recent Transactions */}
      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionsHeader}>Recent Transactions</Text>
        {/* Render a list of recent transactions here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  headerText: {
    fontSize: 24,
    marginLeft: 12,
    fontWeight: 'bold',
  },
  balanceContainer: {
    marginTop: 20,
  },
  balanceText: {
    fontSize: 18,
    color: '#333',
  },
  balanceAmount: {
    fontSize: 36,
    color: '#333',
    fontWeight: 'bold',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  icon: {
    width: 48,
    height: 48,
  },
  transactionsContainer: {
    marginTop: 20,
  },
  transactionsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;












