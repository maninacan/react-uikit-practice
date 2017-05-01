import React, {Component} from 'react';

class UKAccordion extends Component {
  constructor(props) {
    super(props);

    let attributeVal = '';
    if (props.multiple) {
      attributeVal = 'multiple: true'
    } else if (props.collapsible === false) {
      attributeVal = 'collapsible: false'
    }
    this.state = {
      attributeVal
    }
  }

  componentDidMount() {
    this.refs.ukAccordion.setAttribute('uk-accordion', this.state.attributeVal);
  }

  render () {
    return (
      <ul ref="ukAccordion">
        {
          this.props.items.map((item, i) => (
            <li key={i} className={item.open ? 'uk-open': ''}>
              <h3 className="uk-accordion-title">{item.title}</h3>
              <div className="uk-accordion-content">
                <p>{item.content}</p>
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default UKAccordion;