import React from 'react';
import { bool, func, object, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '../../components';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { EditListingTransportationForm } from '../../forms';
import config from '../../config';

import css from './EditListingTransportationPanel.css';

const EditListingTransportationPanel = props => {
  const {
    className,
    rootClassName,
    listing,
    disabled,
    ready,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { description, title, size, publicData } = currentListing.attributes;

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingTransportationPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingTransportationPanel.createListingTitle" />
  );



  return (
    <div className={classes}>
      <h1 className={css.title}>Transportation & Pickup</h1>
      <EditListingTransportationForm
        className={css.form}
        initialValues={{ transportation_offered: publicData.transportation_offered, addon_price: publicData.addons && publicData.addons.find(a => a.name == 'transportation') ? publicData.addons.find(a => a.name == 'transportation').price : 0, addon_name: "transportation_1", addon_price_1: publicData.addons_1 && publicData.addons_1.find(a => a.name == 'transportation_1') ? publicData.addons_1.find(a => a.name == 'transportation_1').price : 0, addon_name: "transportation_2", addon_price_2: publicData.addons_2 && publicData.addons_2.find(a => a.name == 'transportation_2') ? publicData.addons_2.find(a => a.name == 'transportation_2').price : 0   }}
        saveActionMsg={submitButtonText}
        onSubmit={values => {
          const { transportation_offered, addon_price, addon_price_1, addon_price_2 } = values;

          const updateValues = {
            publicData: { transportation_offered: transportation_offered, addons: [{name: 'transportation', price: {amount: addon_price.amount, currency: addon_price.currency}}], addons_1: [{name: 'transportation_1', price: {amount: addon_price_1.amount, currency: addon_price.currency}}], addons_2: [{name: 'transportation_2', price: {amount: addon_price_2.amount, currency: addon_price.currency}}] },
          };

          onSubmit(updateValues);
        }}
        onChange={onChange}
        disabled={disabled}
        ready={ready}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
      />
    </div>
  );
};

EditListingTransportationPanel.defaultProps = {
  className: null,
  rootClassName: null,
  errors: null,
  listing: null,
};

EditListingTransportationPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingTransportationPanel;
