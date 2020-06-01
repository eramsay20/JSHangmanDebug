# Making a README

## What is a README

A README is a document designed to inform someone about your program. This can include installation, documentation, the most recent changes, etc. Modern READMEs are written in Markdown, which allows them to be formatted using simple [syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links).

## Why Create a README

READMEs have become the standardized way of providing critical information about software to users. They allow you to document your work, give instructions and references, encourage interest, and facilitate understanding of your program.

## The Basic Structure of a README

The following is an example README structure: [Example](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

However, it is important to keep in mind that every element in your README should provide pertinent and useful information. Some sections may not be relevant, so be sure to tailor your README to best serve the user. Your README should almost always include a title, a description, setup instructions, and contact information for issues.

## Moving Forward

Get into the habit of writing a README for every program you write. The more practice and feedback you get now the less of a headache writing READMEs will be in the future.

## Additional Resources

[makeareadme.com](https://www.makeareadme.com/) - information and resources on READMEs

[dillinger.io](https://dillinger.io/) - preview your README in browser

[Purdue OWL](https://owl.purdue.edu/owl/general_writing/academic_writing/conciseness/index.html) - tips and tricks for keeping your writing concise and impactful.

## ChangeLog
<!--  For each bug write the line number and a brief description 
of the issue in your “Changelog”. -->
Bugs summarized using the following format.... BUG: Location | Problem | Fix 

1.  BUG: Line 36 | Missing = in const declaration | Added an equalizer between the const declaration and the following arrow function

2. BUG: Line 94 | count+1 function missing a 2nd '+' character | Added second '+' symbol to correct the add count function

3. BUG FIX: Line 136 | case 0 colon should come after the case scenario, not before | moved colon to other side of "0"

4. BUG FIX: Line 28 | RandNum function calls "floor" instead of Math.floor when rounding results | change to "Math.floor"

5. BUG FIX: Line 15 | Windows.load should be windows.onload | changed to "onload"

6. BUG FIX: Line 29 | wordBank is not a function, but rather an array. Should use [] notation to pull out a specific array item | change to "wordToGuess = wordBank[randomNum]; 

7. BUG FIX: Line 41 | for loop should begin at array index "0", not 1 | adjusted to i = 0

8. BUG FIX: Line 49 | calls for alphabet class name, when its an ID in HTML | changed to getElementById instead

<!-- FIXES 1- 8 ABOVE ALLOW FULL PAGE TO LOAD WITH BLANKS AND ALPHABET BUTTON -->
9. BUG FIX: Line 56 | event listener event defined as| "onclick" when it should be "click" | changed event parameter to "click"

9.  BUG FIX: Line 77 | letter variable should pull .textContent instead of .text | fixed to textContent

10. Bug Fix: Line 95 | handleIncorrectGuess(incorrectGuesses) is not a defined function, should be drawHangman, which is called after every incorrect guess | switched "handleIncorrectGuess" with "drawHangman"


