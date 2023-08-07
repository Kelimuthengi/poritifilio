let allprojectsli = document.getElementById("allprojectsli");
let nodeprojectsli = document.getElementById("nodeprojectsli");
let firebaseprojectsli = document.getElementById("firebaseprojectsli");
let reactprojectsli = document.getElementById("reactprojectsli");
let bootstrapli = document.getElementById("bootstrapli");

let allprojectsdiv = document.getElementById("allprojectsdiv");
let nodeprojectsdiv = document.getElementById("nodeprojectsdiv");
let firebaseprojectsdiv = document.getElementById("firebaseprojectsdiv");
let reactprojectsdiv = document.getElementById("reactprojectsdiv");
let bootstrapdiv = document.getElementById("bootstrapdiv");

nodeprojectsli.onclick = () => {
  nodeprojectsdiv.style.display = "flex";
  allprojectsdiv.style.display = "none";
  firebaseprojectsdiv.style.display = "none";
  reactprojectsdiv.style.display = "none";
  bootstrapdiv.style.display = "none";

  nodeprojectsdiv.style.width = "100%";
  nodeprojectsdiv.style.margin = "0 auto";
  nodeprojectsli.style.borderBottom = "5px solid #f3b028";
  allprojectsli.style.borderBottom = "none";
  reactprojectsli.style.borderBottom = "none";
  bootstrapli.style.borderBottom = "none";
  firebaseprojectsli.style.borderBottom = "none";
};

allprojectsli.onclick = () => {
  allprojectsdiv.style.display = "flex";
  nodeprojectsdiv.style.display = "none";
  reactprojectsdiv.style.display = "none";
  bootstrapdiv.style.display = "none";
  firebaseprojectsdiv.style.display = "none";
  allprojectsli.style.borderBottom = "5px solid #f3b028";

  reactprojectsli.style.borderBottom = "none";
  bootstrapli.style.borderBottom = "none";
  firebaseprojectsli.style.borderBottom = "none";
  nodeprojectsli.style.border = "none";
};

firebaseprojectsli.onclick = () => {
  firebaseprojectsdiv.style.display = "flex";
  allprojectsdiv.style.display = "none";
  nodeprojectsdiv.style.display = "none";
  reactprojectsdiv.style.display = "none";
  bootstrapdiv.style.display = "none";

  firebaseprojectsli.style.borderBottom = "5px solid #f3b028";
  allprojectsli.style.borderBottom = "none";
  reactprojectsli.style.borderBottom = "none";
  bootstrapli.style.borderBottom = "none";
  nodeprojectsli.style.border = "none";
};

reactprojectsli.onclick = () => {
  reactprojectsdiv.style.display = "flex";
  allprojectsdiv.style.display = "none";
  nodeprojectsdiv.style.display = "none";
  firebaseprojectsdiv.style.display = "none";
  bootstrapdiv.style.display = "none";

  reactprojectsli.style.borderBottom = "5px solid #f3b028";
  allprojectsli.style.borderBottom = "none";

  bootstrapli.style.borderBottom = "none";
  firebaseprojectsli.style.borderBottom = "none";
  nodeprojectsli.style.border = "none";
};

bootstrapli.onclick = () => {
  bootstrapdiv.style.display = "flex";
  allprojectsdiv.style.display = "none";
  nodeprojectsdiv.style.display = "none";
  firebaseprojectsdiv.style.display = "none";
  reactprojectsdiv.style.display = "none";

  bootstrapli.style.borderBottom = "5px solid #f3b028";
  allprojectsli.style.borderBottom = "none";
  reactprojectsli.style.borderBottom = "none";
  firebaseprojectsli.style.borderBottom = "none";
  nodeprojectsli.style.border = "none";
};
