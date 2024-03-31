import React from "react";
import useQuery from "../../../hooks/useQuery";
import { ARTICLE_GENERATION_TYPES } from "../../../utils/constants";
import InformationContent from "../../ArticalForms/InformationContent";
import PrivatePageLayout from "../../layouts/PrivatePageLayout";

const GenerateArticle = () => {
  const query = useQuery();
  const articleGenerationType = query.get("generation_type");
  const articleFormComponentMap = {
    [ARTICLE_GENERATION_TYPES.information_content_single_and_bulk]: (
      <InformationContent />
    ),
  };

  return (
    <PrivatePageLayout>
      {articleFormComponentMap[articleGenerationType]}
    </PrivatePageLayout>
  );
};

export default GenerateArticle;
