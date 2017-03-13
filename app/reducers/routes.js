/**
 * Created by lisa on 3/11/17.
 */

import { ActionConst } from 'react-native-router-flux';

const initialState = {
    scene: {},
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ActionConst.FOCUS:
            return Object.assign({}, state, {
                scene: action.scene
            });
        default:
            return state;
    }
}
