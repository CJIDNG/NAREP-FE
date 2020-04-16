import React from 'react';
import PropTypes from 'prop-types';
import { handleDateFormat } from '@Utils/helpers/handleDateFormat';
import { connect } from 'react-redux';
import { deletePolicyPaperStarted } from '@Redux/policy-paper/delete-policy-paper/delete-policy-paper.actions';
import DownloadPolicyPaper from '@Atoms/dataset-download/dataset-download.component';
import EditPolicyPaper from '@Molecules/edit-policy-paper/edit-policy-paper.component';
import DeletePolicyPaper from '@Molecules/delete-dataset/dataset-delete.component';
import { Container, Title, Item } from './policy-papers.styles';

const PolicyPaperItem = ({
  id, title, updatedAt, slug, deletePolicyPaper
}) => {
  const handleDelete = async (fileSlug) => deletePolicyPaper(fileSlug);
  return (
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
      <>
        <DownloadPolicyPaper fileId={id} path="policy-paper" />
      </>
      <EditPolicyPaper slug={slug} />
      <DeletePolicyPaper slug={slug} handleDelete={handleDelete} />
    </Container>
  );
};
PolicyPaperItem.propTypes = {
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  deletePolicyPaper: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  deletePolicyPaper: (payload) => dispatch(deletePolicyPaperStarted(payload))
});
export default connect(null, mapDispatchToProps)(PolicyPaperItem);
