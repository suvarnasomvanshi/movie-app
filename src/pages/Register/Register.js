import React, { useEffect, useState } from "react";
//import { CgProfile } from "react-icons/cg";
import style from "./Register.module.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

const Register = ({ button }) => {
  const [open, setOpen] = useState(false);
  const [submit, setSubmit] = useState([]);
  const [userName, setUserName] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  //const[search,setSearch]=useState("")

  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }
  function handleuserName(e) {
    setUserName(e.target.value);
  }
  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  //make one object addData,add all form data inside object,stord inside localstorage
  function handleSubmit() {
    const addData = {
      userName,
      firstName,
      lastName,
      password,
      confirmpassword,
    };
    setSubmit([...submit, addData]);
    setUserName("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setConfirmPassword("");
    localStorage.setItem("key", JSON.stringify(submit));
    setOpen(false);
  }

  //get data from localstorage
  useEffect(() => {
    if (localStorage.getItem("key")) {
      setSubmit(JSON.parse(localStorage.getItem("key")));
    }
  }, []);

  return (
    <>
     
        <button onClick={handleOpen} className={style.btnNext}>
          {button}
        </button>
         
        <div >
        <Dialog open={open} onClose={handleClose} className={style.rmain}>
          <div className={style.dialog1}> User Details</div>

          <div>
            <input
              onChange={handleuserName}
              value={userName}
              placeholder="Username*"
              className={style.dialoginput}
            />
          </div>
          <div>
            <input
              onChange={handleFirstName}
              value={firstName}
              placeholder="First Name*"
              className={style.dialoginput}
            />
          </div>
          <div>
            <input
              onChange={handleLastName}
              value={lastName}
              placeholder="Last Name*"
              className={style.dialoginput}
            />
          </div>
          <div>
            <input
              onChange={handlePassword}
              value={password}
              placeholder="Password*"
              className={style.dialoginput}
            />
          </div>
          <div>
            <input
              onChange={handleConfirmPassword}
              value={confirmpassword}
              placeholder="Confirm Password*"
              className={style.dialoginput}
            />
          </div>

          <DialogActions>
            <button onClick={handleSubmit} className={style.btn}>
              submit
            </button>

            <button onClick={handleClose} className={style.btn}>
              cancel
            </button>
          </DialogActions>
      </Dialog>
      </div>

      <div className={style.username}>
        {submit.map((x) => {
          return (
            <>
              <span >{x.userName}</span>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Register;
