const { invoke } = window.__TAURI__.core; // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

let filesName = document.querySelectorAll(".file-name");

window.addEventListener("DOMContentLoaded", () => {
  // Toggle between code and markdown
  const codeButton = document.querySelector("#code-button");
  const mdButton = document.querySelector("#md-button");
  
  // Editors views
  const codeEditor = document.querySelector("#code-editor");
  const mdEditor = document.querySelector("#markdown-editor");

  // Search
  const searchButton = document.querySelector("#search-button");

  // Options
  const newFileButton = document.querySelector("#new-file");
  
  codeButton.addEventListener("click", () => {
    codeButton.classList.add("active");
    codeEditor.style.display = "grid";
    mdButton.classList.remove("active");
    mdEditor.style.display = "none";
  });

  mdButton.addEventListener("click", () => {
    mdButton.classList.add("active");
    mdEditor.style.display = "grid";
    codeButton.classList.remove("active");
    codeEditor.style.display = "none";
  });

  searchButton.addEventListener("click", () => {
    const searchInput = document.querySelector("#search-input");
    const query = searchInput.value;
    if (query) {
      filesName.forEach((file) => {
        const fileName = file.textContent;
        if (fileName.includes(query)) {
          file.style.display = "block";
        } else {
          file.style.display = "none";
        }
      });
    } else {
      filesName.forEach((file) => {
        file.style.display = "block";
      });
    }
  });

  newFileButton.addEventListener("click", async () => {
    const fileName = prompt("Enter the file name (the md extension is added after the file is created):");
    const filesContainer = document.querySelector("#files");
    if (fileName) {
      const file = document.createElement("button");
      file.classList.add("file-name");
      file.textContent = fileName;
      filesContainer.appendChild(file);
      filesName = document.querySelectorAll(".file-name");
    }
  });
});
