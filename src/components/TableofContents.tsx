import { FC } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
interface Content {
    title: string;
    description: string | string[];
    logo?: any;

}

interface TableofContentsProps {
    contents: Content[];
}

const TableofContents: FC<TableofContentsProps> = ({ contents }) => {
    return (
        <section>
            <Container>
                <Row className=''>
                    <Col lg={4} md={12} xs={12} className='flex flex-col '>
                        <h1 className='text-[32px] font-semibold'>Table Of Contents?</h1>
                        <ul className="pl-0 pr-10">
                            {contents.map((content, index) => (
                                <a key={index} href={`#${content.title}`} className='text-black w-full hover:bg-[#E2EEFF] rounded-lg p-2'>
                                    <li key={index} className='text-[18px] py-2'>
                                        {content.title}
                                    </li>
                                </a>
                            ))}
                        </ul>
                    </Col>
                    <Col lg={8} md={12} xs={12} className='flex flex-col '>
                        {contents.map((content, index) => (
                            <div key={index} className='flex flex-col justify-center px-2' id={content.title}>
                                <h1 className='text-[#1B232E] text-[32px] font-semibold'>{content.title}</h1>
                                {Array.isArray(content.description) ? (
                                    <ul className='list-disc pl-5 pt-[10px]'>
                                        {content.description.map((item, i) => (
                                            <li key={i} className=' text-[18px] leading-8'>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className=' text-[18px] leading-8 pt-[10px]'>{content.description}</p>
                                )}
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TableofContents;
