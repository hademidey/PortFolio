export default function Skills() {
  return (
    <div className=" bg-gray-100/70 mt-5 text-center hover:bg-gray-500 h-auto " >
      <h2 className="text-2xl font-semibold ">Skills</h2>
      <ul className="flex flex-col justify-center items-center flex-wrap gap-5 mt-5 md:flex-row">
        <li className="bg-white p-4 rounded-lg shadow-md w-40">
          <h3 className="text-xl font-semibold">HTML</h3>
          <p className="text-gray-500">Markup Language</p>
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md w-40">
          <h3 className="text-xl font-semibold">CSS</h3>
          <p className="text-gray-500">Styling Language</p>
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md w-80">
          <h3 className="text-xl font-semibold">JavaScript</h3>
          <p className="text-gray-500">Programming Language</p>
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md w-40">
          <h3 className="text-xl font-semibold">React</h3>
          <p className="text-gray-500">JavaScript Library</p>
        </li>
      </ul>
    </div>
  );
}
