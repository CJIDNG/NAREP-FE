/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import DataSetCollection from '@Molecules/datasets-collection/datasets-collection.component';
import DatasetFilter from '@Molecules/datasets-filter/datasets-filter.component';
import { selectItemsCount } from '@Redux/datasets/datasets.selectors';


const DatasetContainer = ({ collectionsCount }) => (
  <>
    <div className="flex mb-4 justify-center">
      <div className="w-auto p-2 m-4">
        <DatasetFilter />
      </div>
      <div className="w-1/2 p-2 m-4">
        <div className="flex flex-col">
          <Input icon="search" placeholder={`Search ${collectionsCount} datasets`} />
          <div className="m-3">
            <span className="mr-3">
              { collectionsCount }
            </span>
            results
          </div>
          <DataSetCollection />
        </div>
        <div />
      </div>
    </div>
  </>
);
const mapStateToProps = createStructuredSelector({
  collectionsCount: selectItemsCount,
});
export default connect(mapStateToProps)(DatasetContainer);
