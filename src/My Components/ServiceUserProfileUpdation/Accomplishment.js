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
  const classes = useStyles();
  const userInfo = JSON.parse(localStorage.getItem('user-info'));
  const defaultAccomplishment = userInfo.accomplishment[0] || {};
  const history = useHistory();
  const [edit, setEdit] = useState(false);
  const [finalData, setfinalData] = useState(null);
  const [addAccompCount, setaddAccompCount] = useState([
    {
      title: "bussiness",
      org: "ITUS",
      date: "2003-09-20",
      details:
        "its a very special and difficult course bhut kam log kr pate hai",
    },
    {
      title: "BCA",
      org: "Xyz college",
      date: "2010-09-25",
      details: "test detail",
    },
  ]);
  const [singleAccoump, setsingleAccoump] = useState({
    title: "",
    org: "",
    date: "",
    details: "",
  });
  const [btnDisable, setBtnDisable] = useState(false);

  useEffect(() => {
    if (userInfo == null) {
      history.push(`/`);
    }
  }, []);

  useEffect(() => {
    const refinedEmp = addAccompCount.filter((d) => d.position !== "");
    setfinalData(refinedEmp);
  }, [addAccompCount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setaddAccompCount(finalData);

    const accomplishment = addAccompCount;
    console.log("<><><><> ", accomplishment);
  };

  const addEducation = () => {
    if (!(addAccompCount.length < 4)) {
      setBtnDisable(true);
    }
  }

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
        ...RootContainer.rootContainer,
        height: "auto",
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
              onChange={
                edit
                  ? (e) =>
                      handleChangeFunc(
                        "title",
                        e.target.value,
                        index,
                        addAccompCount
                      )
                  : null
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
              onChange={
                edit
                  ? (e) =>
                      handleChangeFunc(
                        "org",
                        e.target.value,
                        index,
                        addAccompCount
                      )
                  : null
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
              onChange={
                edit
                  ? (e) =>
                      handleChangeFunc(
                        "date",
                        e.target.value,
                        index,
                        addAccompCount
                      )
                  : null
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
        <Button
          style={{ ...EmployementStyle.btnStyle }}
          type="submit"
          fullWidth
          onClick={() => {
            setEdit((previousData) => !previousData);
          }}
          variant="contained"
          color="primary"
        >
          {edit ? "Cancel" : "Edit"}
          {!edit ? <i class="fas fa-pen"></i> : null}
        </Button>
      </div>
    </form>
  );
}

export default Accomplishment;

{
  /* <div>

<Container className="Main-content" >
  <div className={classes.root}>
    <Grid container spacing={3}>


      <Grid item xs={12} >
        <Paper className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={5}>
              <Grid item xs={12} >
                <h1 className="heading" style={{ margin: 'auto' }}>Accomplishment: </h1>
              </Grid>
              <Grid item xs={12} >
                <h4>Please add or Upload Details of Your Certificate You have achieved or completed related to your desired job Profile if any: </h4>

              </Grid>
              <Grid item xs={12}  >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="title"
                  label="CertificateName"
                  name="CertificateName"
                  autoComplete="CertificateName"
                  defaultValue={defaultAccomplishment.title}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="filled"
                />

              </Grid>
              <Grid item xs={12}  >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="org"
                  label="Certified By: Organization/InstituteName:"
                  name="CertifiedBy"
                  autoComplete="CertifiedBy"
                  defaultValue={defaultAccomplishment.org}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="filled"
                />

              </Grid>

              <Grid item xs={12} sm={6} >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="date"
                  label="Date of Completion(DD-MM-YYYY)"
                  name="Date"
                  autoComplete="Date"
                  defaultValue={defaultAccomplishment.date}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={10}   >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="details"
                  label="Upload Your Certificate"
                  name="File"
                  autoComplete="File"
                  defaultValue={defaultAccomplishment.details}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={2}   >
                <Button
                  variant="contained"
                  component="label"
                  color="primary"
                  startIcon={<CloudUploadIcon />}
                  size="Medium"
                  style={{ marginRight: '40px' }}
                >
                  Upload File
                  <input
                    type="file"
                    hidden
                  />
                </Button>

              </Grid>

            </Grid>
            {edit && <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              startIcon={<SaveIcon />}
              size="large"
              style={{ marginTop: '70px' }}
            >
              Save
            </Button>}
          </form>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ width: '70%' }}
                size="large"
                onClick={() => setEdit(!edit)}

              >
                {edit ? 'Discard' : 'Edit'}
                <EditIcon />
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

    </Grid>
  </div>
</Container >

</div > */
}
