import React from 'react';
import { Container } from 'react-bootstrap';
import MilestoneCard from './MilestoneCard';
import { milestones } from '@/constants/indesx';

const OurMilestones: React.FC = () => {

    return (
        <section className="our-milestones-section py-20">
            <h2 className="text-center text-black leading-normal text-4xl font-semibold capitalize mb-16">Our Milestones</h2>
            <Container>
                <div className="milestones-container flex justify-center gap-6 items-center bg-contain bg-no-repeat min-h-[459px] max-w-[1157px] w-full mx-auto">
                    {milestones.map((milestone, index) => (
                        <MilestoneCard
                            key={index}
                            title={milestone.title}
                            description={milestone.description}
                            icon={milestone.icon}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default OurMilestones;
