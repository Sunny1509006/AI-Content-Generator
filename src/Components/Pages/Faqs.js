// import React, { useState } from "react";
// import "./Faqs.css";

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What is React?",
//       answer: "React is a JavaScript library for building user interfaces.",
//     },
//     {
//       question: "How to install React?",
//       answer:
//         'You can install React using npm or yarn. For example, "npm install react".',
//     },
//     // Add more FAQs as needed in the same format
//   ];

//   const toggleAccordion = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div className="faq-container">
//       <h1>Frequently Asked Questions and their corresponding Answers</h1>
//       <div>
//         {faqs.map((faq, index) => (
//           <div key={index} className="faq-item">
//             <div
//               className="faq-question"
//               onClick={() => toggleAccordion(index)}
//             >
//               <h2>{faq.question}</h2>
//               <span>{activeIndex === index ? " -" : " +"}</span>
//             </div>
//             {activeIndex === index && (
//               <div className="faq-answer">
//                 <p>{faq.answer}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

import React, { useState, useEffect, useMemo } from 'react'
import "./Faqs.css"
import axios from "../Axios"
import FaqsSingle from '../Common/FaqsSingle'
import { Helmet } from 'react-helmet'


const Faq = () => {

    const [faqs, setFaqs] = useState([]);
    // console.log(articles);
    useEffect(() => {
        const loadPosts = async () => {
            const response = await axios.get(
                "/api/faq/get"
            );
            console.log(response.data.result);
            setFaqs(response.data.result);

        };

        loadPosts();
    }, []);

    const evenFaqs = useMemo(() => faqs.filter((article, index) => (index % 2 === 0)), [faqs]);
    const oddFaqs = useMemo(() => faqs.filter((article, index) => (index % 2 === 1)), [faqs]);
    return (
        <div className='faq-container'>
            <Helmet>
                <title>
                    FAQs
                </title>
            </Helmet>
            {/* <HomePageBodyHeader title={"FAQs"} /> */}
            <h1>Frequently Asked Questions and their corresponding Answers</h1>
            <div className='FaqInnerDiv'>
                <div className='FaqLeft'>
                    {evenFaqs.map((evenFaq, index) => (
                        <FaqsSingle key={index} question={evenFaq.question} answer={evenFaq.answer}/>
                    ))}
                </div>
                <div className='FaqRight'>
                    {oddFaqs.map((oddFaq, index) => (
                        <FaqsSingle key={index} question={oddFaq.question} answer={oddFaq.answer}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq