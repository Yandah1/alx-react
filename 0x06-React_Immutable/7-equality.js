import { Map } from 'immutable';

export function areMapsEqual(map1, map2) {
  return Map(map1).equals(Map(map2));
}
