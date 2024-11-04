import React, { ReactNode } from 'react';
import { PostItems } from '../../utils/Content';
import { Footer } from '../Footer';
import MainHeader from '../toolbar/header';

type IMainProps = {
  meta: ReactNode;
  hero?: ReactNode;
  recentPosts?: PostItems[];
  categoryCollection?: [any, PostItems[]][];
  children?: ReactNode;
};

const BlogContainer = (props: IMainProps) => (
  <>
    {props.meta}

    <div>
      <MainHeader useWhite={true} />
    </div>

    <div>
      {props.hero}
      {props.children}
    </div> 

     <Footer />
  </>
);

export { BlogContainer };
