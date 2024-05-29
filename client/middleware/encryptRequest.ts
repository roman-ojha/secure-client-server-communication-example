import { encryptWithPublicKey } from "@/utils/encrypt";

export default function encryptRequest<T>(fields: (keyof T)[]) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const data = args[0];

      // encrypt the specific fields
      fields.forEach((field) => {
        if (data[field]) {
          const encryptedData = encryptWithPublicKey(data[field]);
          data[field] = encryptedData.encryptedMessage;
          data[`${field.toString()}-data`] = {
            iv: encryptedData.iv,
            encryptedKey: encryptedData.encryptedKey,
          };
        }
      });
      const result = originalMethod.apply(this, args);
      return result;
    };

    return descriptor;
  };
}
