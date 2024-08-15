import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { angulaartile, awstile, azuretile, fluttertile, googlecloudtile, jstile, mongodbtile, mysqltile, nodetile, phptile, postgresstile, pythontile, reacttile, swifttile, vuejstile } from "../utils/index";
import { Container } from 'postcss';
interface BlogsProps {
    id?: number;
    image: any;
    category: string;
    tag: string;
    title: string;
    link: string;
    type?: string;
}

const TechStack: React.FC<BlogsProps> = ({ image, category, tag, title, link, type }) => {
    return (

        <div className='container'>

            <h1 className='text-center text-[#313232] text-[40px] font-bold capitalize not-italic leading-[55px] max-w-[590px] mx-auto mb-[40px]'>Technology Stack</h1>
            <div className='flex flex-wrap  justify-center mb-[40px] '>
                <Image src={reacttile} alt="techstack" />
                <Image src={angulaartile} alt="techstack" />
                <Image src={vuejstile} alt="techstack" />
                <Image src={nodetile} alt="techstack" />
                <Image src={pythontile} alt="techstack" />
                <Image src={jstile} alt="techstack" />
                <Image src={fluttertile} alt="techstack" />
                <Image src={swifttile} alt="techstack" />
                <Image src={mysqltile} alt="techstack" />
                <Image src={googlecloudtile} alt="techstack" />
                <Image src={mongodbtile} alt="techstack" />
                <Image src={postgresstile} alt="techstack" />
                <Image src={awstile} alt="techstack" />
                <Image src={azuretile} alt="techstack" />
                <Image src={phptile} alt="techstack" />

            </div>
        </div>

    );
};

export default TechStack;
