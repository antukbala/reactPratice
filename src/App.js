import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      apiList: [
        {
          API: "TL Ops",
          Link: 'n.trucklagbe.com'
        },
        {
          API: "Notify",
          Link: 'n.trucklagbe.com'
        },
        {
          API: "App API",
          Link: 'n.trucklagbe.com'
        },
        {
          API: "Admin Get",
          Link: 'n.trucklagbe.com'
        },
        {
          API: "Admin Post",
          Link: 'n.trucklagbe.com'
        },
        {
          API: "GPS",
          Link: 'n.trucklagbe.com'
        },
        {
          API: "BKASH pgw",
          Link: 'n.trucklagbe.com'
        },
        
      ]
    }
  }

  // async componentDidMount() {
  //   try {
  //     const response = await (await fetch('https://api.publicapis.org/entries')).json();
  //     this.setState({apiList: response.entries});
  //   } catch (error) {
  //     console.log(error);
  //     return;
  //   }
  // }

  render() {
    const searchResult = this.state.apiList.filter((item)=>{
      return item.API.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <header className="App-header">
          <input className='search-box' type='search' placeholder='search name' onChange={(event)=>{
            const searchField = event.target.value.toLowerCase();
            console.log(searchField);
            this.setState(()=>{
              return { searchField };
            })
          }}/>
          <img src={logo} className="App-logo" alt="logo" />
          {searchResult.map((api)=>{
            return <div key={api.API}><h1>{api.API}, {api.Link}</h1></div>;
          })}
        </header>
      </div>
    );
  }
}

export default App;
