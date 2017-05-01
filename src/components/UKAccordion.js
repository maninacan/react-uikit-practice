import React, {Component} from 'react';

class UKAccordian extends Component {
  componentDidMount() {
    this.refs.ukAccordion.setAttribute('uk-accordion', '');
  }

  render () {
    return (
      <ul ref="ukAccordion">
        {this.props.children}
      </ul>
    )
  }
}

export default UKAccordian;