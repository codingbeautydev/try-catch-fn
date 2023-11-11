type TryCatchProps<T> = {
  tryFn: () => T;
  catchFn: (error: any) => T;
};

export function tryCatch<T>(options: TryCatchProps<T> | (() => T)): T {
  if (typeof options === 'function') {
    return tryCatch({ tryFn: options, catchFn: () => null }) as T;
  }
  const { tryFn, catchFn } = options;
  try {
    return tryFn();
  } catch (error) {
    return catchFn(error);
  }
}
