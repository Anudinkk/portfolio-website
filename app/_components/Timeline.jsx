// app/_components/Timeline.jsx
"use client"
import React from 'react';

const timelineEvents = [
    {
        date: "June 2025 - Present",
        title: "Machine Learning Intern",
        location: "UL Technology Solutions, Kozhikode, Kerala",
    },

    {
        date: "Oct 2024 - Present",
        title: "Certification in Data Science & ML",
        location: "Entri Elevate, Kochi, Kerala",
    },

    {
        date: "Mar 2023 - April 2024",
        title: "Frontend Developer",
        location: "Intutive Soft Corporation, Kannur, Kerala",
    },
    {
        date: "July 2018 - Aug 2022",
        title: "Bachelor of Technology - Computer Science",
        location: "Sree Chitra Thirunal CE, Trivandrum, Kerala",
    },


];

const Timeline = () => {
    return (
        <div className='py-12 px-5 md:px-0'>
            <div className='relative border border-gray-200 rounded-lg p-5'>
                <h2 className='absolute -top-3 left-5 font-medium bg-white px-2 dark:bg-card'>My Journey</h2>
                <div className="relative mt-8">
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>

                    {timelineEvents.map((event, index) => (
                        <div key={index} className=" relative pl-12 mb-10">
                            <div className="absolute left-4 top-1 w-4 h-4 bg-gray-500 rounded-full border-4 border-white transform -translate-x-1/2"></div>

                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-500 dark:text-gray-300 font-semibold">{event.date}</p>
                                <h3 className="text-lg font-bold mt-1 dark:text-blue-500">{event.title}</h3>
                                <p className="text-md text-gray-700 mt-1 dark:text-gray-300">{event.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;