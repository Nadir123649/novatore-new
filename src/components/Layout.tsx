import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactForm from './ContactForm';


interface LayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Novatore Sols', description = 'Setting new standards in technology with unmatchable code.' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <ContactForm />
            <Footer />
        </>
    );
};

export default Layout;
