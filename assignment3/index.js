// Q1) Create an array of states in India. Remove all names starting with vowels using array.filter.
const states = [
    "Assam", "Bihar", "Chhattisgarh", "Goa", "Haryana", "Kerala", "Uttar Pradesh",
    "Uttarakhand", "Odisha", "Rajasthan", "Tamil Nadu", "Andhra Pradesh",
    "Arunachal Pradesh", "Karnataka", "Maharashtra", "Jharkhand", "Mizoram",
    "Punjab", "Sikkim", "West Bengal", "Nagaland", "Telangana", "Manipur", "Meghalaya"
  ];
  
  const consonantStates = states.filter(
    (state) => !["A", "E", "I", "O", "U"].includes(state[0].toUpperCase())
  );
  
  console.log("Q1: States after removing those starting with vowels:");
  console.log(consonantStates);
  
  // Q2) Reverse the words in the string 'I love my India' to get 'India my love I'.
  let str = "I love my India";
  let reversedWords = str.split(" ").reverse().join(" ");
  console.log("\nQ2: Reversed words:");
  console.log(reversedWords);
  
  // Q3) Change 'INDIA' to 'INDONESIA' using array.splice.
  let countryArr = Array.from("INDIA");
  countryArr.splice(3, 0, ..."ONES");
  let newCountry = countryArr.join("");
  console.log("\nQ3: Transformed string:");
  console.log(newCountry);
  
  // Q4) Take any string ≥ 20 chars. Count number of consonants and vowels.
  let sampleText = "The quick brown fox jumps over";
  let vowelsCount = 0;
  let consonantsCount = 0;
  for (let char of sampleText.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      if ("aeiou".includes(char)) {
        vowelsCount++;
      } else {
        consonantsCount++;
      }
    }
  }
  console.log(`\nQ4: In "${sampleText}":`);
  console.log(`Vowels = ${vowelsCount}, Consonants = ${consonantsCount}`);
  
  // Q5) Function to replace a wrong word with a correct word in any sentence.
  function correctfn(sentence, wrong, correct) {
    return sentence.replace(new RegExp(wrong, "g"), correct);
  }
  let originalSentence = "I have a wrongg word in this wrongg sentence.";
  let fixedSentence = correctfn(originalSentence, "wrongg", "wrong");
  console.log("\nQ5: Before:", originalSentence);
  console.log("After: ", fixedSentence);
  
  // Q6) inputArr = [1,2,3,9,10,7,5,4,3] → return numbers > 5 using array.filter.
  const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
  const greaterThanFive = inputArr.filter((num) => num > 5);
  console.log("\nQ6: Numbers greater than 5:");
  console.log(greaterThanFive);
  
  // Q7) Given students with scores array, compute average for each using array.map and array.reduce.
  const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  
  const studentsWithAverages = students.map((student) => {
    const total = student.scores.reduce((sum, score) => sum + score, 0);
    const average = total / student.scores.length;
    return { name: student.name, average };
  });
  console.log("\nQ7: Students with averages:");
  console.table(studentsWithAverages);
  
  // Q8) Function to find repeated sum of digits until a single digit remains.
  function digitalRoot(num) {
    let sum = num;
    while (sum > 9) {
      sum = String(sum)
        .split("")
        .reduce((acc, digit) => acc + Number(digit), 0);
    }
    return sum;
  }
  console.log("\nQ8:");
  console.log("Digital root of 456:", digitalRoot(456)); // 6
  console.log("Digital root of 9999:", digitalRoot(9999)); // 9
  
  // Q9) Function to count the number of words in a paragraph.
  function countWords(paragraph) {
    const words = paragraph.trim().split(/\s+/);
    return words.filter((w) => w.length > 0).length;
  }
  let paragraph = "  This is a sample paragraph to count how many words are present.   ";
  console.log("\nQ9: Word count:");
  console.log(countWords(paragraph));
  
  // Q10) Function to reverse a string. Input: "Hello" → Output: "olleH"
  function reverseString(s) {
    return s.split("").reverse().join("");
  }
  console.log("\nQ10: Reverse of 'Hello':");
  console.log(reverseString("Hello")); // "olleH"
  
  // Q11) Given an object of students with subject marks, compute each student’s average.
  console.log("\nQ11: Averages per student:");
  
  const studentScores = {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
    student2: {
      subject1: 74,
      subject2: 66,
      subject3: 77,
      subject4: 87,
      subject5: 57,
    },
    student3: {
      subject1: 64,
      subject2: 76,
      subject3: 67,
      subject4: 77,
      subject5: 47,
    },
  };
  
  const averagesResult = {};
  Object.entries(studentScores).forEach(([student, subjects]) => {
    const marks = Object.values(subjects);
    const totalMarks = marks.reduce((sum, m) => sum + m, 0);
    const averageMark = totalMarks / marks.length;
    averagesResult[student] = { average: averageMark };
  });
  
  console.table(averagesResult);
  