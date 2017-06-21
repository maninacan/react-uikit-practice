import React, {Component} from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import UKAccordion from './components/UKAccordion';
import {UKModalButton, UKModal} from './components/UKModal';
import UKCascadingMenu from './components/UKCascadingMenu';
import 'uikit/dist/css/uikit.min.css';
import './App.css';

UIkit.use(Icons);

UIkit.notification('Hello world.');

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1>Hi</h1>
        <UKAccordion
          items={[
            {
              open: true,
              title: 'Item 1',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
              title: 'Item 2',
              content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.'
            },
            {
              title: 'Item 3',
              content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.'
            }
          ]}
          multiple={true}
        />
        <UKModalButton/>
        <div className="uk-margin">
          <div className="uk-form-label">Radio</div>
          <div className="uk-form-controls">
            <label><input className="uk-radio" type="radio" name="radio1"/> Option 01</label><br/>
            <label><input className="uk-radio" type="radio" name="radio1"/> Option 02</label>
          </div>
        </div>
        <UKModal>
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Modal Title</h2>
          </div>
          <div className="uk-modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
            <div className="uk-margin">
              <div className="uk-form-label">Radio</div>
              <div className="uk-form-controls">
                <label><input className="uk-radio" type="radio" name="radio1"/> Option 01</label><br/>
                <label><input className="uk-radio" type="radio" name="radio1"/> Option 02</label>
              </div>
            </div>
          </div>
          <div className="uk-modal-footer uk-text-right">
            <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
            <button className="uk-button uk-button-primary" type="button">Save</button>
          </div>
        </UKModal>
        <UKCascadingMenu>
          <ul className="uk-list">
            <li>
              <UKCascadingMenu>
                <ul className="uk-list">
                  <li>
                    Item 4
                  </li>
                  <li>
                    Item 5
                  </li>
                  <li>
                    Item 6
                  </li>
                </ul>
              </UKCascadingMenu>
            </li>
            <li>
              Item 2
            </li>
            <li>
              Item 3
            </li>
          </ul>
        </UKCascadingMenu>
      </div>
    );
  }
}

export default App;
