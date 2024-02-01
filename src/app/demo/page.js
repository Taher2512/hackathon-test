"use client";

import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import MarksDatatable from "../components/MarksDatatable";

// Signer - 0xfe62afac91a25d47
// Contract Address - 0xfe62afac91a25d47

function Demo() {
  const [subject, setSubject] = useState("Select Subject");

  const fetchResults = async (subject) => {
    if (subject === "Select Subject") return;
  };

  return (
    <>
      <Dropdown
        fetchResults={fetchResults}
        subject={subject}
        setSubject={setSubject}
      />
      <MarksDatatable subject={subject} setSubject={setSubject} />
    </>
  );
}

export default Demo;
