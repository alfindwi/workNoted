export function Footer() {
  return (
    <footer className="mt-10 border-t border-black bg-[#f4fafa] shadow-[4px_4px_0px_#222222] font-mono">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-black gap-2">
        <p>&copy; {new Date().getFullYear()} WorkNote. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
