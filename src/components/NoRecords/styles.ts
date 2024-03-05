import { StyleSheet } from 'react-native';
import { DefaultTheme } from '../../themes/DefautTheme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: DefaultTheme.colors.gray400,
    borderTopWidth: 1,
    paddingTop: 48
  },
  title: {
    marginTop: 16,
    color: DefaultTheme.colors.gray300,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 8
  },
  description: {
    color: DefaultTheme.colors.gray300,
    fontSize: 14
  }
})