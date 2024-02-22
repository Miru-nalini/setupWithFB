import { StyleSheet,Dimensions,Image,Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {Drawer} from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getAuth, signOut } from "firebase/auth";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const _layout = () => {
  const {currentUser} = getAuth();
  function CustomDrawerContent(props:any) {

    const {top,bottom}=useSafeAreaInsets();
    return(
        <View style={{flex:1}}>
            
        <DrawerContentScrollView{...props}
        scrollEnabled
        contentContainerStyle={{backgroundColor:'#dde3ff'}}
        >
        <View style={{padding:20}}>
          <Image source={require('../../assets/images/icon.png')}
          style={{width:100,height:100,alignSelf:'center'}}/>
          <Text style={{
            alignSelf:'center',
            fontWeight:'500',
            fontSize:18,
            paddingTop:10,
            color:'#5363df'
          }} >
            {currentUser?.email}
            </Text>{/**
             * //{currentUser?.email}
             */}
        </View>
       <View style={{backgroundColor:'#fff',paddingTop:10}}>
       <DrawerItemList{...props}/>
       </View>
        </DrawerContentScrollView>
        <TouchableOpacity style={{
          padding:20,
          paddingBottom:20+bottom,
          borderColor:'#dde3fe',
          borderWidth:1,
          alignItems:'center',
          justifyContent:'center'
        }}
        onPress={()=>{
          signOut(getAuth());
          router.replace('/')}
        }
        >
          <Text>Logout</Text>
        </TouchableOpacity>
        </View>
    )
}
  return (
    <GestureHandlerRootView style={styles.flexStyle}>
    <Drawer drawerContent={CustomDrawerContent}
    screenOptions={{headerShown:false,
     drawerHideStatusBarOnOpen:true,
     drawerActiveBackgroundColor:'#5862b5',
     drawerActiveTintColor:'#ffffff',
     drawerLabelStyle:{marginLeft:-20},
     }}>
      <Drawer.Screen name='(vm)'
        options={{title:'home',drawerIcon:(
        {size,color})=>(<Ionicons name='home-outline' size={size} color={color}/>)
      }}/>
      <Drawer.Screen name='add'
      options={{title:'add',drawerIcon:(
        {size,color})=>(<Ionicons name='add-outline' size={size} color={color}/>)
      }} />
      <Drawer.Screen name='settings'
      options={{title:'settings',drawerIcon:(
        {size,color})=>(<Ionicons name='settings-outline' size={size} color={color}/>),
        drawerItemStyle:{
        }
      }} />
    </Drawer>
    </GestureHandlerRootView>

  )
}

export default _layout


const styles = StyleSheet.create({
  flexStyle:{
    flex:1,

  }
})
{/*
<Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>



    
    drawerContent={(props)=>{return(
    <View style={{width:'100%',backgroundColor:'pink',top:250}}
    >
<Text>User email</Text>
<TouchableOpacity>
  <Link replace href={'/'} asChild>
    <Text>logout</Text>
  </Link>
</TouchableOpacity>
    </View>
    )}}
    
    screenOptions={{drawerStyle:{
      justifyContent:'space-between',
      backgroundColor:'grey',
      height:20,
      borderColor:'#000',
      borderWidth:1
    },
    drawerItemStyle:{
      backgroundColor:'yellow',
      height:20
    }}}
*/}