import { uploadImageOnCloudinary } from "@/utils/cloudinary";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const uploadFilesAndReplace = async (data) => {
  // Arrays (e.g. company_lookup_data) hold no File fields; spreading one into {} would
  // turn [a, b] into { 0: a, 1: b } and corrupt the saved submission.
  if (!data || typeof data !== "object" || Array.isArray(data)) return data;
  let updatedData = { ...data };
  const uploadPromises = Object.entries(data)
    // Support both nested { value: { file } } and accidental { file } shapes
    .filter(([, value]) => value?.file instanceof File || value?.value?.file instanceof File)
    .map(async ([key, value]) => {
      const file = value?.value?.file instanceof File ? value.value.file : value.file;
      const fieldName = value?.name || key;
      const result = await uploadImageOnCloudinary(file);
      return { key, fieldName, result };
    });
  const uploads = await Promise.all(uploadPromises);
  // Keep canonical { name, value } so hydrate can read .value.secureUrl on reopen
  uploads.forEach(({ key, fieldName, result }) => {
    updatedData[key] = { name: fieldName, value: result };
  });

  return updatedData;
};

// company_lookup_data should be [{ source, name, result }], but submissions re-saved through
// uploadFilesAndReplace before its array guard were stored as { 0: {...}, 1: {...} }.
// Always hand callers an array so .find() is safe.
export const toLookupArray = (lookupData) => {
  // TODO(human): recover the legacy object-shaped records instead of dropping them
  return Array.isArray(lookupData) ? lookupData : [];
};


