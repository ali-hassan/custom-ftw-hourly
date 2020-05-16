import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import css from './ListingCard.css';

const ListingTag = props => {
  const { className, rootClassName } = props;
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <span className={css.premium}>
        <FormattedMessage id="ListingCard.tagVerified" />
      </span>
    </div>
  );
};

ListingTag.defaultProps = {
  className: null,
  rootClassName: null,
};

ListingTag.propTypes = {
  className: string,
  rootClassName: string,
};

export default ListingTag;
