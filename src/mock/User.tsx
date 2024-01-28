const User = () => {
  return (
    <>
      <section>
        <div
          className="flex items-center justify-between px-8 py-16 mb-8 text-black"
          style={{
            backgroundImage: "url('./src/img/banner-default.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <img
              src="./src/img/user-default.jpg"
              alt="User icon"
              className="max-w-[128px] border-black rounded-full"
            />
            <div>
              <h4 className="mb-2 text-lg font-bold">XnonXte</h4>
              <p>Joined x days ago</p>
            </div>
          </div>
          <button
            type="button"
            className="p-2 text-white bg-opacity-75 bg-neutral-700 hover:bg-neutral-900"
          >
            <i className="bi bi-pencil-square"></i> Edit Profile
          </button>
        </div>
      </section>

      <div className="container mx-auto space-y-8">
        <section className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-between gap-4 px-2 py-1 bg-trinary">
            <i className="text-2xl bi bi-flag"></i>
            <div className="text-center">
              <div className="text-xl font-semibold text-white">0</div>
              <span className="text-sm text-neutral-400">Wallpapers</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 px-2 py-1 bg-trinary">
            <i className="text-2xl bi bi-eye"></i>
            <div className="text-center">
              <div className="text-xl font-semibold text-white">0</div>
              <span className="text-sm text-neutral-400">Views</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 px-2 py-1 bg-trinary">
            <i className="text-2xl bi bi-heart-fill"></i>
            <div className="text-center">
              <div className="text-xl font-semibold text-white">0</div>
              <span className="text-sm text-neutral-400">Likes</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 px-2 py-1 bg-trinary">
            <i className="text-2xl bi bi-download"></i>
            <div className="text-center">
              <div className="text-xl font-semibold text-white">0</div>
              <span className="text-sm text-neutral-400">Downloads</span>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h6>You haven't uploaded any wallpaper!</h6>
          <a href="#" className="underline underline-offset-2">
            Upload Wallpapers
          </a>
        </section>
      </div>
    </>
  );
};

export default User;
