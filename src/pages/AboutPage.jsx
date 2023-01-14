import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <div className="container">
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>This is a React APP to leave feedback for a product or service</p>
                <p>
                    <Link to="/">
                        Back To Home
                    </Link>
                </p>
            </div>
        </Card>
    </div>
  )
}

export default AboutPage
