import { encryptWithPublicKey } from "@/utils/encrypt";

export default function encryptRequest<T>(fields: (keyof T)[]) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;
    type A = {
      encryptedKey: string;
      iv: string;
    } & T;
    descriptor.value = function (...args: any[]) {
      const data = args[0];
      data["fields"] = [];

      // encrypt the specific fields
      fields.forEach((field) => {
        if (data[field]) {
          const encryptedData = encryptWithPublicKey(data[field]);
          data[field] = encryptedData;
          // data["encryptedKey"] = encryptedData.encryptedKey;
          // data["iv"] = encryptedData.iv;
          data["fields"].push(field);
        }
      });
      const result = originalMethod.apply(this, args);
      return result;
    };

    return descriptor;
  };
}
