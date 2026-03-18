Java.perform(()=>{
    const base_64 = Java.use('android.util.Base64');
    const result = base_64.decode("5UJiFctbmgbDoLXmpL12mkno8HT4Lv8dlat8FxR2GOc=", 0);
    console.log("Result: ", result)
    // create a js wrapper class
    const b_function_cls = Java.use('sg.vantagepoint.uncrackable1.a');
    var enckey = b_function_cls.b('8d127684cbc37c17616d806cf50473cc');
    console.log("key = ", enckey)

    const a_cls = Java.use('sg.vantagepoint.a.a');
    var result2 = a_cls.a(enckey, result);
    console.log("Result 2 = ", result2)
    
    const string_cls = Java.use("java.lang.String");
    const string_obj = string_cls.$new(result2);
    console.log("Decrypted password: ", string_obj);

})