export const BEARER_TOKEN_COOKIE_NAME = "br_tkn";

export const ROUTES = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/pricing",
    name: "Pricing",
  },
  {
    path: "/service",
    name: "Service",
  },
  // {
  //   path: "/affiliate",
  //   name: "Affiliate",
  // },
  // {
  //   path: "/signup",
  //   name: "Register",
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  // },
  {
    path: "/contactus",
    name: "Contact",
  },
  // {
  //   path: "/faqs",
  //   name: "FAQs",
  // },
];

export const ARTICLE_TYPES = {
  info_article: "info article",
  manual_sub_heading_artilce: "manual subheading article",
  blog_article: "blog article",
  product_content: "product category",
  amazon_review: "amazon review",
  human_touch_content: "human touch content",
  content_rewrite: "content rewrite",
  generated_conclusion: "generated conclusion",
  generated_introduction: "generated introduction",
  blog_article_outline: "blog article outline",
  blog_single_paragraph: "blog single paragraph",
};

export const ARTICLE_GENERATION_TYPES = {
  information_content_single_and_bulk: "information_content_single_and_bulk",
  ai_info_manual_sub_heading: "ai_info_manual_sub-heading",
  blog_content_single_and_bulk: "blog_content_single_and_bulk",
  product_content_600_1000_words: "product_content_600_1000_words",
  amazon_review_content: "amazon_review_content",
  human_touch_content_with_ai: "human_touch_content_with_ai",
  guest_post_content: "guest_post_content",
  generate_backlinks_content: "generate_backlinks_content",
  content_rewrite: "content_rewrite",
  generate_conclusion: "generate_conclusion",
  generate_introduction: "generate_introduction",
  blog_article_outline_generator: "blog_article_outline_generator",
  blog_paragraph: "blog_paragraph",
};

export const SUB_HEADING_COUNT = [
  {
    value: "random",
    label: "random",
  },
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
];

export const FAQ_COUNT = [
  {
    value: "random",
    label: "random",
  },
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
];

export const BLOG_GENERATION_IMAGE_COUNT_OPTIONS = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
];

export const PUBLISHER_SITE_TYPES = {
  WORDPRESS: "wordpress",
};

export const PUBLISHER_SITES = [
  {
    label: "Wordpress",
    value: PUBLISHER_SITE_TYPES.WORDPRESS,
  },
];

export const MANUAL_PAYMENT_METHODS = {
  BKASH: {
    label: "bKash",
    value: 1,
    number: "01311320246",
  },
  NAGAD: {
    label: "Nagad",
    value: 2,
    number: "01311320246",
  },
};

export const DEFAULT_PARENT_CATEGORY = "ALL";

export const PARENT_BLOG_CATEGORIES = {
  [DEFAULT_PARENT_CATEGORY]: "All",
  INFO_BLOG_CONTENT: "Information / Blog Content",
  AFFILIATE_REVIEW_CONTENT: "Affiliate (Review) Content",
  MORE_AI_TOOLS: "More AI tools",
};

export const BLOG_CATEGORIES = [
  {
    title: "Information Content Single / Bulk",
    description:
      "Our AI will help you write 100% unique seo friendly Information article in one click",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.information_content_single_and_bulk}`,
    icon: "",
    parentCategory: PARENT_BLOG_CATEGORIES.INFO_BLOG_CONTENT,
  },
  {
    title: "AI info Manual Sub Heading",
    description: "Provide your own subheadings to make 100% unique article",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.ai_info_manual_sub_heading}`,
    icon: "",
    parentCategory: PARENT_BLOG_CATEGORIES.INFO_BLOG_CONTENT,
  },
  {
    title: "Blog content Single / Bulk",
    description:
      "100% unique One click single or bulk blog content at your hand",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.blog_content_single_and_bulk}`,
    icon: "",
    parentCategory: PARENT_BLOG_CATEGORIES.INFO_BLOG_CONTENT,
  },
  {
    title: "Product Content (600-1000 words)",
    description:
      "Any kind of product content starting from 600 to 1k words in one click (Ecommerce)",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.product_content_600_1000_words}`,
    icon: "",
    parentCategory: PARENT_BLOG_CATEGORIES.INFO_BLOG_CONTENT,
  },
  {
    title: "Human Touch Content with AI",
    description:
      "Submit your keyword and get a unique outline. After that generate content with human touch",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.human_touch_content_with_ai}`,
    icon: "",
    parentCategory: PARENT_BLOG_CATEGORIES.INFO_BLOG_CONTENT,
  },
  {
    title: "Amazon Review Content ",
    description:
      "Search, add products manually & write 100% unique Amazon reviews in just a click",
    link: "",
    icon: "",
    parentCategory: PARENT_BLOG_CATEGORIES.AFFILIATE_REVIEW_CONTENT,
  },
  {
    title: "Guest Post Content",
    description:
      "Our AI will help you write 100% unique seo friendly Guest Post Content in one click",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.guest_post_content}`,
    icon: "",
    parentCategory: PARENT_BLOG_CATEGORIES.MORE_AI_TOOLS,
  },
  {
    title: "Content Rewrite",
    description: "With our AI you can re-write given content",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.content_rewrite}`,
    icon: "",
    parentCategory: PARENT_BLOG_CATEGORIES.MORE_AI_TOOLS,
  },
  {
    title: "Generate Backlinks Content",
    description:
      "Input your keyword and generate content for your backlinks easily",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.generate_backlinks_content}`,
    icon: "",
    parentCategory: PARENT_BLOG_CATEGORIES.MORE_AI_TOOLS,
  },
  {
    title: "Generate Conclusion",
    description:
      "Generate eye catching conclusion with one click with any topic",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.generate_conclusion}`,
    icon: "",
    parentCategory: PARENT_BLOG_CATEGORIES.MORE_AI_TOOLS,
  },
  {
    title: "Generate Introduction",
    description: "Generate any topic intro to grab your audience attention",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.generate_introduction}`,
    icon: "",
    parentCategory: PARENT_BLOG_CATEGORIES.MORE_AI_TOOLS,
  },
  {
    title: "Blog Article Outline Generator",
    description:
      "Submit your keyword and with one click you will get a content outline in minutes ",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.blog_article_outline_generator}`,
    icon: "",
    parentCategory: PARENT_BLOG_CATEGORIES.MORE_AI_TOOLS,
  },
  {
    title: "Blog Paragraph",
    description:
      "Write a portion of your blog's paragraph in seconds. Just add your topic and get the paragraph",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.blog_paragraph}`,
    icon: "",
    parentCategory: PARENT_BLOG_CATEGORIES.MORE_AI_TOOLS,
  },
];

export const GPT_MODELS = {
  GPT_4_TURBO: {
    name: "GPT 4 - Turbo",
    value: "gpt-4-turbo",
  },
  GPT_4_O: {
    name: "GPT 4 - O",
    value: "gpt-4o",
  },
};
