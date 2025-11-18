import React from 'react'

const Experience = () => {
    return (
        <div className='my-12 px-5 md:px-0'>
            <h2 className='text-4xl font-extrabold px-2'>EXPERIENCE</h2>

            <div className='mt-5 relative border-y border-gray-200 p-5 md:px-10 md:flex items-center   gap-10'>
                <div className='flex items-center'>
                    <h2 className='font-medium text-gray-600 w-32 dark:text-gray-300'>JUN 2025 - NOV 2025</h2>
                </div>
                <div className='flex-1 md:px-5'>
                    <h2 className='text-xl font-bold dark:text-blue-500'>Machine Learning Intern - UL Technology Solutions</h2>
                    <ul className='list-disc ml-5 mt-2 space-y-2 text-gray-700 dark:text-gray-300'>
                        <li>
                            Developed and evaluated different advanced Time-series forecasting models (Prophet, ARIMA, XGBoost) to
                            predict daily and hourly water consumption patterns from data across different meter codes.
                        </li>
                        <li>
                            Performing data cleaning, feature engineering, and model evaluation to improve forecasting accuracy and support real-world deployment of ML solutions.
                        </li>
                    </ul>
                </div>
            </div>

            <div className='mt-5 relative border-y border-gray-200 p-5 md:px-10 md:flex items-center   gap-10'>
                <div className='flex items-center'>
                    <h2 className='font-medium text-gray-600 w-32 dark:text-gray-300'>MAR 2023 - APR 2024</h2>
                </div>
                <div className='flex-1 md:px-5'>
                    <h2 className='text-xl font-bold dark:text-blue-500'>Frontend Developer - Intutive Soft Corporation</h2>
                    <p className='mt-2 text-gray-700 dark:text-gray-300'>
                        Developed and maintained the front-end of an e-commerce platform dedicated to buying and selling used
                        products, focusing on creating a responsive and seamless user experience.
                    </p>
                    <p className='mt-2 text-gray-700 dark:text-gray-300'>
                        Designed and implemented key user-facing features, including product listing pages, user authentication,
                        product category pages, and a wishlist module, to enhance product discovery and user interaction.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience
