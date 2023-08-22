import { useState } from 'react';
import { Text, View } from 'react-native';

// Component
import { Button } from './components/Button';
import { Input } from './components/Input';
import { styles } from './styles';


export default function App() {
  const [name, setName] = useState('');

  function handleNameByConsole() {
    console.log("Name: ", name)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Input 
        placeholder='Digite algo' 
        onChangeText={(text) => setName(text)} 
      />

      <Button 
        activeOpacity={0.75} 
        onPress={handleNameByConsole}
        text="Adicionar Name"
      />
    </View>
  );
}

