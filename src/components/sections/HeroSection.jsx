import React from 'react'
import HeroImage from '../../assets/home/hero-img.png'
import { HeroLabels } from '../Content'

const HeroSection = () => {
    return (
        <section className="w-full h-auto flex justify-between">
            <div className="h-full w-fit font-krub text-white xl:mx-40 lg:mx-20 md:mx-10 mx-6 lg:py-20 md:py-30 py-20">
                {/* <div className=""> */}
                    <h1 className="font-normal text-6xl mt-10 mb-10">{HeroLabels.heading}</h1>
                    <h2 className="font-light text-3xl mb-14">{HeroLabels.subHeading}</h2>
                    <div className="max-w-sm w-3/5 lg:max-w-full lg:flex">
                        <div className="flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <p className="font-bold text-xl">{HeroLabels.testimonial[0].text}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-white rounded-full">
                                    <span className="font-aladin text-2xl text-[#00BCE7]">JS</span>
                                </div>
                                <div className="font-abel font-normal text-base">
                                    <p className="uppercase leading-none">{HeroLabels.testimonial[0].name}</p>
                                    <p className="">{HeroLabels.testimonial[0].location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>

            <div className="lg:flex hidden">
                <img src={HeroImage} alt="Hero Image" className="lg:w-[700px]" />
            </div>
        </section>
    )
}

export default HeroSection