function MojKomponent() {
  return (
    <div>
      <h1>Witaj, świecie!</h1>
      <h2>Jestem ambitna/y, więc przerabiam kurs React.js!</h2>
    </div>
  );
}

ReactDOM.render(
  <MojKomponent />,
  document.getElementById('app')
);