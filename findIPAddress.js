async function fetchIPAddress(domain,callback) {
    const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
      headers: {
        'accept': 'application/dns-json'
      }
    })
    const respObject = await resp.json()
  
    console.log(respObject)
    
    callback(domain,respObject);
  }
  
  // don't touch below this line
  
  const domain = 'api.boot.dev'
   fetchIPAddress(domain,function callback(domain,ipAddress){
    if (!ipAddress) {
        console.log('something went wrong in fetchIPAddress')
      } else {
        console.log("ip adress found")
        console.log(ipAddress.Answer[0].data)
      }
     

  })
  