import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setShow(window.scrollY > 300)
    );
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow"
    >
      ↑
    </button>
  );
}