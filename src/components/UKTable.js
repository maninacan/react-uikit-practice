import React, {Component} from 'react';

class UKTable extends Component {
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
    this.refs.ukTable.setAttribute('uk-table', this.state.attributeVal);
  }

  render () {
    return (
      <table ref="ukTable">
        <caption>Table Caption</caption>
        <thead>
        <tr>
          <th>Table Heading</th>
          <th>Table Heading</th>
          <th>Table Heading</th>
        </tr>
        </thead>
        <tfoot>
        <tr>
          <td>Table Footer</td>
          <td>Table Footer</td>
          <td>Table Footer</td>
        </tr>
        </tfoot>
        <tbody>
        <tr>
          <td>Table Data</td>
          <td>Table Data</td>
          <td>Table Data</td>
        </tr>
        <tr>
          <td>Table Data</td>
          <td>Table Data</td>
          <td>Table Data</td>
        </tr>
        </tbody>
      </table>
    );
  }
}

export default UKTable;