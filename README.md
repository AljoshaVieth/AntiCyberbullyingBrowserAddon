# Facebook Post Modification Addon

This is a chrom(ium) browser extention to monitor and modify Facebook posts based on certain criteria.

## Primary Objective:
When a Facebook post contains the word "server" (regardless of its casing, i.e., "Server" or "server"), the script will replace the content of that post with a predefined, informative message about Capybaras.

## Functionality Breakdown:

### Post Selection:
The script begins by selecting Facebook post elements based on specific DOM attributes. The criteria used focuses on posts having a non-empty id attribute within a div container that has a dir attribute set to "auto".

### Criteria Check:
For each identified post, the script checks if the content contains the word "server" in any form, either uppercase or lowercase.

### Content Modification:
If a post meets the criteria, the script clears the content of all associated text containers. It then sets the content of the first text container to an educational message about Capybaras. The purpose here is to replace potentially unwanted content with something fun and informative.

### Content Monitoring:
Besides the immediate modification upon document loading, the script uses a MutationObserver to continuously monitor changes to the document. This ensures that even if new posts are loaded onto the page (like when scrolling through the feed), the script will still inspect and modify them based on the set criteria.

### End Result:
Any Facebook post mentioning "server" will be replaced with a message that talks about Capybaras enjoying hot springs, aiming to provide a delightful and wholesome diversion from the original content.

## Additional info:
It should be easy to modify the code to enable checking for a list of words and also using a list of sentences to replace the contents, so more facts about capybaras are possible.

Facebooks code constantly changes and using CSS-Selectors therefore might be a bad idea because it could break pretty often.

To learn more about how extensions are developed see [the official chrome documentation](https://developer.chrome.com/docs/extensions/mv3/getstarted/).


## How to test this extentsion
# How to Load an Unpacked Extension in Chrome

Chrome and other chromium-Browsers like Vivaldi offer a way to load extensions before they're packed and published. Here's a step-by-step guide:

## **Prerequisites**:

1. **Extension Files**: Ensure your extension files (e.g., `manifest.json`, `content.js`, etc.) are in one folder. Your `manifest.json` should be correctly structured with all necessary details.

## **Steps**:

1. **Open Chrome**:
- Launch Chrome on your computer.

2. **Access Extensions**:
- Click the three vertical dots (⋮) in the top right corner.
- Hover over "More tools" and select "Extensions". Or type `chrome://extensions/` in the address bar and press `Enter`.

3. **Enable Developer Mode**:
- On the Extensions page, find "Developer mode" toggle in the top right.
- Turn this switch on.

4. **Load Unpacked**:
- With Developer mode on, new buttons appear at the top left: `Load unpacked`, `Pack extension`, and `Update`.
- Click `Load unpacked`.

5. **Select Your Extension Folder**:
- In the dialog that appears, navigate to where your extension files are.
- Highlight the folder (don't go inside) and click "Select Folder" (or equivalent for your OS).

6. **Success**:
- Your extension is now loaded in Chrome and appears in the list of extensions.
- If it has an icon, it will be next to the address bar. Your extension is active!

7. **Testing and Reloading**:
- After editing your extension, return to `chrome://extensions/`.
- Click the `Reload` button (circular arrow) next to your unpacked extension.

