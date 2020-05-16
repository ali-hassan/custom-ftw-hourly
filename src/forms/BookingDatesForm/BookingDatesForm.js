import React, { Component } from 'react';
import { string, bool, arrayOf } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import classNames from 'classnames';
import moment from 'moment';
import { required, bookingDatesRequired, composeValidators } from '../../util/validators';
import { START_DATE, END_DATE } from '../../util/dates';
import { propTypes } from '../../util/types';
import config from '../../config';
import { Form, PrimaryButton, FieldDateRangeInput, FieldCheckbox, FieldRadioButton } from '../../components';
import { formatMoney } from '../../util/currency';
import EstimatedBreakdownMaybe from './EstimatedBreakdownMaybe';

import FieldDateAndTimeInput from './FieldDateAndTimeInput';

import css from './BookingDatesForm.css';
import csst from './BookingTimeForm.css';

const identity = v => v;

export class BookingDatesFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { focusedInput: null };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onFocusedInputChange = this.onFocusedInputChange.bind(this);
  }

  // Function that can be passed to nested components
  // so that they can notify this component when the
  // focused input changes.
  onFocusedInputChange(focusedInput) {
    this.setState({ focusedInput });
  }

  // In case start or end date for the booking is missing
  // focus on that input, otherwise continue with the
  // default handleSubmit function.
  handleFormSubmit(e) {
    const { startDate, endDate } = e.bookingDates || {};
    if (!startDate) {
      e.preventDefault();
      this.setState({ focusedInput: START_DATE });
    } else if (!endDate) {
      e.preventDefault();
      this.setState({ focusedInput: END_DATE });
    } else {
      this.props.onSubmit(e);
    }
  }

  render() {
    const { rootClassName, className, price: unitPrice, ...rest } = this.props;
    const classes = classNames(rootClassName || css.root, className);

    if (!unitPrice) {
      return (
        <div className={classes}>
          <p className={css.error}>
            <FormattedMessage id="BookingDatesForm.listingPriceMissing" />
          </p>
        </div>
      );
    }
    if (unitPrice.currency !== config.currency) {
      return (
        <div className={classes}>
          <p className={css.error}>
            <FormattedMessage id="BookingDatesForm.listingCurrencyInvalid" />
          </p>
        </div>
      );
    }

    return (
      <FinalForm
        {...rest}
        unitPrice={unitPrice}
        onSubmit={this.handleFormSubmit}
        render={fieldRenderProps => {
          const {
            endDatePlaceholder,
            startDatePlaceholder,
            formId,
            handleSubmit,
            intl,
            isOwnListing,
            submitButtonWrapperClassName,
            unitPrice,
            unitType,
            values,
            timeSlots,
            fetchTimeSlotsError,
            addon,
            addon_1,
            addon_2,
            listingId,
            onFetchTimeSlots,
            monthlyTimeSlots,
            form,
            pristine,
            timeZone,
          } = fieldRenderProps;

          const addonFee = addon ? addon.addonFee : null;
          const addonName = addon ? addon.addonName : null;
          const addonFee_1 = addon_1 ? addon_1.addonFee_1 : null;
          const addonName_1 = addon_1 ? addon_1.addonName_1 : null;
          const addonFee_2 = addon_2 ? addon_2.addonFee_2 : null;
          const addonName_2 = addon_2 ? addon_2.addonName_2 : null;

          const { startDate, endDate } = values && values.bookingDates ? values.bookingDates : {};

          const selectedAddonFee = values && values.additionalItems && values.additionalItems.find(i => i === 'addonFee') ? addonFee : null;
          const selectedAddonFee_1 = values && values.additionalItems && values.additionalItems.find(i => i === 'addonFee_1') ? addonFee_1 : null;
          const selectedAddonFee_2 = values && values.additionalItems && values.additionalItems.find(i => i === 'addonFee_2') ? addonFee_2 : null;

          
          const bookingStartLabel = intl.formatMessage({
            id: 'BookingDatesForm.bookingStartTitle',
          });
          const bookingEndLabel = intl.formatMessage({ id: 'BookingDatesForm.bookingEndTitle' });
          const requiredMessage = intl.formatMessage({ id: 'BookingDatesForm.requiredDate' });
          const startDateErrorMessage = intl.formatMessage({
            id: 'FieldDateRangeInput.invalidStartDate',
          });
          const endDateErrorMessage = intl.formatMessage({
            id: 'FieldDateRangeInput.invalidEndDate',
          });
          const timeSlotsError = fetchTimeSlotsError ? (
            <p className={css.timeSlotsError}>
              <FormattedMessage id="BookingDatesForm.timeSlotsError" />
            </p>
          ) : null;

          // This is the place to collect breakdown estimation data. See the
          // EstimatedBreakdownMaybe component to change the calculations
          // for customized payment processes.
          const bookingData =
            startDate && endDate
              ? {
                  unitType,
                  unitPrice,
                  startDate,
                  endDate,

                  // NOTE: If unitType is `line-item/units`, a new picker
                  // for the quantity should be added to the form.
                  quantity: 1,
                  addonFee: selectedAddonFee,
                  addonFee_1: selectedAddonFee_1,
                  addonFee_2: selectedAddonFee_2,
                }
              : null;
          const bookingInfo = bookingData ? (
            <div className={css.priceBreakdownContainer}>
              <h3 className={css.priceBreakdownTitle}>
                <FormattedMessage id="BookingDatesForm.priceBreakdownTitle" />
              </h3>
              <EstimatedBreakdownMaybe bookingData={bookingData} />
            </div>
          ) : null;

          const dateFormatOptions = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          };

          const now = moment();
          const today = now.startOf('day').toDate();
          const tomorrow = now
            .startOf('day')
            .add(1, 'days')
            .toDate();
          const startDatePlaceholderText =
            startDatePlaceholder || intl.formatDate(today, dateFormatOptions);
          const endDatePlaceholderText =
            endDatePlaceholder || intl.formatDate(tomorrow, dateFormatOptions);
          const submitButtonClasses = classNames(
            submitButtonWrapperClassName || css.submitButtonWrapper
          );

          const startDateInputProps = {
            label: bookingStartLabel,
            placeholderText: startDatePlaceholder,
          };
          const endDateInputProps = {
            label: bookingEndLabel,
            placeholderText: endDatePlaceholder,
          };

          const dateInputProps = {
            startDateInputProps,
            endDateInputProps,
          };

          return (
            <Form onSubmit={handleSubmit} className={classes}>
              {timeSlotsError}
              <FieldDateRangeInput
                className={css.bookingDates}
                name="bookingDates"
                unitType={unitType}
                startDateId={`${formId}.bookingStartDate`}
                startDateLabel={bookingStartLabel}
                startDatePlaceholderText={startDatePlaceholderText}
                endDateId={`${formId}.bookingEndDate`}
                endDateLabel={bookingEndLabel}
                endDatePlaceholderText={endDatePlaceholderText}
                focusedInput={this.state.focusedInput}
                onFocusedInputChange={this.onFocusedInputChange}
                format={identity}
                timeSlots={timeSlots}
                useMobileMargins
                validate={composeValidators(
                  required(requiredMessage),
                  bookingDatesRequired(startDateErrorMessage, endDateErrorMessage)
                )}
              />

              <FieldDateAndTimeInput
                  {...dateInputProps}
                  className={csst.bookingDates}
                  listingId={listingId}
                  name="bookingTime"
                  bookingTimeId = {`${formId}.bookingTime`}
                  bookingStartLabel={bookingStartLabel}
                  onFetchTimeSlots={onFetchTimeSlots}
                  monthlyTimeSlots={monthlyTimeSlots}
                  values={values}
                  intl={intl}
                  form={form}
                  pristine={pristine}
                  timeZone={timeZone}
             />

              <div className={css.addonTitleWrap}>
              <h2 class='BookingPanel_bookingTitle__Xw_J8'>Transporation + Pickup</h2>
              <div className={css.subTitle}>Choose a distance closest your destination</div>
              </div>

              <div className={css.transWrap}>
              {addonFee ? (
                <div className={css.addonFee}>
                  <FieldCheckbox
                    className={css.addonFeeLabel}
                    id={`${formId}.addonFee`}
                    label='Delivery within 50km'
                    name={'additionalItems'}
                    value={'addonFee'}
                  />
                  <span className={css.addonFeeAmount}>{formatMoney(intl, addonFee)}</span>
                </div>
              ) : null}

              {addonFee_1 ? (
                <div className={css.addonFee}>
                  <FieldCheckbox
                    className={css.addonFeeLabel}
                    id={`${formId}.addonFee_1`}
                    label='Delivery within 100km'
                    name={'additionalItems'}
                    value={'addonFee_1'}
                  />
                  <span className={css.addonFeeAmount}>{formatMoney(intl, addonFee_1)}</span>
                </div>
              ) : null}

              {addonFee_2 ? (
                <div className={css.addonFee}>
                  <FieldCheckbox
                    className={css.addonFeeLabel}
                    id={`${formId}.addonFee_2`}
                    label='Delivery within 200km'
                    name={'additionalItems'}
                    value={'addonFee_2'}
                  />
                  <span className={css.addonFeeAmount}>{formatMoney(intl, addonFee_2)}</span>
                </div>
              ) : null}

              </div>

              {bookingInfo}
              <p className={css.smallPrint}>
                <FormattedMessage
                  id={
                    isOwnListing
                      ? 'BookingDatesForm.ownListing'
                      : 'BookingDatesForm.youWontBeChargedInfo'
                  }
                />
              </p>
              <div className={submitButtonClasses}>
                <PrimaryButton type="submit">
                  <FormattedMessage id="BookingDatesForm.requestToBook" />
                </PrimaryButton>
              </div>
            </Form>
          );
        }}
      />
    );
  }
}

BookingDatesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  submitButtonWrapperClassName: null,
  price: null,
  isOwnListing: false,
  startDatePlaceholder: null,
  endDatePlaceholder: null,
  timeSlots: null,
  addonFee: null,
  addonFee_1: null,
  addonFee_2: null,
};

BookingDatesFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  submitButtonWrapperClassName: string,

  unitType: propTypes.bookingUnitType.isRequired,
  price: propTypes.money,
  isOwnListing: bool,
  timeSlots: arrayOf(propTypes.timeSlot),

  // from injectIntl
  intl: intlShape.isRequired,

  // for tests
  startDatePlaceholder: string,
  endDatePlaceholder: string,
};

const BookingDatesForm = compose(injectIntl)(BookingDatesFormComponent);
BookingDatesForm.displayName = 'BookingDatesForm';

export default BookingDatesForm;
