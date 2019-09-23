import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import MainListItem from "./MainListItem";
import {fetchNeko} from "./NekoActions";
import {connect} from "react-redux";
import Url from "./Url";

interface Props {
    fetchNeko: () => {},
    urls: Url[],
}

class Main extends React.PureComponent<Props> {
    static navigationOptions = {
        title: 'Neko',
    };

    componentDidMount(): void {
        this.props.fetchNeko();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.urls}
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
    return {
        fetchNeko: () => {
            dispatch(fetchNeko())
        }
    }
}

function mapStateToProps(state) {
    return {urls: state.neko.urls}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
