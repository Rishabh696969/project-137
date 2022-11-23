import React, {Component} from "react"
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Alert,
    SafeAreaView,
}from "react-native"
import {ListItem}from "react-native-elements0"
import axios from "axios"

export default class HomeScreen extends Component{
    constructer(props){
        super(props)
        this.state = {
            ListData:[],
            url:""
        }
    }

    componentDidMount(){
        this.getPlanets()
    }

    getPlanets = ()=>{
        const {url} = this.state
        axios.get()
        .then(response=>{
            return this.setState({
                ListData:response.data.Data
            })
        })
        .catch(error=>{
            Alert(error.message)
        })
         
    }

    renderItem = ({item,index})=>(
        <ListItem
        key = {index}
        title = {`planet:${item.name}`}
        subtitle = {`distance from earth:${item.distance_from_earth}`}
        titlestyles = {styles.title}
        containterstyle = {styles.listContainter}
        bottomdivider
        OnPress = {()=>
        this.props.navigation.navigate("details",{planet_name:item.name})
    }
    />
    )


keyExtractor = (item,index)=>index.tostring()
render(){
    const{ListData} = this.state
    if(ListData.length === 0){
return(
    <View style = {styles.emptyContainer}>
        <Text>Loading</Text>
    </View>
)
    }

    return(
      <View style = {styles.Container}>
        <SafeAreaView/>
        <View style = {styles.upperContainer}>
            <Text style = {styles.headerText}>Planets World</Text>
        </View>
        <View style = {styles.lowerContainer}>
            <FlatList
            keyExtractor={this.keyExtractor}
            data = {this.state.listData}
            renderItem = {this.renderItem}
            />
        </View>
      </View>  
    )
}
}

const styles = styleSheet.create({
    container:{
        flex:1,
        backgroundColor:"blue",
    },
    upperContainer:{
        flex:0.1,
        justifyContent:"center",
        alignItems:"center",
    },
    headerText:{
        fontSize:30,
        fontWeight:"bold",
        color:"black",
    },
    lowerContainer:{
        flex:0.9
    },
emptyContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
},
emptyContainerText:{
    fontSize:20,
},
title:{
    fontSize:18,
    fontWeight:"bold",
    color:"red",
},
listContainter:{
    backgroundColor:"yellow"
}
})