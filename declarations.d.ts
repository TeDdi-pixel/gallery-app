declare module "*.svg" {
  const content: string;
  export default content;
}

declare global {
  interface ImportMeta {
    env: {
      VITE_UNSPLASH_ACCESS_TOKEN?: string;
    };
  }
}
