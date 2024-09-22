import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Routes, Route } from 'react-router-dom';
import Blog from './Pages/Blog/Blog.jsx'
import Book from './Pages/Book/Book.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Home from './Pages/Home/Home.jsx'

import Footer from './common/footer/footer.jsx';
import Header from './common/header/Header.jsx';

function App() {


  return (
    <>
      <div className='container'>
        {/* Header */}

        <div className="row">
          <Header />
        </div>

        {/* Body */}

        <div className="row">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/book' element={<Book />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}

        <div className="row">
          <Footer />
        </div>

      </div>
    </>
  )
}

export default App
