export async function resizeImage(image: Blob, size: number): Promise<Blob> {
    // Load the original image into a canvas
    const img = await createImageBitmap(image);
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Could not create 2D context for canvas');
    }
    ctx.drawImage(img, 0, 0);

    // Resize the canvas and draw the image at the new size
    const resizedCanvas = document.createElement('canvas');
    const aspectRatio = canvas.width / canvas.height;
    const width = Math.round(size * aspectRatio);
    const height = size;
    resizedCanvas.width = width;
    resizedCanvas.height = height;
    const resizedCtx = resizedCanvas.getContext('2d');
    if (!resizedCtx) {
        throw new Error('Could not create 2D context for canvas');
    }
    resizedCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, width, height);

    // Convert the resized canvas to a Blob and return it
    return new Promise((resolve) => {
        resizedCanvas.toBlob((blob) => {
            resolve(blob as Blob);
        });
    });
}