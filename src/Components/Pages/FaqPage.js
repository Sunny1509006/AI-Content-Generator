import React, { useState, useEffect, useMemo } from 'react'
import "./Faqs.css"
import { Helmet } from 'react-helmet'
import Faq from './Faqs'


const FaqPage = () => {

    return (
        <div>
            <Helmet>
                <title>
                    FAQs
                </title>
            </Helmet>
            <Faq />
        </div>
    )
}

export default FaqPage