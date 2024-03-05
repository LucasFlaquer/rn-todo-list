import { Text, View } from 'react-native';
import Clipboard from '../../assets/Clipboard.svg'
import { styles } from './styles';

export function NoRecords() {
  return (
    <View style={styles.container}>
      <Clipboard />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.description}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}