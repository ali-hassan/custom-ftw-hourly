import React, {Component} from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';
import { OnChange } from 'react-final-form-listeners'

import css from './EditListingDescriptionForm.css';

class CustomCategoryWithSizesField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSizes: null,
      currentCategory: null,
      extensions: null,
    };
  }

  render() {
    const { name, id, categories, sizes, intl } = this.props;
    const categoryLabel = intl.formatMessage({
      id: 'EditListingDescriptionForm.categoryLabel',
    });
    const categoryPlaceholder = intl.formatMessage({
      id: 'EditListingDescriptionForm.categoryPlaceholder',
    });
    const categoryRequired = required(
      intl.formatMessage({
        id: 'EditListingDescriptionForm.categoryRequired',
      })
    );

    const sizeLabel = intl.formatMessage({
      id: 'EditListingDescriptionForm.sizeLabel',
    });
    const sizePlaceholder = intl.formatMessage({
      id: 'EditListingDescriptionForm.sizePlaceholder',
    });
    const sizeRequired = required(
      intl.formatMessage({
        id: 'EditListingDescriptionForm.sizeRequired',
      })
    );

    const selectPlaceholder = intl.formatMessage({
      id: 'EditListingDescriptionForm.selectPlaceholder',
    });

    const _this = this;
    return categories ? (
      <div>
      <FieldSelect
        className={css.category}
        name={name}
        id={id}
        label={categoryLabel}
        validate={categoryRequired}
      >
        <option disabled value="">
          {categoryPlaceholder}
        </option>
        {categories.map(c => (
          <option key={c.key} value={c.key}>
            {c.label}
          </option>
        ))}
      </FieldSelect>
      <OnChange name={name}>
        {(val,prev) => {
          let category = categories.find(c => c.key == val)
          let size_lookup = val
          if (category && category.extensions) {
            _this.setState({..._this.state, extensions: [category.extensions[0]] , currentCategory: category})
          } else {
            _this.setState({..._this.state, currentSizes: _this.props.sizes[size_lookup], extensions: null, currentCategory: category})
          }
        }}
      </OnChange>
      <OnChange name={"sub_category"}>
          {(val,prev) => {
            let category = this.state.currentCategory
            let size_lookup = `${category.key}-${val}`
            _this.setState({..._this.state, currentSizes: _this.props.sizes[size_lookup]})
          }}
      </OnChange>
      {this.state.extensions ?
      <FieldSelect
        className={css.category}
        name="sub_category"
        id={id}
        label={this.state.extensions[0].question}
      >
        <option disabled value="">
          {selectPlaceholder}
        </option>
        {this.state.extensions[0].options.map(c => (
          <option key={c.key} value={c.key}>
            {c.label}
          </option>
        ))}
      </FieldSelect> : null
      }
      {this.state.currentSizes ?
      <FieldSelect
        className={css.category}
        name="size"
        id={id}
        label={sizeLabel}
        validate={sizeRequired}
      >
        <option disabled value="">
          {sizePlaceholder}
        </option>
        {_this.state.currentSizes.map(c => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </FieldSelect> : null
      }
      </div>
    ) : null;
  }
};

export default CustomCategoryWithSizesField;
