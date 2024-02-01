"use client";

// import client from "@/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

// const columns = [
//   {
//     name: "SL No.",
//     selector: (row) => row.id,
//     center: true,
//     style: {
//       fontSize: "15px",
//     },
//   },
//   {
//     name: "Name",
//     selector: (row) => row.names,
//     center: true,
//     sortable: true,
//     style: {
//       fontSize: "15px",
//     },
//   },
//   {
//     name: "Email",
//     selector: (row) => row.emails,
//     center: true,
//     style: {
//       fontSize: "15px",
//     },
//   },
//   {
//     name: "Marks",
//     selector: (row) => row.marks,
//     center: true,
//     style: {
//       fontSize: "15px",
//     },
//   },
// ];

// Update the columns configuration
const columns = [
  {
    name: "SL No.",
    selector: (row) => row.id,
    center: true,
    style: {
      fontSize: "15px",
    },
  },
  {
    name: "Name",
    selector: (row) => row.name, // Change to 'mark' to match the transformed data
    center: true,
    style: {
      fontSize: "15px",
    },
  },
  {
    name: "Email",
    selector: (row) => row.email, // Change to 'mark' to match the transformed data
    center: true,
    style: {
      fontSize: "15px",
    },
  },
  {
    name: "Marks",
    selector: (row) => row.mark, // Change to 'mark' to match the transformed data
    center: true,
    style: {
      fontSize: "15px",
    },
  },
];

const customStyles = {
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "bold",
    },
  },
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
};

const data = {
  Mathematics: {
    id: 1,
    names: ["Taher0", "Taher1", "Taher2", "Taher3", "Taher4"],
    emails: [
      "123@gmail.com",
      "456@gmail.com",
      "789@gmail.com",
      "abc@gmail.com",
      "def@gmail.com",
    ],
    marks: ["20", "30", "80", "60", "40"],
  },
  Physics: {
    id: 2,
    names: ["Taher5", "Taher6", "Taher7", "Taher8", "Taher9"],
    emails: [
      "123@gmail.com",
      "456@gmail.com",
      "789@gmail.com",
      "abc@gmail.com",
      "def@gmail.com",
    ],
    marks: ["20", "30", "80", "60", "40"],
  },
};

function MarksDatatable({ subject, setSubject }) {
  const [loader, setLoader] = useState(true);
  const [subjectData, setSubjectData] = useState([]);
  const router = useRouter();

  // async function getProducts() {
  //   let { data: res, status } = await client.get("product/allproducts");
  //   setProducts(res.data);
  // }

  useEffect(() => {
    setLoader(false);
    // getProducts();
  }, []);

  useEffect(() => {
    if (data[subject]) {
      // Transform the data into an array of objects
      const transformedData = data[subject].names.map((name, index) => ({
        id: index + 1, // Assuming you want a serial number starting from 1
        name: name,
        email: data[subject].emails[index],
        mark: data[subject].marks[index],
      }));

      setSubjectData(transformedData);
    }
  }, [subject]);

  // Render
  if (loader) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="my-16 w-3/4 border-gray-500 border-2">
        <DataTable
          title="Student Marks"
          columns={columns}
          data={subjectData}
          pagination
          striped
          highlightOnHover
          pointerOnHover
          responsive
          customStyles={customStyles}
          // onRowClicked={(row) => {
          //   router.push(`/admin/dashboard/${row._id}`);
          // }}
        />
      </div>
    </div>
  );
}

export default MarksDatatable;
