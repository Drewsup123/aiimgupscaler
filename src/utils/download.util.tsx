export const openImage = (imageUrl: string, imageName: string) => {
    // Create an anchor element
    const link = document.createElement("a");
    // Set the href to the URL of the image
    link.href = imageUrl;
    link.target = "_blank";
    // Set the download attribute to the desired file name
    // link.download = imageName;
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger a click event on the link
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
};

export const downloadImage = async (imageUrl: string, imageName: string) => {
    // Fetch the image data
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    // Create an object URL for the blob
    const blobUrl = URL.createObjectURL(blob);
    // Create an anchor element
    const link = document.createElement("a");
    // Set the href to the blob URL
    link.href = blobUrl;
    // Set the download attribute to the desired file name
    link.download = imageName;
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger a click event on the link
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
};
