const _ = require('lodash');
const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

function removeTrailingLeadingSlashes(string) {
  return string.replace(/^\/*|\/*$/g, '');
}

exports.createPages = async ({ graphql, actions }, options) => {
  const { createPage } = actions

  let { cartPagePath = 'cart', basePath = '' } = options;
  basePath = removeTrailingLeadingSlashes(basePath);
  cartPagePath = removeTrailingLeadingSlashes(cartPagePath);

  const finalCartPagePath = `${basePath && `/${basePath}`}/${cartPagePath}`;

  const result = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        nodes {
          id
          handle
        }
      }
      allShopifyShopPolicy(sort: { fields: [title] }) {
        nodes {
          id
          type
          title
        }
      }
    }
  `)

  result.data.allShopifyProduct.nodes.forEach(node => {
    createPage({
      path: `/shop/${node.handle}/`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        productId: node.id,
      },
    })
  })

  result.data.allShopifyShopPolicy.nodes.forEach(node => {
    const shopHandle = node.title.replace(/\s+/g, '-').toLowerCase();

    createPage({
      path: `/${shopHandle}/`,
      component: path.resolve(`./src/templates/policy.js`),
      context: {
        policyId: node.id,
      }
    })
  })

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  }) 
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
