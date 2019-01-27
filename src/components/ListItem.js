import React, { Component } from 'react';
import { CardSection } from './common';
import {View,
        Text,
        TouchableWithoutFeedback,
        LayoutAnimation,
        Platform,
        UIManager } from 'react-native';
import { connect } from 'react-redux'; //window to redux from react side. used here to call action creator
import * as actions from '../actions';

class ListItem extends Component {
    //called whenever component is to be rerendered
    constructor() {
        super();
        if (Platform.OS === 'android')
            UIManager.setLayoutAnimationEnabledExperimental
            && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    componentWillUpdate() {
        console.log("update!");
        LayoutAnimation.spring();
    }

    renderDescription() {
        const {data, expanded} = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{flex : 1}}>
                        {data.item.description}
                    </Text>
                </CardSection>
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

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.data.item.id;

    return { expanded };
}

//take the actions and pass to our component into as props
export default connect(mapStateToProps, actions)(ListItem);
