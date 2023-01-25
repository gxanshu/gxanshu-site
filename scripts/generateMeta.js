// function to create search index for algolia and to publish it also

const doc = require("@docusaurus/utils");
const toc = require("markdown-toc");
const path = require("path");
const prettier = require("prettier");
const shell = require("shelljs");
const uuid = require("uuid");
const algoliasearch = require("algoliasearch");
const fs = require("fs");

require("dotenv").config();

const websiteRoot = "src/pages";

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
        lvl4: item.lvl === 4 ? item.content : null,
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
  fs.writeFileSync("./users.json", json);

  const client = algoliasearch(
    process.env.PUBLIC_APPLICATION_ID,
    process.env.APPLICATION_ADMIN_KEY
  );
  const index = client.initIndex(process.env.APPLICATION_INDEX_NAME);

  console.log(process.env.APPLICATION_INDEX_NAME);

  index.clearObjects().then(() => {
    console.log("cleard database");
  });
  await index
    .saveObjects(JSON.parse(json), { autoGenerateObjectIDIfNotExist: true })
    .then((res) => console.log(res))
    .catch((e) => console.log(e));

  console.log("Search meta is ready ✅");
}

getSearchMeta();

module.exports = getSearchMeta;
