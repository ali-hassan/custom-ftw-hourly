import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import { maxLength, required, composeValidators } from '../../util/validators';

import { propTypes } from '../../util/types';
import config from '../../config';
import { Button, FieldCheckboxGroup, FieldTextInput, Form } from '../../components';

import css from './EditListingFeaturesForm.css';

const EditListingFeaturesFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={formRenderProps => {
      const {
        disabled,
        ready,
        rootClassName,
        className,
        name,
        intl,
        handleSubmit,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
      } = formRenderProps;

      const classes = classNames(rootClassName || css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = disabled || submitInProgress;

      const yearMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.year',
      });

      const serialNumberMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.serial_number',
      });

      const hoursMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.hours',
      });

      const yearRequiredMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.year_required',
      });

      const serialNumberRequiredMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.serial_number_required',
      });

      const hoursRequiredMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.hours_required',
      });

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.showListingFailed" />
        </p>
      ) : null;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}

          <FieldTextInput
            id="year"
            name="year"
            className={css.description}
            type="textarea"
            label={yearMessage}
            validate={composeValidators(required(yearRequiredMessage))}
          />

          <FieldTextInput
            id="serialNumber"
            name="serialNumber"
            className={css.description}
            type="textarea"
            label={serialNumberMessage}
            validate={composeValidators(required(serialNumberRequiredMessage))}
          />

          <FieldTextInput
            id="hours"
            name="hours"
            className={css.description}
            type="textarea"
            label={hoursMessage}
            validate={composeValidators(required(hoursRequiredMessage))}
          />

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

EditListingFeaturesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  fetchErrors: null,
};

EditListingFeaturesFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
  name: string.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
};

const EditListingFeaturesForm = EditListingFeaturesFormComponent;

export default  compose(injectIntl)(EditListingFeaturesForm);
