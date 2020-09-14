import React from 'react';
import { List } from '../common';
import RenderTopicsList from './RenderTopicsList';

const TopicsListContainer = () => {
  return (
    <List
      //axios request goes here
      getItemsData={'PLACEHOLDER'}
      LoadingComponent={() => <div>Loading Topics...</div>}
      RenderItems={RenderTopicsList}
    />
  );
};

export default TopicsListContainer;
