import { mockPosts } from "../data/mockPosts";
import BlogCard from "../components/blog/BlogCard";

export default function Profile() {
  const user = {
    name: "Prachi",
    bio: "I write soft thoughts and build calm software. ☕🌧️",
    followers: 128,
    following: 54,
  };

  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="h-16 w-16 rounded-3xl bg-[#e7f0ff] border border-[#b7cdfa] flex items-center justify-center text-2xl">
            ☕
          </div>

          <div className="flex-1">
            <h1 className="serif-title text-3xl font-semibold">{user.name}</h1>
            <p className="mt-1 text-[var(--muted)]">{user.bio}</p>

            <div className="mt-4 flex gap-6 text-sm text-[var(--muted)]">
              <span>
                <b className="text-[var(--text)]">{mockPosts.length}</b> posts
              </span>
              <span>
                <b className="text-[var(--text)]">{user.followers}</b> followers
              </span>
              <span>
                <b className="text-[var(--text)]">{user.following}</b> following
              </span>
            </div>
          </div>

          <button className="px-5 py-2 rounded-2xl border border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--surface)] hover:translate-y-[-1px] active:translate-y-[0px]">
            Edit Profile
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="serif-title text-2xl font-semibold">Your posts</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
