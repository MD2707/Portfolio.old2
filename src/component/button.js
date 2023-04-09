import '../App.css';

function Button(props) {

  return (
    <div onClick={props.onClick} className="content hoverable">
        <label className="checkBox">
            <input id="ch1" type="checkbox"/>
            <div className="transition"></div>
        </label>
    </div>
  );
}

export default Button;
