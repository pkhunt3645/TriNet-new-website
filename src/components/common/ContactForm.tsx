'use client'

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: ''
            });
            alert('Thank you! We will get back to you soon.');
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Name & Email */}
            <div className="grid md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="tn-input"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="tn-input"
                />
            </div>

            {/* Row 2: Phone & Company */}
            <div className="grid md:grid-cols-2 gap-4">
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="tn-input"
                />
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="tn-input"
                />
            </div>

            {/* Message Textarea */}
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write a message..."
                rows={5}
                required
                className="tn-input resize-none"
            />

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-white font-semibold text-lg rounded-full hover:bg-secondary transition duration-500 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
            </button>
        </form>
    );
};

export default ContactForm;