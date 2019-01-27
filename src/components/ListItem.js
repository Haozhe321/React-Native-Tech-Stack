import React, { Component } from 'react';
import { CardSection } from './common';
import {View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux'; //window to redux from react side. used here to call action creator
import * as actions from '../actions';

class ListItem extends Component {
    renderDescription() {
        const {data, selectedLibraryId} = this.props;

        if (data.item.id === selectedLibraryId) {
            return (
                <Text> {data.item.description} </Text>
            );
        }

    }

    render() {
        const { id, title } = this.props.data.item;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId };
}

//take the actions and pass to our component into as props
export default connect(mapStateToProps, actions)(ListItem);
