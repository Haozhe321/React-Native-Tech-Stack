import React from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component{
    render() {
        return;
    }
}

const mapStateToProps = state => {
    console.log(mapStateToProps);
};

export default connect(mapStateToProps)(LibraryList);