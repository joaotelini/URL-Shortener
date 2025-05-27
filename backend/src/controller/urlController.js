import { getUrlModel, createUrlModel } from "../model/urlModel.js";

export const getUrlController = async (req, res) => {
  const { shortId } = req.params;

  try {
    const result = await getUrlModel(shortId);
    res.redirect(result.originalurl);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createUrlController = async (req, res) => {
  const { url } = req.body;
  try {
    const result = await createUrlModel(url);
    const baseUrl = "http://localhost:3000/";
    const shortUrl = `${baseUrl}${result.shortid}`;
    res.status(201).json({ shortUrl: shortUrl, shortId: result.shortid });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
