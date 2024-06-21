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