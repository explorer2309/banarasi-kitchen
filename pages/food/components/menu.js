export default function MenuListComponent() {
  return (
    <div className="mb-6">
      <h1 className="primary-heading">Food</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-md bg-red-800 text-white font-semibold items-center justify-center py-3 px-6 h-60 current-bg">
          <a href="/food/main-menu">
            <h1 className="text-center">
              <span className="text-4xl">Main</span>
              <span className="text-3xl block">menu</span>
            </h1>
          </a>
        </div>
        <div className="rounded-md bg-yellow-600 text-white font-semibold items-center justify-center py-3 px-6 topography-bg">
          <a href="/food/take-away-menu">
            <h1 className="text-center">
              <span className="text-4xl">Takeaway</span>
              <span className="text-3xl block">menu</span>
            </h1>
          </a>
        </div>
        <div className="rounded-md bg-blue-800 text-white font-semibold items-center justify-center py-3 px-6 cage-bg">
          <a href="/food/kids-menu">
            <h1 className="text-center">
              <span className="text-4xl block">Kids</span>
              <span className="text-3xl">menu</span>
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}
