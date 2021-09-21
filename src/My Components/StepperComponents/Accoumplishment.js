/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { RootContainer } from "../../styles/RootContainer";
import { EmployementStyle } from "../../styles/EmployementStyle";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function Accomplishment() {
  const userInfo = JSON.parse(localStorage.getItem("friday-user-info"));
  const history = useHistory();
  const [finalData, setfinalData] = useState(null);
  const [addAccompCount, setaddAccompCount] = useState([
    {
      title: "",
      org: "",
      date: "",
      details:
        "its a very special and difficult course bhut kam log kr pate hai",
    },
  ]);
  const [singleAccoump, setsingleAccoump] = useState({
    title: "",
    org: "",
    date: "",
    details: "",
  });
  const [btnDisable, setBtnDisable] = useState(false);

//   useEffect(() => {
//     const refinedEmp = addAccompCount.filter((d) => d.position !== "");
//     setfinalData(refinedEmp);
//   }, [addAccompCount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(addAccompCount)
    // setaddAccompCount(finalData);

    // const accomplishment = addAccompCount;
    // console.log("<><><><> ", accomplishment);
  };

  const addEducation = () => {
    if (!(addAccompCount.length < 4)) {
      setBtnDisable(true);
    }
  };

  const handleChangeFunc = (key, value, index, state) => {
    const obj = { ...state[index] };
    obj[key] = value;
    const arr = [...state];
    arr[index] = obj;
    setaddAccompCount(arr);
  };

  return (
    <form
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        width: "60%",
        height: "auto",
        padding: "45px",
        borderRadius: "6px",
        margin: "63px auto 160px auto",
      }}
      onSubmit={handleSubmit}
    >
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <h2>Accomplishment</h2>
        <p style={{ fontSize: "1rem" }}>
          Please add or Upload Details of Your Certificate You have achieved or
          completed related to your desired job Profile if any.
        </p>
      </div>

      {addAccompCount?.map((d, index) => (
        <>
          <div
            style={{
              marginTop: "20px",
              marginBottom: "15px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              style={{ width: "100%", fontSize: "1rem" }}
              id="component-helper"
              label="Certificate Name*"
              value={addAccompCount[index].title}
              name="title"
              onChange={(e) =>
                handleChangeFunc("title", e.target.value, index, addAccompCount)
              }
              aria-describedby="component-helper-text"
            />
          </div>
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              style={{ width: "100%", fontSize: "1rem" }}
              id="component-helper"
              label="Certified By Organization name*"
              name="org"
              value={addAccompCount[index].org}
              onChange={(e) =>
                handleChangeFunc("org", e.target.value, index, addAccompCount)
              }
              aria-describedby="component-helper-text"
            />
          </div>
          <div
            style={{
              marginTop: "40px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              style={{ width: "100%", fontSize: "1rem" }}
              id="date"
              label="Date of Completion"
              type="date"
              name="date"
              value={addAccompCount[index].date}
              onChange={(e) =>
                handleChangeFunc("date", e.target.value, index, addAccompCount)
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div
            style={{
              marginTop: "40px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Button
              style={{ padding: "10px" }}
              color="secondary"
              component="label"
            >
              Upload File
              <input type="file" name="detail" hidden />
            </Button>
          </div>
        </>
      ))}

      <div>
        <Button
          type="button"
          onClick={() => {
            addEducation();
            setaddAccompCount((previousData) => [
              ...previousData,
              singleAccoump,
            ]);
          }}
          style={{ width: "100%" }}
          color="primary"
          disabled={btnDisable}
        >
          Add More Accomplishment +{" "}
        </Button>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "35px",
        }}
      >
        <Button
          style={{ ...EmployementStyle.btnStyle }}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </div>
    </form>
  );
}

export default Accomplishment;
