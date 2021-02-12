import React from 'react'
import Layout from '../../components/layout/Layout.component'
import BlogRoll from '../../components/BlogRoll/BlogRoll'
import SEO from '../../components/Seo.component'

const BlogIndexPage = () => {
  const description = "Keep up to date with the latest stories and articles from Kogo Foods."
  return (
<Layout>
         <SEO 
           title="Blog" 
           description={description} 
           thumbnailImage="/img/ogKogoBlog.jpg" 
           addedKeywords="shop blog" 
           url="https://www.kogofoods.com/blog/"
         />

         <main className="main-content">
           <div className="main-content-container anim-start-0 fadeIn">
             <h1
               className="has-text-weight-bold"
               style={{marginBottom: '5%', lineHeight: '1'}}
             >
               Latest Articles
             </h1>
          
             <section >
               <div className="container">
                 <div>
                   <BlogRoll />
                 </div>
               </div>
             </section>
           </div>
         </main>
       </Layout>
  )
}

export default BlogIndexPage
