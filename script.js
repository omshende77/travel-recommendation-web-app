function search() {
  let input = document.getElementById("searchInput").value.toLowerCase();

  let results = document.getElementById("results");

  results.innerHTML = "";

  if (input === "beach") {
    results.innerHTML = `
        <h2>Beach Recommendations</h2>

        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e">

        <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98">
        `;
  } else if (input === "temple") {
    results.innerHTML = `
        <h2>Temple Recommendations</h2>

        <img src="https://images.unsplash.com/photo-1548013146-72479768bada">

        <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da">
        `;
  } else if (input === "country") {
    results.innerHTML = `
        <h2>Country Recommendations</h2>

        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb">

        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e">
        `;
  } else {
    results.innerHTML = "<h3>No Results Found</h3>";
  }
}
