require.def(
    "packages/base",
    [ "js/packages/one.js", "js/packages/two.js"], 
    function(){
        console.log("base loaded");
    }
);