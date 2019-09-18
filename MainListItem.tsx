import React from "react";
import {StyleSheet, Text, View} from "react-native";

interface Props {
    title: string
    description: string
}

export default class MainListItem extends React.PureComponent<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    description: {
        fontSize: 12,
    },
});
