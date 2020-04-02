import React from 'react';
import DatasetPage from './dataset-component';
import EditDataset from './edit-dataset/dataset-edit.component';
import DeleteDataset from './delete-dataset/dataset-delete.component';

const DatasetContainer = ({ ...singleDataset }) => (
  <div className="flex justify-center">
    <DatasetPage {...singleDataset} />
    <EditDataset {...singleDataset} />
    <DeleteDataset {...singleDataset} />
  </div>
);

export default DatasetContainer;
