import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
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
    return (
      <div className="App">
        <header className="App-header">
          <input className='search-box' type='search' placeholder='search name' onChange={(event)=>{
            const searchString = event.target.value.toLocaleLowerCase();
            const searchResult = this.state.apiList.filter((item)=>{
              return item.API.toLocaleLowerCase().includes(searchString);
            });
            this.setState(()=>{
              return { apiList : searchResult };
            })
          }}/>
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.apiList.map((api)=>{
            return <div key={api.API}><h1>{api.API}, {api.Link}</h1></div>;
          })}
        </header>
      </div>
    );
  }
}

export default App;
