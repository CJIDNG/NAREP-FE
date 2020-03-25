import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { selectSectors } from '../../redux/datasets/datasets.selectors';
import { fetchSectorsStarted } from '../../redux/datasets/datasets.actions';

const DatasetFilter = ({ fetchSectorsStarted: getAllSectors, sectors }) => {
  useEffect(() => {
    const fetchSectors = async () => {
      await getAllSectors();
    };
    fetchSectors();
  }, [getAllSectors]);
  return (
    <div className="p-4">
      <span>
        { sectors.map(({ id, name }) => (
          <h3 key={id} className="capitalize mb-5 tracking-wide text-gray-600">{ name }</h3>
        )) }
      </span>
    </div>
  );
};
DatasetFilter.propTypes = {
  fetchSectorsStarted: PropTypes.func.isRequired,
  sectors: PropTypes.array.isRequired
};
const mapStateToProps = createStructuredSelector({
  sectors: selectSectors,
});
const mapDispatchToProps = (dispatch) => ({
  fetchSectorsStarted: () => dispatch(fetchSectorsStarted())
});
export default connect(mapStateToProps, mapDispatchToProps)(DatasetFilter);
