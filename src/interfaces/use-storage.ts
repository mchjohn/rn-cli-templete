export type UseStorage = () => {
  setItem: (key: string, value: string | Record<string, any>) => Promise<void>;
  getItem: (key: string) => Promise<string | Record<string, any> | null>;
  deleteItem: (key: string) => Promise<void>;
};
