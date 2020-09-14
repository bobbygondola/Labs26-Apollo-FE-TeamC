import React from 'react';
import { List } from '../common';
import { getExampleData } from '../../api';
import RenderTopicsList from './RenderTopicsList';

const TopicsListContainer = () => {
  return (
    <List
      //axios request goes here
      getItemsData={getExampleData}
      LoadingComponent={() => <div>Loading Topics...</div>}
      RenderItems={RenderTopicsList}
    />
  );
};

export default TopicsListContainer;
