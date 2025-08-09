export default function Skills() {
  return (
    <div  className='mt-12 w-[90%] mx-auto p-5 bg-gray-200/70 rounded-lg shadow-lg' >
      <h2 className="text-2xl text-center font-semibold underline ">Skills</h2>
      <ul className="flex flex-col justify-center items-center flex-wrap gap-5 mt-5 md:flex-row">
        <li className="bg-white p-4 rounded-lg shadow-md self-start">
          <h3 className="text-xl font-semibold">HTML</h3>
          <p className="text-gray-500">Markup Language</p>
        </li>
        <li className="bg-gray-600 p-4 rounded-lg shadow-md self-end">
          <h3 className="text-xl font-semibold text-white">CSS</h3>
          <p className="text-white ">Styling Language</p>
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md self-start">
          <h3 className="text-xl font-semibold">JavaScript</h3>
          <p className="text-gray-500">Programming Language</p>
        </li>
        <li className="bg-gray-600 p-4 rounded-lg shadow-md self-end">
          <h3 className="text-xl text-white font-semibold">React</h3>
          <p className="text-white">JavaScript Library</p>
        </li>
      </ul>
    </div>
  );
}
