/* Fájl: solutions/app3.js
Függvény neve: customDateFormats
Írj egy függvényt, amely paraméterként egy Date objektumot kap, a visszatérési értéke pedig egy objektum két tulajdonsággal, amely a következő formátumban tartalmazza a paraméterként kapott dátumot:
short: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul, kisbetűkkel a nap száma, majd az idő a másodperc nélkül)
long: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő) */

function customDateFormats(date) {
    const monthNameShort = ['jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'];
    const monthNameLong = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];

    const shortStr = `${date.getFullYear()}. ${monthNameShort[date.getMonth()]} ${date.getDate()}. `
        + `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:`
        + `${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
    const longStr = `${date.getFullYear()}. ${monthNameLong[date.getMonth()]} ${date.getDate()}. `
        + `${date.toLocaleTimeString('hu')}`;

    return {
        short: shortStr,
        long: longStr
    }
}




export default customDateFormats;
