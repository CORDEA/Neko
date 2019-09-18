import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import MainListItem from "./MainListItem";
import {bindActionCreators} from "redux";
import {fetchNeko} from "./NekoActions";
import {connect} from "react-redux";

class Main extends React.PureComponent {
    static navigationOptions = {
        title: 'Neko',
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[]}
                    numColumns={2}
                    renderItem={({item}) =>
                        <MainListItem url={item.url}/>
                    }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 12,
    },
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchNeko}, dispatch)
}

export default connect(null, mapDispatchToProps)(Main)
