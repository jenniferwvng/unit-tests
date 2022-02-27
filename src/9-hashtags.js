export const hashtags = (text) => {

  const splitText = text.split(' ');
  console.log(splitText)

  const filterOut = () => {
    return splitText.filter(word => word.startsWith('#')); 
  }

  splitText.forEach(word => word.startsWith('#') ? filterOut : console.log('no'));


  // for (let i = 0; i < text.length; i++) {
  //   console.log(text.charAt(i));
  // }
  //return text
}
