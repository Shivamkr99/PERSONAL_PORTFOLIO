'use client';

import { useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <>
            <CustomCursor />
            <Navbar onContactClick={() => setIsContactModalOpen(true)} />

            {/* Background Overlay */}
            <div className="fixed top-0 left-0 w-full h-full -z-10" style={{ backgroundImage: 'linear-gradient(to right, rgba(30, 30, 30, 0.7), rgba(30, 30, 30, 0.2) 25%, rgba(30, 30, 30, 0.2) 75%, rgba(30, 30, 30, 0.7))' }}></div>

            <main className="min-h-screen bg-[#111] text-white pt-16">
                {children}
            </main>

            <Footer onContactClick={() => setIsContactModalOpen(true)} />
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
}
