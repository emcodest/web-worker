/** background worker of js to process long running task in the background */
self.addEventListener('message', (event) => {
    const dataFromMainThread = event.data;
    console.log("from main received by worker", dataFromMainThread)
    
    // Perform some computation or task here
    const result = performTask(dataFromMainThread.number_1, dataFromMainThread.number_2);
    
    
    // Send the result back to the main thread
    self.postMessage(result);
  });
  
  function performTask(a, b) {
    // Implement your task logic here
    // You can use the 'data' parameter to access the data sent from the main thread
    // Return the result of your computation
    return a + b
  }
