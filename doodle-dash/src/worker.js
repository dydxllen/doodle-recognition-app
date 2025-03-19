import { pipeline, RawImage } from "@xenova/transformers";

// Initialize the model
const classifier = await pipeline("image-classification", "Xenova/quickdraw-mobilevit-small", { quantized: false });

// Load the test image (skateboard)
const image = await RawImage.read("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/ml-web-games/skateboard.png");

// Run the classification
const output = await classifier(image.grayscale());
console.log(output);
