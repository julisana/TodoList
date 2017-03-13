/**
 * Created by lisa on 3/11/17.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

export default class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: 0,
            completedItems: 0,
        };

    }

    render() {
        return (
            <View style={styles.item}>
                <View style={styles.name}>
                    <Text>{ this.props.name }</Text>
                </View>
                {
                    this.props.hasCount === true &&
                    <View style={styles.count}>
                        <Text>{ this.state.items - this.state.completedItems }</Text>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#666',
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {},
    count: {
        alignSelf: 'flex-end'
    }
});
