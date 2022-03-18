export function sortDateFn(contentA, contentB) {
  return (
    new Date(contentB.frontMatter.date ?? contentB.frontMatter.date).valueOf() -
    new Date(contentA.frontMatter.date ?? contentA.frontMatter.date).valueOf()
  );
}

export function sortByDate(contents) {
  return contents.sort(sortDateFn);
}

export function sortTitleFn(contentA, contentB) {
  return contentA.title.localeCompare(contentB.title);
}

export function sortByTitle(contents) {
  return contents.sort((a, b) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  );
}
