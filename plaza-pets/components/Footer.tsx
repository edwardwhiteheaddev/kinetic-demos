export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">Plaza Pets</h3>
            <p className="mt-2 text-sm text-gray-300">
              Oriental Plaza, Fordsburg, Johannesburg
            </p>
          </div>
          <div className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Plaza Pets. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
