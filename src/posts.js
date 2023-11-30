import axios from 'axios'
//import sortBy from "sort-by";

export async function getPosts() {
    let posts = await axios.get('https://gracieladominguez.org/worpress/blog/wp-json/wp/v2/posts?_fields[]=title&_fields[]=date&_fields[]=id')
    .then((response) => response.data
    )

    //return contacts.sort(sortBy("last", "createdAt"));
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
