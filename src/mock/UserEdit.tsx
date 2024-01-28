const UserEdit = () => {
  return (
    <div className="container mx-auto space-y-8">
      <section className="mt-8">
        <h2 className="mb-8 text-2xl font-bold text-center">
          Edit your profile
        </h2>
        <form className="p-4 space-y-4 bg-black bg-opacity-25">
          <div>
            <h2 className="text-xl font-semibold text-center ">Account</h2>
            <hr />
          </div>

          <div className="flex flex-col">
            <label htmlFor="username" className="block text-md">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value="XnonXte"
              className="p-1 text-white placeholder:text-neutral-600 bg-trinary"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-md">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value="quddussalam555@gmail.com"
              className="p-1 text-white placeholder:text-neutral-600 bg-trinary"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-center ">Pictures</h2>
            <hr />
          </div>

          <div className="flex flex-col">
            <label htmlFor="banner" className="text-md">
              Banner
            </label>
            <input type="file" name="banner" id="banner" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="icon" className="text-md">
              Icon
            </label>
            <input type="file" name="icon" id="icon" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-center ">Profile</h2>
            <hr />
          </div>

          <div className="flex flex-col">
            <label htmlFor="real-name" className="block text-md">
              Real Name
            </label>
            <input
              type="text"
              name="real-name"
              id="real-name"
              value="Quddus Salam"
              className="p-1 text-white placeholder:text-neutral-600 bg-trinary"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="website" className="block text-md">
              Website
            </label>
            <input
              type="text"
              name="website"
              id="website"
              value="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="p-1 text-white placeholder:text-neutral-600 bg-trinary"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="tiktok-username" className="block text-md">
              TikTok Username
            </label>
            <input
              type="text"
              name="tiktok-username"
              id="tiktok-username"
              value="XnonXte"
              className="p-1 text-white placeholder:text-neutral-600 bg-trinary"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="instagram-username" className="block text-md">
              Instagram Username
            </label>
            <input
              type="text"
              name="instagram-username"
              id="instagram-username"
              value="XnonXte"
              className="p-1 text-white placeholder:text-neutral-600 bg-trinary"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="twitter-username" className="block text-md">
              Twitter Username
            </label>
            <input
              type="text"
              name="twitter-username"
              id="twitter-username"
              value="XnonXte"
              className="p-1 text-white placeholder:text-neutral-600 bg-trinary"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bio">Bio</label>
            <textarea
              name="bio"
              id="bio"
              cols={30}
              rows={10}
              className="p-1 text-white placeholder:text-neutral-600 bg-trinary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="p-2 bg-trinary hover:text-white hover:bg-primary"
          >
            Save Changes
          </button>
        </form>
      </section>
    </div>
  );
};

export default UserEdit;
