import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import MainListItem from "./MainListItem";

export default class Main extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[]}
                    renderItem={({item}) =>
                        <MainListItem
                            title={item.title}
                            description={item.description}/>
                    }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
