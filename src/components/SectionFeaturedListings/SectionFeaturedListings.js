import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import classNames from 'classnames';
import { types as sdkTypes } from '../../util/sdkLoader';

import { ListingCard } from '../../components';

import { compose } from 'redux';
import { connect } from 'react-redux';

import css from './SectionFeaturedListings.css';
import { getListingsById } from '../../ducks/marketplaceData.duck';
const { UUID } = sdkTypes;

const SectionFeaturedListingsComponent = props => {
  const { rootClassName, className, getListing } = props;

  const classes = classNames(rootClassName || css.root, className);

  // Panel width relative to the viewport
  const panelMediumWidth = 50;
  const panelLargeWidth = 62.5;
  const cardRenderSizes = [
    '(max-width: 767px) 100vw',
    `(max-width: 1023px) ${panelMediumWidth}vw`,
    `(max-width: 1920px) ${panelLargeWidth / 2}vw`,
    `${panelLargeWidth / 3}vw`,
  ].join(', ');

  const listings = [getListing(new UUID('5e7b6e0b-aa0f-40e5-a8ea-8d1300ab3c90')), getListing(new UUID('5e7b6e0b-aa0f-40e5-a8ea-8d1300ab3c90')), getListing(new UUID('5e7b6e0b-aa0f-40e5-a8ea-8d1300ab3c90'))]
  return (
    <div className={classes}>
      <div className={css.listingCards}>
        {listings.map(l => (
          <ListingCard
            className={css.listingCard}
            key={l.id.uuid}
            listing={l}
            renderSizes={cardRenderSizes}
          />
        ))}
        {props.children}
      </div>
    </div>
  );
};

SectionFeaturedListingsComponent.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionFeaturedListingsComponent.propTypes = {
  rootClassName: string,
  className: string,
};

const mapStateToProps = state => {

  const getListing = id => {
    console.log(id)
    const ref = id;
    const listings = getListingsById(state, [ref]);
    console.log(listings)
    return listings.length === 1 ? listings[0] : null;
  };

  return {
    getListing,
  };
};

const SectionFeaturedListings = compose(
  connect(
    mapStateToProps,
  ),
  injectIntl
)(SectionFeaturedListingsComponent);

export default SectionFeaturedListings;
