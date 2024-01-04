import axios from 'axios'

export async function getMainPosts() {
    let stickyPosts = await axios.get('https://gracieladominguez.org/worpress/blog/wp-json/wp/v2/posts?sticky=true&_fields[]=title&_fields[]=date&_fields[]=id&_fields[]=excerpt&_fields[]=jetpack_featured_media_url')
    .then((response) => response.data
    )
    let notStickyPosts = await axios.get('https://gracieladominguez.org/worpress/blog/wp-json/wp/v2/posts?sticky=false&_fields[]=title&_fields[]=date&_fields[]=id&_fields[]=excerpt&_fields[]=jetpack_featured_media_url')
    .then((response) => response.data
    )
    let mainPosts = {
        'stickyPosts': stickyPosts,
        'notStickyPosts': notStickyPosts
    }
    return mainPosts
}

export async function getPosts() {
    let posts = await axios.get('https://gracieladominguez.org/worpress/blog/wp-json/wp/v2/posts?_fields[]=title&_fields[]=date&_fields[]=id&_fields[]=excerpt&_fields[]=jetpack_featured_media_url')
    .then((response) => response.data
    )
    return posts
}

export async function getCategories() {
    let categories = await axios.get('https://gracieladominguez.org/worpress/blog/wp-json/wp/v2/categories?_fields[]=id&_fields[]=name')
    .then((response) => response.data
    )
    return categories
}

export async function getPost(id) {
    let post = await axios.get(`https://gracieladominguez.org/worpress/blog/wp-json/wp/v2/posts/${id}`)
    .then((response) => response.data
    )
    return post ?? null
}