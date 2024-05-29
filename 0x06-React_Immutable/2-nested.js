import {nfromJS } from 'immutable';
export default function accessImmutableObject(object, array) {
    const immutableObject = fromJS(object);
    return immutableObject.getIn(array);
}
   