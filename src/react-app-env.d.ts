/// <reference types="react-scripts" />

interface NewsAPIResponseJSON {
  status: string;
  totalResults: number;
  articles: NewsAPIArticle[];
}

interface NewsAPIArticle {
  source: {id: string, name: string};
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface RedditFetcherArg {
  subreddit: string;
}

interface RedditAPIResponseJSON {
  kind: string;
  data: RedditAPIData;
}

interface RedditAPIData {
  after: string;
  before: null;
  dist: number;
  modhash: string;
  children: RedditAPIThread[];
}

interface RedditAPIThread {
  kind: string;
  data: RedditAPIThreadData;
}

interface RedditAPIThreadData {
  all_awardings: [];
  allow_live_comments: boolean;
  approved_at_utc: null;
  approved_by: null;
  archived: boolean;
  author: string;
  author_flair_background_color: null;
  author_flair_css_class: null;
  author_flair_richtext: [];
  author_flair_template_id: null;
  author_flair_text: null;
  author_flair_text_color: null;
  author_flair_type: string;
  author_fullname: string;
  author_patreon_flair: boolean;
  author_premium: boolean;
  awarders: [];
  banned_at_utc: null;
  banned_by: null;
  can_gild: boolean;
  can_mod_post: boolean;
  category: null;
  clicked: boolean;
  content_categories: null;
  contest_mode: boolean;
  created: number;
  created_utc: number;
  discussion_type: null;
  distinguished: null;
  domain: string;
  downs: number;
  edited: boolean;
  gilded: number;
  gildings: {};
  hidden: boolean;
  hide_score: boolean;
  id: string;
  is_crosspostable: boolean;
  is_meta: boolean;
  is_original_content: boolean;
  is_reddit_media_domain: boolean;
  is_robot_indexable: boolean;
  is_self: boolean;
  is_video: boolean;
  likes: null;
  link_flair_background_color: string;
  link_flair_css_class: string;
  link_flair_richtext: [];
  link_flair_template_id: string;
  link_flair_text: string;
  link_flair_text_color: string;
  link_flair_type: string;
  locked: boolean;
  media: null;
  media_embed: {};
  media_only: boolean;
  mod_note: null;
  mod_reason_by: null;
  mod_reason_title: null;
  mod_reports: [];
  name: string;
  no_follow: boolean;
  num_comments: number;
  num_crossposts: number;
  num_reports: null;
  over_18: boolean;
  parent_whitelist_status: string;
  permalink: string;
  pinned: boolean;
  pwls: number;
  quarantine: boolean;
  removal_reason: null;
  removed_by: null;
  removed_by_category: null;
  report_reasons: null;
  saved: boolean;
  score: number;
  secure_media: null;
  secure_media_embed: {};
  selftext: string;
  selftext_html: string;
  send_replies: boolean;
  spoiler: boolean;
  stickied: boolean;
  subreddit: string;
  subreddit_id: string;
  subreddit_name_prefixed: string;
  subreddit_subscribers: number;
  subreddit_type: string;
  suggested_sort: string;
  thumbnail: string;
  thumbnail_height: null;
  thumbnail_width: null;
  title: string;
  top_awarded_type: null;
  total_awards_received: number;
  treatment_tags: [];
  ups: number;
  upvote_ratio: number;
  url: string;
  user_reports: [];
  view_count: null;
  visited: boolean;
  whitelist_status: string;
  wls: number;
}


