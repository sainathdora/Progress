Java.perform(()=>{
    console.log("Hello world, bye")
    Java.enumerateLoadedClasses({
        onMatch: function(name, handle){
            if(name.includes("com.example.tippyv2")){
                console.log(`name: ${name}, Handle: ${handle}`)
            }
        },
        onComplete: function(){
            console.log("----------done------------")
        }
    })
    // This will hook into class and print its memebers and functions
    // main activity is a class like thing
    const MainActivity = Java.use('com.example.tippyv2.MainActivity');

    console.log("MainActivity: ", MainActivity)
    for(const value of Object.getOwnPropertyNames(MainActivity)){
        console.log("Key: ", value)
    }
    console.log("--------------printed all keys -----------------")
})
// com.exa%mple.tippyv2