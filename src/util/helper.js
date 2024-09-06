// Function to format date to 'YYYY-MM-DD'
export const formatDateToYYYYMMDD = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    // Handle invalid date case
    return "";
  }
  return date.toISOString().split("T")[0];
};

// This function is used for convert image url to binary
export const convertImageUrlToBinary = async (profilePicPreview, imageKey) => {
  const response = await fetch(profilePicPreview);
  const blob = await response.blob();
  // Create a new FormData object
  const formData = new FormData();
  // Append the blob to the FormData object
  formData.append(imageKey, blob, "profile-image.png"); // You can name the file here
  return formData;
};

// This function is used for to capitalize the first letter of a string
export function capitalizeFirstLetter(string) {
  if (string) {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
  }
}
