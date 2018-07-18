import React, {Component} from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null,
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchItems();
  }

  fetchItems = () => {
    fetch('/api/fruit')
    .then(response => response.json())
    .then(items => this.setState({ fruit: items }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters: filters }));
  }

  handleFilterChange = (event) => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render () {

    return (
      <div>
        <FruitBasket>
          <Filter handleChange={this.handleFilterChange} filters={this.state.filters}/>
          <FilteredFruitList fruit={this.state.fruit} filter={this.state.currentFilter}/>
        </FruitBasket>
      </div>
    )
  }  
}

export default App;
