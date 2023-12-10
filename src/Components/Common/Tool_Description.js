import React from "react";
import "./Tool_Description.css";
import { Tool_Description_list } from "./Tool_Description_list";

export const Tool_Description = () => {
  const data = [
    {
      title: "Expand Text Generator",
      description:
        "With our expanded text generator, creating comprehensive and informative content becomes a breeze. Simply provide a starting point, and watch as the AI seamlessly expands your ideas into cohesive paragraphs. This tool enables you to produce in-depth content effortlessly, saving you both time and resources.",
    },
    {
      title: "Magic Generator",
      description:
        "Looking for a touch of magic in your writing? Our magic generator is here to amaze you. It generates captivating sentences, mesmerizing phrases, and enchanting descriptions that will captivate your audience. Elevate your writing to new heights with this tool, which effortlessly enhances the uniqueness and charm of your content.",
    },
    {
      title: "Comment Generator",
      description:
        "Make your social media presence stand out with our comment generator. Craft authentic and engaging comments that will leave a lasting impact on your audience. Save time by automating the process of generating insightful and meaningful responses, allowing you to focus on building connections and engaging your followers.",
    },
    {
      title: "Ask Writer",
      description:
        "If you need a reliable source of knowledge, our ask writer feature will be your go-to companion. Simply ask a question, and this intelligent tool will provide accurate and well-researched answers. Enhance your content with valuable insights and information sourced directly from our extensive database",
    },
    {
      title: "Magic Writer",
      description:
        "Our magic writer is your secret weapon for creating spellbinding stories and captivating narratives. This powerful tool enables you to effortlessly generate plots, characters, and enthralling storylines. Whether you are a professional writer or an aspiring novelist, the magic writer will ignite your imagination and inspire your creative process.",
    },
  ];

  // Separate odd and even index values
//   const oddItems = data.filter((_, index) => index % 2 !== 0);
//   const evenItems = data.filter((_, index) => index % 2 === 0);

  return (
    <div
      className="tool-description-main
    "
    >
      <h1>123-ai - AI Content Writer & Copyright Generator Tool</h1>
      <p>
        Our star performer, 123-ai - ai content writer & copyright generator
        tool that takes your writing process to the next level. With its
        sophisticated algorithms, 123-ai creates engaging, high-quality content
        tailored to your specific needs. It effortlessly generates creative and
        original texts, effectively reducing the time and effort you invest in
        content creation.
      </p>
      <div>
      <div className="tool-description-body">
        {data.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} className="odd-item">
                <Tool_Description_list
                item={item.title}
                description={item.description}
              />
              </div>
            );
          }
          if (index % 2 !== 0) {
            return (
              <div key={index} className="even-item">
                <Tool_Description_list
                item={item.title}
                description={item.description}
              />
              </div>
            );
          }
        })}
      </div>
      {/* <div>
        {data.map((item, index) => {
          if (index % 2 !== 0) {
            return (
              <div key={index}>
                <Tool_Description_list
                item={item.title}
                description={item.description}
              />
              </div>
            );
          }
          return null;
        })}
      </div> */}
        {/* Render odd index values */}
        {/* <div className="odd-item">
          {oddItems.map((item, index) => (
            <div key={index}>
              <Tool_Description_list
                item={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div> */}

        {/* Render even index values */}
        {/* <div>
          {evenItems.map((item, index) => (
            <div key={index}>
              <Tool_Description_list
                item={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};
