import fetch from 'isomorphic-fetch'

export function fetchPosts(id) {
  console.log("id",id)
  const uri = id && id !== '' ? `https://jsonplaceholder.typicode.com/posts/${id}` :
                          `https://jsonplaceholder.typicode.com/posts`
  return fetch(uri)
         .then(data => data.json())
         .catch(err => {
           console.warn(err)
           return null
         })
}

export function fetchCategories() {
  const uri = `https://jsonplaceholder.typicode.com/todos`
  return fetch(uri)
         .then(data => data.json())
         .catch(err => {
           console.warn(err)
           return null
         })
}
