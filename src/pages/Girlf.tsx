import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import introtext from "../assets/girlflogo.svg";
import Button from "@mui/material/Button";

const Girlf = () => {
  const [dropdownValue1, setDropdownValue1] = useState("선택해주세요.");
  const [dropdownValue2, setDropdownValue2] = useState("선택해주세요.");
  const [dropdownValue3, setDropdownValue3] = useState("선택해주세요.");

  const handleChangeDropdown1 = (event) => {
    setDropdownValue1(event.target.value);
  };

  const handleChangeDropdown2 = (event) => {
    setDropdownValue2(event.target.value);
  };

  const handleChangeDropdown3 = (event) => {
    setDropdownValue3(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={introtext}
        alt="Intro Text"
        style={{ marginBottom: "100px", height: "80px" }}
      />
      <div className="flex flex-row">
        <div style={{ width: "500px" }}>
          <TextField
            id="outlined-multiline-static"
            label="상황 설명"
            multiline
            rows={10}
            placeholder="상황을 설명해보세요"
            fullWidth
            sx={{ backgroundColor: "#f5f5f5" }}
          />
        </div>
        <div className="mx-20">
          <div style={{ width: "500px" }}>
            <FormControl fullWidth>
              <InputLabel id="dropdown-label-1">말투</InputLabel>
              <Select
                labelId="dropdown-label-1"
                id="dropdown-1"
                value={dropdownValue1}
                onChange={handleChangeDropdown1}
                sx={{ backgroundColor: "#f5f5f5" }}
              >
                <MenuItem value="option1">정중하게</MenuItem>
                <MenuItem value="option2">친근하게</MenuItem>
                <MenuItem value="option3">사랑스럽게</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ marginTop: "45px", width: "500px" }}>
            <FormControl fullWidth>
              <InputLabel id="dropdown-label-2">글자수</InputLabel>
              <Select
                labelId="dropdown-label-2"
                id="dropdown-2"
                value={dropdownValue2}
                onChange={handleChangeDropdown2}
                sx={{ backgroundColor: "#f5f5f5" }}
              >
                <MenuItem value="option1">짧게</MenuItem>
                <MenuItem value="option2">중간</MenuItem>
                <MenuItem value="option3">길게</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ marginTop: "45px", width: "500px" }}>
            <FormControl fullWidth>
              <InputLabel id="dropdown-label-3">언어</InputLabel>
              <Select
                labelId="dropdown-label-3"
                id="dropdown-3"
                value={dropdownValue3}
                onChange={handleChangeDropdown3}
                sx={{ backgroundColor: "#f5f5f5" }}
              >
                <MenuItem value="option1">한국어</MenuItem>
                <MenuItem value="option2">영어</MenuItem>
                <MenuItem value="option3">일본어</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "80px" }}>
        <Button
          variant="contained"
          color="primary"
          style={{ borderRadius: "20px" }}
          className="hover:bg-blue-700 hover:text-white"
        >
          제출하기
        </Button>
      </div>
    </div>
  );
};

export default Girlf;
