import React from 'react'
import InsuranceImage from '../../assets/home/insurance.jpg'
import KiwisaverImage from '../../assets/home/kiwisaver.jpg'
import MortgagesImage from '../../assets/home/mortgages.jpg'
import InsuranceIcon from '../../assets/home/insurance-icon.svg'
import KiwisaverIcon from '../../assets/home/kiwisaver-icon.svg'
import MortgagesIcon from '../../assets/home/mortgages-icon.svg'
import { Link } from 'react-router-dom'
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
        <section className="w-full h-auto flex items-center text-white">
            <div className="w-full lg:h-[900px] md:h-[800px] flex flex-col justify-center items-center gap-20 lg:gap-28 py-12 md:py-0">
                <div className="w-full lg:w-3/4 grid md:grid-cols-3 lg:gap-8 md:gap-5 gap-8 px-6 md:px-4 lg:px-0">
                    {ServicesLabels.service.map((service, index) => {
                        let assets = getImages(index);
                        return (
                            <div key={index} className="flex flex-col justify-between">
                                <img src={assets.image} alt="Insurance Image" className="w-full h-[500px] object-cover" />
                                <div to="/" className="flex flex-col lg:py-6 md:py-4 py-6 gap-2 group font-light">
                                    <div className="flex items-center h-[100px]">
                                        <img src={assets.icon} alt="X" className="h-10" />
                                        <h1 className="text-5xl capitalize">{service.name}</h1>
                                    </div>
                                    <p className="text-2xl">{service.description}</p>
                                </div>
                                <div className="flex gap-2 pb-6 items-center whitespace-nowrap font-bold text-base">
                                    <button className="bg-transparent border border-white rounded-full text-white px-4 py-2">{ServicesLabels.more}</button>
                                    <a href="#contactUs" className="bg-white rounded-full text-[#006BC0] px-4 py-2">{ServicesLabels.contactus}</a>
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