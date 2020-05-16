import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import config from '../../config';
import { required, composeValidators } from '../../util/validators';
import { Form, Button, FieldTextInput, FieldCheckbox, FieldCurrencyInput } from '../../components';

import css from './EditListingTransportationForm.css';

const TITLE_MAX_LENGTH = 60;

const EditListingTransportationFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        transportation_offered,
        addon_price,
        addon_price_1,
        addon_price_2,
        initialValues,
        className,
        disabled,
        ready,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
      } = formRenderProps;

      const transportationOfferedMessage = intl.formatMessage({ id: 'EditListingTransportationForm.transportationOffered' });
      const transportationOfferedPlaceholderMessage = intl.formatMessage({
        id: 'EditListingTransportationForm.transportationOfferedPlaceholder',
      });
      const transportationOfferedRequiredMessage = intl.formatMessage({
        id: 'EditListingTransportationForm.transportationOfferedRequired',
      });

      const addonNameMessage = intl.formatMessage({
        id: 'EditListingTransportationForm.addonName',
      });
      const addonNamePlaceholderMessage = intl.formatMessage({
        id: 'EditListingTransportationForm.addonNamePlaceholder',
      });
      const addonPriceMessage = intl.formatMessage({
        id: 'EditListingTransportationForm.addonPrice',
      });

      const transportationDistanceMessage = intl.formatMessage({
        id: 'EditListingTransportationForm.transportationDistance',
      });

      const transportationDistancePlaceholderMessage = intl.formatMessage({
        id: 'EditListingTransportationForm.transportationDistancePlaceholder',
      });

      const transportationDistanceRequiredMessage = intl.formatMessage({
        id: 'EditListingTransportationForm.transportationDistanceRequired',
      });

      const { updateListingError, createListingDraftError, showListingsError } = fetchErrors || {};
      const errorMessageUpdateListing = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingTransportationForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingTransportationForm.showListingFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      const hideAndShowFields = function(){
          var menu = document.querySelector('.hidden');
          menu.classList.toggle('show-hide');
      };

      const isClicked = function(){
          alert("alert");
      };

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessageUpdateListing}
          {errorMessageShowListing}

          <FieldCheckbox
            id="transportation_offered"
            name="transportation_offered"
            label={transportationOfferedMessage}
            placeholder={transportationOfferedPlaceholderMessage}
            autoFocus
            onClick={(val, prevVal) => hideAndShowFields()}
          />

          <div className='hidden'>
          
            <FieldCurrencyInput
              id="addon_price"
              name="addon_price"
              className={css.priceInput}
              label='How much will you charge for 50km for delivery & pickup'
              currencyConfig={config.currencyConfig}
            />

            <FieldCurrencyInput
              id="addon_price_1"
              name="addon_price_1"
              className={css.priceInput}
              label='How much will you charge for 100km for delivery & pickup'
              currencyConfig={config.currencyConfig}
            />

            <FieldCurrencyInput
              id="addon_price_2"
              name="addon_price_2"
              className={css.priceInput}
              label='How much will you charge for 200km for delivery & pickup'
              currencyConfig={config.currencyConfig}
            />

          </div>

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingTransportationFormComponent.defaultProps = { className: null, fetchErrors: null };

EditListingTransportationFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    createListingDraftError: propTypes.error,
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  categories: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
};

export default compose(injectIntl)(EditListingTransportationFormComponent);
