let newString= ""

const text = prompt("What text would you like to be censored?")

const whichWords=prompt ("What words would you like censored")

  const replacementWord= prompt("What would you like to be censored with?")
 

  function myFunction(input, replacement, target) {
        console.log(input)
      //split string to turn to array and iterate through
      var words = input.split(" ");
      console.log(words)
        for (var i = 0; i < words.length; i += 1){
            console.log(target)
            console.log(words[i])
            //if the word matches, replace with target word and add to string
            if (words[i]==target){
                words[i]= replacement
                newString+= words[i] + " "
            }
            //otherwise, add orignal word to string
            else {
                newString+= words[i] + " "
        }

      console.log(newString)
      console.log(`Number of words: ${words.length}`)

    return newString
  }

  myFunction(text,replacementWord, whichWords)
}