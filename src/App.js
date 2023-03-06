import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => 
      this.setState(
        () => {
          return {monsters: users};
        },
        () => {
          console.log(this.state);
        }
      )
    )
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=> {
      return {searchField};
    });
  };

  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className='App'>
      <div className='p-2 mt-3 d-flex justify-content-center' style={{width: "99.7%"}}>
        <img alt='halloween recruit' src='../halloweenrecruit.png' style={{width: "14rem"}} />
      </div>
      <SearchBox className="monsters-search-box" placeholder="Search for Monsters" onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
