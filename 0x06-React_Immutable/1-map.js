import { Map } from 'immutable';

function getImmutableObject(givenObject) {
  return Map(givenObject);
}

export default getImmutableObject;
