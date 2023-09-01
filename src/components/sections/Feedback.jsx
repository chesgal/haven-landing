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
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnHover: true,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };
// grid md:grid-cols-3
    return (
        <section className="w-full h-auto flex flex-col justify-center py-28">
            <div className='w-full flex min-[800px]:flex-row flex-col items-center'>
                <div className='w-full min-[800px]:w-1/2 lg:w-1/3 flex flex-col gap-3 text-white font-light pb-16 lg:pl-24 md:pl-10 px-4 min-[800px]:pr-10'>
                    <h1 className="md:text-9xl lg:text-8xl text-7xl">17,457</h1>
                    <h3 className="md:text-4xl text-3xl">{FeedbackLabels.heading}</h3>
                    <p className="md:text-lg text-base font-bold">{FeedbackLabels.description}</p>
                    <div className="flex">
                        <a href="#contactUs" className="bg-white rounded-full text-[#006BC0] md:px-4 px-3 py-2 font-bold">{FeedbackLabels.contactus}</a>
                    </div>
                </div>
                <div className="flex w-full min-[800px]:w-1/2 lg:w-2/3 h-auto md:p-0 p-10">
                    <Slider {...settings} className="flex w-full">
                        {
                            FeedbackLabels.testimonials.map((testimonial, index) => (
                                <div key={index} className="flex lg:px-6 md:px-4 px-3">
                                    <div className="slider-content flex flex-col bg-[#FFFFFF50] gap-4 shadow rounded-lg lg:p-6 p-4">
                                        <img className="md:w-20 w-12 object-cover object-top" src={QuoteMark} />
                                        <div className="flex flex-col justify-center gap-6">
                                            <p className="lg: text-2xl md:text-xl font-light text-[#565656]">{testimonial.text}</p>
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