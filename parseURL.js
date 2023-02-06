function printURLparts(urlString){
    const urlObj =new URL(urlString)
    console.log(`protocol:${urlObj.protocol}`)
    console.log(`protocol:${urlObj.username}`)
    console.log(`protocol:${urlObj.password}`)
    console.log(`protocol:${urlObj.host}`)
    console.log(`protocol:${urlObj.hostname}`)
    console.log(`protocol:${urlObj.port}`)
    console.log(`protocol:${urlObj.pathname}`)

}


const fantasyQuestURL='https://fontawesome.com/icons/bars?s=solid&f=classic';
printURLparts(fantasyQuestURL);