function App(props) {
  const colorStyle = {
    color: props.color,
    fontSize: props.font,
    textAlign: props.align,
  };
  return (
    <div>
      <div style={colorStyle}>Hello World!</div>
    </div>
  );
}

export default App;
