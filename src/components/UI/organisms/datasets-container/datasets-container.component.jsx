import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import DataSetCollection from '@Molecules/datasets-collection/datasets-collection.component';
import DatasetFilter from '@Molecules/datasets-filter/datasets-filter.component';
import { selectItemsCount } from '@Redux/datasets/get-datasets/datasets.selectors';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import CreateDataset from '@Components/UI/organisms/create-dataset/create-dataset.component';


const DatasetContainer = ({ collectionsCount, currentUser }) => {
  const role = currentUser ? currentUser.role : null;
  return (
    <>
      <div className="flex mb-4 justify-center">
        <div className="w-auto p-2 m-4">
          <DatasetFilter />
        </div>
        <div className="w-1/2 p-2 m-4">
          <div className="flex flex-col">
            {
              role === 'admin' ? (
                <div className="w-1/4 m-4 ">
                  <CreateDataset />
                </div>
              ) : ''
            }
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
};
DatasetContainer.propTypes = {
  collectionsCount: PropTypes.number.isRequired,
  currentUser: PropTypes.shape({
    role: PropTypes.string
  }),
};
DatasetContainer.defaultProps = {
  currentUser: null
};
const mapStateToProps = createStructuredSelector({
  collectionsCount: selectItemsCount,
  currentUser: selectCurrentUser
});
export default connect(mapStateToProps)(DatasetContainer);
