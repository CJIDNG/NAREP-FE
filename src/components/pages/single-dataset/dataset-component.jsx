import React from 'react';
import UserProfileIcon from '@Atoms/Icons/user-profile.icon';
import PropTypes from 'prop-types';
import CalendarIcon from '@Atoms/Icons//calendar.icon';
import FileIcon from '@Atoms/Icons//file.icon';
import DownloadIcon from '@Atoms/Icons//download.icon';
import TagIcon from '@Atoms/Icons/tag.icon';
import { handleDateFormat } from '@Utils/helpers/handleDateFormat';
import DownloadDataset from '../../UI/atoms/dataset-download/dataset-download.component';
import SocialShare from '../../UI/atoms/social-share/social-share.component';
import { TagStyle } from './dataset-component.styles';

const DatasetPage = ({
  title, user, updatedAt, createdAt, description, numberOfDownload, fileType, fileName, tags
}) => (
    <>
      <div className="w-2/5  mx-10 border border-gray-500 px-16 py-8">
        <h4 className="text-gray-700 text-2xl capitalize font-semibold mb-6">{ title }</h4>
        <div className="my-5">
          <p className="text-gray-800 text-xl capitalize ">Metadata</p>
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex justify-center items-center  mr-3">
              <UserProfileIcon className="mr-3" />
              <span>Username</span>
            </div>
            <span>{ user.username }</span>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex justify-center items-center">
              <CalendarIcon className="mr-3" />
              <span>Updated at</span>
            </div>
            <span>{ handleDateFormat(updatedAt) }</span>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex justify-center items-center">
              <CalendarIcon className="mr-3" />
              <span>Created at</span>
            </div>
            <span>{ handleDateFormat(createdAt) }</span>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex justify-center items-center">
              <DownloadIcon className="mr-3" />
              <span>Number of downloads</span>
            </div>
            <span>{ numberOfDownload }</span>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex justify-center items-center">
              <FileIcon className="mr-3" />
              <span>File type</span>
            </div>
            <span>{ fileType }</span>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex justify-center items-center">
              <TagIcon className="mr-3" />
              <span>Tags</span>
            </div>
            <div>
              {
                tags.map(({ id, name }) => (
                  <TagStyle key={id}>{ name }</TagStyle>
                ))
              }
            </div>
          </div>
        </div>
        <div className=" my-4">
          <p className="text-gray-800 text-lg capitalize font-semibold">Description</p>
          <p>{ description }</p>
        </div>
        <DownloadDataset fileName={fileName} />
        <SocialShare title={title} />

      </div>


    </>
);
DatasetPage.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
  updatedAt: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  numberOfDownload: PropTypes.number.isRequired,
  fileType: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
export default DatasetPage;