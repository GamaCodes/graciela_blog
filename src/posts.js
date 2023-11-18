import axios from 'axios'
//import sortBy from "sort-by";

export async function getPosts() {
    let posts = await axios.get('https://gracieladominguez.org/wp-json/wp/v2/posts')
    .then((response) => response.data
    )

    //return contacts.sort(sortBy("last", "createdAt"));
    return posts
}

export async function getPost(id) {
    let post = await axios.get(`https://gracieladominguez.org/wp-json/wp/v2/posts/${id}`)
    .then((response) => response.data
    )

    return post ?? null

}
