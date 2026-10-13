export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2"&gt;&copy; {new Date().getFullYear()} Random Brand. Barcha huquqlar himoyalangan.</p>
        <nav className="flex gap-4 justify-center">
          <a href="#" className="hover:text-primary-300">Shartlar</a>
          <a href="#" className="hover:text-primary-300">Maxfiylik</a>
          <a href="#" className="hover:text-primary-300">Bog‘lanish</a>
        </nav>
      </div>
    </footer>
  )
}
