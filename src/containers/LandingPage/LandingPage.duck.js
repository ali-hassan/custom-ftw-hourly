import { storableError } from '../../util/errors';
import { denormalisedResponseEntities } from '../../util/data';
import { types as sdkTypes } from '../../util/sdkLoader';
const { UUID } = sdkTypes;

// ================ Action types ================ //

export const FETCH_LISTINGS_REQUEST = 'app/LandingPage/FETCH_LISTINGS_REQUEST';
export const FETCH_LISTINGS_SUCCESS = 'app/LandingPage/FETCH_LISTINGS_SUCCESS';
export const FETCH_LISTINGS_ERROR = 'app/LandingPage/FETCH_LISTINGS_ERROR';

// ================ Reducer ================ //

const initialState = {
  pagination: null,
  searchInProgress: false,
  fetchListingsError: null,
  currentPageResults: [],
};

const landingPageReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_LISTINGS_REQUEST:
      return {
        ...state,
        searchInProgress: true,
        searchMapListingIds: [],
        fetchListingsError: null,
      };
    case FETCH_LISTINGS_SUCCESS:
      return {
        ...state,
        currentPageResults: payload.listings,
        pagination: payload.meta,
        searchInProgress: false,
      };
    case FETCH_LISTINGS_ERROR:
      // eslint-disable-next-line no-console
      console.error(payload);
      return { ...state, searchInProgress: false, fetchListingsError: payload };

    default:
      return state;
  }
};

export default landingPageReducer;

// ================ Action creators ================ //

export const fetchListingsRequest = () => ({
  type: FETCH_LISTINGS_REQUEST,
});

export const fetchListingsSuccess = (listings, meta) => ({
  type: FETCH_LISTINGS_SUCCESS,
  payload: { listings, meta },
});

export const fetchListingsError = e => ({
  type: FETCH_LISTINGS_ERROR,
  error: true,
  payload: e,
});

export const fetchPremiumListings = searchParams => (dispatch, getState, sdk) => {
  dispatch(fetchListingsRequest());

  const { perPage, ...rest } = searchParams;
  const params = {
    ...rest,
    per_page: perPage,
  };

  return sdk.listings
    .query(params)
    .then(response => {
      const allGetReviewsPromises = [];
      //for each listing we got we now need to query it's Reviews seperately(!!!!!!)
      //then, average out the stars
      const listings = response.data ? response.data.data : null;
      for (var i = 0; i < listings.length; i++) {
        var listingId = listings[i].id.uuid;
        allGetReviewsPromises.push(
          sdk.reviews
            .query({
              listingId: new UUID(listingId),
            })
            .then(res => {
              return res.data;
            })
        );
      }

      Promise.all(allGetReviewsPromises).then(values => {

        let studios = response.data.data;

        for (var j = 0; j < studios.length; j++) {
          studios[j].attributes.avgStarRating = appendAvgReview(studios[j], values[j].data);
          studios[j].attributes.totalReviews = values[j].data.length;
        }

        const entities = denormalisedResponseEntities(response);
        dispatch(fetchListingsSuccess(entities, response.data.meta));
        return response;

        function appendAvgReview(studio, reviews) {
          let starSum = 0;
          const totalReviews = reviews.length;

          if (!totalReviews) {
            return null;
          }

          for (var k = 0; k < reviews.length; k++) {
            starSum += reviews[k].attributes.rating;
          }

          return Math.round(starSum / totalReviews);
        }
      });

      /*
      const entities = denormalisedResponseEntities(response);
      dispatch(fetchListingsSuccess(entities, response.data.meta));
      return response;
      */
    })
    .catch(e => {
      dispatch(fetchListingsError(storableError(e)));
      throw e;
    });
};



// WEBPACK FOOTER //
// ./src/containers/LandingPage/LandingPage.duck.js
