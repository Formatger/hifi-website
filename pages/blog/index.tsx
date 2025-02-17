import React, { useState } from 'react';
import MainHeader from "../../components/toolbar/header";
import {Footer} from '../../components/Footer';
import {BlogSubscribe} from '../../components/blog/BlogSubscribe';
import {BlogHero} from '../../components/blog/BlogHero';
import AnimationTrigger from '../../components/AnimationTrigger';
import { GetStaticProps } from 'next';
import BlogArchive from '../../components/blog/BlogArchive';
import { BlogArchiveConfig, Config } from '../../utils/Config';
import { getAllPosts, getCategoryCollection, PostItems } from '../../utils/Content';
import { Meta } from '../../components/head/Meta';

type IIndexProps = {
  initialPosts: PostItems[];
  allPosts: PostItems[];
  categoryCollection: [string, PostItems[]][];
  posts?: any;
};

export default function Blog(props: IIndexProps) {
  const { initialPosts, allPosts, categoryCollection } = props;

  const [activeSection, setActiveSection] = useState<string>('all');

  const filteredPosts = {
    all: allPosts,
    general: allPosts.filter((post) => post.tags.includes('General')),
    product: allPosts.filter((post) => post.tags.includes('Product')),
    company: allPosts.filter((post) => post.tags.includes('Company'))
  };
  
  return (
    <main className="BlogPage">
      <AnimationTrigger />
      <div>
        <MainHeader useWhite={true} 
          meta={<Meta 
            title="Blog" 
            metaTitle="Hifi Blog │ HIFI" 
            metaImg="https://hifibridge.com/thumb/thumb_hifibridge.png" 
            description="Don't just keep up —Lead the way with cutting-edge insights at your fingertips." />} 
            />
      </div>

      <BlogHero posts={initialPosts}/>

      <section className="PostSectionWrap">
          <div className="PostSection">
            <div className="PostContent">
              <div className="Categories">
                <button 
                  className={activeSection==='all' ? 'activeBtn' : 'inactiveBtn'}
                  onClick={() => setActiveSection('all')}>View All</button>
                <button 
                  className={activeSection==='general' ? 'activeBtn' : 'inactiveBtn'}
                  onClick={() => setActiveSection('general')}>General</button>
                <button 
                  className={activeSection==='product' ? 'activeBtn' : 'inactiveBtn'}
                  onClick={() => setActiveSection('product')}>Product</button>
                <button 
                  className={activeSection==='company' ? 'activeBtn' : 'inactiveBtn'}
                  onClick={() => setActiveSection('company')}>Company</button>
              </div>
              <div className={activeSection==='all' ? 'activeTab' : 'hiddenTab'}>
                <BlogArchive initialPosts={initialPosts} allPosts={filteredPosts.all}/>
              </div>
              <div className={activeSection==='general' ? 'activeTab' : 'hiddenTab'}>
                <BlogArchive initialPosts={initialPosts} allPosts={filteredPosts.general}/>
              </div>
              <div className={activeSection==='product' ? 'activeTab' : 'hiddenTab'}>
                <BlogArchive initialPosts={initialPosts} allPosts={filteredPosts.product}/>
              </div>
              <div className={activeSection==='company' ? 'activeTab' : 'hiddenTab'}>
                <BlogArchive initialPosts={initialPosts} allPosts={filteredPosts.company}/>
              </div>
            </div>
        </div>
      </section>

      <BlogSubscribe />

      <Footer />

    </main>
  );
}

export const getStaticProps: GetStaticProps<IIndexProps> = async () => {
  const posts = getAllPosts(Config.post_fields);

  return {
    props: {
      allPosts: posts,
      initialPosts: posts.slice(0, BlogArchiveConfig.blog_pagination_size),
      categoryCollection: getCategoryCollection(['slug', 'tags']),    
    },
  };
};
