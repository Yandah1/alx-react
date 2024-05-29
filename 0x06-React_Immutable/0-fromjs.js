import { fromJS } from 'immutable';

const givenObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

function getImmutableObject(givenObject) {
  return fromJS(givenObject);
}

export default getImmutableObject;