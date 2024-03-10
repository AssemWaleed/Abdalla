const { Telegraf } = require('telegraf');
const bot = new Telegraf('6872196143:AAGEg-bvIJCAUauSvrXyvZZBiqGkffDZD_E');

// Define button labels
const BUTTON_1_LABEL = 'أفتح حصتك';
const BUTTON_2_LABEL = 'شراء حصص';
const BUTTON_3_LABEL = 'فديوهات الواجب';
const BUTTON_4_LABEL = 'معلومات عن البوت';

const BUTTON_5_LABEL = 'Senior 1';
const BUTTON_6_LABEL = 'Senior 2';
const BUTTON_7_LABEL = 'Senior 2 علمي';
const BUTTON_8_LABEL = 'back';

const SessionPass = {
    "L1S1": ["1234"],
    "L2S1": ["4321"],
    "S2T1": ["S2T1"],
    "S2AS": ["S2AS"],
    "S1AO": ["S1AO"],
    "S2RMM": ["S2RMM"],
    "S1SAV": ["S1SAV"],
    "S2MAS": ["S2MAS"],
    "S2MEP2": ["S2MEP2"],
};

bot.start((ctx) => {
    ctx.reply('123');
});

// Button handler
bot.command('start', (ctx) => {
    ctx.reply("اختار ما يناسبك", {
        reply_markup: {
            keyboard: [
                [BUTTON_1_LABEL],
                [BUTTON_2_LABEL],
                [BUTTON_3_LABEL],
                [BUTTON_4_LABEL]
            ]
        }
    });
});

bot.on('text', (ctx) => {
    const message = ctx.message.text;
    const words = message.split(' ');

    if (message === BUTTON_1_LABEL) {
        ctx.reply('يرجى العلم بأن لديك مشاهدة واحدة فقط');
        setTimeout(() => {
            ctx.reply('ادخل رمز دخول الحصة');
        }, 1000);
    }

    if (message === BUTTON_3_LABEL) {
        ctx.reply('اختر ما يناسبك', {
            reply_markup: {
                keyboard: [
                    [BUTTON_5_LABEL],
                    [BUTTON_6_LABEL],
                    [BUTTON_7_LABEL],
                    [BUTTON_8_LABEL]
                ]
            }
        });
    }

    if (message === BUTTON_8_LABEL) {
        ctx.reply('اختار ما يناسبك', {
            reply_markup: {
                keyboard: [
                    [BUTTON_1_LABEL],
                    [BUTTON_2_LABEL],
                    [BUTTON_3_LABEL],
                    [BUTTON_4_LABEL]
                ]
            }
        });
    }

    if (message === BUTTON_4_LABEL) {
        ctx.reply('البوت تم انشائه 1/20/2024 وهو يقوم بمساعدتك لفتح حصص المهندس عبدالله مصطفي');
    } else if (SessionPass[words[0]]) {
        ctx.reply('https://screenpal.com/watch/cZVbF2VJbG5');
    } else if (SessionPass[words[1]]) {
        ctx.reply('https://screenpal.com/watch/cZVbF2VJbG5');
    }
});    

bot.launch();
