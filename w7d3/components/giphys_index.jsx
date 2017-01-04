import React, { Component } from 'react';
import giphyIndexItems from 'giphys_index_items';


class GiphysIndex extends Component {

  render() {
    const { giphys } = this.props;
    return (
      <div>
        <ul>
          { giphyIndexItems(giphys) }
        </ul>
      </div>
    );
  }
}

export default GiphysIndex;
