function MojKomponent({title, content}) {
  return (
    <div>
      <dialog open>
        <h1>{title}</h1>

        <p>{content}</p>
      </dialog>
    </div>
  );
}

ReactDOM.render(
  <MojKomponent 
  title="Mój pierwszy komponent"
  content="Na dodatek z parametrami"
  />,
  document.getElementById('app')
);