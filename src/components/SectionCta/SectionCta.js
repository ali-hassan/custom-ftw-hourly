import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionCta.css';

import excavatorImage from './images/excavator.jpg';
import bulldozerImage from './images/bulldozer.jpg';
import skidsteerImage from './images/skid-steer.jpg';
import wheelloaderImage from './images/wheel-loader.jpg';
import telehandlerImage from './images/telehandler.jpg';
import roughterrainforkliftImage from './images/rough-terrain-forklift.jpg';
import industrialforkliftImage from './images/industrial-forklift.jpg';
import scissorliftImage from './images/scissor-lift.jpg';
import miniexcavatorImage from './images/mini-excavator.jpg';
import backhoeImage from './images/backhoe.jpg';
import boomliftImage from './images/boom-lift.jpg';
import attachmentImage from './images/attachment.jpg';
import craneImage from './images/crane.jpg';
import compactionImage from './images/compaction.jpg';
import equipmentImage from './images/attachment.jpg';
import articulatingtruckImage from './images/articulating-truck.jpg';
import genncomImage from './images/generator-compaction.jpg';



class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionCta = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
        <p>Find equipment nearby and explore options around you.</p>
      </div>
      <div className={css.locations}>
        {locationLink(
          'Excavators',
          excavatorImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=excavators'
        )}
        {locationLink(
          'Wheel Loaders',
          wheelloaderImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=wheel-loaders'
        )}
        {locationLink(
          'Mini Excavators',
          miniexcavatorImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=mini-excavators'
        )}
        {locationLink(
          'Skid Steers',
          skidsteerImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=skid-steers'
        )}
        
         {locationLink(
          'Scissor Lifts',
          scissorliftImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=scissor-lifts'
        )}
        {locationLink(
          'Boom Lifts',
          boomliftImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=boom-lifts'
        )}
        {locationLink(
          'Telehandlers',
          telehandlerImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=telehandlers'
        )}

        {locationLink(
          'Rough Terrain Forklifts',
          roughterrainforkliftImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=rough-terrain'
        )}
        
        {locationLink(
          'Industrial Forklifts',
          industrialforkliftImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=industrial-forklifts'
        )}
        {locationLink(
          'Bulldozers',
          bulldozerImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=bulldozers'
        )}
        {locationLink(
          'Backhoe Loaders',
          backhoeImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=backhoes'
        )}
        {locationLink(
          'Articulating Trucks',
          articulatingtruckImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=articulating-trucks'
        )}
        {locationLink(
          'Cranes',
          craneImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=cranes'
        )}
        {locationLink(
          'Compaction',
          compactionImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=compaction'
        )}  
        {locationLink(
          ' Generators & Compressors',
          genncomImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=generators-compressors'
        )}
        {locationLink(
          'Attachments',
          attachmentImage,
          '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=attachments'
        )}
        
      </div>
    </div>
  );
};

SectionCta.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionCta.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionCta;
