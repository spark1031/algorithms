const results = [];
// fetch(url)
// .then(response => {
//   return response.json();
// })
// .then(data => {
//   const totalPage = data.total_pages;
//   const totalResults = data.total_movies;
//   for(let i = 1; i <= totalPages; i++) {
//     fetch(`url${i}`)
//     .then(subResponse => {
//       return subResponse.json();
//     })
//     .then(subData => {
//       const subResults = data.results;
//       subResults.forEach(result => {
//         results.push(result.title);
//       });

//       if(results.length === totalResults) {
//         results.sort();
//         results.forEach(movie => {
//           console.log(movie);
//         })
//       }
//     })
//   }
// })
// .catch(error => console.error(error));

fetchAndParse(url)
  .then(data => {
    const totalPage = data.total_pages;
    const totalResults = data.total_movies;
    for (let i = 1; i <= totalPages; i++) {
      fetchAndParse(`url${i}`)
        .then(subData => {
          const subResults = data.results;
          subResults.forEach(result => {
            results.push(result.title);
          });

          if (results.length === totalResults) {
            results.sort();
            results.forEach(movie => {
              console.log(movie);
            });
          }
        });
    }
  })
  .catch(error => console.error(error));

function fetchAndParse(url) {
  return (
    fetch(url)
      .then(response => {
        return response.json();
      });
  );
}