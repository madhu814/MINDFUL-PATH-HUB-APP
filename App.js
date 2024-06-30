import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  useEffect(() => {
    // Your effect code here
    console.log('Component mounted');
    return () => {
      // Cleanup code here (if needed)
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export default App;
