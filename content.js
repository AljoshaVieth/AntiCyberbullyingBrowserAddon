// Function to modify Facebook posts based on specific criteria.
function modifyFacebookPosts() {
    // Select all posts using their structure and attributes.
    const postElements = document.querySelectorAll('div[dir="auto"] div[id]:not([id=""])');

    // Loop through each post.
    postElements.forEach(post => {
        // Check if the post content contains the word 'server' in any case.
        if (post.textContent.includes('server') || post.textContent.includes('Server')) {
            // Select all text containers inside the post.
            const textContainers = post.querySelectorAll('div.xdj266r, div.x11i5rnm');

            // Clear the content of each text container.
            textContainers.forEach(container => {
                container.textContent = '';
            });

            // Set the first text container's content to a custom message about Capybaras.
            textContainers.item(0).textContent =
                "Hey! We detected that this content might be inappropriate. So, we've removed it and instead, let's tell you something interesting about Capybaras: Did you know that Capybaras, the world's largest rodents, have a natural tendency to enjoy hot springs or warm water? In areas with hot springs, such as parts of Japan, you can often see capybaras relaxing in warm baths. It's a delightful sight to see them in this relaxed state, often surrounded by content humans sharing the same pleasure!";
        }
    });
}

// Call modifyFacebookPosts when the content is loaded.
document.addEventListener('DOMContentLoaded', modifyFacebookPosts);

// Observe changes in the document to reapply the modifications when new content is added.
const observer = new MutationObserver(modifyFacebookPosts);
observer.observe(document.body, { childList: true, subtree: true });
