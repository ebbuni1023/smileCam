import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import MapView from 'react-native-maps';
import * as MediaLibrary from 'expo-media-library';
import {FontAwesome5, Ionicons, MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons';

export default function mapview(){
    return (
        <View style={{backgroundColor: 'black'}}>
            <MapView style={{backgroundColor: 'red'}}/>
            <Text>ddgsddgsfgs</Text>
        </View>
    );
}