import { StyleSheet } from 'react-native';
import { DefaultTheme } from '../../themes/DefautTheme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultTheme.colors.gray500,
    borderRadius: 8,
    overflow: 'hidden',
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8

  },
  title: {
    flex: 1,
    color: DefaultTheme.colors.gray100,
    fontSize: 14,
  },
  checkedTitle: {
    color: DefaultTheme.colors.gray300,
    textDecorationLine: 'line-through'
  }
})