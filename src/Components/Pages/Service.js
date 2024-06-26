import React from 'react'
import { Helmet } from 'react-helmet'
import { ServicePage } from './ServicePage'

export const Service = () => {
  return (
    <>
    <Helmet>
            <title>
                Our Services
            </title>
        </Helmet>
        <ServicePage />
    </>
  )
}
