import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { TopbarContainer } from '../../containers';
import {
  Page,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Cancellations,
  Footer,
} from '../../components';
import config from '../../config';

import css from './CancellationsPage.css';

const CancellationsPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = [   
    {
      text: intl.formatMessage({ id: 'PrivacyPolicyPage.tosTabTitle' }),
      selected: false,
      linkProps: {
        name: 'TermsOfServicePage',
      },
    },
    {
      text: intl.formatMessage({ id: 'PrivacyPolicyPage.privacyTabTitle' }),
      selected: false,
      linkProps: {
        name: 'PrivacyPolicyPage',
      },
    },
    {
      text: 'Community',
      selected: false,
      linkProps: {
        name: 'CommunityGuidelinesPage',
      },
    },
    {
      text: 'Cancellations',
      selected: true,
      linkProps: {
        name: 'CancellationsPage',
      },
    },
    {
      text: 'Acceptance Criteria',
      selected: false,
      linkProps: {
        name: 'EquipmentAcceptPage',
      },
    },
    {
      text: 'Premium Vendors',
      selected: false,
      linkProps: {
        name: 'PremiumVendorsPage',
      },
    },
    {
      text: 'Insurance',
      selected: false,
      linkProps: {
        name: 'InsurancePage',
      },
    },
  ];
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'PrivacyPolicyPage.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="PrivacyPolicyPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              Community Guidelines
            </h1>
            <Cancellations />
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigation>
    </Page>
  );
};

const { bool } = PropTypes;

CancellationsPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const CancellationsPage = compose(
  connect(mapStateToProps),
  injectIntl
)(CancellationsPageComponent);

export default CancellationsPage;
