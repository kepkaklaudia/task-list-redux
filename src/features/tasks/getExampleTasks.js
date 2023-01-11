exportconstgetExampleTasks = async () => {
  const response = fetch("/task-list-redux/exampleTasks.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};