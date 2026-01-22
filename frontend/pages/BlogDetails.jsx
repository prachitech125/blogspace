import { useParams, Link } from "react-router-dom";
import { mockPosts } from "../data/mockPosts";
import { formatDate } from "../utils/formatDate";
import CommentThread from "../components/blog/CommentThread";
import TagPill from "../components/blog/TagPill";

export default function BlogDetails() {
  const { id } = useParams();
  const post = mockPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h2 className="serif-title text-2xl font-semibold">Post not found</h2>
        <Link to="/" className="text-sm text-[#b79cff] underline mt-2 inline-block">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto reading-width">
      <Link to="/" className="text-sm text-[var(--muted)] hover:underline">
        ← back to home
      </Link>

      <div className="mt-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] overflow-hidden">
        <div className="h-52 sm:h-64 w-full">
          <img src={post.cover} alt={post.title} className="h-full w-full object-cover" />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <TagPill tag={post.tag} />
            <span className="text-xs text-[var(--muted)]">
              {formatDate(post.date)} · {post.minutes} min
            </span>
          </div>

          <h1 className="mt-3 serif-title text-3xl sm:text-4xl font-semibold leading-tight">
            {post.title}
          </h1>

          <p className="mt-2 text-sm text-[var(--muted)]">
            by <span className="font-medium text-[var(--text)]">{post.author}</span>
          </p>

          <div className="mt-6 text-[15px] text-[var(--text)] leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>

          <div className="mt-8 flex items-center justify-between text-sm text-[var(--muted)]">
            <span>♥ {post.likes} appreciations</span>
            <span className="italic">save this for later (coming soon)</span>
          </div>
        </div>
      </div>

      <CommentThread />
    </article>
  );
}
