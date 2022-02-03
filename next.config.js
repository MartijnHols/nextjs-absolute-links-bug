/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  i18n: {
    locales: ["nl-nl"],
    defaultLocale: "nl-nl",
    domains: [
      {
        domain: "example.nl",
        defaultLocale: "nl-nl",
      },
    ],
    localeDetection: false,
  },
};
