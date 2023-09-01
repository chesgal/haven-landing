import React from 'react'
import HeroImage from '../../assets/home/hero-img.png'
import HeroImage2 from '../../assets/home/hero-img.jpg'
import { HeroLabels } from '../Content'

const HeroSection = () => {
    return (
        <section className="w-full h-auto flex flex-col justify-between">
            <img src={HeroImage2} alt="Hero Image" className="w-full lg:hidden md:h-[300px] h-[200px] object-cover" />
            <div className="flex">
                <div className="h-full w-fit text-white xl:mx-40 lg:mx-16 md:mx-10 mx-6 lg:py-20 pb-20">
                    <h1 className="font-normal lg:text-6xl text-5xl md:my-10 my-8">{HeroLabels.heading}</h1>
                    <h2 className="font-light lg:text-3xl text-2xl lg:mb-14 mb-10">{HeroLabels.subHeading}</h2>
                    <div className="max-w-sm lg:w-3/5 w-3/4 lg:max-w-full lg:flex">
                        <div className="flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <p className="font-bold lg:text-xl md:text-lg text-base">{HeroLabels.testimonial[0].text}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-white rounded-full">
                                    <span className="font-aladin text-2xl text-[#00BCE7]">JS</span>
                                </div>
                                <div className="flex flex-col justify-center font-abel font-normal text-base leading-none">
                                    <p className="uppercase">{HeroLabels.testimonial[0].name}</p>
                                    <p>{HeroLabels.testimonial[0].location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:flex hidden">
                    <img src={HeroImage} alt="Hero Image" className="lg:w-[700px]" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection