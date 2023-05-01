import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'



function Ingredients({ item, navigation }){



function ingredientsItem({ item }){
return (
<View style={styles.ingredients_item}>
<Text style={styles.ingredient_name} numberOfLines={1}>{item.ingredient_name}</Text>
</View>
)}

return (
<FlatList
    style={styles.ingredients}
    data={item}
    renderItem={ingredientsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Ingredients;

const styles = StyleSheet.create({
    "ingredient_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});