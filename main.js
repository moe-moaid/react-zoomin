function handleClick() {
  alert("tt");
}

function MyApp() {
  return (
    <div>
      <h1>Ma APP</h1>
      <Button />
    </div>
  );
}

function Button() {
  return <button onClick={handleClick}>click me</button>;
}
