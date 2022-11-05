var citiesByState = {
    Andijan: ["Andijon",
    "Andijon Tumani",
    "Asaka",
    "Asaka Tumani",
    "Baliqchi Tumani",
    "Bo'z Tumani",
    "Buloqboshi Tumani",
    "Izboskan Tumani",
    "Jalolkuduk Tumani",
    "Khŭjaobod Tumani",
    "Marhamat",
    "Marhamat Tumani",
    "Oltinkŭl Tumani",
    "Pakhtaobod Tumani",
    "Paxtaobod",
    "Qo'rg'ontepa",
    "Qŭrghontepa Tumani",
    "Shahrikhon Tumani",
    "Shahrixon",
    "Ulug'nor Tumani",
    "Xo'jaobod"],
    Bukhara: ["Bukhara",
    "Galaosiyo",
    "Gazli",
    "Ghijduwon",
    "Karakul’",
    "Kogon",
    "Olot",
    "Peshku Tumani",
    "Qorako’l",
    "Qorovulbozor",
    "Romiton",
    "Shofirkon",
    "Wobkent",
    "Wobkent Tumani"],
    Djizzak: ["Dashtobod",
    "Dŭstlik",
    "Gagarin",
    "Jizzax",
    "Paxtakor",
    "Zomin"],
    Fergana: ["Beshariq",
    "Fergana",
    "Hamza",
    "Kirguli",
    "Marg'ilon",
    "Oltiariq",
    "Qo'qon",
    "Quva",
    "Quvasoy",
    "Rishton",
    "Shohimardon",
    "So'x Tumani",
    "Toshloq",
    "Yangi Marg'ilon",
    "Yaypan"],
    Kashkadarya: ["Beshkent",
    "Chiroqchi",
    "G'uzor",
    "Kitob",
    "Koson",
    "Muborak",
    "Nishon Tumani",
    "Qarshi",
    "Shahrisabz"],
    Khorezm: ["Boghot Tumani",
    "Gurlan",
    "Hazorasp",
    "Khiwa",
    "Qŭshkŭpir",
    "Showot",
    "Urganch"],
    Namangan: ["Chortoq",
    "Chust",
    "Haqqulobod",
    "Kosonsoy",
    "Namangan",
    "Pop",
    "To'rqao'rg'on",
    "Toshbuloq",
    "Uchqŭrghon Shahri",
    "Uychi",
    "Yangiqo'rg'on"],
    Navoi: ["Navoiy",
    "Nurota",
    "Qiziltepa",
    "Yangirabot"],
    Samarkand: ["Bulung'ur",
    "Charxin",
    "Chelak",
    "Daxbet",
    "Ishtixon",
    "Jomboy",
    "Juma",
    "Kattaqo'rg'on",
    "Oqtosh",
    "Payshanba",
    "Samarkand",
    "Urgut"],
    Surkhandarya: ["Boysun",
    "Denov",
    "Sho'rchi",
    "Tirmiz"],
    Syrdarya: ["Guliston",
    "Sirdaryo",
    "Yangiyer"],
    Tashkent: ["Angren",
    "Bekobod",
    "Bo'ka",
    "Chinoz",
    "Chirchiq",
    "G'azalkent",
    "Iskandar",
    "Kyzyldzhar",
    "Ohangaron",
    "Olmaliq",
    "Parkent",
    "Piskent",
    "Qibray",
    "Salor",
    "Tŭytepa",
    "Ŭrtaowul",
    "Yangiobod",
    "Yangiyŭl",
    "Zafar"],
    TashkentCity: ["Bektemir", 
    "Almazar", 
    "Shaykhontohur", 
    "Yunusabad", 
    "Mirzo Ulugbek", 
    "Yashnobod", 
    "Mirabad", 
    "Yakkasaray", 
    "Chilonzor"],
    Karakalpakistan: ["Beruniy",
    "Kegeyli Shahar",
    "Khŭjayli",
    "Manghit",
    "Mŭynoq",
    "Novyy Turtkul’",
    "Nukus",
    "Oltinko'l"]
    }
var categories = ["Document", "Pets", "Money", "Child", "Other"];



function makeSubmenu(value) {
        if(value.length==0) document.getElementById("citySelect").innerHTML = "<option></option>";
        else {
        var citiesOptions = "";
        var categoryOptions = "";
        for(cityId in citiesByState[value]) {
        citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
        }
        for(category in categories) {
            categoryOptions+="<option>"+categories[category]+"</option>";
            }
        document.getElementById("citySelect").innerHTML = citiesOptions;
        document.getElementById("categorySelect").innerHTML = categoryOptions;
        }
    }
    // function displaySelected() { 
    //     var region = document.getElementById("regionSelect").value;
    //     var city = document.getElementById("citySelect").value;
    //     var category = document.getElementById("categorySelect").value;
    //     var comment = document.getElementById("comment").value;
    //     var image = document.getElementById("image").value;
        
    //     fetch("/lost", {
    //         method: "POST",
    //         headers: {'Content-Type': 'application/json'}, 
    //         body: JSON.stringify({
    //             region: region,
    //             city: city,
    //             category: category,
    //             timeFound: new Date(),
    //             comment: comment,
    //             image: image
    //         })
    //     }).then(()=>{
    //         console.log("heyeeee");
    //         document.querySelector("body").innerHTML = "Item Uploaded!"
    //         setTimeout(() => {
    //             window.location.assign('/')
    //         }, 2000);
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // }
    function resetSelection() {
        document.getElementById("regionSelect").selectedIndex = 0;
        document.getElementById("citySelect").selectedIndex = 0;
    }
    