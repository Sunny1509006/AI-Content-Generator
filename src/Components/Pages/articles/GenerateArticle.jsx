import React from "react";
import useQuery from "../../../hooks/useQuery";
import { ARTICLE_GENERATION_TYPES } from "../../../utils/constants";
import InformationContent from "../../ArticalForms/InformationContent";
import PrivatePageLayout from "../../layouts/PrivatePageLayout";
import AIMenualSubheading from "../../ArticalForms/AIMenualSubheading";
import BlogContent from "../../ArticalForms/BlogContent";
import ProductContent from "../../ArticalForms/ProductContent";

const GenerateArticle = () => {
  const query = useQuery();
  const articleGenerationType = query.get("generation_type");
  const articleFormComponentMap = {
    [ARTICLE_GENERATION_TYPES.information_content_single_and_bulk]: (
      <InformationContent />
    ),
    [ARTICLE_GENERATION_TYPES.ai_info_manual_sub_heading]: (
      <AIMenualSubheading />
    ),
    [ARTICLE_GENERATION_TYPES.blog_content_single_and_bulk]: <BlogContent />,
    [ARTICLE_GENERATION_TYPES.product_content_600_1000_words]: (
      <ProductContent />
    ),
  };

  return (
    <PrivatePageLayout>
      {articleFormComponentMap[articleGenerationType]}
    </PrivatePageLayout>
  );
};

export default GenerateArticle;
