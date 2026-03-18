Java.perform(()=>{
    const rootcheckclass = Java.use("sg.vantagepoint.a.c");

    rootcheckclass.a.implementation = function(){
        console.log("--bypass c.a()--");
        return false;
    }

    rootcheckclass.b.implementation = function(){
        console.log("--bypass c.b()--");
        return false;
    }

    rootcheckclass.c.implementation = function(){
        console.log("--bypass c.c()--");
        return false;
    }
});
// frida -U -f  owasp.mstg.uncrackable1 -l RootBypass.js
// frida -U -n "<name>" -l <.js>