import './scss/App.scss';
import { BrowserRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import GlobalContextProvider from './Context';
import { useState } from 'react';
import { CardList } from './pages/CardList';
import { ShopList } from './pages/ShopList';
import { AgendaList } from './pages/AgendaList';
import { ToDoList } from './pages/ToDoList';

function App() {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);
	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	return (
		<BrowserRouter >
      <nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
        <a
          className='navbar-brand'
          href='/pages/CardList'>
          <img src='/img/reactJS.png' alt='react-icon'/>
        </a>
        <button
          onClick={handleNavCollapse}
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#newNavBar'
          aria-controls='newNavBar'
          aria-expanded={!isNavCollapsed && true}>
        <span className='navbar-toggler-icon'/>
        </button>
        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id='newNavBar'>
          <ul className='navbar-nav mx-auto text-center'>
            <li className='nav-item'>
            <NavLink
              className='nav-link'
              activeClassName='active-style'
              to='/pages/CardList'>
              Card List
            </NavLink>
            </li>
            <li className='nav-item'>
            <NavLink
              className='nav-link'
              activeClassName='active-style'
              to='/pages/ShopList'>
              Shop List
            </NavLink>
            </li>
            <li className='nav-item'>
            <NavLink
              className='nav-link'
              activeClassName='active-style'
              to='/pages/AgendaList'>
              Agenda List
            </NavLink>
            </li>
            <li className='nav-item'>
            <NavLink
              className='nav-link'
              activeClassName='active-style'
              to='/pages/ToDoList'>
              ToDo List
            </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <GlobalContextProvider>
          <Route exact path='/'>
            <Redirect to= '/pages/CardList'/>
          </Route>
          <Route exact path= '/pages/CardList' component={CardList}/>
          <Route path='/pages/ShopList' component={ShopList}/>
          <Route path='/pages/AgendaList' component={AgendaList}/>
          <Route path='/pages/ToDoList' component={ToDoList}/>
        </GlobalContextProvider>
      </Switch>
		</BrowserRouter>
	);
}

export default App;

