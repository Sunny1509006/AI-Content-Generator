import React from 'react'
import YouTubePlayer from '../Common/YoutubeVideo'
import { Title_Info } from '../Common/Title_Info'
import { Details } from '../Common/Details'
import Faq from './Faqs'

export const Homepage = () => {
  return (
    <>
    <Title_Info />
    <Details />
    <YouTubePlayer />
    <Faq />
    </>
  )
}
