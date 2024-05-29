import { Map } from 'immutable';
export default function accessImmutableObject(object, array) {
    return array.reduce((acc, current) => {
      if (Map.isMap(acc)) {
        return acc.get(current);
      } else if (typeof acc === 'object' && acc !== null) {
        return acc[current];
      } else {
        return undefined;
      }
    }, object);
  }
  