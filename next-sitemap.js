module.exports = {
  siteUrl: "https://codenanshu.in/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disAllow: "/admin" },
    ],
  },
};
