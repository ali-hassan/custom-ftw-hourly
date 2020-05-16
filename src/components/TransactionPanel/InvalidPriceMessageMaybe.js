import React from 'react';
import Decimal from 'decimal.js';
import {
  LINE_ITEM_NIGHT,
  LINE_ITEM_PROVIDER_COMMISSION,
} from '../../util/types';
import { nightsBetween, daysBetween } from '../../util/dates';
import { convertMoneyToNumber } from '../../util/currency';
import { types as sdkTypes } from '../../util/sdkLoader';
import config from '../../config';

import css from './TransactionPanel.css';

const { Money } = sdkTypes;

const InvalidPriceMessageMaybe = props => {
  const { transaction, listing, transactionRole, intl } = props;
  const loaded =
    transaction &&
    transaction.id &&
    transaction.booking &&
    transaction.booking.id;
  if (!loaded) {
    return null;
  }

  const unitType = config.bookingUnitType;

  const isProvider = transactionRole === 'provider';
  const isNightly = unitType === LINE_ITEM_NIGHT;
  const { start, end } = transaction.booking.attributes;
  const quantity = isNightly
    ? nightsBetween(start, end)
    : daysBetween(start, end);

  // expected booking total
  const listingUnitPrice = listing.attributes.price;
  const listingNumericUnitPrice = convertMoneyToNumber(
    listingUnitPrice
  );
  const listingUnitTotal = new Decimal(listingNumericUnitPrice)
    .times(quantity)
    .toNumber();

  // expected addon fee total
  const listingAddonFeeData =
    listing.attributes.publicData.addonFee;
  const { amount: addonAmount, currency: addonCurrency } =
    listingAddonFeeData || {};
  const listingAddonFeePrice =
    addonAmount && addonCurrency
      ? new Money(addonAmount, addonCurrency)
      : null;
  const listingAddonFeeTotal = listingAddonFeePrice
    ? convertMoneyToNumber(listingAddonFeePrice)
    : null;

    const listingAddonFeeData_1 =
      listing.attributes.publicData.addonFee_1;
    const { amount: addonAmount_1, currency: addonCurrency_1 } =
      listingAddonFeeData_1 || {};
    const listingAddonFeePrice_1 =
      addonAmount_1 && addonCurrency_1
        ? new Money(addonAmount_1, addonCurrency_1)
        : null;
    const listingAddonFeeTotal_1 = listingAddonFeePrice_1
      ? convertMoneyToNumber(listingAddonFeePrice_1)
      : null;

      const listingAddonFeeData_2 =
        listing.attributes.publicData.addonFee_2;
      const { amount: addonAmount_2, currency: addonCurrency_2 } =
        listingAddonFeeData_2 || {};
      const listingAddonFeePrice_2 =
        addonAmount_2 && addonCurrency_2
          ? new Money(addonAmount_2, addonCurrency_2)
          : null;
      const listingAddonFeeTotal_2 = listingAddonFeePrice_2
        ? convertMoneyToNumber(listingAddonFeePrice_2)
        : null;

  // provider commission
  const providerCommissionLineItem = transaction.attributes.lineItems.find(
    item =>
      item.code === LINE_ITEM_PROVIDER_COMMISSION && !item.reversal
  );
  const providerCommissionTotal = providerCommissionLineItem
    ? convertMoneyToNumber(providerCommissionLineItem.lineTotal)
    : 0;

  // check that the expected booking total + addon fee + provider commission
  // match the payout total of the transaction
  const payoutTotal = convertMoneyToNumber(
    transaction.attributes.payoutTotal
  );
  const expectedPayoutTotal = new Decimal(listingUnitTotal)
    .plus(listingAddonFeeTotal)
    .plus(listingAddonFeeTotal_1)
    .plus(listingAddonFeeTotal_2)
    .plus(providerCommissionTotal)
    .toNumber();
  const priceInvalid = expectedPayoutTotal !== payoutTotal;

  const message = intl.formatMessage({
    id: 'BookingBreakdown.invalidPrice',
  });
  const showMessage = isProvider && priceInvalid;
  return showMessage ? (
    <p className={css.invalidPriceMessage}>{message}</p>
  ) : null;
};

export default InvalidPriceMessageMaybe;
