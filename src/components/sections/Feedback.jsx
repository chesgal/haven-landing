import React from 'react'
import Slider from 'react-slick'
import { FeedbackLabels } from '../Content'
import QuoteMark from '../../assets/home/quotemark.svg'


const Feedback = () => {

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnHover: true,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return (
        <section className="w-full h-auto flex flex-col justify-center relative lg:pl-24 md:pl-10 py-28 mt-36 gap-5">
            <div className='w-full grid md:grid-cols-3 lg:gap-0 gap-8 md:gap-5 items-center'>
                <div className='w-full flex flex-col text-white font-light'>
                    <h1 className="text-9xl">17,457</h1>
                    <h3 className="text-4xl">{FeedbackLabels.heading}</h3>
                    <p className="text-lg font-bold mt-8 mb-4">{FeedbackLabels.description}</p>
                    <div className="flex">
                        <a href="#contactUs" className="bg-white rounded-full text-[#006BC0] px-4 py-2 font-bold">{FeedbackLabels.contactus}</a>
                    </div>
                </div>
                <div className="w-full md:col-span-2 lg:px-8 md:px-2 h-auto mt-4">
                    <Slider {...settings}>
                        {
                            FeedbackLabels.testimonials.map((testimonial, index) => (
                                <div key={index} className="lg:px-6 md:px-4 w-full px-3">
                                    <div className="flex flex-col w-full bg-white gap-4 shadow relative rounded-lg lg:p-6 md:p-4 m-3">
                                        <img className="w-20 h-20 rounded-full object-cover object-top" src={QuoteMark} />
                                        <div className="flex flex-col justify-center gap-6">
                                            <p className="text-2xl font-light text-[#565656]">{testimonial.text}</p>
                                            <div className="flex flex-col text-[#006BC0]">
                                                <p className="text-base font-aladin">{testimonial.name}</p>
                                                <p className="text-base font-abel">{testimonial.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Feedback