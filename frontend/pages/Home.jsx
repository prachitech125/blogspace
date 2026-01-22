import BlogCard from "../components/blog/BlogCard";
import { mockPosts } from "../data/mockPosts";

export default function Home() {
  return (
    <div className="p-6 bg-red-500 text-white rounded-2xl">
      Tailwind working ✅


      <div className="space-y-10">
        <section className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] p-7 sm:p-10">
          <p className="text-sm text-[var(--muted)] italic">
            a late-night corner of the internet
          </p>

          <h1 className="mt-2 serif-title text-3xl sm:text-4xl font-semibold leading-tight">
            Write like it’s raining outside.
            <br />
            Read like you have nowhere to be.
          </h1>

          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Blogspace is a calm place for journals, slow blogs, and thoughtful stories.
            Not built for scrolling. Built for staying.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#posts"
              className="px-5 py-2.5 rounded-2xl bg-[var(--accent)] text-[var(--accentText)] hover:translate-y-[-1px] active:translate-y-[0px] shadow-sm"
            >
              Start Reading
            </a>

            <a
              href="/write"
              className="px-5 py-2.5 rounded-2xl border border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--surface)] hover:translate-y-[-1px] active:translate-y-[0px]"
            >
              Start Writing
            </a>
          </div>
        </section>

        <section id="posts" className="space-y-4">
          <div>
            <h2 className="serif-title text-2xl font-semibold">Latest Posts</h2>
            <p className="text-sm text-[var(--muted)]">soft thoughts, warm pages</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>

  );
}
