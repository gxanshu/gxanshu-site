// this file helps to create search index for algolia search

const doc = require("@docusaurus/utils");
const fs = require("fs");
const toc = require("markdown-toc");
const path = require("path");
const prettier = require("prettier");
const shell = require("shelljs");
const uuid = require("uuid");
const algoliasearch = require("algoliasearch");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const websiteRoot = "content";

async function getMDXMeta(file) {
  const { content, frontMatter: _frontMatter } = await doc.parseMarkdownFile(
    file
  );
  const frontMatter = _frontMatter;
  const tableOfContent = toc(content);
  const json = tableOfContent.json;
  const slug = doc
    .fileToPath(file)
    .replace(`/${websiteRoot}`, "")
    .replace(process.cwd(), "");

  const result = [];

  result.push({
    content: frontMatter.title,
    id: uuid.v4(),
    type: "lvl1",
    url: doc.removePrefix(slug, "/"),
    hierarchy: {
      lvl1: frontMatter.title,
    },
  });

  json.forEach((item, index) => {
    result.push({
      content: item.content,
      id: uuid.v4(),
      type: `lvl${item.lvl}`,
      url: doc.removePrefix(slug, "/") + `#${item.slug}`,
      hierarchy: {
        lvl1: frontMatter.title,
        lvl2: item.lvl === 2 ? item.content : json[index - 1]?.content ?? null,
        lvl3: item.lvl === 3 ? item.content : null,
      },
    });
  });

  return result;
}

async function getSearchMeta() {
  let json = [];

  const files = shell
    .ls("-R", websiteRoot)
    .map((file) => path.join(process.cwd(), websiteRoot, file))
    .filter((file) => file.endsWith(".mdx"));

  for (const file of files) {
    let result = [];
    try {
      result = await getMDXMeta(file);
      json.push(...result);
    } catch (error) {
      console.log(error);
    }
  }

  json = prettier.format(JSON.stringify(json), { parser: "json" });
  const outPath = path.join(
    process.cwd(),
    "src",
    "configs",
    "search-meta.json"
  );
  const client = algoliasearch(process.env.APPLICATION_ID, process.env.ADMIN_KEY);
  const index = client.initIndex(process.env.APPLICATION_INDEX_NAME);

  await index.saveObjects(JSON.parse(json), { autoGenerateObjectIDIfNotExist: true })

  console.log("Search meta is ready ✅");
}

// getSearchMeta();

async function uploadAssets(){
  cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });
  const files = fs.readdirSync(path.join(process.cwd(), "public/assets"));
  files.forEach(async(img) => {
    await cloudinary.uploader.upload(`./public/assets/${img}`, {use_filename: true, unique_filename: false}, function(error, result) {console.log(error)})
  })
}

getSearchMeta();
uploadAssets();