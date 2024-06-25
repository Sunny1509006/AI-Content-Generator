import React from "react";
import YouTubePlayer from "../Common/YoutubeVideo";
import { Title_Info } from "../Common/Title_Info";
import { Details } from "../Common/Details";
import Faq from "./Faqs";
import { Tool_Description } from "../Common/Tool_Description";
import { Helmet } from "react-helmet";
import { TempGenerate } from "../Common/TempGenerate";
import { HomeCard } from "../Common/HomeCard";

export const Homepage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
      <Helmet>
        <title>
          Homepage
        </title>
      </Helmet>
      <Title_Info />
      <TempGenerate />
      <HomeCard />
      {/* <Tool_Description /> */}
      {/* <YouTubePlayer /> */}
      {/* <Details /> */}

      <Faq />
    </div>
  );
};
