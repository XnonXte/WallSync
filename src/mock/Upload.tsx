const Upload = () => {
  return (
    <div className="container mx-auto mt-8 space-y-8 text-justify">
      <section className="p-4 bg-black bg-opacity-25">
        <div className="mb-4">
          <h3 className="mb-2 text-2xl">Thanks for contributing!</h3>
          <span>
            Please keep in mind that you submission is going to be moderated, in
            order to be accepted, you must satisfy all of these requirements
            first:
          </span>
        </div>
        <ol className="list-decimal list-inside">
          <li>No NSFW content.</li>
          <li>No screenshot!</li>
          <li>No selfie or any other self photo.</li>
          <li>Try to be original and avoid duplicates!</li>
        </ol>
      </section>

      <section className="flex items-center justify-center">
        <button
          type="button"
          className="px-8 py-2 space-x-2 bg-secondary text-primary hover:bg-primary hover:text-white"
        >
          <i className="bi bi-upload"></i> <span>Upload</span>
        </button>
      </section>
    </div>
  );
};

export default Upload;
