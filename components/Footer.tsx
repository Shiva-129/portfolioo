export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shiva Sathwik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
