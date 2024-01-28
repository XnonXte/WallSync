import wallpaper from "../img/wallpaper.jpg";

const View = () => {
  return (
    <div className="container mx-auto mt-8 space-y-8 text-center">
      {/* Header and image block. */}
      <section>
        <div className="mb-4">
          <h3 className="text-2xl font-bold">JR Train Full HD Wallpaper</h3>
          <span className="text-sm">Uploaded by XnonXte</span>
        </div>
        <img
          src={wallpaper}
          alt="JR Train wallpaper"
          className=" max-h-[540px] mb-4 mx-auto"
        />
        <span className="text-sm font-light">January 25, 2024</span>
      </section>
      {/* End of header and image block.*/}

      <section className="grid grid-cols-3 gap-4">
        <button
          type="button"
          className="p-2 bg-trinary hover:text-white hover:bg-primary"
        >
          Download Wallpaper
        </button>
        <button
          type="button"
          className="p-2 bg-trinary hover:text-white hover:bg-primary"
        >
          <i className="bi bi-facebook"></i> <span>Share to Facebook</span>
        </button>
        <button
          type="button"
          className="p-2 bg-trinary hover:text-white hover:bg-primary"
        >
          <i className="bi bi-twitter"></i> <span>Share to Twitter</span>
        </button>
      </section>

      <section className="p-4 bg-black bg-opacity-25 ">
        <h5 className="mb-2 text-xl font-semibold">Leave a comment</h5>
        <span>
          You need to{" "}
          <a href="#" className="underline underline-offset-2 hover:text-white">
            sign in
          </a>{" "}
          before writing comments.
        </span>
      </section>
    </div>
  );
};

export default View;
