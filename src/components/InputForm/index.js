import { useState } from "react";
import "./index.css";
import { Button } from "antd";

const InputForm = (props) => {
  const { getDatails, getForm } = props;
  const [name, setName] = useState("");
  const [descriptionText, setdescriptionText] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  const [isErrorName, setErrorMsgName] = useState(false);
  const [isErrorDiscription, setErrorMsgDiscription] = useState(false);
  const [isErrorPrice, setErrorMsgPrice] = useState(false);
  const [isErrorCategory, setErrorMsgCategory] = useState(false);
  const [overallError, setoverallErrorMsg] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    const details = {
      title: name,
      description: descriptionText,
      price,
      category,
    };

    if (
      name.length !== 0 &&
      descriptionText.length !== 0 &&
      price &&
      category.length !== 0
    ) {
      getForm();
      getDatails(details);
    } else {
      setoverallErrorMsg(true);
    }
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeCommentText = (event) => {
    setdescriptionText(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const onChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const checkValidName = (event) => {
    if (event.target.value === "") {
      setErrorMsgName(true);
    } else {
      setErrorMsgName(false);
    }
  };

  const checkValidDiscription = (event) => {
    if (event.target.value === "") {
      setErrorMsgDiscription(true);
    } else {
      setErrorMsgDiscription(false);
    }
  };

  const checkValidPrice = (event) => {
    const validnumber = parseInt(event.target.value);

    if (validnumber < 1) {
      setErrorMsgPrice(true);
    } else {
      setErrorMsgPrice(false);
    }
  };

  const checkValidCategory = (event) => {
    if (event.target.value === "") {
      setErrorMsgCategory(true);
    } else {
      setErrorMsgCategory(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={onChangeName}
          onBlur={checkValidName}
        />
        {isErrorName && <p> * Enter Valid Name *</p>}
        <textarea
          placeholder="Your discription"
          value={descriptionText}
          onChange={onChangeCommentText}
          onBlur={checkValidDiscription}
          rows="6"
        />
        {isErrorDiscription && <p> * Enter Valid Description *</p>}
        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={onChangePrice}
          onBlur={checkValidPrice}
        />
        {isErrorPrice && <p> * Enter Valid Price *</p>}
        <input
          type="text"
          placeholder="Product Category"
          value={category}
          onChange={onChangeCategory}
          onBlur={checkValidCategory}
        />
        {isErrorCategory && <p> * Enter Valid Category *</p>}
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
        {overallError && <p> * Enter All Inputs *</p>}
      </form>
    </div>
  );
};

export default InputForm;
