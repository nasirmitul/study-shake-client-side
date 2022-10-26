import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Blog = () => {
    return (
        <div className='container'>
            <Accordion allowZeroExpanded>
                <AccordionItem className='accordion-item'>
                    <AccordionItemHeading>
                        <AccordionItemButton className='accordion-button'>
                            <div className="title-data">
                                <h4 className="lesson-title">what is 'cors'?</h4>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className='accordion-item-panel'>
                        <p className="lesson-data">Answer</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className='accordion-item'>
                    <AccordionItemHeading>
                        <AccordionItemButton className='accordion-button'>
                            <div className="title-data">
                                <h4 className="lesson-title">Why are you using
                                    'firebase'? What other options do you have to implement authentication?</h4>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className='accordion-item-panel'>
                        <p className="lesson-data">Answer</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className='accordion-item'>
                    <AccordionItemHeading>
                        <AccordionItemButton className='accordion-button'>
                            <div className="title-data">
                                <h4 className="lesson-title">How does the private route work?</h4>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className='accordion-item-panel'>
                        <p className="lesson-data">Answer</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className='accordion-item'>
                    <AccordionItemHeading>
                        <AccordionItemButton className='accordion-button'>
                            <div className="title-data">
                                <h4 className="lesson-title">What is Node? How does Node work?</h4>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className='accordion-item-panel'>
                        <p className="lesson-data">Answer</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Blog;