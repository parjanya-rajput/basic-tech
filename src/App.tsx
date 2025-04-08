import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import ProjectCaseStudy from './Pages/PastProjects'
import { ContactUs } from './Pages/ContactUs'
import { AboutUs } from './Pages/AboutUs'
import BlogPage from './Pages/Blogs'
import BlogPostPage from './Pages/BlogPost'
import Header from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            Add your routes here
            <Route path="/" element={<Home  />} />
            <Route path="/projects" element={<ProjectCaseStudy />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blog" element={<BlogPostPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}



export default App
