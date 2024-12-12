import React from 'react'

const sections = [
    {
        title: "Solutions",
        items: ["Marketing", "Analytics", "Commerce", "Cloud"]
    },
    {
        title: "Support",
        items: ["Pricing", "Documentation", "Guides", "Status"]
    },
    {
        title: "Company",
        items: ["About", "Blog", "Jobs", "Partners"]
    },
    {
        title: "Legal",
        items: ["Claims", "Privacy", "Terms", "Policies"]
    },
]

const items = [
    {
        name: "Faceboock",
        icon: <i class="fa-brands fa-facebook"></i>,
        link: "https://www.facebook.com/",
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/",
    },
    {
        name: "Twitter",
        link: "https://x.com/",
    },
    {
        name: "Github",
        link: "https://github.com/",
    },
]

export const Footer = () => {
    return (
        <>
            <div className='w-full mt-24 bg-cyan-600 text-white py-y px-2 shadow-md z-50'>
                <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 boder-b-2 border-gray-600 pay-8'>
                    {
                        sections.map((section, index) => (
                            <div key={index}>
                                <h6 className='font-bold uppercase pt-2 mt-4'>
                                    {section.title}
                                </h6>
                                <ul>
                                    {section.items.map((item, i) => (
                                        <li key={i} className='py-1 text-white cursor-pointer'>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        ))
                    }
                    <div className='col-span-2 pt-8 md:pt-2 mt-10'>

                        <form className='felx felx-col sm:flex-row'>
                            <input type="email" placeholder='Enter email address' className='w-full p-2 mr-4 rounded-md mb-4 mt-2' />
                            <button className='p-2 mb-4'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className='flex felx-col max-[1240px] px-2 py2 mx-auto justify-between sm:felx-row text-center text-white'>
                    <p className='py-4 mt-4'>
                        2024 Bry Tech Tips, LLC. ALL rigths reserved.
                    </p>
                    <div className=' flex justify-between sm:w-[300px] pt-4 text-2xl cursor-pointer mt-4'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
