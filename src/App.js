// import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
// import FeedbackData from "./data/FeedbackData"
// import {useState} from 'react'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'
// import {FeedbackContext} from './context/FeedbackContext'

function App() {
    // const [feedback, setFeedback] = useState(FeedbackData)
    
  
    return ( 
            <FeedbackProvider>
                <Router>
            
                        <Header/> 
                        <Routes>
                        <Route exact path="/" element={
                            <div className="container">
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                        </div>
                        } /> 

                <Route path="/about" element={<AboutPage />} />
                </Routes>

                <AboutIconLink />
                </Router>
            </FeedbackProvider>
    )
}

export default App