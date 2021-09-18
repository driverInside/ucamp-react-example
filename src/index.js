import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bulma/css/bulma.css'
import './index.css'

const Header = () => {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item' href='https://bulma.io'>
          <img src='https://bulma.io/images/bulma-logo.png' width='112' height='28' alt='texto significativo' />
        </a>

        <a href='/' role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </a>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-start'>
          <a href='/' className='navbar-item'>
            Home
          </a>

          <a href='/' className='navbar-item'>
            Documentation
          </a>

          <div className='navbar-item has-dropdown is-hoverable'>
            <a href='/' className='navbar-link'>
              More
            </a>

            <div className='navbar-dropdown'>
              <a href='/' className='navbar-item'>
                About
              </a>
              <a href='/' className='navbar-item'>
                Jobs
              </a>
              <a href='/' className='navbar-item'>
                Contact
              </a>
              <hr className='navbar-divider' />
              <a href='/' className='navbar-item'>
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <a href='/' className='button is-primary'>
                <strong>Sign up</strong>
              </a>
              <a href='/' className='button is-light'>
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const Left = () => {
  return (
    <div className='left'>
      <h2>Yo soy Left</h2>
    </div>
  )
}

const Middle = () => {
  return (
    <h2>Yo soy Middle</h2>
  )
}

const Right = () => {
  return (
    <h2>Yo soy Right</h2>
  )
}

const Main = () => {
  return (
    <div className='columns'>
      <div className='column'>
        <Left />
      </div>
      <div className='column'>
        <Middle />
      </div>
      <div className='column'>
        <Right />
      </div>
    </div>
  )
}

const Layout = () => {
  return (
    <div className='main'>
      <Header />
      <Main />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
