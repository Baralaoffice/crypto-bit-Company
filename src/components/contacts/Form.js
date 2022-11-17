import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
  form: {
    background: "#f2f2f2",
    width: " 100%",
    padding: "40px",
    borderRadius: "17px",
    "& input": {
      background: "#fff",
    },
    "& Button": {
      display: " inline-block",
      width: "34%",
      borderRadius: "50px",
      padding: "14px",
      textTransform: "capitalize",
    },
  },
});

const Form = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const classes = usestyles();

  return (
    <Box className={classes.form}>
      <FormControl
        fullWidth
        style={{ display: "flex", flexDirection: "column", gap: "35px" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            required
            label="your name"
            placeholder="Your Name"
            fullWidth
          />
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="phone"
            required
            placeholder="phone"
            fullWidth
          />
        </Box>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          style={{
            background: "#fff",
          }}
        >
          <MenuItem value={10}>Graphic design</MenuItem>
          <MenuItem value={20}>Web design</MenuItem>
          <MenuItem value={30}>Consulting</MenuItem>
          <MenuItem value={40}>Interior Design</MenuItem>
        </Select>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="How can we help you?"
          minRows={10}
          style={{ padding: "10px" }}
        />
        <Button variant="contained">Send message</Button>
      </FormControl>
    </Box>
  );
};

export default Form;
