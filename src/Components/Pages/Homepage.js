import React from "react";
import YouTubePlayer from "../Common/YoutubeVideo";
import { Title_Info } from "../Common/Title_Info";
import { Details } from "../Common/Details";
import Faq from "./Faqs";
import { Tool_Description } from "../Common/Tool_Description";
import { Helmet } from "react-helmet";
import { TempGenerate } from "../Common/TempGenerate";

export const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>
          Homepage
        </title>
      </Helmet>
      <Title_Info />
      <TempGenerate />
      <Tool_Description />
      {/* <YouTubePlayer /> */}
      <Details />

      <Faq />
    </>
  );
};
