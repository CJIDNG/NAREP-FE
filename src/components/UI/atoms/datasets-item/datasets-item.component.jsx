import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserProfileIcon from '@Atoms/Icons/user-profile.icon';
import CalendarIcon from '@Atoms/Icons//calendar.icon';
import FileIcon from '@Atoms/Icons//file.icon';
import DownloadIcon from '@Atoms/Icons//download.icon';
import { handleDateFormat } from '@Utils/handleDateFormat';

const DataSetItem = ({
  title, user: { username }, fileType, numberOfDownload, updatedAt, slug
}) => (
    <Link to={`/datasets/${slug}`}>
      <div className="m-5 border border-gray-500 p-6">
        <h2 className="ml-5 mb-2 text-xl capitalize">
          { title }
        </h2>
        <div className="flex items-center mb-2">
          <UserProfileIcon className="mr-3 ml-5" />
          <span className="text-gray-700">{ username }</span>
        </div>
        <div className="flex">
          <div className="flex modified__date  justify-center items-center">
            <CalendarIcon className="mr-3 ml-5" />
            <span className="text-gray-700">{ handleDateFormat(updatedAt) }</span>
          </div>
          <div className="flex number__of__downloads  justify-center items-center">
            <DownloadIcon className="mr-3 ml-5" />
            <span className="text-gray-700">{ numberOfDownload }</span>
          </div>
          <div className="flex file__type  justify-center items-center">
            <FileIcon className="mr-3 ml-5" />
            <span className="mr-3 text-gray-700">{ fileType }</span>
          </div>
        </div>
      </div>
    </Link>
);
DataSetItem.propTypes = {
  title: PropTypes.string.isRequired,
  fileType: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired,
  numberOfDownload: PropTypes.number.isRequired,
  updatedAt: PropTypes.string.isRequired
};

export default DataSetItem;
