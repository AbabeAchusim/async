// Task 1 //
// Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.

async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  // Example usage:
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);
  

  // Task 4 //
  //Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.//


  async function concurrentRequests() {
    try {
      const [response1, response2] = await Promise.all([
        fetch('https://api.example.com/data1'),
        fetch('https://api.example.com/data2')
      ]);
  
      const data1 = await response1.json();
      const data2 = await response2.json();
  
      console.log('Data from API 1:', data1);
      console.log('Data from API 2:', data2);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }
  
  // Example usage:
  concurrentRequests();

  // Task 5 //
//Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). Log the responses once all requests are complete.//


  async function parallelCalls(urls) {
    try {
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(response => response.json()));
      console.log('Responses:', data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }
  
  // Example usage:
  parallelCalls(['https://api.example.com/data1', 'https://api.example.com/data2']);
  