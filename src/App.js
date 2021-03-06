import React from "react";
import ProductTable from "./components/ProductTable.js";
import SearchBar from "./components/SearchBar.js";
import NavBar from "./components/NavBar.js"

// Filterable product table
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange(inStockOnly)  {
    this.setState({
      inStockOnly: inStockOnly
    });
  }

  render() {
    return (
      <div className="table-container">
        <NavBar filterText={this.state.filterText}/>
        <NavBar />
        <NavBar />
        <NavBar />
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default App;
