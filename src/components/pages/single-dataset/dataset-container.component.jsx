import React from 'react';
import DatasetPage from './dataset-component';
import ActionButtons from './dataset-cta.component';

const DatasetContainer = ({ ...singleDataset }) => (
  <div className="flex justify-center">
    <DatasetPage {...singleDataset} />
    <ActionButtons {...singleDataset} />
  </div>
);

export default DatasetContainer;
