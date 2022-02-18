/*
MADE BY K1D-r ( ME ON GITHUB )

1 | JOIN 'https://pastebin.com/PRmK1Dqi'
2 | Copy all contents ( Ctrl + c )
3 | JOIN 'https://popcat.click'
4 | Press 'F12' and select console
5 | Paste the thing that you copied ( Ctrl + v )

Then Done, Have fun! :D

*/


var event = new KeyboardEvent('keydown', {
    key: 'g',
    ctrlKey: true
});

setInterval(function(){
    for (i = 0; i < 10000; i++) {
        document.dispatchEvent(event);
    }
}, 0);
