export async function sleep(interval) {
  return new Promise((resolve) => {
    setTimeout(resolve, interval);
  });
}
