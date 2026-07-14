function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        GVCC Learning Portal
      </h1>

      <div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">
          Profile
        </button>
      </div>

    </nav>
  );
}

export default Navbar;