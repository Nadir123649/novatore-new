import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactForm from './ContactForm';


interface LayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
    showContactForm?: any;
    keywords?: any;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Novatore Solutions', description = 'Setting new standards in technology with unmatchable code.', showContactForm, keywords }) => {
    return (
        <>

            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>{children}</main>
            {showContactForm && <ContactForm />}
            <Footer />
        </>
    );
};

export default Layout;
