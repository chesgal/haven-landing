import React from 'react'
import Logo from '../../assets/haven-logo.svg'
import FacebookIcon from '../../assets/facebook.svg'
import LinkedInIcon from '../../assets/linkedin.svg'
import { FooterLabels } from '../Content'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="w-full flex flex-col text-white pb-20">
            <div className="flex w-full justify-between lg:px-20 md:px-12 px-6 pt-16">
                <div className="flex flex-col md:flex-row justify-between w-full border-b pb-5 gap-8 md:gap-4 lg:gap-0">
                    <div className="flex flex-col items-start gap-4">
                        <img src={Logo} alt="Logo" className="w-28" />
                        <div className="font-light text-3xl">
                            <p>0800 700 699</p>
                            <p>contact.us@haven.co.nz</p>
                        </div>
                    </div>

                    <div className="flex w-2/5 md:flex-row flex-col md:items-start gap-4 font-normal text-base">
                        <div className="flex">
                            <ul className="flex flex-col gap-2">
                                {
                                    FooterLabels.navigation1.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.url} className="hover:underline">{link.label}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="flex">
                            <ul className="flex flex-col gap-2">
                                {
                                    FooterLabels.navigation2.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.url} className="hover:underline">{link.label}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 font-aladin text-base uppercase">
                        <ul className="flex flex-col gap-2 lg:ml-10">
                            <li className="flex items-center gap-4">
                                <img src={LinkedInIcon} alt="li" className="w-8" />
                                <span>LinkedIn</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <img src={FacebookIcon} alt="fb" className="w-8" />
                                <span>Facebook</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="flex flex-col gap-4 min-[1145px]:flex-row min-[1145px]:justify-between font-bold text-sm lg:px-20 md:px-12 px-6 pt-5 whitespace-nowrap">
                <div className="flex">
                    <ul className="flex md:flex-row flex-col gap-2">
                        {
                            FooterLabels.legal.map((link, index) => {
                                let separator = "";
                                if (index < FooterLabels.legal.length - 1) {
                                    separator = <span className="hidden md:flex">|</span>
                                }
                                return (
                                    <>
                                        <li key={index}>
                                            <Link to={link.url} className="hover:underline">{link.label}</Link>
                                        </li>
                                        {separator}
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="flex">
                    <ul className="flex md:flex-row flex-col gap-2">
                        {
                            FooterLabels.site.map((link, index) => {
                                let separator = "";
                                if (index < FooterLabels.site.length - 1) {
                                    separator = <span className="hidden md:flex"> | </span>
                                }
                                return (
                                    <>
                                        <li key={index}>
                                            <Link to={link.url} className="hover:underline">{link.label}</Link>
                                        </li>
                                        {separator}
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer