import { validate, version as uuidVersion } from "uuid";

interface DecodeResult {
  version: number;
  variant: number;
}

export function decode(uuid: string): DecodeResult {
  if (!validate(uuid)) {
    throw new Error("Invalid UUID");
  }

  const version = uuidVersion(uuid);

  const uuidBytes = uuid.split("-").join("");
  const variantByte = parseInt(uuidBytes[16], 16);
  let variant = 0;
  if (variantByte >= 8 && variantByte <= 11) {
    variant = 1;
  } else if (variantByte === 12 || variantByte === 13) {
    variant = 2;
  } else if (variantByte === 14 || variantByte === 15) {
    variant = 3;
  }

  return {
    version,
    variant,
  };
}
