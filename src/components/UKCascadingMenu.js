import React, {Component} from 'react';

class UKCascadingMenu extends Component {
  componentDidMount() {
    this.refs.ukDropdown.setAttribute('uk-dropdown', '');
  }

  render() {
    return (
      <div className="uk-inline">
        <button className="uk-button uk-button-default" type="button">Cascading Menu</button>
        <div ref="ukDropdown">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default UKCascadingMenu;