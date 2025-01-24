const uniqueImageName = (original_name) => {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000);
  const sanitized_name = original_name.replace(/ /g, "_").toLowerCase();
  return `${timestamp}_${randomNum}_${sanitized_name}`;
};

module.exports= {uniqueImageName};