const tagColors = {
  Journals: "bg-[#fde2e4] text-[#5a2b2f] border-[#f7bfc6]",
  Nostalgia: "bg-[#e7f0ff] text-[#24345a] border-[#b7cdfa]",
  Writing: "bg-[#e9f7ef] text-[#1f3b2d] border-[#bde6cc]",
  Default: "bg-[#f1eee9] text-[#3a3530] border-[#d7d1c7]",
};

export default function TagPill({ tag = "Default" }) {
  const c = tagColors[tag] || tagColors.Default;

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${c}`}
    >
      {tag}
    </span>
  );
}
