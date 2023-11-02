import Link from 'next/link'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: 60
  }).then(res => res.json())
}

export async function ListOfPosts () {
  const posts = await fetchPosts()
  return posts.map(post => (
    <article key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2 style={{ color: 'blue' }}>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
    </article>
  ))
}
