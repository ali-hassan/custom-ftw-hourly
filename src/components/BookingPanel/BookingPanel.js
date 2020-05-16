import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import { arrayOf, bool, func, node, oneOfType, shape, string } from 'prop-types';
import classNames from 'classnames';
import omit from 'lodash/omit';
import { propTypes, LISTING_STATE_CLOSED, LINE_ITEM_NIGHT, LINE_ITEM_DAY } from '../../util/types';
import { formatMoney } from '../../util/currency';
import { parse, stringify } from '../../util/urlHelpers';
import config from '../../config';
import { ModalInMobile, Button } from '../../components';
import { BookingDatesForm } from '../../forms';
import css from './BookingPanel.css';

import { types as sdkTypes } from '../../util/sdkLoader';
const { Money } = sdkTypes;

// This defines when ModalInMobile shows content as Modal
const MODAL_BREAKPOINT = 1023;

const priceData = (price, intl) => {
  if (price && price.currency === config.currency) {
    const formattedPrice = formatMoney(intl, price);
    return { formattedPrice, priceTitle: formattedPrice };
  } else if (price) {
    return {
      formattedPrice: `(${price.currency})`,
      priceTitle: `Unsupported currency (${price.currency})`,
    };
  }
  return {};
};

const openBookModal = (isOwnListing, isClosed, history, location) => {
  if (isOwnListing || isClosed) {
    window.scrollTo(0, 0);
  } else {
    const { pathname, search, state } = location;
    const searchString = `?${stringify({ ...parse(search), book: true })}`;
    history.push(`${pathname}${searchString}`, state);
  }
};

const closeBookModal = (history, location) => {
  const { pathname, search, state } = location;
  const searchParams = omit(parse(search), 'book');
  const searchString = `?${stringify(searchParams)}`;
  history.push(`${pathname}${searchString}`, state);
};

const BookingPanel = props => {
  const {
    rootClassName,
    className,
    titleClassName,
    listing,
    isOwnListing,
    unitType,
    onSubmit,
    title,
    subTitle,
    authorDisplayName,
    onManageDisableScrolling,
    timeSlots,
    fetchTimeSlotsError,
    history,
    location,
    intl,
  } = props;

  const addonFeeData = listing.attributes && listing.attributes.publicData ? listing.attributes.publicData.addons : null;


  const { amount: addonAmount, currency: addonCurrency } =
    (addonFeeData && addonFeeData[0] ? addonFeeData[0].price : {}) || {};
  let addonName = (addonFeeData && addonFeeData[0]) ? addonFeeData[0].name : "Add-on"
  if (addonName == 'transportation' && listing.attributes && listing.attributes.publicData && listing.attributes.publicData.transportation_distance) {
    addonName = `Delivery within ${listing.attributes.publicData.transportation_distance} km`
  }
  const addonFee =
    addonAmount && addonCurrency
      ? new Money(addonAmount, addonCurrency)
      : null;



  const addonFeeData_1 = listing.attributes && listing.attributes.publicData ? listing.attributes.publicData.addons_1 : null;


  const { amount: addonAmount_1, currency: addonCurrency_1 } =
    (addonFeeData_1 && addonFeeData_1[0] ? addonFeeData_1[0].price : {}) || {};
  let addonName_1 = (addonFeeData_1 && addonFeeData_1[0]) ? addonFeeData_1[0].name : "Add-on"
  if (addonName_1 == 'transportation_1' && listing.attributes && listing.attributes.publicData && listing.attributes.publicData.transportation_distance_1) {
    addonName_1 = `Delivery within ${listing.attributes.publicData.transportation_distance_1} km`
  }
  const addonFee_1 =
    addonAmount_1 && addonCurrency_1
      ? new Money(addonAmount_1, addonCurrency_1)
      : null;

      

  const addonFeeData_2 = listing.attributes && listing.attributes.publicData ? listing.attributes.publicData.addons_2 : null;


  const { amount: addonAmount_2, currency: addonCurrency_2 } =
    (addonFeeData_2 && addonFeeData_2[0] ? addonFeeData_2[0].price : {}) || {};
  let addonName_2 = (addonFeeData_2 && addonFeeData_2[0]) ? addonFeeData_2[0].name : "Add-on"
  if (addonName_2 == 'transportation_2' && listing.attributes && listing.attributes.publicData && listing.attributes.publicData.transportation_distance_2) {
    addonName_2 = `Delivery within ${listing.attributes.publicData.transportation_distance_2} km`
  }
  const addonFee_2 =
    addonAmount_2 && addonCurrency_2
      ? new Money(addonAmount_2, addonCurrency_2)
      : null;



  const handleSubmit = values => {
    const selectedAddonFee =
        values && values.additionalItems && values.additionalItems[0] === 'addonFee'
          ? addonFee
          : null;
    const selectedAddonFee_1 =
        values && values.additionalItems && values.additionalItems[0] === 'addonFee_1'
          ? addonFee_1
          : null;
    const selectedAddonFee_2 =
        values && values.additionalItems && values.additionalItems[0] === 'addonFee_2'
          ? addonFee_2
          : null;
      onSubmit({
        ...values,
        addonFee: selectedAddonFee,
        addonFee_1: selectedAddonFee_1,
        addonFee_2: selectedAddonFee_2,
    });
  };

  const price = listing.attributes.price;
  const hasListingState = !!listing.attributes.state;
  const isClosed = hasListingState && listing.attributes.state === LISTING_STATE_CLOSED;
  const showBookingDatesForm = hasListingState && !isClosed;
  const showClosedListingHelpText = listing.id && isClosed;
  const { formattedPrice, priceTitle } = priceData(price, intl);
  const isBook = !!parse(location.search).book;

  const subTitleText = !!subTitle
    ? subTitle
    : showClosedListingHelpText
    ? intl.formatMessage({ id: 'BookingPanel.subTitleClosedListing' })
    : null;

  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;

  const unitTranslationKey = isNightly
    ? 'BookingPanel.perNight'
    : isDaily
    ? 'BookingPanel.perDay'
    : 'BookingPanel.perUnit';

  const classes = classNames(rootClassName || css.root, className);
  const titleClasses = classNames(titleClassName || css.bookingTitle);

  return (
    <div className={classes}>
      <ModalInMobile
        containerClassName={css.modalContainer}
        id="BookingDatesFormInModal"
        isModalOpenOnMobile={isBook}
        onClose={() => closeBookModal(history, location)}
        showAsModalMaxWidth={MODAL_BREAKPOINT}
        onManageDisableScrolling={onManageDisableScrolling}
      >
        <div className={css.modalHeading}>
          <h1 className={css.title}>{title}</h1>
          <div className={css.author}>
            <FormattedMessage id="BookingPanel.hostedBy" values={{ name: authorDisplayName }} />
          </div>
        </div>

        <div className={css.bookingHeading}>
          <h2 className={titleClasses}>{title}</h2>
          {subTitleText ? <div className={css.bookingHelp}>{subTitleText}</div> : null}
        </div>
        {showBookingDatesForm ? (
          <BookingDatesForm
            className={css.bookingForm}
            formId="BookingPanel"
            submitButtonWrapperClassName={css.bookingDatesSubmitButtonWrapper}
            unitType={unitType}
            onSubmit={handleSubmit}
            price={price}
            isOwnListing={isOwnListing}
            timeSlots={timeSlots}
            fetchTimeSlotsError={fetchTimeSlotsError}
            addon={{addonFee, addonName}}
            addon_1={{addonFee_1, addonName_1}}
            addon_2={{addonFee_2, addonName_2}}
          />
        ) : null}
      </ModalInMobile>
      <div className={css.openBookingForm}>
        <div className={css.priceContainer}>
          <div className={css.priceValue} title={priceTitle}>
            {formattedPrice}
          </div>
          <div className={css.perUnit}>
            <FormattedMessage id={unitTranslationKey} />
          </div>
        </div>

        {showBookingDatesForm ? (
          <Button
            rootClassName={css.bookButton}
            onClick={() => openBookModal(isOwnListing, isClosed, history, location)}
          >
            <FormattedMessage id="BookingPanel.ctaButtonMessage" />
          </Button>
        ) : (
          <div className={css.closedListingButton}>
            <FormattedMessage id="BookingPanel.closedListingButtonText" />
          </div>
        )}
      </div>
    </div>
  );
};

BookingPanel.defaultProps = {
  rootClassName: null,
  className: null,
  titleClassName: null,
  isOwnListing: false,
  subTitle: null,
  unitType: config.bookingUnitType,
  timeSlots: null,
  fetchTimeSlotsError: null,
};

BookingPanel.propTypes = {
  rootClassName: string,
  className: string,
  titleClassName: string,
  listing: oneOfType([propTypes.listing, propTypes.ownListing]),
  isOwnListing: bool,
  unitType: propTypes.bookingUnitType,
  onSubmit: func.isRequired,
  title: oneOfType([node, string]).isRequired,
  subTitle: oneOfType([node, string]),
  authorDisplayName: oneOfType([node, string]).isRequired,
  onManageDisableScrolling: func.isRequired,
  timeSlots: arrayOf(propTypes.timeSlot),
  fetchTimeSlotsError: propTypes.error,

  // from withRouter
  history: shape({
    push: func.isRequired,
  }).isRequired,
  location: shape({
    search: string,
  }).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

export default compose(
  withRouter,
  injectIntl
)(BookingPanel);
