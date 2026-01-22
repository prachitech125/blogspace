import Input from "../components/common/Input";
import Button from "../components/common/Button";

export default function Write() {
  return (
    <div className="mx-auto reading-width">
      <h1 className="serif-title text-3xl font-semibold">Write</h1>
      <p className="mt-1 text-sm text-[var(--muted)]">
        take your time. write slowly.
      </p>

      <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] p-6 sm:p-8 space-y-4">
        <div>
          <label className="text-sm text-[var(--muted)]">Title</label>
          <Input placeholder="a title that feels like a diary entry..." />
        </div>

        <div>
          <label className="text-sm text-[var(--muted)]">Tags</label>
          <Input placeholder="Journals, Nostalgia, Writing..." />
        </div>

        <div>
          <label className="text-sm text-[var(--muted)]">Your story</label>
          <textarea
            rows={10}
            className="w-full px-4 py-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] placeholder:text-[var(--muted)] soft-focus"
            placeholder="start with a small line... even a whisper is enough."
          />
          <p className="mt-2 text-xs text-[var(--muted)] italic">
            Markdown editor coming soon. For now, write plain and honest.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button className="bg-[#c7f0d8] text-[#143022] border-[#a8dfc0]">
            Save Draft
          </Button>
          <Button className="bg-[#b79cff] text-[#1b1530] border-[#a694ff]">
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
}
