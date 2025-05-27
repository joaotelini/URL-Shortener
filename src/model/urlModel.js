import { connection } from "../config/bd.js";
import { nanoid } from "nanoid";

export const getUrlModel = async (shortId) => {
  const [rows] = await connection.query(
    "SELECT * FROM tb_urlshort WHERE shortid = ?",
    [shortId]
  );
  return rows[0];
};

export const createUrlModel = async (url) => {
  const shortid = nanoid(10);
  const [result] = await connection.query(
    "INSERT INTO tb_urlshort (originalurl, shortid) VALUES (?, ?)",
    [url, shortid]
  );

  if (result.affectedRows === 0) {
    throw new Error("Failed to create short URL");
  }
  
  return getUrlModel(shortid);
};
