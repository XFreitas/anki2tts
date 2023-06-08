const { MsEdgeTTS } = require('msedge-tts');
const cheerio = require('cheerio');
const axios = require('axios');
const moment = require('moment');

const tts = new MsEdgeTTS();
(async () => {
    const today = moment().format('YYYY-MM-DD');
    const sentences = [
        'Do you remember what we discussed yesterday?',
        'I can\'t remember where I put my keys.',
        'I have a vivid memory of our trip to the beach.',
        'She reminded me to pick up milk on my way home.',
        'Can you remind me to call the dentist tomorrow?',
        'I always set a reminder for important appointments.',
        'He remembered to buy flowers for his wife\'s birthday.',
        'I received a reminder about the upcoming meeting.',
        'I need to remember to pack my passport for the trip.',
        'She sent me a reminder about the deadline for the project.',
        'Remember to lock the door before you leave.',
        'I set a reminder on my phone to take my medication.',
        'I forgot to remind him about the meeting.',
        'I\'ll set a reminder to buy groceries on my way home.',
        'She always remembers everyone\'s birthdays.',
    ];

    for (const key in sentences) {
        if (Object.hasOwnProperty.call(sentences, key)) {
            const text = sentences[key];

            await tts.setMetadata("en-US-GuyNeural", MsEdgeTTS.OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

            await tts.toFile(`./${(Number(key) + 1)}_${today}.mp3`, text);
        }
    }

    // const { data } = await axios.get('https://www.biblegateway.com/passage/?search=1%20John%204&version=NLT');

    // const $ = await cheerio.load(data);

    // console.log($('div.passage-content').text());


    process.exit();
})();