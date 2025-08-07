
export default function Footer() {
  return (
    <footer className="  text-gray-400 text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} Dipendra Prasad Gupta. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="https://github.com" className="hover:text-yellow-400">GitHub</a>
        <a href="https://linkedin.com" className="hover:text-yellow-400">LinkedIn</a>
        <a href="mailto:email@example.com" className="hover:text-yellow-400">Email</a>
      </div>
    </footer>
  );
}
