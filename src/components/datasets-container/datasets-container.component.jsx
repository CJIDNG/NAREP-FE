/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import DataSetCollection from '../datasets-collection/datasets-collection.component';
import { selectItemsCount } from '../../redux/datasets/datasets.selectors';

const DatasetContainer = ({ collectionsCount }) => (
  <>
    <div className="flex mb-4 justify-center">
      <div className="w-1/4 p-2 bg-gray-400 text-center m-4">.w-1/3</div>
      <div className="w-1/2 p-2 m-4">
        <div className="flex flex-col">
          <Input icon="search" placeholder={`Search ${collectionsCount} datasets`} />
          <div>
            <span className="mr-3">
              { collectionsCount }
            </span>
            results
          </div>
          <DataSetCollection />
        </div>
      </div>
    </div>
  </>
);
const mapStateToProps = createStructuredSelector({
  collectionsCount: selectItemsCount,
});
export default connect(mapStateToProps)(DatasetContainer);
