import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionSpecificationsMaybe = props => {
  const { options, publicData } = props;
  if (!publicData) {
    return null;
  }

  const specifications = [
    {name: 'Manufacturer Year', value: publicData.year},
    {name: 'Weight/Size', value: publicData.size},
    {name: 'Hours of Use', value: publicData.hours},
  ]
  return (
    <div className={css.sectionParent}>
    {specifications.map(spec => (
      <div key={spec.name} className={css.sectionFeatures}>
        <h2 className={css.featuresTitle}>
          {spec.name}
        </h2>
        <p className={css.description}>
          {spec.value}
        </p>
      </div>
    ))}
    </div>
  );
};

export default SectionSpecificationsMaybe;
