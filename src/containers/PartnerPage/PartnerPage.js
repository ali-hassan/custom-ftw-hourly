import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './PartnerPage.css';
import image from './about-us-1056.jpg';

const PartnerPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Partner with eqpme"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PartnerPage',
        description: 'Partner with the eqpme community',
        name: 'Partner With Us',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>

          <div className={css.root}>
            <div className={css.heroContent}>
              <h1 className={css.heroMainTitle}>
                Partner With Our Community
              </h1>
              <h2 className={css.heroSubTitle}>
               Tap into our community & build more awareness and revenue.
              </h2>
            </div>
          </div>

          <div className={css.contentWrapper}>
          
            <h2 className={css.subtitle} >Who We Partner With:</h2>

            <div className={css.columnSection}>
              <div className={css.columThree}>
                <h3 className={css.subsubtitle}>1. Rental Shops</h3>
                <p>Easily list your boards, wetsuits, and other inventory on our marketplace. Put your inventory to work</p>
              </div>
              <div className={css.columThree}>
                <h3 className={css.subsubtitle}>2. Business Owners</h3>
                <p>Increase your brand exposure through our marketplace and even offer equipment demos!</p>
              </div>
              <div className={css.columThree}>
                <h3 className={css.subsubtitle}>3. Industry Brands</h3>
                <p>Introduce your wetsuit, accessory, or surfing brand to our community and offer demos.</p>
              </div>
            </div>

            <div className={css.rootQuote}>
              <div className={css.quote}>
                <h3 className={css.quoteTitle}>
                  "Eqpme has allowed us to put our used inventory to work and start renting again. This has helped build our business and also increased annual revenue!"
                </h3>
                <p className={css.quoteAuthor}>
                 - Mathew Morettin 
                </p>
              </div>
            </div>

            <h2 className={css.subtitleCenter} >List Your First Machine Today</h2>
            <p className={css.ctaText}>To get started, please list your piece of equipment, enter our details, and you'll be infront of eager business owners looking to rent. Generate additional revenue and tap into our community today.</p>
            <div className={css.buttonWrap}>
              <a href='/l/new' className={css.button}>List Your Equipment</a>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default PartnerPage;
