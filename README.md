# League Standings (LS)
## _Take Home Coding Challenge_
LS is a command-line application that reads a listing of game
results for a soccer league as a stream and returns the top teams at
the end of each matchday. 

## Rules of the League - _Standings_
In this league, a draw (tie) is worth 1 point and a win is worth 3 points. A
loss is worth 0 points. If two or more teams (among the top three teams) have
the same number of points, they will have the same rank and be printed in
alphabetical order.

## Assumptions
1. Teams will only play once during each match day
2. The input will be a valid utf-8 text, however the content of the text might be invalid 
3. If the streaming data is interrupted in the middle of a matchday, that matchday should be considered as ended
# 

## Libraries/Tools used
1. JavaScript
2. Node.js

#

## Key Decisions and Tradeoffs 
Summary of challenge:  
1.  The basic construct is: 
    - Read a file in 
    - Parse the teams/scores based upon a single record (one match) 
    - Determine who the winner/loser of each match is (consider the possibility of a tie) 
    - Award league points to represent standings 
    - Standings should be updated at the end of each match day and then (only) the highest three teams in the league will be displayed (Teams 1-3 in the overall league standings)
## 

2.  Initial thoughts:  

    After reading through the prompt and thinking about the challenge, the initial elements I considered were: 
    - Array
    - For Loop(s)
    - Modulus
    - Search , Sort, and Split/Parse functions


## 

3. Which language should I choose? 
    - Decided to utilize JavaScript  
        - (JavaScript was the most comfortable language for me when choosing from the preferred list)
    ##
    - **Tradeoff** - Writing the application and optimizing code in JavaScript was more challenging and took me longer than expected but the decision paid off and the overall task was completed within the timeline. 
## 
4. Initial setup in VS Code
##
5. File Handling
    - Started by reading the entire file in and making sure it would print properly
    - The next step was to print individual matches/a single line of results (two teams and two scores separated by a comma)
    
##
6. Basic Logic Handling for Win, Lose, Draw
##
7. Define a matchday 
##
8. Format the results for display
##
9. Clean code/final debug
##
10. Submit project to GitHub repo and link provided 

#
 
### ** If I had additional time **
This coding challenge had a time limit of one week. Although scope was relatively small, with additional time I would have been able to: 

1. Write a more detailed readme/design document 
2. Write tests to cover as much code as possible (as discussed in the interviews, tests are admittedly a weakness for me) both passing and failing tests that give accurate results
3. Find additional ways to optimize my JavaScript
4. Provide better comments in the .js file and rethink variable names to be more concise and easier to read.  
5. Read file in dynamically
  
# 
## Conclusion 
There are places to improve and clean up the formatting however this is a product that I am happy with after one week. 

As I continue to grow in my experience, I am learning that a balance of meeting requirements within the timeline and 'stretch goals' have to be weighed for each project by the software engineer. 

Thank you for the opportunity to complete this take home challenge as part of my interview process. 
