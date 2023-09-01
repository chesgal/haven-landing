import React from 'react'
import HeroSection from '../sections/HeroSection'
import Services from '../sections/Services'
import Feedback from '../sections/Feedback'
import Promotions from '../sections/Promotions'
import ContactUs from '../sections/ContactUs'

const HomePage = () => {
    return (
        <div className="flex flex-col font-krub">
            <HeroSection />
            <Services />
            <Feedback />
            <Promotions />
            <ContactUs />
        </div>
    )
}

export default HomePage