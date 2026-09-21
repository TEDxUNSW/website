/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { NextConfig } from "next";
import type { Configuration, RuleSetCondition, RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module!.rules!.find(
      (rule): rule is RuleSetRule =>
        typeof rule === "object" &&
        rule !== null &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg"),
    )!;

    // Hack because resourceQuery may have different shapes, but we know Next's SVG rule
    // has a { not: RuleSetCondition[] } shape.
    const excludedQueries = (
      fileLoaderRule.resourceQuery as { not: RuleSetCondition[] }
    ).not;

    config.module!.rules!.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...excludedQueries, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
void initOpenNextCloudflareForDev();
