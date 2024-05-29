import { fromJS } from 'immutable';

function getImmutableObject(givenObject) {
  return fromJS(givenObject);
}

export default getImmutableObject;
