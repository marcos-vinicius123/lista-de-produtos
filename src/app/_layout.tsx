import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs initialRouteName="login">
      <Tabs.Screen name='login' 
      options={{
        headerShown: false,
        tabBarStyle: {display : 'none'},
        href: null
      }}

      />
      <Tabs.Screen name='home'
      options={{
        headerShown: false,
        tabBarStyle: {display: 'none'},
        href: null
      }}
      />  
      {/* <Tabs.Screen name='tela2' 
      options={{
        tabBarIcon: ({size}) => <House size={25}/>
      }}
      />
      <Tabs.Screen name='novaTarefa' 
      options={{
        tabBarIcon: ({size}) => <PencilLine size={25}/>
      }}
      />
      <Tabs.Screen name='teste' 
      options={{
        tabBarIcon: (size) => <User size={25}/>
      }}
      /> */}

    </Tabs>
  );
}
