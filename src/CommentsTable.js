import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

export default function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/comments");
        setComments(response.data.comments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Comment",
      selector: "body",
      sortable: true,
    },
    {
      name: "Post ID",
      selector: "postId",
      sortable: true,
    },
  ];

  return (
    <div className="App">
      <h1>Comments</h1>
      <DataTable
        columns={columns}
        data={comments}
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
}
