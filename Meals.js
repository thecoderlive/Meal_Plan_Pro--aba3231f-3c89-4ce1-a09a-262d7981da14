import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Ingredients from './Ingredients'

function Meals({ item, navigation }){

const onPressViewRecipe = () => {}

function mealsItem({ item }){
return (
<View style={styles.meals_item}>
<View style={{flexDirection: 'column'}}  >
<View style={{flexDirection: 'row'}}>
<Text style={styles.meal_name} numberOfLines={1}>{item.meal_name}</Text>
<Text style={styles.meal_date} numberOfLines={1}>{item.meal_date}</Text>
</View>
</View>
<Ingredients item={'ingredients' in item ? item.ingredients: item} navigation={navigation}/>
<View style={{flexDirection: 'row'}}>
<Text style={styles.meal_name} numberOfLines={1}>{item.meal_name}</Text>
<Text style={styles.meal_date} numberOfLines={1}>{item.meal_date}</Text>
</View>
<TouchableOpacity  onPress={onPressViewRecipe}>
    <View style={styles.view_recipe}>{'View Recipe'}</View>
</TouchableOpacity>
</View>
)}

return (
<FlatList
    style={styles.meals}
    data={item}
    renderItem={mealsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Meals;

const styles = StyleSheet.create({
    "meal_date": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "meal_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "view_recipe": {
        "flex": 1,
        "color": "white",
        "margin": 5,
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5"
    }
});