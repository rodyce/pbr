import React, { Component } from 'react';
import { orders } from './data'

class Home extends Component {
  render() {
    return (
      <div className="px-6 h-screen overflow-auto">
        <h1 className="text-white my-6 text-left mb-12">Dashboard</h1>
        <div style={{ width: 'max-content' }} className="p-6 shadow bg-indigo-darker rounded w-full flex flex-row justify-between items-center">
          <h3 style={{ fontSize: '6rem' }} className="text-5xl text-white pr-3 rounded font-bold">5</h3>
          <div>
            <h1 className="text-white text-left font-semibold">Offers</h1>
            <p className="text-white text-left font-light">Number of offers</p>
          </div>
        </div>
        <h2 className="text-white my-6 text-left mt-12 font-normal">My Offers</h2>
        <div className="flex flex-wrap">
          {orders.map((order, i) => {
            return (
              <div className="p-3 mr-6 my-6 w-1/2 shadow bg-indigo-darker rounded w-1/3 flex flex-col items-center">
                <div className="flex flex-row justify-around items-center w-full">
                  <p className="text-white text-center text-4xl font-bold">{order.valueA}</p>
                  <h4 className="text-white text-center text-xl font-bold">{order.typeA}</h4>
                </div>
                <div className="flex flex-row justify-around items-center w-full">
                  <p className="text-white text-center text-4xl font-bold">{order.valueB}</p>
                  <h4 className="text-white text-center text-xl font-bold">{order.typeB}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Home;
