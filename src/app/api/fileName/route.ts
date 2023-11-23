import { readdir } from "fs";
const folderPath = "/public/hair"; // フォルダのパスを指定
// const files = readdirSync();

readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  // フォルダ内のファイル名がfilesとして取得されます
  console.log("Files in the folder:", files);
});
