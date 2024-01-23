import "../styles/hero.css";

const Page = () => {
  return (
    <div className="h-screen mx-auto">
      {/* Navbar block. */}
      <nav className="p-4 bg-secondary text-primary">
        <div className="container flex items-center justify-between mx-auto">
          <a href="#" className="text-3xl font-bold ">
            WallSync
          </a>
          <div className="space-x-4">
            <a href="#" className="text-lg hover:underline hover:text-white">
              <i className="bi bi-clock"></i> Latest
            </a>
            <a href="#" className="text-lg hover:underline hover:text-white">
              <i className="bi bi-list"></i> Genres
            </a>
            <a href="#" className="text-lg hover:underline hover:text-white">
              <i className="bi bi-plus"></i> Upload
            </a>
            <a href="#" className="text-lg hover:underline hover:text-white">
              <i className="bi bi-box-arrow-right"></i> Sign In
            </a>
          </div>
        </div>
      </nav>
      {/* End of navbar block. */}

      <div className="space-y-12">
        {/* Hero block. */}
        <div className="px-16 py-8 hero">
          <h1 className="mb-8 text-4xl font-bold text-center text-white">
            Welcome to WallSync!
          </h1>
          <form className="flex flex-col justify-center gap-4">
            <input
              type="text"
              name="wallpaper"
              id="wallpaper"
              placeholder="Search wallpapers..."
              className="p-4 bg-white rounded-lg bg-opacity-80 placeholder:text-lg placeholder:focus:text-white focus:bg-opacity-100 placeholder:text-background"
            />
            <button
              type="submit"
              className="p-2 font-semibold text-white rounded-lg bg-opacity-80 text-md bg-secondary hover:text-white hover:bg-primary focus:bg-opacity-100"
            >
              <div className="bi bi-search"></div>
            </button>
          </form>
        </div>
        {/* End of hero block. */}
        <div className="container mx-auto space-y-12">
          {/* Genres block. */}
          <section>
            <h2 className="mb-4 text-xl text-center">Available Genres</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="p-2 text-white rounded bg-trinary hover:bg-secondary hover:text-white">
                Art
              </div>
              <div className="p-2 text-white rounded bg-trinary hover:bg-secondary hover:text-white">
                Anime
              </div>
              <div className="p-2 text-white rounded bg-trinary hover:bg-secondary hover:text-white">
                Music
              </div>
              <div className="p-2 text-white rounded bg-trinary hover:bg-secondary hover:text-white">
                Building
              </div>
              <div className="p-2 text-white rounded bg-trinary hover:bg-secondary hover:text-white">
                City
              </div>
              <div className="p-2 text-white rounded bg-trinary hover:bg-secondary hover:text-white">
                AI
              </div>
              <div className="p-2 text-white rounded bg-trinary hover:bg-secondary hover:text-white">
                People
              </div>
              <div className="p-2 text-white rounded bg-trinary hover:bg-secondary hover:text-white">
                Cartoonish
              </div>
            </div>
          </section>
          {/* End of genres block. */}
          {/* Featured wallpapers block. */}
          <section>
            <h2 className="mb-4 text-xl text-center">
              Featured Desktop Images
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center justify-center px-16 py-8 border bg-trinary">
                1
              </div>
              <div className="flex items-center justify-center px-16 py-8 border bg-trinary">
                2
              </div>
              <div className="flex items-center justify-center px-16 py-8 border bg-trinary">
                3
              </div>
              <div className="flex items-center justify-center px-16 py-8 border bg-trinary">
                4
              </div>
              <div className="flex items-center justify-center px-16 py-8 border bg-trinary">
                5
              </div>
              <div className="flex items-center justify-center px-16 py-8 border bg-trinary">
                6
              </div>
            </div>
          </section>
          {/* End of featured wallpapers block. */}
          {/* Featured users block. */}
          <section>
            <h2 className="mb-4 text-xl text-center">Featured Users</h2>
            <div className="grid grid-cols-6 gap-4">
              <div className="flex items-center justify-center px-12 py-6 border bg-secondary">
                <div className="text-4xl bi bi-person-circle"></div>
              </div>
              <div className="flex items-center justify-center px-12 py-6 border bg-secondary">
                <div className="text-4xl bi bi-person-circle"></div>
              </div>
              <div className="flex items-center justify-center px-12 py-6 border bg-secondary">
                <div className="text-4xl bi bi-person-circle"></div>
              </div>
              <div className="flex items-center justify-center px-12 py-6 border bg-secondary">
                <div className="text-4xl bi bi-person-circle"></div>
              </div>
              <div className="flex items-center justify-center px-12 py-6 border bg-secondary">
                <div className="text-4xl bi bi-person-circle"></div>
              </div>
              <div className="flex items-center justify-center px-12 py-6 border bg-secondary">
                <div className="text-4xl bi bi-person-circle"></div>
              </div>
              <div className="flex items-center justify-center px-12 py-6 border bg-secondary">
                <div className="text-4xl bi bi-person-circle"></div>
              </div>
              <div className="flex items-center justify-center px-12 py-6 border bg-secondary">
                <div className="text-4xl bi bi-person-circle"></div>
              </div>
              <div className="flex items-center justify-center px-12 py-6 border bg-secondary">
                <div className="text-4xl bi bi-person-circle"></div>
              </div>
              <div className="flex items-center justify-center px-12 py-6 border bg-secondary">
                <div className="text-4xl bi bi-person-circle"></div>
              </div>
              <div className="flex items-center justify-center px-12 py-6 border bg-secondary">
                <div className="text-4xl bi bi-person-circle"></div>
              </div>
              <div className="flex items-center justify-center px-12 py-6 border bg-secondary">
                <div className="text-4xl bi bi-person-circle"></div>
              </div>
            </div>
          </section>
          {/* End of featured users block. */}
          {/* Footer block. */}
          <footer>
            <div className="text-center">
              <h6 className="mb-2 text-lg font-semibold">
                &copy; 2024 XnonXte
              </h6>
              <p>
                This website does not use cookies or store user information.
              </p>
            </div>
          </footer>
          {/* End of footer block. */}
        </div>
      </div>
    </div>
  );
};

export default Page;
