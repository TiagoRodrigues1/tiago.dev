if (!process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN) {
  throw new Error("NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN is not defined");
}

export const config = {
  raindrop: {
    accessToken: process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN,
  },
} as const;

console.log("env " + process.env);
