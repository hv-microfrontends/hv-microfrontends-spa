import pages from "lib/api/pages";

const getActivePath = (pathname, data = pages) => {
  let activePath;

  data.forEach((item) => {
    const hasPath = pathname.includes(item.path);

    if (hasPath) {
      activePath = item.data ? getActivePath(pathname, item.data) : { ...item };
    }
  });

  return activePath;
};

const isTopLevelPage = (pathname) => {
  return !!pages.find((item) => item.path === pathname);
};

export { getActivePath, isTopLevelPage };
