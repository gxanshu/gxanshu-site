// Importing required modules
const doc = require("@docusaurus/utils");
const toc = require("markdown-toc");
const path = require("path");
const prettier = require("prettier");
const shell = require("shelljs");
const uuid = require("uuid");
const algoliasearch = require("algoliasearch");
require("dotenv").config();

// Setting the root directory of the website
const websiteRoot = "content";

/**
    A function to get the metadata for a markdown file
    @param {string} file - The path of the markdown file
    @returns {Array} An array of metadata objects for the file
*/
async function getMDXMeta(file) {
  // Parsing the markdown file and extracting the front matter and the content
  const { content, frontMatter: _frontMatter } = await doc.parseMarkdownFile(
    file
  );
  const frontMatter = _frontMatter;

  // Generating a table of contents for the markdown file
  const tableOfContent = toc(content);
  const json = tableOfContent.json;

  // Generating a unique slug for the file
  const slug = doc
    .fileToPath(file)
    .replace(`/${websiteRoot}`, "")
    .replace(process.cwd(), "");

  const result = [];

  // Creating the metadata object for the first level of the table of contents
  result.push({
    content: frontMatter.title,
    id: uuid.v4(),
    type: "lvl1",
    url: doc.removePrefix(slug, "/"),
    hierarchy: {
      lvl1: frontMatter.title,
    },
  });

  // Creating the metadata objects for the other levels of the table of contents
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
        lvl4: item.lvl === 4 ? item.content : null,
      },
    });
  });

  return result;
}

/**
  The main function that creates the search index for Algolia and publishes it
*/
async function main() {
  let json = [];

  // Finding all the markdown files in the website root directory
  const files = shell
    .ls("-R", websiteRoot)
    .map((file) => path.join(process.cwd(), websiteRoot, file))
    .filter((file) => !file.startsWith("_") && file.endsWith(".md"));

  // Generating metadata for all the markdown files
  for (const file of files) {
    let result = [];
    try {
      result = await getMDXMeta(file);
      json.push(...result);
    } catch (error) {
      console.log(error);
    }
  }

  // Formatting the metadata as a JSON string
  json = prettier.format(JSON.stringify(json), { parser: "json" });

  // Initializing an Algolia client object
  const client = algoliasearch(
    process.env.PUBLIC_APPLICATION_ID,
    process.env.APPLICATION_ADMIN_KEY
  );
  // Initializing the search index
  const index = client.initIndex(process.env.APPLICATION_INDEX_NAME);

  // Clearing the existing objects from the search index
  index.clearObjects().then(() => {
    console.log("cleared database");
  });

  // Saving the metadata as objects in the search index
  await index
    .saveObjects(JSON.parse(json), { autoGenerateObjectIDIfNotExist: true })
    .then((res) => console.log(`response ${res}`))
    .catch((e) => console.log(`error ${e}`));

  console.log("Search meta is ready ✅");
}

main();