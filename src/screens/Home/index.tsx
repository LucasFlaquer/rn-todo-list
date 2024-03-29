import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Logo from '../../assets/Logo.svg'
import Plus from '../../assets/plus.svg'
import { DefaultTheme } from '../../themes/DefautTheme';
import { useState } from 'react';
import { TodoItem } from '../../components/TodoItem';
import { NoRecords } from '../../components/NoRecords';

interface Task {
  isCompleted: boolean
  title: string
  id: string
}

export function Home() {
  const [taskTitle, setTaskTitle] = useState('')
  const [tasks, setTasks] = useState<Task[]>([
    { isCompleted: false, title: 'first task', id: '1235' },
    {isCompleted: true, title: 'second task', id: '123'}
  ])

  function toggleTask(id: string) {
    const updatedTasks = tasks.map(task => {
      if (task.id !== id) return task
      return {
        ...task, isCompleted: !task.isCompleted
      }
    })
    setTasks(updatedTasks)
  }

  function removeTask(id: string) {
    const taskToBeDeleted = tasks.find(task => task.id === id)
    if (!taskToBeDeleted) {
      Alert.alert('Erro ao excluir')
      return
    }
    if (!taskToBeDeleted.isCompleted) {
      Alert.alert('Confirmar exclusão', 'Tem certeza que gostaria de remover uma task não concluída?', [
        {
          text: 'Sim',
          onPress: () => setTasks(state => state.filter(task => task.id !== id))
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
    } else {
      setTasks(state => state.filter(task => task.id !== id))
    }    
  }

  function createNewTask() {
    if(taskTitle.length === 0) return
    const newTask: Task = {
      isCompleted: false,
      id: `${Math.random()*100}-${Math.random()*8}`,
      title: taskTitle
    }
    setTasks([...tasks, newTask])
    setTaskTitle('')
  }

  const createdTasks = tasks.length
  const finishedTasks = tasks.filter(task => task.isCompleted).length

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <View style={styles.AddTaskForm}>
          <TextInput
            style={styles.taskInput}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={DefaultTheme.colors.gray300}
            onChangeText={setTaskTitle}
            value={taskTitle}
          />
          <TouchableOpacity style={styles.taskButton} onPress={createNewTask}>
            <Plus />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.tasksInfo}>
          <View style={styles.infoItem}>
            <Text style={styles.infoCreated}>Criadas</Text>
            <Text style={styles.infoAmount}>{createdTasks}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoFinished}>Concluídas</Text>
            <Text style={styles.infoAmount}>{finishedTasks}</Text>
          </View>
        </View>
        <FlatList
          data={tasks}
          ItemSeparatorComponent={()=> <View style={{height: 8}}></View>}
          renderItem={({ item }) => <TodoItem key={item.id} task={item} onDelete={removeTask} toggleComplete={toggleTask} />}
          ListEmptyComponent={<NoRecords />}
        />
      </View>
    </View>
  )
}