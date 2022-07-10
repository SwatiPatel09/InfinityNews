import React, { Component } from 'react';
import load from './load.gif';

export class Spinner extends Component {
  render() {
    return <div className='text-center' style={{height:'auto',width:'100%'}}>
        <img className="my-3" src={load} style={{width:"2%",height:"2%"}} alt="" />
    </div>;
  }
}

export default Spinner;
