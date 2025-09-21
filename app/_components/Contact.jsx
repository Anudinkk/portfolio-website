import { CONTACT } from '../../utils/constants'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <div className='my-12 px-5 md:px-0' id='contact'>
            <div className='py-10'>
                <h2 className='text-4xl font-bold text-center mb-12'>Get In Touch</h2>
                <div className='mt-5'>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.808905709455!2d75.58336517418451!3d11.636962742733726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba683d93f86b881%3A0xcc4653d6d6b2f6fd!2svallikkad!5e0!3m2!1sen!2sin!4v1722155699814!5m2!1sen!2sin"
                            width="100%"
                            height="320"
                            allowFullScreen
                            loading="lazy"
                            style={{ border: 'none' }}
                            className="rounded-2xl focus:outline-0 border-0 shadow-lg"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 text-center'>
                        <div className='border border-gray-200 p-5 shadow-lg rounded-lg'>
                            <h2 className='flex items-center justify-center gap-2 font-medium'> <MapPin className='text-blue-500' /> {CONTACT.address}</h2>
                        </div>

                        <div className='border border-gray-200 p-5 shadow-lg rounded-lg'>
                            <h2 className='flex items-center justify-center gap-2 font-medium'> <Mail className='text-blue-500' /> {CONTACT.email}</h2>
                        </div>

                        <div className='border border-gray-200 p-5 shadow-lg rounded-lg'>
                            <h2 className='flex items-center justify-center gap-2 font-medium'> <Phone className='text-blue-500' /> {CONTACT.phoneNo}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

