function Card({ username, btnText = "visit here" }) {
  console.log(username);
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-200 p-8">
        {" "}
        <div>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 fill-current text-gray-500"
            viewBox="0 0 24 24"
          ></svg>{" "}
        </div>{" "}
        <div className="mt-8 text-center">
          {" "}
          <h1 className="text-4xl">Welcome {username}</h1>{" "}
          <p className="mx-auto mt-4 lg:w-1/2 text-gray-500">
            A repository of free components built with tailwindcss. Every
            component is responsive, customizable and carefully crafted for your
            use.
          </p>{" "}
        </div>{" "}
        <button className="mt-8 block rounded-lg border border-green-700 bg-green-600 py-1.5 px-4 font-medium text-white transition-colors hover:bg-green-700 active:bg-green-800 disabled:opacity-50">
          {btnText}
        </button>{" "}
        <button className="mt-2 block rounded-lg bg-transparent py-1.5 px-4 font-medium text-blue-600 transition-colors hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
          {btnText}
        </button>{" "}
      </div>
    </>
  );
}

export default Card;
