import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Logo from '../../assets/Logo.svg'
import Plus from '../../assets/plus.svg'
import { DefaultTheme } from '../../themes/DefautTheme';
import { useState } from 'react';
import { TodoItem } from '../../components/TodoItem';

interface Task {
  isCompleted: boolean
  title: string
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { isCompleted: false, title: 'first task' },
    {isCompleted: true, title: 'second task'}
  ])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <View style={styles.AddTaskForm}>
          <TextInput
            style={styles.taskInput}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={DefaultTheme.colors.gray300}
          />
          <TouchableOpacity style={styles.taskButton}>
            <Plus />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.tasksInfo}>
          <View style={styles.infoItem}>
            <Text style={styles.infoCreated}>Criadas</Text>
            <Text style={styles.infoAmount}>0</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoFinished}>Concluídas</Text>
            <Text style={styles.infoAmount}>0</Text>
          </View>
        </View>
        <FlatList
          data={tasks}
          ItemSeparatorComponent={()=> <View style={{height: 8}}></View>}
          renderItem={({item}) => <TodoItem task={item} onDelete={()=>{}} toggleComplete={() => {}} />}
        />
      </View>
    </View>
  )
}