// Add button with a function when clicked will: Highlight ingredients one item apart.
// const recipe = document.querySelectorAll("recipe-ingredients");
const btn_highlight = document.getElementById("highlight-ingredients");

// let i = 0;

btn_highlight.addEventListener('click', () => {
    const recipe = document.querySelectorAll("#recipe-ingredients li");
    recipe.forEach((item,index) => {
        item.classList.toggle("highlight", index % 2 === 0);
    });
});

// Add button with a function when clicked will: Check all Instructions after 3 seconds interval.
const btn_check = document.getElementById("check-instructions");
const instructions = document.querySelectorAll("#recipe-instructions li");

btn_check.addEventListener("click", () => {
    let interval = 0;
    instructions.forEach((item) => {
        setTimeout(() => {
            item.classList.add('is-done');
        }, interval);
        interval += 3000;
    });
});

// Add button with a function when clicked will: Reset all checked Instructions.
const btn_reset = document.getElementById("reset-instructions");
btn_reset.addEventListener('click', () => {
    instructions.forEach((item) => {
        item.classList.remove('is-done');
    })
})

// Add animation when clicking Ingredients Header. Can use animate.css.
const ingredients_header = document.querySelectorAll(".headers")[0];

ingredients_header.addEventListener("click", () => {
    ingredients_header.classList.add('animate__animated', 'animate__bounce');
    setTimeout(() => {
        ingredients_header.classList.remove('animate__animated', 'animate__bounce');
    }, 1000);
});

// Add animation when clicking Instructions Header. Can use animate.css.
const instructions_header = document.querySelectorAll(".headers")[1];

instructions_header.addEventListener("click", () => {
    instructions_header.classList.add('animate__animated', 'animate__wobble');
    setTimeout(() => {
        instructions_header.classList.remove('animate__animated', 'animate__wobble');
    }, 1000);
});

// Add animation when clicking image. Can use animate.css.
const image = document.getElementById("cake");

image.addEventListener("click", () => {
    image.classList.add('animate__animated', 'animate__pulse');
    setTimeout(() => {
        image.classList.remove('animate__animated', 'animate__pulse');
    }, 1000);
});
