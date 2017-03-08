import { hoistStatics, mapProps } from 'recompose';
import * as Owner from 'services/Owner';

export default function withOwnerId(component) {
  return hoistStatics(
    mapProps((props) => ({
      ...props,
      ownerId: Owner.getId(),
    }))
  )(component);
}
