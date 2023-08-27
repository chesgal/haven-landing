import React from 'react'
import HeroSection from '../sections/HeroSection'
import Services from '../sections/Services'
import Feedback from '../sections/Feedback'
import Promotions from '../sections/Promotions'
import ContactUs from '../sections/ContactUs'

const HomePage = () => {
    return (
        <div className="font-krub">
            <h1 className="text-3xl font-aladin font-bold underline">
                Hello world!
            </h1>
            <HeroSection />
            <Services />
            <Feedback />
            <Promotions />
            <ContactUs />
        </div>
    )
}

export default HomePage