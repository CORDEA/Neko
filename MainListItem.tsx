import React from "react";
import {Image, StyleSheet, View} from "react-native";

interface Props {
    url: string
}

export default class MainListItem extends React.PureComponent<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{uri: this.props.url}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
    },
    image: {
        height: 160,
    },
});
