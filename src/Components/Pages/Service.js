import React from 'react'
import "./Service.css"

export const Service = () => {
  return (
    <div className='service-card-body'>
        <h1>Always we offer the best services for success</h1>
        <div className='service-card-body-inner'>
            <div className='service-card'>
                <a href='https://faisaliteb.com/services-all/web-design/' target="_blank" >
                <img src="/images/web_design.png" />
                </a>
                <a href='https://faisaliteb.com/services-all/web-design/' target="_blank" style={{textDecoration: 'none'}}>
                <h2>Web Design</h2>
                </a>
                <p>Webdesign Services at Faisaliteb</p>
            </div>
            <div className='service-card'>
                <a href='https://faisaliteb.com/services-all/content-services/' target="_blank" >
                <img src="/images/content_services.png" />
                </a>
                <a href='https://faisaliteb.com/services-all/content-services/' target="_blank" style={{textDecoration: 'none'}}>
                <h2>Content Services</h2>
                </a>
                <p>Content Services at Faisaliteb</p>
            </div>
            <div className='service-card'>
                <a href='https://faisaliteb.com/services-all/seo/' target="_blank" >
                <img src="/images/seo.png" />
                </a>
                <a href='https://faisaliteb.com/services-all/seo/' target="_blank" style={{textDecoration: 'none'}}>
                <h2>SEO</h2>
                </a>
                <p>SEO Services at Faisaliteb</p>
            </div>
            <div className='service-card'>
                <a href='https://faisaliteb.com/services-all/smm/' target="_blank" >
                <img src="/images/smm.png" />
                </a>
                <a href='https://faisaliteb.com/services-all/smm/' target="_blank" style={{textDecoration: 'none'}}>
                <h2>SMM</h2>
                </a>
                <p>SMM Services at Faisaliteb</p>
            </div>
            <div className='service-card'>
                <a href='https://faisaliteb.com/services-all/ad-boosting/' target="_blank" >
                <img src="/images/ad_boosting.png" />
                </a>
                <a href='https://faisaliteb.com/services-all/ad-boosting/' target="_blank" style={{textDecoration: 'none'}}>
                <h2>Ad Boosting</h2>
                </a>
                <p>Ad Boosting Services at Faisaliteb</p>
            </div>
            <div className='service-card'>
                <a href='https://faisaliteb.com/services-all/graphics-design/' target="_blank" >
                <img src="/images/graphic_design.png" />
                </a>
                <a href='https://faisaliteb.com/services-all/graphics-design/' target="_blank" style={{textDecoration: 'none'}}>
                <h2>Graphics Design</h2>
                </a>
                <p>Graphics Design Services at Faisaliteb</p>
            </div>
        </div>
    </div>
  )
}
