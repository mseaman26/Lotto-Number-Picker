import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';

import Home from './pages/Home'
import Login from './pages/Login';
import SuperLottoPlus from './pages/SuperLottoPlus';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route 
            path='/login'
            element={<Login />}
          />
          <Route 
            path='/'
            element={<Home />}
          />
          <Route 
            path='/super_lotto_plus'
            element={<SuperLottoPlus />}
          />          
        </Routes>
       
      </Router>
     
    </ApolloProvider>
  );
}

//the following one renders the word hello

// function App() {
//   return (
//     <ApolloProvider client={client}>
//     hello 
//     </ApolloProvider>
//   );
// }

export default App;
