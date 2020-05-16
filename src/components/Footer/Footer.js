import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { twitterPageURL } from '../../util/urlHelpers';
import config from '../../config';
import {
  IconSocialMediaFacebook,
  IconSocialMediaInstagram,
  IconSocialMediaTwitter,
  Logo,
  ExternalLink,
  NamedLink,
} from '../../components';

import css from './Footer.css';

const renderSocialMediaLinks = intl => {
  const { siteFacebookPage, siteInstagramPage, siteTwitterHandle } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' });
  const goToInsta = intl.formatMessage({ id: 'Footer.goToInstagram' });
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' });

  const fbLink = siteFacebookPage ? (
    <ExternalLink key="linkToFacebook" href={siteFacebookPage} className={css.icon} title={goToFb}>
      <IconSocialMediaFacebook />
    </ExternalLink>
  ) : null;

  const twitterLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToTwitter"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
      <IconSocialMediaTwitter />
    </ExternalLink>
  ) : null;

  const instragramLink = siteInstagramPage ? (
    <ExternalLink
      key="linkToInstagram"
      href={siteInstagramPage}
      className={css.icon}
      title={goToInsta}
    >
      <IconSocialMediaInstagram />
    </ExternalLink>
  ) : null;
  return [fbLink, instragramLink].filter(v => v != null);
};

const Footer = props => {
  const { rootClassName, className, intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          <div className={css.someLiksMobile}>{socialMediaLinks}</div>
          <div className={css.links}>
            <div className={css.organization} id="organization">
              <NamedLink name="LandingPage" className={css.logoLink}>
                <Logo format="desktop" className={css.logo} />
              </NamedLink>
              <div className={css.organizationInfo}>
                <p className={css.organizationDescription}>
                  <FormattedMessage id="Footer.organizationDescription" />
                </p>
                <p className={css.organizationCopyright}>
                  <NamedLink name="LandingPage" className={css.copyrightLink}>
                    <FormattedMessage id="Footer.copyright" />
                  </NamedLink>
                </p>
              </div>
            </div>
            <div className={css.infoLinks}>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <NamedLink name="NewListingPage" className={css.link}>
                    <FormattedMessage id="Footer.toNewListingPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="AboutPage" className={css.link}>
                    <FormattedMessage id="Footer.toAboutPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="PartnerPage" className={css.link}>
                    Partner With Eqpme
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="InsurancePage" className={css.link}>
                    Insurance
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="EquipmentAcceptPage" className={css.link}>
                    Equipment We Accept
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="CancellationsPage" className={css.link}>
                    Cancellations
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="PremiumVendorsPage" className={css.link}>
                    Premium Vendors
                  </NamedLink>
                </li>
              </ul> 
            </div>
            <div className={css.searches}>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        's?address=Toronto%2C%20Canada&bounds=48.91778053%2C-73.29316878%2C40.97447592%2C-83.23792096&mapSearch=true&pub_category=excavators',
                    }}
                    className={css.link}
                  >
                    Excavators
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '??address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=wheel-loaders',
                    }}
                    className={css.link}
                  >
                    Wheel Loaders
                  </NamedLink>
                </li>
                 <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        's?address=Toronto%2C%20Canada&bounds=48.91778053%2C-73.29316878%2C40.97447592%2C-83.23792096&mapSearch=true&pub_category=mini-excavators',
                    }}
                    className={css.link}
                  >
                    Mini Excavators
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=skid-steers',
                    }}
                    className={css.link}
                  >
                    Skid Steers
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=scissor-lifts',
                    }}
                    className={css.link}
                  >
                    Scissor Lifts
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Toronto%2C%20Canada&bounds=48.88245719%2C-73.61041019%2C40.93389415%2C-83.55516237&mapSearch=true&pub_category=boom-lifts',
                    }}
                    className={css.link}
                  >
                    Boom Lifts
                  </NamedLink>
                </li>
                 <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=telehandlers',
                    }}
                    className={css.link}
                  >
                    Telehandlers
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=rough-terrain',
                    }}
                    className={css.link}
                  >
                    Rough Terrain Forklifts
                  </NamedLink>
                </li>
                
              </ul>
            </div>
            <div className={css.searchesExtra}>
              <ul className={css.list}>
              <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=industrial-forklifts',
                    }}
                    className={css.link}
                  >
                    Industrial Forklifts
                  </NamedLink>
                </li>
               <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Toronto%2C%20Canada&bounds=48.88245719%2C-73.61041019%2C40.93389415%2C-83.55516237&mapSearch=true&pub_category=bulldozers',
                    }}
                    className={css.link}
                  >
                    Bulldozers
                  </NamedLink>
                </li>                
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=backhoe-loaders',
                    }}
                    className={css.link}
                  >
                    Backhoe Loaders
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Toronto%2C%20Canada&bounds=46.99865311%2C-76.09659823%2C43.02437064%2C-81.06897432&pub_category=articulating-trucks',
                    }}
                    className={css.link}
                  >
                    Articulating Trucks
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Toronto%2C%20Canada&bounds=48.88245719%2C-73.61041019%2C40.93389415%2C-83.55516237&pub_category=mini-excavators',
                    }}
                    className={css.link}
                  >
                    Cranes
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Toronto%2C%20Canada&bounds=48.88245719%2C-73.61041019%2C40.93389415%2C-83.55516237&pub_category=mini-excavators',
                    }}
                    className={css.link}
                  >
                    Compaction
                  </NamedLink>
                </li>
                 <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Toronto%2C%20Canada&bounds=48.88245719%2C-73.61041019%2C40.93389415%2C-83.55516237&pub_category=generators-compressors',
                    }}
                    className={css.link}
                  >
                    Generators & Compressors
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Toronto%2C%20Canada&bounds=48.88245719%2C-73.61041019%2C40.93389415%2C-83.55516237&pub_category=attachments',
                    }}
                    className={css.link}
                  >
                    Attachments
                  </NamedLink>
                </li>
              </ul>
            </div>
            <div className={css.extraLinks}>
              <div className={css.someLinks}>{socialMediaLinks}</div>
              <div className={css.legalMatters}>
                <ul className={css.tosAndPrivacy}>
                  <li>
                    <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                      <FormattedMessage id="Footer.termsOfUse" />
                    </NamedLink>
                  </li>
                  <li>
                    <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.privacyPolicy" />
                    </NamedLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={css.copyrightAndTermsMobile}>
            <NamedLink name="LandingPage" className={css.organizationCopyrightMobile}>
              <FormattedMessage id="Footer.copyright" />
            </NamedLink>
            <div className={css.tosAndPrivacyMobile}>
              <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                <FormattedMessage id="Footer.privacy" />
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.terms}>
                <FormattedMessage id="Footer.terms" />
              </NamedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  rootClassName: null,
  className: null,
};

Footer.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
