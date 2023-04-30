import Form from "react-bootstrap/Form";

function CheckandRadio(props) {
  return (
    <Form>
      <Form.Check
        label={props.label}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
      />
      {props.error && (
        <div className="error" style={{ color: "red" }}>
          {props.error}
        </div>
      )}
    </Form>
  );
}

export default CheckandRadio;
