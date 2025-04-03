import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './Constants/Navbar'
import Footer from './Constants/Footer'
import Home from './Pages/Home'
import ProjectCaseStudy from './Pages/PastProjects'
import { useEffect } from 'react'
import { ContactUs } from './Pages/ContactUs'
import { AboutUs } from './Pages/AboutUs'
import BlogPage from './Pages/Blogs'
import BlogPostPage from './Pages/BlogPost'

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
            {/* <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}



export default App
