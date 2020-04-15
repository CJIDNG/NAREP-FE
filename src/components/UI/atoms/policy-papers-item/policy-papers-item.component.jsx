import React from 'react';
import PropTypes from 'prop-types';
import { handleDateFormat } from '@Utils/helpers/handleDateFormat';
import DownloadPolicyPaper from '@Atoms/dataset-download/dataset-download.component';
import { Container, Title, Item } from './policy-papers.styles';

const PolicyPaperItem = ({ id, title, updatedAt }) => (
  <Container>
    <Item>
      <Title>
        { title }

        <span className="ml-3">
          (
          { handleDateFormat(updatedAt) }
          )
          </span>
      </Title>
    </Item>
    <DownloadPolicyPaper fileId={id} path="policy-paper" />
  </Container>
);
PolicyPaperItem.propTypes = {
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PolicyPaperItem;
