import TelegramBot from "node-telegram-bot-api";

export const addressListener =  (bot: TelegramBot) => {

    bot.onText(/\/endereco/,  async (msg, match) => {

        await bot.sendMessage(msg.chat.id, "Escolha uma opção", {
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Sede Primária', callback_data: 'sede_primaria', },
                    { text: 'Sede Secundária', callback_data: 'sede_secundaria' },

                ]],
                resize_keyboard: true,
                one_time_keyboard: true,
            }
        })

        bot.on('callback_query',  (q) => {

            switch (q.data) {
                case 'sede_primaria':
                    bot.sendLocation(msg.chat.id,-19.829010, -43.960380);
                    bot.sendMessage(msg.chat.id,  "<b>Endereço da Sede Principal</b>\nAvenida General Olímpio Mourão Filho, 306 Planalto - Belo Horizonte - MG ", {parse_mode : "HTML"});
                    break;
                case 'sede_secundaria':
                    bot.sendLocation(msg.chat.id,-19.967170, -44.027940);
                    bot.sendMessage(msg.chat.id, "<b>Endereço da Sede Secundária</b>\nAv. Coronel Benjamim Guimarães, 1963 - Industrial, Contagem - MG", {parse_mode : "HTML"});
                    break;
                case 'outros':
                    bot.sendLocation(msg.chat.id,-19.967170, -44.027940);
                    break;
            }
        })
    })
}