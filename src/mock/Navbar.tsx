const Navbar = () => {
  return (
    <nav className="p-4 bg-trinary text-primary">
      <div className="container flex items-center justify-between mx-auto">
        <a href="#" className="text-4xl font-bold ">
          WallSync
        </a>
        <div className="space-x-6">
          <a href="#" className="text-lg hover:underline hover:text-white">
            <i className="bi bi-clock"></i>{" "}
            <span className="text-xl">Latest</span>
          </a>
          <a href="#" className="text-lg hover:underline hover:text-white">
            <i className="bi bi-plus"></i>{" "}
            <span className="text-xl">Upload</span>
          </a>
          <a href="#" className="text-lg hover:underline hover:text-white">
            <i className="bi bi-box-arrow-right"></i>
            <span className="text-xl"> Sign In</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
