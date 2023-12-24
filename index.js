const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function titleCased() {
  // Check if the 'tutorials' array exists
  if (!Array.isArray(tutorials)) {
    throw new Error('The tutorials array is not defined.');
  }

  // Iterate through each tutorial name in the array
  return tutorials.map(tutorial => {
    // Split the tutorial name into an array of words
    const words = tutorial.split(' ');

    // Capitalize the first letter of each word
    const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the title case words back into a string
    const titleCaseTutorial = titleCaseWords.join(' ');

    return titleCaseTutorial;
  });
}

