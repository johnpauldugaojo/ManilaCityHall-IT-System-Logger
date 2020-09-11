import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechListItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: 'Technician Successfuly Deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons red-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechListItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechListItem);
