import AuthCheck from '../../components/AuthCheck'

export default function AdminPostsPage (props) {
  return (
    <main>
      <AuthCheck>
        <h2>
          Write your post
        </h2>
      </AuthCheck>
    </main>
  )
}
