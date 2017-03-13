/**
 * Created by lisa on 3/10/17.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

import ListItem from './list-item'
import {main, settings} from '../constants/menu-items'

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            items: 0,
            completedItems: 0,
        };
    }

    render() {
        let listItems = [];

        let list = {};
        if ( this.props.name == 'main' ) {
            list = main;
        }
        else if ( this.props.name == 'settings' ) {
            list = settings;
        }

        for (let item in list) {
            if (list[item].hasOwnProperty('hasCount')) {
                listItems.push(
                    <ListItem stye={styles.listItem} key={item} name={item} hasCount={list[item]['hasCount']} />
                );
            }
            else {
                listItems.push(
                    <ListItem stye={styles.listItem} key={item} name={item} hasCount={false} />
                );
            }
        }

        return (
            <View>
                {listItems}
            </View>
        );

        // return (
        //     <Text>{ JSON.stringify( main ) }</Text>
        // );
    }
}

const styles = StyleSheet.create({
    listItem: {}
});
