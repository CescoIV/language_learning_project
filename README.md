# What is this?
The study Nahuatl app is a front-end interface for experimentation with the Nahuatl API.
>https://github.com/CescoIV/nahuatl_api.

Its main use is to provide an easy to use interface by which to study and manipulate the data
in our server.

# How do I use it 

Go to 
>http://study-nahuatl.herokuapp.com/

You will find four tabs

## Study

The app makes a request to our database and loads 5 random words in the form of flip cards,
which you can then use to study vocabulary. Because our data is experimental and not fully curated,
you may not be able to see every feature of a word (i.e. all possible translations).

## Quiz 

The app picks five words at random from our data, then prompts you to enter their definitions. 
It is not case sensitive but the translation must be accurate and match either the direct translation,
or one of the possible translations.

## Search

Want to know what a word means? search for either an English or Nahuatl word, and if it is present in the database, our app will tell you what it knows about it based on the mongoose Schema.

NOTE: Fuzzy search has not been implemented, exact spellings must be present.

## Post 

Want to contribute to our library of Nahuatl vocabulary?

You can make a post request to our back end by filling in our required fields, keep in mind that this is an open API so please be responsible with the data you send us :)

# Author Notes

This is a WIP experimental API that is not curated, this is not meant to, nor pretends to be the final source or solution to studying the Nahuatl language. Its information at this point in progress may be inaccurate not only by the dialectical nature of Nahuatl, but also by the uncurated nature of our data. Study responsibly :)
