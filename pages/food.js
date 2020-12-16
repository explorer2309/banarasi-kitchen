export default function Food() {
  return (
    <>
      <h1 class="primary-heading">Food</h1>

      <div class="grid grid-cols-3 gap-4">
        <div class="rounded-md bg-red-800 text-white font-semibold items-center justify-center py-3 px-6 h-60 current-bg">
          <h1 class="text-center">
            <span class="text-4xl">Main</span>
            <span class="text-3xl block">menu</span>
          </h1>
        </div>
        <div class="rounded-md bg-yellow-600 text-white font-semibold items-center justify-center py-3 px-6 topography-bg">
          <h1 class="text-center">
            <span class="text-4xl">Takeaway</span>
            <span class="text-3xl block">menu</span>
          </h1>
        </div>
        <div class="rounded-md bg-blue-800 text-white font-semibold items-center justify-center py-3 px-6 cage-bg">
          <h1 class="text-center">
            <span class="text-4xl block">Kids</span>
            <span class="text-3xl">menu</span>
          </h1>
        </div>
      </div>

      <h2 class="secondary-heading">What should we have in this section?</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </>
  );
}
