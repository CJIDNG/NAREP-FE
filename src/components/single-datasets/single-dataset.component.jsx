/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import UserProfileIcon from '../shared/Icons/user-profile.icon';
import CalendarIcon from '../shared/Icons/calendar.icon';
import FileIcon from '../shared/Icons/file.icon';
import DownloadIcon from '../shared/Icons/download.icon';

const DataSetItem = ({
  title, user: { username }, fileType, numberOfDownload, updatedAt,
}) => {
  const handleDateFormat = (date) => {
    const currentDatetime = new Date(date);
    const formattedDate = `${currentDatetime.getDate()}-${currentDatetime.getMonth()
      + 1}-${currentDatetime.getFullYear()}`;
    return formattedDate;
  };
  return (
    <>
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
    </>
  );
};
DataSetItem.propTypes = {
  title: PropTypes.string.isRequired,
  fileType: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired,
  numberOfDownload: PropTypes.number.isRequired,
  updatedAt: PropTypes.string.isRequired
};

export default DataSetItem;
