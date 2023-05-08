const Telegrambot = require('node-telegram-bot-api');
const token = '5856717036:AAFp5diiDorvZy_mQMWH5E_vJvzC5-2BLRE'
const bot = new Telegrambot(token ,{
    polling: true
})
bot.onText(/\/start/ , msg => {
    const chatid = msg.chat.id;
    bot.sendMessage(chatid, ` Assalomu Alaykum ${msg.from.first_name} Yordam uchun /help Buyrigini bering`)
})
bot.onText(/\/help/ , msg => {
    const chatid = msg.chat.id;
    const text = `
    <a href="https://www.github.com/Abrorxujayorov">Githab Link</a>
    <a href="https://t.me/GlavniyCoderr">Telegram User</a>
    `
    bot.sendMessage(chatid, text, {
        parse_mode: 'HTML',
        disable_web_page_preview: true
    })
})
bot.on('message', msg => {
    const chatid = msg.chat.id;
    bot.sendMessage(chatid, 'Buttons', {
        reply_markup: {
            keyboard: [
                ["AQSH", "Uzbekistan"]
            ]
        }
    })
    const amerika = `
    <i>Qadim zamonlarda hozirgi AQSh hududida indeyslar va eskimoslar yashagan. Amerika 1492-yilda Christopher Columbus tomonidan kashf etilgandan keyin XVI asrda Ispaniya, Fransiya, Angliya, Gollandiya va Shvetsiya Shimoliy Amerikadagi boʻsh yerlarni egallashga kirishdi. Angliya XVIII asr oʻrtalarida asosiy raqiblarini surib chiqarib, qitʼaning sharqiy qismida oʻzining mustamlakachilik hukmronligini oʻrnatdi. Yerlarni egallash va oʻrnashib olish bilan ayni bir vaqtda mahalliy aholi qirgʻin qilindi va Afrikadan qul negrlar ommaviy ravishda olib kelindi. 1775-83-yillardagi Shimoliy Amerikada mustaqillik uchun urush davomida 1776-yil 4-iyulda federal davlat — AQShga asos solindi va u respublika deb eʼlon qilindi. George Washington Amerika Qoʻshma Shtatlarining birinchi prezidenti etib saylandi. Mamlakat shimolida sanoat va fermerlik, janubiyda quldorlikka asoslangan dehqonchilik rivojlandi. Gʻarbdagi indeys qabilalarini haydab yuborish va yangi yerlarni oʻzlashtirish hisobiga AQSh hududi tez kengaya bordi. 1803-yilda Fransiyadan Gʻarbiy Luiziana „sotib olindi“, 1819-yilda Ispaniya Floridaning bahridan oʻtdi, 1836-yilda Meksikadan Texas tortib olindi. XIX asr mobaynida hozirgi Kaliforniya, Arizona, Nyu-Meksiko va Nevada shtatlarining hududlari, Kolorado va Vayoming shtatlarining bir qismi qoʻshib olindi. XIX asr oʻrtalarida AQShda „ikki partiyali tizim“ tarkib topdi. Endi hokimiyatni Demokratlar partiyasi bilan Respublikachilar partiyasi galma-gal boshqaradigan boʻldi. Shimoliy burjuaziyasi bilan janub plantatorlari oʻrtasidagi ziddiyat AQShda 1861—65-yillarda fuqarolar urushiga olib keldi, unda prezident Abraham Lincoln boshchiligidagi shimoliy shtatlar gʻalaba qozondi. Urush davomida yer ulushlari haqida (1862), quldorlikni bekor qilish toʻgʻrisida (1865) qonunlar qabul qilindi. Fuqarolar urushidan soʻng mamlakat iqtisodiyoti jadal rivojlana boshladi. 1867-yilda AQSh chor Rossiyasidan Alyaska va Aleut orollarini sotib oldi; XIX asr oxirida Filippin, Gavayi, Puerto-Riko va boshqalarni, 1903-yilda Panama kanali zonasini qoʻlga kiritdi. Ikki asr boʻsagʻasida AQShga koʻchib kelishning yangi toʻlqini boshlandi. Muhojirlarning aksariyati janubi-sharqiy Yevropadan edi. Birinchi jahon urushi davri (1914—1918)da AQSh avvaliga betaraflik mavqeida turdi, 1917-yil aprelda Antanta tomonida turib harakat qildi. Urushdan keyin AQSh iqtisodiy yuksalish davriga kirdi. Ammo tez orada iqtisodiy inqiroz (1929—1933) boshlanib, ishsizlik kuchaydi (1933-yilda 17 million ishsiz bor edi), korxonalar sindi, ishlab chiqarish keskin pasaydi. Inqiroz sharoitida Franklin D. Roosevelt (1933—1945-yillarda AQSh prezidenti) boshchiligidagi Demokratik partiya maʼmuriyati hokimiyat tepasiga keldi. Uning tashabbusi bilan bir qancha ijtimoiy-iqtisodiy tadbirlar amalga oshirildi, „yangi yoʻl“ deb atalgan bu yoʻl AQShni inqirozdan olib chiqish maqsadini koʻzlar edi. 1941-yilda Yaponiya Amerikaning Pearl Harbor harbiy-dengiz bazasiga hujum qilganidan keyin AQSh Ikkinchi jahon urushiga qoʻshildi va Adolf Hitlerga qarshi koalitsiya tomoniga oʻtdi. Amerika qurolli kuchlari asosan Tinch okeanda Yaponiyaga qarshi jangovar harakatlarda qatnashdi. 1943-yilda Italiyaga qoʻshin tushirdi. AQSh ittifoqchilarning xalqaro anjumanlarida (1943-yil Texron, 1945-yil Qrim, 1945-yil Potsdam konferensiyalarida) qatnashdi. Nihoyat, 1944-yil 6-iyunda AQSh bilan Buyuk Britaniya ikkinchi frontni ochdi. 1945-yil avgustda Harry S. Truman (1945—1953-yillarda AQSh prezidenti) buyrugʻi bilan Yaponiyaning Xirosima va Nagasaki shaharlariga atom bombalari tashlandi; oʻn minglab tinch aholining qirilishiga sabab boʻldi. 1950—1953-yillarda AQSh Koreya urushida qatnashdi, 1956—1975-yillarda Vyetnamda urush olib bordi. 1945-yildan AQSh — BMT, shuningdek, Amerika davlatlari tashkiloti, NATO aʼzosi.</i>
    `
    const uzb = `
    <i>O‘zbekiston ikki davlatdan biri. dengiz sohiliga chiqish uchun har qanday yo’nalishda 2 davlat chegaralarini kesib o’tish kerak bo’lgan dunyo, chunki uning eng yaqin qo’shnilari ham okeanlarga kirishdan mahrum. Sayyoradagi xuddi shunday muammolarga duch kelgan ikkinchi davlat bu Lixtenshteyndir (Lixtenshteyn haqida qiziqarli faktlar).
    Neandertallar hozir O‘zbekiston joylashgan hududda, paleolit ​​davrida yashagan.
    Bo’lajak O’zbekiston yerlarida ilk davlatlar miloddan avvalgi VII-VIII asrlarda vujudga kelgan
    Bu mintaqa fan va madaniyatining gullab-yashnagan davri XIV asrga, Temurlan hukmdor bo’lgan davrga to’g’ri keldi. U hozirda mamlakatning uchinchi yirik shahri Samarqandni oʻz davlatining poytaxtiga aylantirdi.
    SSSR parchalanganidan keyin Oʻzbekistonda hech qachon aholini roʻyxatga olish oʻtkazilmagan.
    Bu davlatda rus tili hech qanday rasmiy maqomga ega boʻlmasa-da, oʻquvchilar uni ikkinchi sinfdan boshlab oʻrganishlari shart.
    
    Oʻzbekistonda maktablarda taʼlim bepul, lekin oʻquvchilardan darsliklardan foydalanganlik uchun har yili toʻlov olinadi.
    SSSR tarkibidan chiqqanidan keyin 20 yil ichida Oʻzbekistonda kitob doʻkonlari soni 657 tadan 70 taga kamaydi.
    O‘zbekiston oltin zahiralari bo‘yicha dunyoda 4-o‘rinda turadi.
    O‘zbekistondagi eng katta nominal 50 000 so‘m, qiymati esa 6 AQSH dollaridan bir oz ko‘proq.
    Mutaxassislar O‘zbekistonni iqtisodiyoti sayyoramizning boshqa mamlakatlariga qaraganda tezroq rivojlanayotgan davlat deb ataydilar.
    Sotsiologik so‘rovlarga ko‘ra, ushbu mamlakat aholisi baxtiyorlik darajasi bo‘yicha MDHning barcha davlatlari orasida yetakchilik qilmoqda.
    O‘zbekistonda tez qurib borayotgan Orol dengizi – suv ombori sayoz bo’la boshlaguncha, bu ko’l (faqat o’zining kattaligi va suvning sho’rligi tufayli dengiz deb ataladi) sayyorada to’rtinchi o’rinda edi. Orol dengizining ochilgan tubidan ikkita aholi punkti va maqbara xarobalari topilgan.
    O‘zbeklar turkiy guruh tilida so‘zlashuvchi sayyoramizdagi uchinchi yirik etnik guruhdir.
    O‘zbekistonni o‘rab turgan barcha davlatlarning nomlari “stan” bilan tugaydi.
    
    Bu mintaqaning barcha davlatlari bilan chegaradosh boʻlgan yagona Markaziy Osiyo davlatidir.
    Oʻzbek Samarqandi dunyodagi eng qadimiy shaharlardan biri boʻlib, yoshi boʻyicha Rim bilan qiyoslanadi. Olimlar ushbu turar-joyning yoshini 2750 yildan ortiq deb hisoblashadi.
    Yo’lbarslar 19-asr oxirida Toshkentning chekkasida yashagan (yo’lbarslar haqida qiziqarli ma’lumotlar).
    Yagona. Markaziy Osiyo shaharlari orasida metro Oʻzbekiston davlatlarida qurilgan.
    Toshkent sayyoramizdagi yagona yirik shahar boʻlib, u yerda deyarli 100% yoʻlovchi tashish Mercedes avtobuslari tomonidan taʼminlanadi (Toshkent haqidagi qiziqarli faktlar).
    Dunyoda eng mazali hisoblangan qovunlar shirinligi va xushbo’yligi tufayli O’zbekistonda yetishtiriladi.
    Toshkent osmondagi yulduzlar joylashgan yer yuzidagi sanoqli yirik shaharlardan biridir. tunda yaqqol koʻrinadi.</i>
    `
    if (msg.text == 'AQSH') {
        bot.sendMessage(chatid, amerika, {
            parse_mode: 'HTML'
        })
    } else if(msg.text == 'Uzbekistan') {
        bot.sendMessage(chatid, uzb, {
            parse_mode: 'HTML'
        })
    }
})
