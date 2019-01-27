//stores all the action creators, which are javascript functions that create actions
//action creator returns an action
export const selectedLibrary = (libraryId) => {
    return {
        type: 'select_library', //select a card in the listview
        payload: libraryId
    };
};
