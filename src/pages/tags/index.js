import React, {useContext, useEffect} from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import "../../templates/tags.styles.scss";
import { GlobalStateContext, GlobalDispatchContext } from '../../context/GlobalContextProvider';


const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {

const state = useContext(GlobalStateContext) || { tagsArray: [] };
const dispatch = useContext(GlobalDispatchContext);



let newGroup = state.tagsArray;


useEffect(() => {
  if (!state.tagsUpdated) {
    let output = [];
  
    group.forEach(item => {
      let exisiting = output.filter((v, i) => {
        return v.fieldValue.toUpperCase() == item.fieldValue.toUpperCase()
      });
    
      if(exisiting.length){
        let exisitingIndex = output.indexOf(exisiting[0]);
        output[exisitingIndex].totalCount = output[exisitingIndex].totalCount + item.totalCount;
      } else {
        if (typeof item.value == 'string'){
          item.totalCount = [item.totalCount];
        }
        output.push(item);
      }
    })
    
    dispatch({
      type: 'HYDRATE_TAGS',
      payload: output
    });
  }
}, [state.tagsUpdated])


return (
  <Layout>
    <section className="main-content">
      <Helmet title={`Tags | ${title}`} />
      <div className="main-content-container  anim-start-0 fadeIn">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h1 className="title is-size-2 is-bold-light">Tags</h1>
            <ul className="taglist">
              {newGroup.map(tag => (
                <li key={tag.fieldValue} className="tag-link">
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} >
                    {kebabCase(tag.fieldValue)} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)}

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

