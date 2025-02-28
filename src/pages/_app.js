import "@/styles/globals.css"; // Tailwind or custom styles
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS (Only styles)
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js"); // Load Bootstrap JS only on client side
  }, []);

  return <Component {...pageProps} />;
}
