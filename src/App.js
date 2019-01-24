import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux;';


//store holds application state
//provider translates the data in the store to something react can use

const App = () => {
    return (
        <Provider store={createStore}>
            <View />
        </Provider>
    );
};

export default App
