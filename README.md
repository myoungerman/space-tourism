# Frontend Mentor - Space tourism website solution

This is my solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- [React](https://reactjs.org/) - JS library
- [CSS Modules](https://github.com/css-modules/css-modules) and [BEM](https://en.bem.info/methodology/) - For styles

### What I learned

- The long names of BEM combined with the syntax CSS Modules uses for non-camel case names is tedious. In future projects, I'll probably stick with BEM because if I write descriptive CSS names, it'll do the same thing as CSS modules. 

  Here's an example of what I mean by "tedious". Encountering this behemoth is what millenials would call a "bruh" moment.

  ```html
  <section className={`${style['DestinationCard__section']} ${styles['DestinationCard__section--planet-details']} ${styles['section--planet-details']}`}>
  ```

- To dynamically import local images from the `data.json` file, I had to move those images to the public folder, otherwise the images wouldn't render. The [React docs say this isn't ideal](https://create-react-app.dev/docs/using-the-public-folder), but after researching online, it seemed like the only solution.

- I used the `useMemo` hook to preserve the JSON data I was importing so my dynamic text would still point to the correct object in memory. Until this project I knew about the hook but hadn't used it, so this was a fun way to try it out.

- Make sure you adjust the size of containers so they don't block UI elements. In tablet mode, I couldn't select the buttons on the **Technology** page because I never adjusted the size of the image container above the buttons, causing it to overlap them. 

### Continued development

I still have a lot to learn. Here are some of the areas I want to improve on:

- Styling format and ability. BEM has definitely helped me write my CSS in a more structured, consistent way, but sometimes I abandon BEM for the sake of convenience. I really struggled with the hover effects, so I want to improve my ability to create pure CSS animations.

- Speed. It took me about 4-5 full days to complete this project from start to finish. Considering most of the design is just HTML & CSS, I wish I could have completed the project faster.

- Project organization. For projects like these, I slap all my components into one folder, which works for now, but in larger projects this will cause problems.

### Useful resources

- [Using the public folder](https://create-react-app.dev/docs/using-the-public-folder) - This helped me understand how to store and use my images from the public folder.
