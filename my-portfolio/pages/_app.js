import "@/styles/globals.css";
import PageTransition from "./components/PageTransition";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </AnimatePresence>
  );
}
