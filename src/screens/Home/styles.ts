import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { DefaultTheme } from '../../themes/DefautTheme';

export const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(true),
    flex: 1,
    backgroundColor: DefaultTheme.colors.gray600,
  },
  header: {
    paddingTop: 24,
    paddingHorizontal: 24,
    backgroundColor: DefaultTheme.colors.gray700,
    alignItems: 'center',
    gap: 40
  },
  AddTaskForm: {
    height: 54,
    width: '100%',
    marginBottom: -20,
    gap: 4,
    flexDirection: 'row'
  },
  taskInput: {
    backgroundColor: DefaultTheme.colors.gray500,
    flex: 1,
    borderRadius: 8,
    padding: 16,
    color: DefaultTheme.colors.gray100
  },
  taskButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
    borderRadius: 8,
    backgroundColor: DefaultTheme.colors.blue
  },
  body: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  tasksInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    // borderBottomColor: DefaultTheme.colors.gray400,
    // borderBottomWidth: 2
  },
  infoItem: {
    flexDirection: 'row',
    gap: 8
  },
  infoCreated: {
    fontSize: 15,
    color: DefaultTheme.colors.blue,
    fontWeight: 'bold'
  },
  infoFinished: {
    fontSize: 15,
    color: DefaultTheme.colors.purple,
    fontWeight: 'bold'
  },
  infoAmount: {
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    color: DefaultTheme.colors.gray200,
    backgroundColor: DefaultTheme.colors.gray500,
    borderStyle: 'solid',
    fontWeight: 'bold',
    overflow: 'hidden'
  }
})