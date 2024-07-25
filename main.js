document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById('background-audio');
    const toggleAudioButton = document.getElementById('toggle-audio');

    toggleAudioButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            toggleAudioButton.textContent = 'Pause Audio';
        } else {
            audio.pause();
            toggleAudioButton.textContent = 'Play Audio';
        }
    });
});

// Array of funny humor and sci-fi words
const words = [
    "bazinga", "quasar", "flux capacitor", "wibbly-wobbly", "bananaphone",
    "gizmo", "plutonium", "zog", "robot uprising", "time machine",
    "moon cheese", "spork", "warp drive", "galactic", "hoverboard",
    "neuralyzer", "space-time", "nanobots", "cyberpunk", "zombie apocalypse"
];

// Function to get a random word from the array
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Function to type out a word character by character
function typeWord(word) {
    const paragraph = document.getElementById("random-word");
    paragraph.textContent = ''; // Clear the paragraph
    let index = 0;
    const typingInterval = setInterval(() => {
        paragraph.textContent += word[index];
        index++;
        if (index === word.length) {
            clearInterval(typingInterval);
        }
    }, 100); // Typing speed (100ms per character)
}

// Function to update the paragraph with a new random word every second
function updateRandomWord() {
    setInterval(() => {
        const word = getRandomWord();
        typeWord(word);
    }, 1000);
}

// Call the function to start updating the paragraph
updateRandomWord();

// Backendless initialization
Backendless.initApp("D2A3EE32-F165-469C-95D9-BF329509B240", "F63B52C6-CE08-4D73-A9D3-DD4F4B18E39B");

// Animate text lines
document.addEventListener("DOMContentLoaded", function () {
    const lines = document.querySelectorAll(".terminal p");
    let index = 0;

    function typeLine() {
        if (index < lines.length) {
            const line = lines[index];
            line.style.visibility = "visible";
            index++;
            setTimeout(typeLine, 500); // Adjust the speed as necessary
        }
    }

    lines.forEach((line) => (line.style.visibility = "hidden"));
    typeLine();
});

// Handle text input commands
document.getElementById('textInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        handleCommand();
    }
});

function handleCommand() {
    const inputField = document.getElementById('textInput');
    const command = inputField.value.trim();
    const outputDiv = document.getElementById('output');

    if (command === '') return;

    // Display the command
    outputDiv.innerText += `> ${command}\n`;

    // Handle the command
    if (command === '0' || command === '1') {
        handleBlogCommand(parseInt(command, 10));
    } else {
        const response = processCommand(command);
        // Display the response
        outputDiv.innerText += `${response}\n`;
    }

    // Clear the input field
    inputField.value = '';

    // Scroll to the bottom of the output
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function handleBlogCommand(index) {
    Backendless.Data.of("blogs").find().then(function (data) {
        if (index >= 0 && index < data.length) {
            const selectedData = data[index].main;
            console.log(selectedData);
            const dataList = document.getElementById("data-list");
            dataList.innerHTML = ''; // Clear the list before appending new items

            // Create a list item for selectedData
            const listItem = document.createElement("li");
            listItem.textContent = selectedData; // Or JSON.stringify(selectedData) if it is an object
            dataList.appendChild(listItem);
        } else {
            alert("Invalid index. Please enter 0 or 1.");
        }
    }).catch(function (error) {
        console.error("Error fetching data:", error); // Log error to the console
    });
}

function processCommand(command) {
    switch (command.toLowerCase()) {
        case 'hello':
            return 'Hello, world!';
        case 'who am i':
            return about.join('\n');
        case 'social':
            return social.join('\n');
        case 'blogs':
            return blogs.join('\n');
        case 'help':
            return help.join('\n');
        case 'start':
            return start1.join('\n');
        case 'explore':
            return start2.join('\n');
        case 'clear':
            document.getElementById('output').innerText = '';
            return '';
        default:
            return `Command not found: ${command}`;
    }
}

// Commands and their data
const about = [
    "Hey there, fellow Earthlings! I'm Anubhav, a 17-year-old humanoid hailing from the bustling metropolis of Delhi, India. When I'm not busy saving the universe from pixelated aliens, I indulge in my favorite pastimes: editing reality (okay, just videos and graphics), designing intergalactic logos, surfing the vast internet cosmos, and coding like a futuristic wizard.",
    "My favorite animes? Oh, just a casual collection of epic tales: **Attack on Titan** (because who doesn’t love giant humanoid mysteries?), **Death Note** (taking notes has never been this lethal), **Neon Genesis Evangelion** (mechas and existential crises, yay!), **Jujutsu Kaisen** (cursed energy and epic battles), **Vinland Saga** (Vikings in space? Well, almost), and **Berserk** (dark fantasy with a dash of medieval madness).",
    "Currently, I'm a time-traveling student pursuing a B.Tech in Computer Science and Engineering with a Data Science specialization at NIET Noida. By day, I'm a freelancer coding my way through the digital galaxy, and by night, I'm a curious learner exploring the vast unknowns of knowledge (and maybe plotting to build a super AI).",
    "So, if you see a caffeinated teenager frantically typing away or lost in an anime binge-watching session, that’s probably me—Anubhav, signing off from the future!"
];

const social = [
    "Instagram: https://www.instagram.com/anu.bhav_pvtt/",
    "Twitter: https://twitter.com/AnubhavSingh99x_",
    "LinkedIn: https://www.linkedin.com/in/anubhav-singh99/",
    "GitHub:   https://github.com/AnubhavSingh99",
];

const blogs = [
    'Enter the indexing to read',
    '[0] JANUARY BLOG!   - Reflecting on a Fulfilling January: Exams, Meetups, and Growth',
];

const help = [
    "========================================",
    "             AVAILABLE COMMANDS          ",
    "========================================",
    "                                        ",
    "start       - Kick things off, because why not?",
    "explore     - Just in case you didn't like the first start",
    "help       - I'll tell you everything I know... which isn't much",
    "who am i    - Identity crisis? Let's figure out who you are!",
    "social      - Stalk me online (social media links)",
    "blogs       - Pretend to read my blog (links included)",
    "all commands- Spoiler alert: It's this list",
    "clear       - Magic trick! Watch the terminal disappear",
    "                                         ",
    "========================================",
];

const start1 = [
    "Welcome",
    "===============",
    "",
    "Anubhav's Punk",
    "=================",
    "",
    "[Anubhav's Neocity](https://anubhav99.neocities.org/)",
    "=====================================================",
    "",
    "Welcome, space traveler! You've just warped into Anubhav's Internet Archive, the ultimate collection of intergalactic wisdom, memes, and questionable life choices. Prepare for a journey through the cosmos of comedy and curiosity. Type 'help' to use.",
    "------------------------------------------------------------------------------------------------------------------------------------",
    "",
    "* * *",
    "",
    "**[gandalfsbignaturals](https://gandalfsbignaturals.tumblr.com/):** do you have any helpful links or tips for someone trying to set up a c64 for the first time?",
    "",
    "**[commodorez](https://commodorez.tumblr.com/post/181445547711/do-you-have-any-helpful-links-or-tips-for-someone):** Sure, here are a few things I wish I knew when I got my C64.",
    "",
    "Read the manual, and if you don’t have one, find a copy.  The era in which it was produced did an exquisite job of explaining physical setup of the machine, followed by the use of it, back when it was assumed that their user base may not have ever used a computer before.  Since it’s so dissimilar to the modern computing ecosystem, if you’ve never touched an old computer, it can be helpful.  I know I wish I had one when I got my first C64 back in the day.  I didn’t get one until a few years later, and even then it taught me quite a bit.",
    "",
    "One thing that’s important to check is your power supply.  Original C64 PSU’s have this nasty habit of the voltage on the 5V DC power rail climbing above the reasonable safe threshold, and damaging the chips.  Test it with a multimeter, if you can.  The 9V AC power rails tend to be rather trustworthy, so I wouldn’t worry about that part.  Modern replacements exist, but they’re not cheap, nor have I tried any to give a recommendation on one.",
    "",
    "C64′s sometimes come with video cables intended for use on Commodore manufactured monitors like the 1702 which don’t use common composite video (the yellow RCA connector we see today).  Instead, they split the luma and chroma signals, like S-video does for a cleaner picture.  What’s more, Commodore didn’t always standardize the colors on those connectors, so you sometimes have to guess.  If you try to connect it to a common TV or other composite video monitor, and you have the luma/chroma only cable, it will require combining the signals, but it may look wonky compared to a proper composite connection.",
    "",
    "Don’t plug a Sega Genesis controller into the joystick ports.  It may sorta work, but without an adapter, you can cause a dead-short from 5V to ground and damage the machine.",
    "",
    "If you have specific questions, feel free to ask them.  I hope this was helpful.",
    "",
    "Nothing you can type into the console can damage the computer (except the Killer Poke).",
    "",
    "[2023-03-11 02:39.37.360](https://anubhav99.neocities.org/)",
    "",
    "[26 notes](https://anubhav99.neocities.org/)",
    "",
    "* * *",
    "",
    "You are on page 1 of 2",
    "======================",
    "",
    "[← Prev](type explore) - Next →",
    "---------------------------------------------------------",
    "",
    "![Image 1](https://anubhav99.neocities.org/)"
];

const start2 = [
    "Customization",
    "==============",
    "Main color: #FF5733",
    "Background color: black",
    "Main width: 80%",
    "Font size: 14px",
    "Show avatar: true",
    "Tag format: #tags",
    "Side image: none",
    "",
    "* * *",
    "",
    "insufficientlyadvanced:",
    "",
    "me: *links funny jpg*",
    "",
    "dude on irc: source?",
    "",
    "me: *links funny svg*",
    "",
    "2023-03-11 02:45.11.364",
    "7 notes",
    "Tags: text%20mode, file%20format",
    "",
    "* * *",
    "",
    "y-kasa:",
    "",
    "“twitterはインタネッツ老人にとって新参のサービスと言うのはまぁ間違っていないが、一方で老人にとってもtwitterより長くそこで生き続けたサービスも実はあんま無いんだよね。15年越えですよ。IRCだって人が集ってた期間はそんなに無い。Web日記時代やらテキストサイト時代やら2ch全盛期よりも長い”",
    "",
    "— 星崎連維＠C101→歌姫？ / Twitter",
    "",
    "(via y-kasa-deactivated20240228)",
    "",
    "2023-03-11 02:43.35.363",
    "Source",
    "14 notes",
    "",
    "* * *",
    "",
    "alvinbing:",
    "",
    "Why Can’t You Name a File CON in Windows?",
    "HTTPS://WEIRD-HISTORY-FACTS.COM/WHY-CANT-YOU-NAME-A-FILE-CON-IN-WINDOWS/",
    "",
    "A little-known fact about Windows Operating Systems is that there are certain names that cannot be used in files, folders, photographs, text documents, or even in Microsoft Office programs such as Word and Excel.",
    "",
    "Tom Scott did a video on this, I think:",
    "",
    "2023-03-11 02:41.22.362",
    "5 notes",
    "Tags: #windows, #file%20names, #weird%20facts"

];