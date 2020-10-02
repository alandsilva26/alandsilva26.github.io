const copyToClipboard = (textToCopy) => {
  console.log("TEST");
  navigator.clipboard.writeText(textToCopy);
};

export default copyToClipboard;
