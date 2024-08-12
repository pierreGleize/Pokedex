
import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PokemonList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">Pokédex</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<PrivateRoute element={<PokemonList />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pokemons" element={<PrivateRoute element={<PokemonList />} />} />
          <Route path="/pokemons/add" element={<PrivateRoute element={<PokemonAdd />} />} />
          <Route path="/pokemons-edit/:id" element={<PrivateRoute element={<PokemonEdit />} />} />
          <Route path="/pokemons/:id" element={<PrivateRoute element={<PokemonsDetail />} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
