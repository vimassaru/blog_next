import clsx from "clsx";

export default function HomePage() {
  return (
    <h1
      className={clsx(
        "text-blue-500",
        "text-7xl",
        "hover:text-blue-50",
        "hover:bg-blue-500",
        "transition",
        "duration-300"
      )}
    >
      Hello World! HOMEPAGE
    </h1>
  );
}
