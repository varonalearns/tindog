# Scrimba - The Frontend Developer Career Path - Module 7 Next-level JavaScript - Solo Project - Tindog

This is my solution to the [Solo Project - Tindog](https://scrimba.com/scrim/co0e64371a0120af20b5f91e9) from Scrimba's The Frontend Developer Career Path.

## Quick start:

```
$ npm install
$ npm start
```

Head over to https://vitejs.dev/ to learn more about using vite

## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!

## Table of contents

- [Scrimba - The Frontend Developer Career Path - Module 7 Next-level JavaScript - Solo Project - Tindog](#scrimba---the-frontend-developer-career-path---module-7-next-level-javascript---solo-project---tindog)
  - [Quick start:](#quick-start)
  - [About Scrimba](#about-scrimba)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
      - [Requirements:](#requirements)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

#### Requirements:

- Follow the design spec
- Use JavaScript classes
- Use modules (import/export)

### Links

- Solution URL: [Github Repo](https://github.com/varonalearns/tindog)
- Live Site URL: [Netlify Live Site](https://tindog-evarona.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla JavaScript
- Mobile-first workflow

### What I learned
There was a lot that I learned here. For instance, I learned about how to remove and add HTML elements through JavaScript. I am particularly happy about the following code:

``` javascript
function likeBtn() {
    document.getElementById("dog").insertAdjacentHTML('beforebegin', `
        <div class="decision-img">
            <img src="/images/badge-like.png" alt="liked">
        </div>`)
    reset()

    setTimeout(()=>{
        nextDog()
    }, 750) 
}
```

I used my understanding of HTML and JavaScript to find a solution to my issue on my own. That I am really proud about.

### Continued development
In the future, I definitely want to add some more features to this project. Perhaps a dark-mode feature.

## Author

- Website - [Evalia Varona](https://www.evaliavarona.com)
- Hashnode - [@evavarona](https://evaliavarona.hashnode.dev)
