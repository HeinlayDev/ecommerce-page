export default function Submit() {
  return (
    <div className="w-full max-w-xs mx-auto mt-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullname"
            type="text"
            placeholder="Full Name"
          ></input>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Store Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="storedescription"
            type="text"
            placeholder="Store Description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="storedescription"
            type="email"
            placeholder="Email"
          ></input>
        </div>
        <div className="mx-auto max-w-sm">
          <h1 className="mb-6 pt-6"> Social Media :</h1>

          <div className="pl-12">
            <div className="flex items-center mr-4 mb-4">
              <input
                type="radio"
                name="socialmedia"
                className="form-radio"
                value="facebook"
                checked
              />
              <label className="flex items-center cursor-pointer text-xl">
                <span className="w-4 h-4  border-grey flex-no-shrink"></span>
                Facebook
              </label>
            </div>

            <div className="flex items-center mr-4 mb-4">
              <input
                type="radio"
                name="socialmedia"
                className="form-radio"
                value="instagram"
              />
              <label className="flex items-center cursor-pointer text-xl">
                <span className="w-4 h-4  border-grey flex-no-shrink"></span>
                Instagram
              </label>
            </div>

            <div className="flex items-center mr-4 mb-4">
              <input
                type="radio"
                name="socialmedia"
                className="form-radio"
                value="line"
              />
              <label className="flex items-center cursor-pointer text-xl">
                <span className="w-4 h-4  border-grey flex-no-shrink"></span>
                Line
              </label>
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center" type="button" id="submit">
          <div className="md:w-1/3"></div>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded  focus:outline-none focus:shadow-outline"
            onClick={''}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
