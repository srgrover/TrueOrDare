const fetchComments = (id) => {
  // Incremental static regeneration
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: 60
  }).then(res => res.json())
}
export default async function CommentsPage ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
