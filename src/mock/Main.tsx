const availableGenres = [
  "Nature",
  "Abstract",
  "Technology",
  "Animals",
  "Space",
  "Architecture",
  "Vehicles",
  "Fantasy",
  "Anime",
  "Movies",
  "Gaming",
  "Seasonal",
  "Quotes",
  "Art",
  "Music",
  "Sports",
  "Vintage",
  "Food",
  "Textures",
  "Humor",
];
const desktopWallpapers = [1, 2, 3, 4, 5, 6];
const featuredUsers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

const Main = () => {
  return (
    <>
      {/* Hero block. */}
      <div
        className="py-32 mb-8"
        style={{
          backgroundImage: 'url("./src/img/wallpaper-hero.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "center",
        }}
      >
        <div className="container mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-center text-white">
            Welcome to WallSync!
          </h1>
          <form className="flex flex-col justify-center gap-4">
            <input
              type="text"
              name="wallpaper"
              id="wallpaper"
              placeholder="Search wallpapers..."
              className="p-4 text-black bg-white bg-opacity-80 placeholder:text-lg placeholder:focus:text-white focus:bg-opacity-100 placeholder:text-background"
            />
            <button
              type="submit"
              className="p-2 font-semibold text-white bg-opacity-80 text-md bg-secondary hover:text-white hover:bg-primary focus:bg-opacity-100"
            >
              <div className="bi bi-search"></div>
            </button>
          </form>
        </div>
      </div>
      {/* End of hero block. */}

      <div className="container mx-auto space-y-8">
        {/* Genres block. */}
        <section>
          <h2 className="mb-4 text-xl text-center">Available Genres</h2>
          <div className="grid justify-center grid-cols-5 gap-2">
            {availableGenres.map((genre, index) => {
              return (
                <a
                  key={index}
                  className="p-2 text-center text-white bg-trinary hover:bg-secondary hover:text-white hover:cursor-pointer"
                >
                  {genre}
                </a>
              );
            })}
          </div>
        </section>
        {/* End of genres block. */}

        {/* Featured wallpapers block. */}
        <section>
          <h2 className="mb-4 text-xl text-center">Featured Desktop Images</h2>
          <div className="grid grid-cols-3 gap-4">
            {desktopWallpapers.map((wallpaper, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center px-16 py-8 border bg-trinary"
                >
                  {wallpaper}
                </div>
              );
            })}
          </div>
        </section>
        {/* End of featured wallpapers block. */}

        {/* Featured users block. */}
        <section>
          <h2 className="mb-4 text-xl text-center">Featured Users</h2>
          <div className="grid grid-cols-6 gap-4">
            {featuredUsers.map((user, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center px-12 py-6 border bg-secondary"
                >
                  {user}
                </div>
              );
            })}
          </div>
        </section>
        {/* End of featured users block. */}
      </div>
    </>
  );
};

export default Main;
