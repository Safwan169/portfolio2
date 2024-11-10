import IconCloud from "../ui/icon-cloud";

const slugs = [
  "javascript",
  "tailwindcss",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "react",

  "firebase",
  "vercel",
  "tailwindcss",
  "express",

  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  // New icons added
  "mongodb",
  "nextdotjs",
  "express",
  "jsonwebtoken",
  "stripe",
];

export function IconCloudUi() {
  return (
    <div className="relative bg-transparent flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
