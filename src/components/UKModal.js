import React, {Component} from 'react';

export class UKModalButton extends Component {
  componentDidMount () {
    this.refs.UKToggle.setAttribute('uk-toggle', '');
  }

  render () {
    return <a className="uk-button uk-button-default" href="#modal-sections" ref="UKToggle">Open</a>;
  }
}

export class UKModal extends Component {
  componentDidMount () {
    this.refs.ukModal.setAttribute('uk-modal', 'center: true');
    this.refs.ukClose.setAttribute('uk-close', '');
  }

  render () {
    return (
      <div id="modal-sections" ref="ukModal">
        <div className="uk-modal-dialog">
          <button className="uk-modal-close-default" type="button" ref="ukClose"/>
          {this.props.children}
        </div>
      </div>
    );
  }
}
