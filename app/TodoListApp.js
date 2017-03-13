/**
 * Created by lisa on 3/11/17.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'

import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index'
const initialState = {};
let enhancer = compose(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, initialState, enhancer);

import List from './components/list'

export default class TodoListApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <List name="main" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
        paddingTop: 20,
        justifyContent: 'flex-start',
    },
});


//Useful things for later
// import sortableListView from 'react-native-sortable-listview'
//import List from './components/list'