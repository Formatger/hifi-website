
function stripUrl(url: string) {
  if (url.includes('//')) {
    const splitUrl = url.split('//');
    return splitUrl[1];
  }
  return url;
}

export const Config = {
  url: process.env.SITE_URL,
  stripped_url: process.env.SITE_URL ? stripUrl(process.env.SITE_URL) : '',
  site_name: 'HIFI | hifibridge',
  title: 'Home',
  description: 'HIFI | Financial Operations Platform for Global Businesses',
  locale: 'en',
  author: 'HIFI Team',
  author_image: 'https://hifibridge.com/logos/hifi-team.png',
  blog_pagination_size: 3,
  post_fields: ['title', 'description', 'date', 'image', 'tags', 'slug'],
  metaImg: 'https://hifibridge.com/logos/thumb-main.png',
};

export const BlogArchiveConfig = {
  title: 'The HIFI Blog',
  description: "Don't just keep up —Lead the way with cutting-edge insights at your fingertips",
  blog_pagination_size: 6,
  featured_image: 'https://hifibridge.com/bg/waves-hpay.jpg',
};

export const SitemapConfig = {
  blog_pagination_size: 9999,
};
