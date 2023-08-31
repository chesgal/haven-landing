import React from 'react'
import CookImage from '../../assets/home/cook-islands.png'
import { PromotionsLabels } from '../Content'

console.log(PromotionsLabels)
const Promotions = () => {
    return (
        <section className="w-full h-auto bg-white flex flex-col items-start justify-center relative lg:px-20 md:px-18 px-6 py-28 gap-5 text-white">
            <div className="flex w-5/6 mx-auto my-auto">
                <div className="grid grid-rows-6 grid-cols-7">
                    <div style={{ backgroundImage: `url(${CookImage})` }} className="row-start-2 row-end-7 col-start-4 col-span-4 rounded-lg shadow-lg shadow-gray-400 bg-cover bg-center"></div>
                    <div className="flex flex-col row-start-1 row-end-6 col-span-4 col-start-1 p-4 text-white rounded-lg" style={{ background: "linear-gradient(170deg, #00BCE7 0%, #006BC0 100%)" }}>
                        <h1 className="font-light text-[50px]">{PromotionsLabels.heading}</h1>
                        {
                            PromotionsLabels.subHeading.map((paragraph, index) => (
                                <p key={index} className="font-bold text-[16px] leading-6 mb-4">{paragraph}</p>
                            ))
                        }
                        <div className="flex"><button className="bg-transparent border border-white rounded-full text-white px-4 py-2">{PromotionsLabels.more}</button></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promotions