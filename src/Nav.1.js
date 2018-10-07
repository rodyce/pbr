import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaTachometerAlt, FaMoneyBill, FaHandHolding, FaUserCircle } from 'react-icons/fa';

import Home from './Home'
import Buy from './Buy'
import Sell from './Sell'

export const Nav = () => (
  <Router>
    <div className="flex flex-row">
      <div className="w-1/4 h-screen bg-indigo-darker">
        <Link className="text-4xl font-bold text-white no-underline" to="/">
          <p className="mb-6 text-left pl-6 py-3 bg-indigo text-white">
            PBR
          </p>
        </Link>
        <Link className="pl-6 flex flex-row items-center text-xl text-indigo-lighter hover:text-white no-underline" to="/">
          <FaTachometerAlt />

          <p className="py-6 text-left pl-6">
            Dashboard
            </p>
        </Link>
        <Link className="pl-6 flex flex-row items-center text-xl text-indigo-lighter hover:text-white no-underline" to="/profile">
          <FaUserCircle />

          <p className="py-6 text-left pl-6">
            Profile
            </p>
        </Link>
        <Link className="pl-6 flex flex-row items-center justify-start text-xl text-indigo-lighter hover:text-white no-underline" to="/buy">
          <FaMoneyBill />
          <p className="py-6 text-left pl-6">
            Buy
            </p>
        </Link>
        <Link className="pl-6 flex flex-row items-center text-xl text-indigo-lighter hover:text-white no-underline" to="/sell">
          <FaHandHolding />
          <p className="py-6 text-left pl-6">
            Sell
            </p>
        </Link>
      </div>

      <div className="w-3/4 bg-indigo-darkest">
        <Route exact path="/" component={Home} />
        <Route path="/buy" component={Buy} />
        <Route path="/sell" component={Sell} />
      </div>
    </div>
  </Router>
);