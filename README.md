# API Basejump: Image Search Abstraction Layer


For [Free Code Camp](http://freecodecamp.com) - API Basejump: Image Search Abstraction Layer


### User Stories

1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.


### Usage

1. Searching for images

	```
	http://localhost:8000/search/pokemon
	```
2. Paginating through the results

	```
	http://localhost:8000/search/pokemon?offset=2
	```
3. Getting a list of recent searches

	```
	http://localhost:8000/latest/imagesearch
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
