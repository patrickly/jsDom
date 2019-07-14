const banner = document.querySelector('#page-banner');

// what type of node is this?
console.log('#page-banner node type is: ' + banner.nodeType); // 1, which is an element

// https://www.w3schools.com/jsref/prop_node_nodetype.asp to see a list of node types


console.log('#page-banner node name is: ' + banner.nodeName); // DIV 

console.log('#page-banner node has child nodes: ' + banner.hasChildNodes()); // true

const clonedBannerFalse = banner.cloneNode(false); // returns just 1 single element

const clonedBanner = banner.cloneNode(true); // true includes nested content, instead of just 1 single element

console.log(clonedBannerFalse);
console.log(clonedBanner);

