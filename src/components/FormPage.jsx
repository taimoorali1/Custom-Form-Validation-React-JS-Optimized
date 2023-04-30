import React, { useState } from "react";
import InputField from "./InputField";
import Validation from "./Validaton";
import ModalComponent from "./ModalComponent";
import CheckandRadio from "./CheckandRadio";
import Form from "react-bootstrap/Form";

function FormPage() {
  const [modalValues, setModalValues] = useState({});
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
    date: "",
    checkbox: false,
    file: "",
    textarea: "",

    radio: "male",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = Validation(values);

    setErrors(newErrors);

    if (
      Object.keys(newErrors).length === 0 &&
      Object.values(values).every((val) => val !== "")
    ) {
      setModalValues(values);
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />

        <InputField
          label="Confirm Password"
          type="password"
          name="confirmpass"
          value={values.confirmpass}
          onChange={handleChange}
          error={errors.confirmpass}
        />

        <InputField
          label="Joining Date"
          type="date"
          name="date"
          value={values.date}
          onChange={handleChange}
          error={errors.date}
        />

        <InputField
          label="textarea"
          value={values.textarea}
          name="textarea"
          as="textarea"
          type="text"
          rows={5}
          onChange={handleChange}
          error={errors.textarea}
        />
        
        <Form.Label>Select Option from Dropdown</Form.Label>
        <Form.Select name="select" onChange={handleChange} value={values.select} >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <div>
          <InputField
            label="Chose File"
            id="file"
            type="file"
            name="file"
            onChange={handleChange}
            error={errors.file}
          />
        </div>

        <CheckandRadio
          label="I Agree to proceed the Terms & Condition"
          type="checkbox"
          name="checkbox"
          value={values.checkbox}
          onChange={handleChange}
          error={errors.checkbox}
        />

        <label className="my-2"> Select Gender</label>
        <CheckandRadio
          label="Male"
          type="radio"
          name="radio"
          value="male"
          checked={values.radio === "male"}
          onChange={handleChange}
          error={errors.radio}
        />
        <CheckandRadio
          label="Female"
          type="radio"
          name="radio"
          value="female"
          checked={values.radio === "female"}
          onChange={handleChange}
          error={errors.radio}
        />

        {/* <div>
          <label htmlFor="radio1" className="mx-3">
            Male
          </label>
          <input
            id="radio1"
            type="radio"
            name="radio"
            value="male"
            checked={values.radio === "male"}
            onChange={handleChange}
            error={errors.radio}
          />

          <br />
          <label htmlFor="radio2" className="mx-3">
            Female
          </label>
          <input
            id="radio2"
            type="radio"
            name="radio"
            value="female"
            checked={values.radio === "female"}
            onChange={handleChange}
            error={errors.radio}
          />

          {errors.radio && (
            <p className="mb-0" style={{ color: "red" }}>
              {errors.radio}
            </p>
          )}
        </div> */}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ModalComponent open={open} setOpen={setOpen} values={modalValues} />
    </div>
  );
}

export default FormPage;
