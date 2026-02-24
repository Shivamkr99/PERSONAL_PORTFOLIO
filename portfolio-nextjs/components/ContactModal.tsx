'use client';

import { useState, FormEvent } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className={`modal fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 ${isOpen ? 'active' : ''}`}>

            {/* Modal Overlay */}
            <div className="modal-overlay absolute inset-0 bg-black/80" onClick={onClose}></div>

            {/* Modal Content */}
            <div className="modal-content relative bg-[#1f1f1f] rounded-xl w-full max-w-md md:max-w-lg p-5 sm:p-6 md:p-8 z-10 max-h-[90vh] overflow-y-auto">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 md:top-4 md:right-4 text-white/60 hover:text-white transition-colors text-xl sm:text-2xl leading-none z-20 w-8 h-8 flex items-center justify-center"
                >
                    ✕
                </button>

                {/* Title Section */}
                <div className="mb-4 md:mb-6 pr-6 sm:pr-8">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-tight mb-2 md:mb-3">
                        GET IN<br />TOUCH
                    </h1>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                        I&apos;d love to hear from you, whether you just want to shoot the breeze or if you&apos;re interested in my work!
                    </p>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-3">

                    {/* Name Input */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#2a2a2a] text-white placeholder-white/40 px-3 sm:px-4 py-2.5 md:py-3 rounded-lg border-2 border-transparent focus:border-[#e67e22] focus:outline-none transition-all text-sm"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#2a2a2a] text-white placeholder-white/40 px-3 sm:px-4 py-2.5 md:py-3 rounded-lg border-2 border-transparent focus:border-[#e67e22] focus:outline-none transition-all text-sm"
                            required
                        />
                    </div>

                    {/* Message Textarea */}
                    <div>
                        <textarea
                            name="message"
                            placeholder="Add a message"
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-[#2a2a2a] text-white placeholder-white/40 px-3 sm:px-4 py-2.5 md:py-3 rounded-lg border-2 border-transparent focus:border-[#e67e22] focus:outline-none transition-all resize-none text-sm"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-[#e67e22] hover:bg-[#d35400] text-black font-black text-sm md:text-base uppercase py-2.5 md:py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            SEND
                        </button>
                    </div>

                </form>

            </div>

        </div>
    );
}
