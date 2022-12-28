export function generateMACAddress(): string {
  const macAddress = new Array(6)
    .fill(0)
    .map(() => Math.floor(Math.random() * 256).toString(16))
    .join(":")
    .toUpperCase();

  return macAddress;
}
