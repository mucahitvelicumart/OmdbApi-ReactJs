import React from 'react'
import { MovieProvider } from './Context/MovieContext';
import { SearchUrlProvider } from './Context/SearchUrlContext';
import HeaderComponent from './main/HeaderComponent';
function App() {
  return (
    <MovieProvider>
          <SearchUrlProvider>
            <HeaderComponent />
          </SearchUrlProvider>
    </MovieProvider>
  );
}
export default App;
