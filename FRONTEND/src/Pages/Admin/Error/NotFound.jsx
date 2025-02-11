export default function NotFound({ errCode }) {
  return (
    <div className="p-2">
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-200">
            {errCode}
          </h1>
          <h2 className="text-3xl font-semibold text-gray-600 dark:text-gray-300">
            Page Not Found
          </h2>
        </div>
      </div>
    </div>
  );
}
