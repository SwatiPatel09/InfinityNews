import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export class App extends Component {
  //static propTypes = {};

  //apikey=process.env.REACT_App_NEWS_api; 

  apikey="3b0c06a38c3c424ead22e307b1c78447";

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (<div>
      <Router>
        <LoadingBar
          color='#f11946'
          height={3}
          progress={this.state.progress}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={5} country="in" category="general" bagdeColor="info" />} />
          <Route exact path="/science" element={<News  setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={5} country="in" category="science" bagdeColor="success" />} />
          <Route exact path="/technology" element={<News  setProgress={this.setProgress} apikey={this.apikey}  key="technology" pageSize={5} country="in" category="technology" bagdeColor="secondary" />} />
          <Route exact path="/business" element={<News   setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={5} country="in" category="business" bagdeColor="dark" />} />
          <Route exact path="/entertainment" element={<News   setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={5} country="in" category="entertainment" bagdeColor="warning" />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={5} country="in" category="health" bagdeColor="danger" />} />
          <Route exact path="/sports" element={<News  setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={5} country="in" category="sports" bagdeColor="primary" />} />
        </Routes>
      </Router>

    </div>);
  }
}

export default App;
