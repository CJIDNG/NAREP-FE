import React from 'react';
import UserProfileIcon from '@Atoms/Icons/user-profile.icon';
import CalendarIcon from '@Atoms/Icons//calendar.icon';
import FileIcon from '@Atoms/Icons//file.icon';
import DownloadIcon from '@Atoms/Icons//download.icon';
import TagIcon from '@Atoms/Icons/tag.icon';
import FacebookIcon from '@Atoms/Icons/facebook.icon';
import TwitterIcon from '@Atoms/Icons/twitter.icon';
import { handleDateFormat } from '@Utils/handleDateFormat';
import DownloadButton from '@Components/UI/atoms/custom-button/download-button.component';

const DatasetPage = ({
  title, user: { username }, updatedAt, createdAt, description, numberOfDownload, fileType
}) => (
    <>
      <div className="w-2/5 mx-auto my-4 border border-gray-500 px-16 py-8">
        <h4 className="text-gray-700 text-2xl capitalize font-semibold mb-6">{ title }</h4>
        <div className="my-5">
          <p className="text-gray-800 text-xl capitalize ">Metadata</p>
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex justify-center items-center  mr-3">
              <UserProfileIcon className="mr-3" />
              <span>Username</span>
            </div>
            <span>{ username }</span>
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
            <span>date</span>
          </div>
        </div>
        <div className=" my-4">
          <p className="text-gray-800 text-lg capitalize font-semibold">Description</p>
          <p>{ description }</p>
        </div>
        <DownloadButton />
        <div className="mt-5">
          <span>Share on:</span>
          <div className="flex">
            <FacebookIcon fill="#3b5998" className="mr-4" />
            <TwitterIcon fill="#1DA1F2" />
          </div>
        </div>

      </div>


    </>
);

export default DatasetPage;
