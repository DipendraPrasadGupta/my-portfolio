import "@/styles/globals.css";
import PageTransition from "./components/PageTransition";
import { AnimatePresence } from "framer-motion";
import { useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    emailjs.init('5hp0hO-xTYLMrb1i4');
  }, []);

  return (
    <AnimatePresence mode="wait">
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </AnimatePresence>
  );
}
