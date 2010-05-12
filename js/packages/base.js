require.def(
    "packages/base",
    [ "/~blowery/js/packages/one.js", "/~blowery/js/packages/two.js"], 
    function(){
        console.log("base loaded");
    }
);