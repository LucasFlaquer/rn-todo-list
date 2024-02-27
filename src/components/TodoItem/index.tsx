import { Text, TouchableOpacity, View } from 'react-native'
import UnCheckedMark from '../../assets/unchecked.svg'
import CheckedMark from '../../assets/check.svg'
import Trash from '../../assets/trash.svg'
import { styles } from './styles'
interface Props {
  task: {
    title: string
    isCompleted: boolean
  }
  toggleComplete: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({task}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {task.isCompleted ? (
          <CheckedMark />
        ): (
            <UnCheckedMark />
        )}
      </TouchableOpacity>
      <Text style={{ ...styles.title, ...(task.isCompleted && styles.checkedTitle) }}>
        {task.title}
      </Text>
      <TouchableOpacity>
        <Trash/>
      </TouchableOpacity>
    </View>
  )
}