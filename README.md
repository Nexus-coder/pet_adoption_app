# Adopt Me - An adoption site in React

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This a react application that focuses on using the technology to make an app that you can use to get an adorable pet that will kepp you company at home.It uses the best practices for react1 18.This practicees include:
        - Use of Use Query for caching
        - Using the react router dom

### Screenshot

![](./adopt.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
export default async function fetchSearch({ queryKey }) {
    const { animal, location, breed } = queryKey[1];
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    if (!res.ok) { throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`); }
    return res.json();
}
```

### Continued development

I would still like to continue focusing on learning about cache with react and also to learn how just how the whole framework operates too.So I will use it in the coming projects in order to get a better understanding of it.


### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Apopt Me](https://pet-adoption-app-theta.vercel.app/)
- Twitter - [@AndrewK51659634](https://twitter.com/AndrewK51659634)


## Acknowledgments

I would like to acknowledge frontend masters where I actually git the inspiration and the knowledge to make the above application.
