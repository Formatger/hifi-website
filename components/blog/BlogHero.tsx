import React from 'react';
import { BlogSlideshow } from './BlogSlideshow';
import { slugCompute } from '../../utils/SlugCompute';
import { PostItems } from '../../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
};

const BlogHero = (props: IBlogGalleryProps) => (
  <>
    <section className="BlogSectionWrap">
        <div className="BlogSectionBg">
            <div className="BlogSection">
                <div className="BlogHeroContent" data-animate="slide-up">
                    <div className="BlogTitle">
                        <h1><span className="WarmGrad">The HiFi Blog</span></h1>
                        <h6>Don't just keep up —Lead the way with cutting-edge insights at your fingertips.</h6>
                    </div>
                    <div className="">
                       <BlogSlideshow posts={props.posts} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
);

export { BlogHero };
