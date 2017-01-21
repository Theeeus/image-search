# API Basejump: Image Search Abstraction Layer


For [Free Code Camp](http://freecodecamp.com) - [API Basejump: Image Search Abstraction Layer](https://www.freecodecamp.com/challenges/image-search-abstraction-layer)


### User Stories

1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.


### Usage

1. Searching for images
```
https://arcane-wildwood-25174.herokuapp.com/search/pokemon
```

2. Paginating through the results
```
https://arcane-wildwood-25174.herokuapp.com/search/pokemon?offset=2
```

3. Getting a list of recent searches
```
https://arcane-wildwood-25174.herokuapp.com/latest/imagesearch
```

### Sample Output

1. Search results
```javascript
{
	"url":"https://pbs.twimg.com/profile_images/478947556760645632/IwdfeL3J_400x400.png",
	"description":"Pokémon",
	"page link":"https://twitter.com/pokemon"
}
```

2. Recent searches
```javascript
{
	"query":"pokemon",
	"when":"January 21st, 2017 13:12"
}
```

### Live Site
[https://arcane-wildwood-25174.herokuapp.com](https://arcane-wildwood-25174.herokuapp.com)