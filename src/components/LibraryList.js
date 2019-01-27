import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component{
    renderItem(data) {
        return <ListItem data={ data } />;
    }

    render()
        return (
            <FlatList
                data={this.props.dataToShow}
                renderItem={this.renderItem}
                keyExtractor={(data) => data.id}
            />
        )
    }
}

//state is the argument
/** mapStateToProps takes a global state object(application state),
the thing that sits inside the redux store and map it and provide it as props
to our library list
**/
const mapStateToProps = state => {
    //object returned here will show us as props in LibraryList
    return { dataToShow: state.libraries}
};

export default connect(mapStateToProps)(LibraryList);
