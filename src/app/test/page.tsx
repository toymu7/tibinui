"use client";
import React, { useEffect, useState } from "react";


export default function App() {
  const [fileList, setFileList] = useState<string[]>([]);

  // APIエンドポイント
  const apiUrl = "http://localhost:3000/api/fileName"; // 実際のエンドポイントに合わせて変更

  async function fetchFileList() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch file list: ${response.status}`);
      }
      const data = await response.json();
      setFileList(data);
    } catch (error) {
      console.error("Error fetching file list:", error);
    }
  }

  useEffect(() => {
    fetchFileList();
  }, []);

  return (
    <div>
      <h1>File List</h1>
      <ul>
        {fileList.map((fileName, index) => (
          <li key={index}>{fileName}</li>
        ))}
      </ul>
    </div>
  );
}
