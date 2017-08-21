import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Picker,
    AlertIOS
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Goal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            new_goal: '',
            category: ''
        }
    }

    render() { 
        return (
        <Picker onValueChange={ (itemValue, itemIndex) => this.setState({ category: itemValue }) }>
            <Picker.Item label="Health" value="Health" />
            <Picker.Item label="Productivity" value="Productivity" />
            <Picker.Item label="Finances" value="Finances" />
            <Picker.Item label="Personal Growth" value="Personal Growth" />
            <Picker.Item label="Fitness" value="Fitness" />
        </Picker>
        )
    }

}