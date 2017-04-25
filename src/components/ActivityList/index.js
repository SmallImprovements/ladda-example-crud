import { flow, map, noop } from 'lodash';
import { withData } from 'ladda-react';
import withOwnerId from 'hocs/withOwnerId';
import Avatar from 'components/ui/Avatar';

import api from 'api';

import styles from './styles.scss';

const TRANSFORMERS = {
  SETUP: () => 'Sample contacts created',
  CREATE: ({ name }) => `${name} added`,
  EDIT: ({ name }) => `${name} edited`,
  DELETE: ({ name }) => `${name} removed`
};

function toProps({ type, data, createdAt }) {
  const { avatar } = data;
  const text = (TRANSFORMERS[type] || noop)(data);
  return { avatar, text, createdAt };
}

function ActivityList({ activities }) {
  return (
    <div>
      { map(activities, (activity) => (
        <Activity key={ activity.id } { ...toProps(activity) } />
      ))}
    </div>
  );
}

function Activity({ avatar, text }) {
  return (
    <div className={ styles.activity } >
      <Avatar src={ avatar } size="25" />
      <div>{ text }</div>
    </div>
  );
}

export default flow(withData({
  resolve: {
    activities: ({ ownerId }) => api.activities.getActivities(ownerId)
  }
}), withOwnerId)(ActivityList);
