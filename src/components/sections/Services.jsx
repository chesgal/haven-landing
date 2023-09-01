import React from 'react'
import InsuranceImage from '../../assets/home/insurance.jpg'
import KiwisaverImage from '../../assets/home/kiwisaver.jpg'
import MortgagesImage from '../../assets/home/mortgages.jpg'
import InsuranceIcon from '../../assets/home/insurance-icon.svg'
import KiwisaverIcon from '../../assets/home/kiwisaver-icon.svg'
import MortgagesIcon from '../../assets/home/mortgages-icon.svg'
import { ServicesLabels } from '../Content'

const Services = () => {
    const getImages = (index) => {
        switch (index) {
            case 0:
                return {
                    image: MortgagesImage,
                    icon: MortgagesIcon
                };
            case 1:
                return {
                    image: KiwisaverImage,
                    icon: KiwisaverIcon
                };
            case 2:
                return {
                    image: InsuranceImage,
                    icon: InsuranceIcon
                };
            default:
                return {};
        }
    }
    return (
        <section className="w-full h-auto flex items-center text-white lg:py-40 py-20 md:py-0">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full lg:w-4/5 xl:w-3/4 grid md:grid-cols-3 lg:gap-10 md:gap-5 px-6 md:px-4 lg:px-0">
                    {ServicesLabels.service.map((service, index) => {
                        let assets = getImages(index);
                        return (
                            <div key={index} className="flex flex-col justify-start max-md:pb-10">
                                <img src={assets.image} alt="Insurance Image" className="w-full md:h-[450px] sm-[400px] h-[300px] object-cover" />
                                <div className="flex flex-col lg:py-6 gap-4 group font-light">
                                    <div className="flex items-center h-[100px]">
                                        <img src={assets.icon} alt="X" className="h-10" />
                                        <h1 className="lg:text-5xl md:text-4xl text-3xl capitalize ml-3">{service.name}</h1>
                                    </div>
                                    <p className="lg:text-2xl md:text-xl text-lg">{service.description}</p>
                                    <div className="flex gap-2 pb-6 items-center whitespace-nowrap font-bold lg:text-base text-sm">
                                        <button className="bg-transparent border border-white rounded-full text-white md:px-4 px-3 py-2">{ServicesLabels.more}</button>
                                        <a href="#contactUs" className="bg-white rounded-full text-[#006BC0] px-4 py-2">{ServicesLabels.contactus}</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services