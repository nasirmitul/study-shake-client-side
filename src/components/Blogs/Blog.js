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
        <div class="container">
            <div class="row">
                <div class="item">
                    <div class="item-in">
                        <div class="icon">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#7845F9" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" /></svg>
                                <div class="icon-topic">Javascript, NodeJs</div>
                            </a>
                        </div>
                        <h4>Question here</h4>
                        <div class="seperator"></div>
                        <p id="answer">Question Answer here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae repudiandae corporis voluptatibus ullam excepturi suscipit quasi debitis, asperiores inventore?</p>
                        <a onclick="expand()" href="#" class="read-more">Read More
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="item-in">
                        <div class="icon">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#7845F9" d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" /></svg>
                                <div class="icon-topic">NodeJS, MongoDB</div>
                            </a>
                        </div>
                        <h4>Question here</h4>
                        <div class="seperator"></div>
                        <p id="answer1">Question Answer here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae repudiandae corporis voluptatibus ullam excepturi suscipit quasi debitis, asperiores inventore?</p>
                        <a onclick="expand1()" href="#" class="read-more">Read More
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="item-in">
                        <div class="icon">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#7845F9" d="M448 80V128C448 172.2 347.7 208 224 208C100.3 208 0 172.2 0 128V80C0 35.82 100.3 0 224 0C347.7 0 448 35.82 448 80zM393.2 214.7C413.1 207.3 433.1 197.8 448 186.1V288C448 332.2 347.7 368 224 368C100.3 368 0 332.2 0 288V186.1C14.93 197.8 34.02 207.3 54.85 214.7C99.66 230.7 159.5 240 224 240C288.5 240 348.3 230.7 393.2 214.7V214.7zM54.85 374.7C99.66 390.7 159.5 400 224 400C288.5 400 348.3 390.7 393.2 374.7C413.1 367.3 433.1 357.8 448 346.1V432C448 476.2 347.7 512 224 512C100.3 512 0 476.2 0 432V346.1C14.93 357.8 34.02 367.3 54.85 374.7z" /></svg>
                                <div class="icon-topic">SQL and NOSQL database</div>
                            </a>
                        </div>
                        <h4>Question here</h4>
                        <div class="seperator"></div>
                        <p id="answer2">Question Answer here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae repudiandae corporis voluptatibus ullam excepturi suscipit quasi debitis, asperiores inventore?</p>
                        <a onclick="expand2()" href="#" class="read-more">Read More
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="item-in">
                        <div class="icon">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#7845F9" d="M282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384H192V424C192 437.3 181.3 448 168 448H128V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C162.9 212.8 160 194.7 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352C317.3 352 299.2 349.1 282.3 343.7zM376 176C398.1 176 416 158.1 416 136C416 113.9 398.1 96 376 96C353.9 96 336 113.9 336 136C336 158.1 353.9 176 376 176z" /></svg>
                                <div class="icon-topic">JWT Token</div>
                            </a>
                        </div>
                        <h4>Question here</h4>
                        <div class="seperator"></div>
                        <p id="answer3">Question Answer here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae repudiandae corporis voluptatibus ullam excepturi suscipit quasi debitis, asperiores inventore?</p>
                        <a onclick="expand3()" href="#" class="read-more">Read More
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;