	new Vue({
    el: '#app',
    data: {

        selected: '',
        regions : [
        		{
        			regionState: 'Yangon Region', 
        			govName: 'Phyo Min Thein',
                    regionState_my : 'ရန်ကုန်တိုင်းဒေသကြီး',
                    govName_my: 'ဖြိုးမင်းသိန်း'
        		},
        		{
        			regionState: 'Mandalay Region',
        			govName: 'Dr.Zaw Myint Maung',
                    regionState_my: 'မန္တလေးတိုင်းဒေသကြီး',
                    govName_my: 'ဇော်မြင့်မောင်'
        		},
        		{
        			regionState: 'Bago Region',
        			govName: 'Win Thein',
                    regionState_my: 'ပဲခူးတိုင်းဒေသကြီး',
                    govName_my: 'ဦးဝင်းသိန်း'
        		},
        		{
        			regionState: 'Ayeyarwady Region',
        			govName: 'Hla Moe Aung',
                    regionState_my: 'ဧရာဝတီတိုင်းဒေသကြီး',
                    govName_my: 'လှမိုးအောင်'
        		},
        		{
        			regionState: 'Magway Region',
        			govName: 'Aung Moe Nyo',
                    regionState_my: 'မကွေးတိုင်းဒေသကြီး',
                    govName_my: 'အောင်မိုးညို'
        		},
        		{
        			regionState: 'Sagaing Region',
        			govName: 'Dr Myint Naing',
                    regionState_my: 'စစ်ကိုင်းတိုင်းဒေသကြီး‎',
                    govName_my: 'ဦးမြင့်နိုင်'
        		},
        		{
        			regionState: 'Tanintharyi Region',
        			govName: 'Le Le Maw',
                    regionState_my: 'တနင်္သာရီတိုင်းဒေသကြီး',
                    govName_my: 'လဲ့လဲ့မော်'
        		},
        		{
        			regionState: 'Shan State',
        			govName: 'Dr Linn Htut',
                    regionState_my: 'ရှမ်းပြည်နယ်‎ ',
                    govName_my: 'လင်းထွဋ်'
        		},
        		{
        			regionState: 'Kayin State',
        			govName: 'Nan Khin Htwe Myint',
                    regionState_my: 'ကရင်ပြည်နယ်‎',
                    govName_my: 'နန်းခင်ထွေးမြင့်'
        		},
        		{
        			regionState: 'Mon State',
        			govName: 'Aye Zan, Dr',
                    regionState_my: 'မွန်ပြည်နယ်',
                    govName_my:'အေးဇံ'
        		},
                {
                    regionState: 'Rakhine State',
                    govName: 'Nyi Pu',
                    regionState_my: 'ရခိုင်ပြည်နယ်‎',
                    govName_my:'ဦးညီပု'
                },
                {
                    regionState: 'Chin State',
                    govName: 'Salai Lian Luai',
                    regionState_my:'ချင်းပြည်နယ်‎',
                    govName_my:'လိုင်းလျန်လွယ်'
                },
                {
                    regionState: 'Kachin State',
                    govName: 'Dr Khat Aung',
                    regionState_my: 'ကချင်ပြည်နယ်‎',
                    govName_my:'ခက်အောင်'
                },
                {
                    regionState: 'Kayah State',
                    govName: 'L Phaung Sho',
                    regionState_my:'ကယားပြည်နယ်‎',
                    govName_my:'အယ်လ်ဖောင်းရှို'
                }
        ],
        
        list: '',

           optionsData: {
               Yangon: [
		                    { 
                                city: "Botataung",
                                city_my: "ဗိုလ်တထောင်မြို့နယ်"
                            },  
							{ 
                                city: "DagonSeikkan",
                                city_my: "ဒဂုံမြို့သစ်ဆိပ်ကမ်းမြို့နယ်"
                            },
							{ 
                                city: "EastDagon",
                                city_my: "ဒဂုံမြို့သစ်တောင်ပိုင်းမြို့နယ်"
                            },
							{ 
                                city: "NorthDagon",
                                city_my: "ဒဂုံမြို့သစ်မြောက်ပိုင်းမြို့နယ်"
                            },
							{ 
                                city: "NorthOkkalapa",
                                city_my: "မြောက်ဥက္ကလာပမြို့နယ်"
                            },
							{ 
                                city: "Pazundaung",
                                city_my: "ပုဇွန်တောင်မြို့နယ်"
                            },
							{ 
                                city: "SouthDagon",
                                city_my: "ဒဂုံမြို့သစ်တောင်ပိုင်း"
                            },
							{ 
                                city: "SouthOkkalapa",
                                city_my: "တောင်ဥက္ကလာပမြို့နယ်"
                            },
							{ 
                                city: "Thingangyun",
                                city_my: "သင်္ဃန်းကျွန်းမြို့နယ်"
                            },
							{ 
                                city: "Dawbon",
                                city_my: "ဒေါပုံမြို့နယ်"
                            },
							{ 
                                city: "MingalaTaungnyunt",
                                city_my: "မင်္ဂလာတောင်ညွန့်မြို့နယ် "
                            },
							{ 
                                city: "Tamwe",
                                city_my: "တာမွေမြို့နယ်"
                            },
							{ 
                                city: "Thaketa",
                                city_my: "သာကေတမြို့နယ်"
                            },
							{ 
                                city: "Yankin",
                                city_my: "ရန်ကင်းမြို့နယ်"
                            },
							{ 
                                city: "Hlaingthaya",
                                city_my: "လှိုင်သာယာမြို့နယ်"
                            },
							{ 
                                city: "Insein",
                                city_my:"အင်းစိန်မြို့နယ်"
                            },
							{ 
                                city: "Mingaladon",
                                city_my: "မင်္ဂလာဒုံမြို့နယ်"
                            },
							{ 
                                city: "Shwepyitha",
                                city_my: "ရွှေပြည်သာမြို့နယ်"
                            },
							{ 
                                city: "Hlegu",
                                city_my: "လှည်းကူးမြို့နယ်"
                            },
							{ 
                                city: "Hmawbi",
                                city_my: "မှော်ဘီမြို့နယ်"
                            },
							{ 
                                city: "Htantabin",
                                city_my: "ထန်းတပင်မြို့နယ် (ရန်ကုန်တိုင်းဒေသကြီး)"
                            },
							{ 
                                city: "Taikkyi",
                                city_my: "တိုက်ကြီးမြို့နယ်"
                            },
							{ 
                                city: "Dala",
                                city_my: "ဒလမြို့နယ်"
                            },
							{ 
                                city: "SeikkyiKanaungto",
                                city_my: "ဆိပ်ကြီးခနောင်တိုမြို့နယ်"
                            },
							{ 
                                city: "Cocokyun",
                                city_my: "ကိုကိုးကျွန်းမြို့နယ်"
                            },
							{ 
                                city: "Kawhmu",
                                city_my: "ကော့မှူးမြို့နယ်"
                            },
							{ 
                                city: "Kayan",
                                city_my: "ခရမ်းမြို့နယ်"
                            },
							{ 
                                city: "Kungyangon",
                                city_my: "ကွမ်းခြံကုန်းမြို့နယ်"
                            },
							{ 
                                city: "Kyauktan",
                                city_my: "ကျောက်တန်းမြို့နယ်"
                            },
							{ 
                                city: "Thanlyin",
                                city_my: "သန်လျင်မြို့နယ်"
                            },
							{ 
                                city: "Thongwa",
                                city_my: "သုံးခွမြို့နယ်"
                            },
							{ 
                                city: "Twante",
                                city_my: "တွံတေးမြို့နယ်"
                            },
							{ 
                                city: "TadaSub",
                                city_my: "_"
                            },
							{ 
                                city: "Ahlon",
                                city_my: "အလုံမြို့နယ်"
                            },
							{ 
                                city: "Bahan",
                                city_my: "ဗဟန်းမြို့နယ်"
                            },
							{ 
                                city: "Dagon",
                                city_my: "ဒဂုံမြို့နယ်"
                            },
							{ 
                                city: "Kyauktada",
                                city_my: "ကျောက်တံတားမြို့နယ်"
                            },
							{ 
                                city: "Kyimyindaing",
                                city_my: "ကြည့်မြင်တိုင်မြို့နယ်"
                            },
							{ 
                                city: "Lanmadaw",
                                city_my: "လမ်းမတော်မြို့နယ်"
                            },
							{ 
                                city: "Latha",
                                city_my: "လသာမြို့နယ်"
                            },
							{ 
                                city: "Pabedan",
                                city_my: "ပန်းဘဲတန်းမြို့နယ်"
                            },
							{ 
                                city: "Sanchaung",
                                city_my: "စမ်းချောင်းမြို့နယ်"
                            },
							{ 
                                city: "Seikkan",
                                city_my: "ဆိပ်ကမ်းမြို့နယ်"
                            },
							{ 
                                city: "Hlaing",
                                city_my: "လှိုင်မြို့နယ်"
                            },
							{ 
                                city: "Kamayut",
                                city_my: "ကမာရွတ်မြို့နယ်"
                            },
							{ 
                                city: "Mayangon",
                                city_my: "မရမ်းကုန်းမြို့နယ်"
                            },
							{ 
                                city: "Hlegu",
                                city_my: "လှည်းကူးမြို့နယ်"
                            },
							{ 
                                city: "Kawhmu",
                                city_my: "ကော့မှူးမြို့နယ်"
                            },
							{ 
                                city: "Kyauktan",
                                city_my: "ကျောက်တန်းမြို့နယ်"
                            },
							{ 
                                city: "Taikkyi",
                                city_my: "တိုက်ကြီးမြို့နယ်"
                            },
							{ 
                                city: "Thongwa",
                                city_my: "သုံးခွမြို့နယ်"
                            },
							{ 
                                city: "Thanlyin",
                                city_my: "သန်လျင်မြို့နယ်"
                            }
               ],
               
               Mandalay: [
                   			{ 
                                city:'Aung Myay Thar Zan',
                                city_my: "အောင်မြေသာဇံမြို့နယ်"
                            },
							{ 
                                city:'Chan Aye Thar Zan',
                                city_my: "ချမ်းအေးသာဇံမြို့နယ်"
                            },
							{ 
                                city:'Mahar Aung Myay',
                                city_my: "မဟာအောင်မြေမြို့နယ်"
                            },
							{ 
                                city:'Chan Mya Thar Si',
                                city_my: "ချမ်းမြသာစည်မြို့နယ်"
                            },
							{ 
                                city:'Pyi Gyi Tan Kon',
                                city_my: "ပြည်ကြီးတံခွန်မြို့နယ်"
                            },
							{ 
                                city:'Amarapura',
                                city_my: "အမရပူရမြို့နယ်"
                            },
							{ 
                                city:'Pa Thein Gyi',
                                city_my: "ပုသိမ်ကြီးမြို့နယ်"
                            },
							{ 
                                city:'Nay Pyi Taw',
                                city_my: "နေပြည်တော်"
                            },
							{ 
                                city:'Pyinmana',
                                city_my: "ပျဉ်းမနားမြို့နယ်"
                            },
							{ 
                                city:'Tatkon',
                                city_my: "တပ်ကုန်းမြို့နယ်"
                            },
							{ 
                                city:'Lewe',
                                city_my: "လယ်ဝေးမြို့နယ်"
                            },
							{ 
                                city:'Dekkhinathiri',
                                city_my: "ဒက္ခိဏသီရိမြို့နယ်"
                            },
							{ 
                                city:'Ottarathiri',
                                city_my: "ဥတ္တရသီရိမြို့နယ်"
                            },
							{ 
                                city:'Pobbathiri',
                                city_my: "ပုဗ္ဗသီရိမြို့နယ်"
                            },
							{ 
                                city:'Zabuthiri',
                                city_my: "ဇမ္ဗူသီရိမြို့နယ်"
                            },
							{ 
                                city:'Zeyathiri',
                                city_my: "ဇေယျာသီရိမြို့နယ်"
                            },
							{ 
                                city:'Pyin Oo Lwin',
                                city_my: "ပြင်ဦးလွင်မြို့နယ်"
                            },
							{ 
                                city:'Madaya',
                                city_my: "မတ္တရာမြို့နယ်"
                            },
							{ 
                                city:'Singu',
                                city_my: "စဉ့်ကူမြို့နယ်"
                            },
							{ 
                                city:'Thabeikkyin',
                                city_my: "သပိတ်ကျင်းမြို့နယ်"
                            },
							{ 
                                city:'Mogok',
                                city_my: "မိုးကုတ်မြို့နယ်"
                            },
							{ 
                                city:'Kyaukpadaung',
                                city_my: "ကျောက်ပန်းတောင်းမြို့နယ်"
                            },
							{ 
                                city:'Kyaukse',
                                city_my: "ကျောက်ဆည်မြို့နယ်"
                            },
							{ 
                                city:'Sintgaing',
                                city_my: "စဉ့်ကိုင်မြို့နယ်"
                            },
							{ 
                                city:'Myittha',
                                city_my: "မြစ်သားမြို့နယ်"
                            },
							{ 
                                city:'Tada-U',
                                city_my: "တံတားဦးမြို့နယ်"
                            },
							{ 
                                city:'Myingyan',
                                city_my: "မြင်းခြံမြို့နယ်"
                            },
							{ 
                                city:'Thaungtha',
                                city_my: "တောင်သာမြို့နယ်"
                            },
							{ 
                                city:'Natogyi',
                                city_my: "နွားထိုးကြီးမြို့နယ်"
                            },
							{ 
                                city:'Nyaung-U',
                                city_my: "ညောင်ဦးမြို့"
                            },
							{ 
                                city:'Meiktila',
                                city_my: "မိတ္ထီလာမြို့နယ်"
                            },
							{ 
                                city:'Mahlaing',
                                city_my: "မလှိုင်မြို့နယ်"
                            },
							{ 
                                city:'Thazi',
                                city_my: "သာစည်မြို့နယ်"
                            },
							{ 
                                city:'Wundwin',
                                city_my: "ဝမ်းတွင်းမြို့နယ်"
                            },
							{ 
                                city:'Pyawbwe',
                                city_my: "ပျော်ဘွယ်မြို့နယ်"
                            },
							{ 
                                city:'Yamethin',
                                city_my: "ရမည်းသင်းမြို့နယ်"
                            },
               ],
               Bago: [
				            { 
                                city:'Bago',
                                city_my: "ပဲခူးမြို့နယ်"
                            },
					        { 
                                city:'Daik-U',
                                city_my: "ဒိုက်ဦးမြို့နယ်"
                            },
					        { 
                                city:'Kawa',
                                city_my: "ကဝမြို့နယ်"
                            },
					        { 
                                city:'Thanatpin',
                                city_my: "သနပ္ပင်မြို့နယ်"
                            },
					        { 
                                city:'Waw',
                                city_my: "ဝေါမြို့နယ်"
                            },
					        { 
                                city:'Nyaunglebin',
                                city_my: "ညောင်လေးပင်မြို့နယ်"
                            },
					        { 
                                city:'Shwegyin',
                                city_my: "ရွှေကျင်မြို့နယ်"
                            },
					        { 
                                city:'Pyay',
                                city_my: "ပြည်မြို့နယ်"
                            },
					        { 
                                city:'Paukkaung',
                                city_my: "ပေါက်ခေါင်းမြို့နယ်"
                            },
					        { 
                                city:'Thegon',
                                city_my: "သဲကုန်းမြို့နယ်"
                            },
					        { 
                                city:'Shwedaung',
                                city_my: "ရွှေတောင်မြို့နယ်"
                            },
					        { 
                                city:'Padaung',
                                city_my: "ပန်းတောင်းမြို့နယ်"
                            },
					        { 
                                city:'Paungde',
                                city_my: "ပေါင်းတည်မြို့နယ်"
                            },
					        { 
                                city:'Nattalin',
                                city_my: "နတ်တလင်းမြို့နယ်"
                            },
					        { 
                                city:'Zigon',
                                city_my: "ဇီးကုန်းမြို့နယ်"
                            },
					        { 
                                city:'Tharrawaddy',
                                city_my: "သာယာဝတီမြို့နယ်"
                            },
					        { 
                                city:'Gyobingauk',
                                city_my: "ကြို့ပင်ကောက်မြို့နယ်"
                            },
					        { 
                                city:'Letpadan',
                                city_my: "လက်ပံတန်းမြို့နယ်"
                            },
					        { 
                                city:'Minhla',
                                city_my: "မင်းလှမြို့နယ်၊ သာယာဝတီခရိုင်"
                            },
					        { 
                                city:'Monyo',
                                city_my: "မိုးညိုမြို့နယ်"
                            },
					        { 
                                city:'Okpho',
                                city_my: "အုတ်ဖိုမြို့နယ်"
                            },
					        { 
                                city:'Taungoo',
                                city_my: "တောင်ငူမြို့နယ်"
                            },
					        { 
                                city:'Oktwin',
                                city_my: "အုတ်တွင်းမြို့နယ်"
                            },
					        { 
                                city:'Tantabin',
                                city_my: "ထန်းတပင်မြို့နယ်၊ တောင်ငူခရိုင်"
                            },
					        { 
                                city:'Yedashe',
                                city_my: "ရေတာရှည်မြို့နယ်"
                            },
					        { 
                                city:'Pyu',
                                city_my: "ဖြူးမြို့နယ်"
                            },
					        { 
                                city:'Kyauktaga',
                                city_my: "ကျောက်တံခါးမြို့နယ်"
                            },
					        { 
                                city:'Kyaukkyi',
                                city_my: "ကျောက်ကြီးမြို့နယ်"
                            },
               ],
               Ayeyarwady: [
                            { 
                                city:'Pathein',
                                city_my: "ပုသိမ်မြို့နယ်"
                            },
                    		{ 
                                city:'Bogale',
                                city_my: "ဘိုကလေးမြို့နယ်"
                            },
                    		{ 
                                city:'Danubyu',
                                city_my: "ဓနုဖြူမြို့နယ်"
                            },
                    		{ 
                                city:'Einme',
                                city_my: "အိမ်မဲမြို့နယ်"
                            },
                    		{ 
                                city:'Hinthada',
                                city_my: "ဟင်္သာတမြို့နယ်"
                            },
                    		{ 
                                city:'Ingapu',
                                city_my: "အင်္ဂပူမြို့နယ်"
                            },
                    		{ 
                                city:'Kangyidaunt',
                                city_my: "ကန်ကြီးထောင့်မြို့နယ်"
                            },
                    		{ 
                                city:'Kyaiklat',
                                city_my: "ကျိုက်လတ်မြို့နယ်"
                            },
                    		{ 
                                city:'Kyangin',
                                city_my: "ကြံခင်းမြို့နယ်"
                            },
                    		{ 
                                city:'Kyaunggon',
                                city_my: "ကျောင်းကုန်းမြို့နယ်"
                            },
                    		{ 
                                city:'Kyonpyaw',
                                city_my: "ကျုံပျော်မြို့နယ်"
                            },
                    		{ 
                                city:'Labutta',
                                city_my: "လပွတ္တာမြို့နယ်"
                            },
                    		{ 
                                city:'Lemyethna',
                                city_my: "လေးမျက်နှာမြို့နယ်"
                            },
                    		{ 
                                city:'Maubin',
                                city_my: "မအူပင်မြို့နယ်"
                            },
                    		{ 
                                city:'Mawlamyinegyun(Mawgyun)',
                                city_my: "မော်လမြိုင်ကျွန်းမြို့နယ်"
                            },
                    		{ 
                                city:'Myanaung',
                                city_my: "မြန်အောင်မြို့နယ်"
                            },
                    		{ 
                                city:'Myaungmya',
                                city_my: "မြောင်းမြမြို့နယ်"
                            },
                    		{ 
                                city:'Ngapudaw',
                                city_my: "ငပုတောမြို့နယ်"
                            },
                    		{ 
                                city:'Nyaungdon',
                                city_my: "ညောင်တုန်းမြို့နယ်"
                            },
                    		{ 
                                city:'Pantanaw',
                                city_my: "ပန်းတနော်မြို့နယ်"
                            },                    		
                    		{ 
                                city:'Pyapon',
                                city_my: "ဖျာပုံမြို့နယ်"
                            },
                    		{ 
                                city:'Thabaung',
                                city_my: "သာပေါင်းမြို့နယ်"
                            },
                    		{ 
                                city:'Wakema',
                                city_my: "ဝါးခယ်မမြို့နယ်"
                            },
                    		{ 
                                city:'Yegyi',
                                city_my: "ရေကြည်မြို့နယ်"
                            },
                    		{ 
                                city:'Zalun',
                                city_my: "ဇလွန်မြို့နယ်"
                            },
               ],
               Magway : [
               				{
                             city:'Aunglan',
                             city_my: 'အောင်လံမြို့နယ်'
                         },
                    		{
                             city:'Chauk',
                             city_my: 'ချောက်မြို့နယ်'
                         },
                    		{
                             city:'Gangaw',
                             city_my: 'ဂန့်ဂေါမြို့နယ်'
                         },
                    		{
                             city:'Kamma',
                             city_my: 'ကံမမြို့နယ်'
                         },
                    		{
                             city:'Magway',
                             city_my: 'မကွေးမြို့နယ်'
                         },
                    		{
                             city:'Minbu',
                             city_my: 'မင်းဘူး(စကု)မြို့နယ်'
                         },
                    		{
                             city:'Mindon',
                             city_my: 'မင်းတုန်းမြို့နယ်'
                         },
                    		{
                             city:'Minhla',
                             city_my: 'မင်းလှမြို့နယ်၊ သရက်ခရိုင်'
                         },
                    		{
                             city:'Myaing',
                             city_my: 'မြိုင်မြို့နယ်'
                         },
                    		{
                             city:'Myothit',
                             city_my: 'မြို့သစ်မြို့နယ်'
                         },
                    		{
                             city:'Natmauk',
                             city_my: 'နတ်မောက်မြို့နယ်'
                         },
                    		{
                             city:'Ngape',
                             city_my: 'ငဖဲမြို့နယ်'
                         },
                    		{
                             city:'Pakokku',
                             city_my: 'ပခုက္ကူမြို့နယ်'
                         },
                    		{
                             city:'Pauk',
                             city_my: 'ပေါက်မြို့နယ်'
                         },
                    		{
                             city:'Pwintbyu',
                             city_my: 'ပွင့်ဖြူမြို့နယ်'
                         },
                    		{
                             city:'Salin',
                             city_my: 'စလင်းမြို့နယ်'
                         },
                    		{
                             city:'Saw',
                             city_my: 'ဆောမြို့နယ်'
                         },
                    		{
                             city:'Seikphyu',
                             city_my: 'ဆိပ်ဖြူမြို့နယ်'
                         },
                    		{
                             city:'Sidoktaya',
                             city_my: 'စေတုတ္တရာမြို့နယ်'
                         },
                    		{
                             city:'Sinbaungwe',
                             city_my: 'ဆင်ပေါင်ဝဲမြို့နယ်'
                         },
                    		{
                             city:'Taungdwingyi',
                             city_my: 'တောင်တွင်းကြီးမြို့နယ်'
                         },
                    		{
                             city:'Thayet',
                             city_my: 'သရက်မြို့နယ်'
                         },
                    		{
                             city:'Tilin',
                             city_my: 'ထီးလင်းမြို့နယ်'
                         },
                    		{
                             city:'Yenangyaung',
                             city_my: 'ရေနံချောင်းမြို့နယ်'
                         },
                    		{
                             city:'Yesagyo',
                             city_my: 'ရေစကြိုမြို့နယ်'
                         },
               ],
               Sagaing : [
                    		{ 
                                city:'Sagaing',
                                city_my: 'စစ်ကိုင်းမြို့နယ်'
                            },
                    		{ 
                                city:'Monywa',
                                city_my: 'မုံရွာမြို့နယ်'
                            },
                    		{ 
                                city:'Shwebo',
                                city_my: 'ရွှေဘိုမြို့နယ်'
                            },
                    		{ 
                                city:'Tabayin',
                                city_my: 'ဒီပဲယင်းမြို့နယ်'
                            },
                    		{ 
                                city:'Katha',
                                city_my: 'ကသာမြို့နယ်'
                            },
                    		{ 
                                city:'Ayadaw',
                                city_my: 'အရာတော်မြို့နယ်'
                            },
                    		{ 
                                city:'Banmauk',
                                city_my: 'ဗန်းမောက်မြို့နယ်'
                            },
                    		{ 
                                city:'Budalin',
                                city_my: 'ဘုတလင်မြို့နယ်'
                            },
                    		{ 
                                city:'Chaung-U',
                                city_my: 'ချောင်းဦးမြို့နယ်'
                            },
                    		{ 
                                city:'Hkamti',
                                city_my: 'ခန္တီးမြို့နယ်'
                            },
                    		{ 
                                city:'Homalin',
                                city_my: 'ဟုမ္မလင်းမြို့နယ်'
                            },
                    		{ 
                                city:'Indaw',
                                city_my: 'အင်းတော်မြို့နယ်'
                            },
                    		{ 
                                city:'Kale',
                                city_my: 'ကလေးမြို့နယ်'
                            },
                    		{ 
                                city:'Kalewa',
                                city_my: 'ကလေးဝမြို့နယ်'
                            },
                    		{ 
                                city:'kanbalu',
                                city_my: 'ကန့်ဘလူမြို့နယ်'
                            },
                    		{ 
                                city:'Kani',
                                city_my: 'ကနီမြို့နယ်'
                            },
                    		{ 
                                city:'Kawlin',
                                city_my: 'ကောလင်းမြို့နယ်'
                            },
                    		{ 
                                city:'Khin-U',
                                city_my: 'ခင်ဦးမြို့နယ်'
                            },
                    		{ 
                                city:'Kyunhla',
                                city_my: 'ကျွန်းလှမြို့နယ်'
                            },
                    		{ 
                                city:'Lahe',
                                city_my: 'လဟယ်မြို့နယ်'
                            },
                    		{ 
                                city:'Mawlaik',
                                city_my: 'မော်လိုက်မြို့နယ်'
                            },
                    		{ 
                                city:'Mingin',
                                city_my: 'မင်းကင်းမြို့နယ်'
                            },
                    		{ 
                                city:'Myaung',
                                city_my: 'မြောင်မြို့နယ်'
                            },
                    		{ 
                                city:'Myinmu',
                                city_my: 'မြင်းမူမြို့နယ်'
                            },
                    		{ 
                                city:'Nanyun',
                                city_my: 'နန်းယွန်းမြို့နယ်'
                            },
                    		{ 
                                city:'Pale',
                                city_my: 'ပုလဲမြို့နယ်'
                            },
                    		{ 
                                city:'Paungbyin',
                                city_my: 'ဖောင်းပြင်မြို့နယ်'
                            },
                    		{ 
                                city:'Pinlebu',
                                city_my: 'ပင်လယ်ဘူးမြို့နယ်'
                            },
                    		{ 
                                city:'Salingyi',
                                city_my: 'ဆားလင်းကြီးမြို့နယ်'
                            },
                    		{ 
                                city:'Tamu',
                                city_my: 'တမူးမြို့နယ်'
                            },
                    		{ 
                                city:'Taze',
                                city_my: 'တန့်ဆည်မြို့နယ်'
                            },
                    		{ 
                                city:'Tigyaing',
                                city_my: 'ထီးချိုင့်မြို့နယ်'
                            },
                    		{ 
                                city:'Wetlet',
                                city_my: 'ဝက်လက်မြို့နယ်'
                            },
                    		{ 
                                city:'Wuntho',
                                city_my: 'ဝန်းသိုမြို့နယ်'
                            },
                    		{ 
                                city:'Ye-U',
                                city_my: 'ရေဦးမြို့နယ်'
                            },
                    		{ 
                                city:'Yinmabin',
                                city_my: 'ယင်းမာပင်မြို့နယ်'
                            },
               ],
               Tanintharyi : [
               				{ 
                                city:'Dawei',
                                city_my: 'ထားဝယ်မြို့နယ်'
                            },
                   			{ 
                                city:'Kawthoung',
                                city_my: 'ကော့သောင်းမြို့နယ်'
                            },
                   			{ 
                                city:'Myeik',
                                city_my: 'မြိတ်မြို့နယ်'
                            },
                   			{ 
                                city:'Bokpyin',
                                city_my: 'ဘုတ်ပြင်းမြို့နယ်'
                            },
                   			{ 
                                city:'Kyunsu',
                                city_my: 'ကျွန်းစုမြို့နယ်'
                            },
                   			{ 
                                city:'Palaw',
                                city_my: 'ပုလောမြို့နယ်'
                            },
                   			{ 
                                city:'Tanintharyi',
                                city_my: 'တနင်္သာရီမြို့နယ်'
                            },
                   			{ 
                                city:'Thayetchaung',
                                city_my: 'သရက်ချောင်းမြို့နယ်'
                            },
                   			{ 
                                city:'Yebyu',
                                city_my: 'ရေဖြူမြို့နယ်'
                            },
                            {
                                city: 'Launglon',
                                city_my: 'လောင်းလုံမြို့နယ်'
                            },
               ],
               Shan : [               		
                    		{ 
                                city:'Taunggyi',
                                city_my: "တောင်ကြီးမြို့နယ်"
                            },
                    		{ 
                                city:'Kengtung',
                                city_my: ""
                            },
                    		{ 
                                city:'Tachileik',
                                city_my: ""
                            },
                    		{ 
                                city:'Hsipaw',
                                city_my: ""
                            },
                    		{ 
                                city:'Kyuakme',
                                city_my: ""
                            },
                    		{ 
                                city:'Lashio',
                                city_my: ""
                            },
                    		{ 
                                city:'Muse',
                                city_my: ""
                            },
                    		{ 
                                city:'Nawnghkio',
                                city_my: ""
                            },
                    		{ 
                                city:'Hopong',
                                city_my: ""
                            },
                    		{ 
                                city:'Kalaw',
                                city_my: ""
                            },
                    		{ 
                                city:'Loilen',
                                city_my: ""
                            },
                    		{ 
                                city:'Nyaungshwe',
                                city_my: ""
                            },
                    		{ 
                                city:'Pindaya',
                                city_my: ""
                            },
                    		{ 
                                city:'Pinlaung',
                                city_my: ""
                            },
                    		{ 
                                city:'Matman',
                                city_my: ""
                            },
                    		{ 
                                city:'Monghpyak',
                                city_my: ""
                            },
                    		{ 
                                city:'Monghsat',
                                city_my: ""
                            },
                    		{ 
                                city:'Mongkhet',
                                city_my: ""
                            },
                    		{ 
                                city:'Mongla',
                                city_my: ""
                            },
                    		{ 
                                city:'Mongping',
                                city_my: ""
                            },
                    		{ 
                                city:'Mongton',
                                city_my: ""
                            },
                    		{ 
                                city:'Mongyang',
                                city_my: ""
                            },
                    		{ 
                                city:'Mongyawng',
                                city_my: ""
                            },
                    		{ 
                                city:'Hopang',
                                city_my: ""
                            },
                    		{ 
                                city:'Hseni',
                                city_my: ""
                            },
                    		{ 
                                city:'Konkyan',
                                city_my: ""
                            },
                    		{ 
                                city:'Kunlong',
                                city_my: ""
                            },
                    		{ 
                                city:'Kutkai',
                                city_my: ""
                            },
                    		{ 
                                city:'Laukkaing',
                                city_my: ''
                            },
                    		{ 
                                city:'Mabein',
                                city_my: ''
                            },
                    		{ 
                                city:'Mongmao',
                                city_my: ''
                            },
                    		{ 
                                city:'Mongmit',
                                city_my: ''
                            },
                    		{ 
                                city:'Mongyai',
                                city_my: ''
                            },
                    		{ 
                                city:'Namhsan',
                                city_my: ''
                            },
                    		{ 
                                city:'Namtu',
                                city_my: ''
                            },
                    		{ 
                                city:'Nanhkan',
                                city_my: ''
                            },
                    		{ 
                                city:'Pangsang',
                                city_my: ''
                            },
                    		{ 
                                city:'Pangwaun',
                                city_my: ''
                            },
                    		{ 
                                city:'Tangyan',
                                city_my: ''
                            },
                    		{ 
                                city:'Hsihseng',
                                city_my: ''
                            },
                    		{ 
                                city:'Kunhing',
                                city_my: ''
                            },
                    		{ 
                                city:'Kyethi',
                                city_my: ''
                            },
                    		{ 
                                city:'Laihka',
                                city_my: ''
                            },
                    		{ 
                                city:'Laihka',
                                city_my: ''
                            },
                    		{ 
                                city:'Lawksawk',
                                city_my: ''
                            },
                    		{ 
                                city:'Mawkmai',
                                city_my: ''
                            },
                    		{ 
                                city:'Monghsu',
                                city_my: ''
                            },
                    		{ 
                                city:'Mongkaung',
                                city_my: ''
                            },
                    		{ 
                                city:'Mongnai',
                                city_my: ''
                            },
                    		{ 
                                city:'Mongpan',
                                city_my: ''
                            },
                    		{ 
                                city:'Nansang',
                                city_my: ''
                            },
                    		{ 
                                city:'Pekon',
                                city_my: ''
                            },
                    		{ 
                                city:'Ywangan',
                                city_my: ''
                            },
               ],
               Kayin : [
               				{ city:'Hpa-An'},
                    		{ city:'Kawkareik'},
                    		{ city:'Myawaddy'},
                    		{ city:'Thandaung'},
                    		{ city:'Hlaingbwe'},
                    		{ city:'Hpapun'},
                    		{ city:'Kyain Seikgyi'},
               ],

               Mon : [
               				{ city: 'Kyaikto'},
                    		{ city: 'Mawlamyine'},
                    		{ city: 'Thaton'},
                    		{ city: 'Bilin'},
                    		{ city: 'Chaungzon'},
                    		{ city: 'Kyaikmaraw'},
                    		{ city: 'Mudon'},
                    		{ city: 'Thanbyuzayat'},
                    		{ city: 'Paung'},
                    		{ city: 'Ye'},
               ],
               Rakhin : [
                            { city: 'Sittwe'},
                            { city: 'Thandwe'},
                            { city: 'Toungup'},
                            { city: 'Ann'},
                            { city: 'Buthidaung'},
                            { city: 'Gwa'},
                            { city: 'Kyaukpyu'},
                            { city: 'Kyauktaw'},
                            { city: 'Maungdaw'},
                            { city: 'Minbya'},
                            { city: 'Mrauk-U'},
                            { city: 'Munaung'},
                            { city: 'Myebon'},
                            { city: 'Pauktaw'},
                            { city: 'Ponnagyun'},
                            { city: 'Ramree'},
                            { city: 'Rathedaung'},
               ],
               Chin : [
                            { city: 'Hakha'},
                            { city: 'Mindat'},
                            { city: 'Falam'},
                            { city: 'Htantlang'},
                            { city: 'Kanpetlet'},
                            { city: 'Madupi'},
                            { city: 'Paletwa'},
                            { city: 'Tiddim'},
                            { city: 'Tonzang'},
               ],
               Kachin : [
                            { city: 'Myitkyina'},
                            { city: 'Puta-O'},
                            { city: 'Bhamo'},
                            { city: 'Hpakan'},
                            { city: 'Mogaung'},
                            { city: 'Mohnyin'},
                            { city: 'Momauk'},
                            { city: 'Shwegu'},
                            { city: 'Injangyang'},
                            { city: 'Kawnglanghpu'},
                            { city: 'Machanbaw'},
                            { city: 'Mansi'},
                            { city: 'Nogmung'},
                            { city: 'Sumprabum'},
                            { city: 'Tanai'},
                            { city: 'Tsawlaw'},
                            { city: 'Waingmaw'},
               ],
               Kayah : [
                            { city: 'Loikaw'},
                            { city: 'Bawlakhe'},
                            { city: 'Demoso'},
                            { city: 'Hpasawng'},
                            { city: 'Hpruso'},
                            { city: 'Mese'},
                            { city: 'Shadaw'},
               ],
                 All:    [
                                   { city: "Botataung"},  
                                   { city: "DagonSeikkan"},
                                   { city: "EastDagon"},
                                   { city: "NorthDagon"},
                                   { city: "NorthOkkalapa"},
                                   { city: "Pazundaung"},
                                   { city: "SouthDagon"},
                                   { city: "SouthOkkalapa"},
                                   { city: "Thingangyun"},
                                   { city: "Dawbon"},
                                   { city: "MingalaTaungnyunt"},
                                   { city: "Tamwe"},
                                   { city: "Thaketa"},
                                   { city: "Yankin"},
                                   { city: "Hlaingthaya"},
                                   { city: "Insein"},
                                   { city: "Mingaladon"},
                                   { city: "Shwepyitha"},
                                   { city: "Hlegu"},
                                   { city: "Hmawbi"},
                                   { city: "Htantabin"},
                                   { city: "Taikkyi"},
                                   { city: "Dala"},
                                   { city: "SeikkyiKanaungto"},
                                   { city: "Cocokyun"},
                                   { city: "Kawhmu"},
                                   { city: "Kayan"},
                                   { city: "Kungyangon"},
                                   { city: "Kyauktan"},
                                   { city: "Thanlyin"},
                                   { city: "Thongwa"},
                                   { city: "Twante"},
                                   { city: "TadaSub"},
                                   { city: "Ahlon"},
                                   { city: "Bahan"},
                                   { city: "Dagon"},
                                   { city: "Kyauktada"},
                                   { city: "Kyimyindaing"},
                                   { city: "Lanmadaw"},
                                   { city: "Latha"},
                                   { city: "Pabedan"},
                                   { city: "Sanchaung"},
                                   { city: "Seikkan"},
                                   { city: "Hlaing"},
                                   { city: "Kamayut"},
                                   { city: "Mayangon"},
                                   { city: "Hlegu"},
                                   { city: "Kawhmu"},
                                   { city: "Kyauktan"},
                                   { city: "Taikkyi"},
                                   { city: "Thongwa"},
                                   { city: "Thanlyin"},
                                   { city: "Twante"},
                                   { city:'Aung Myay Thar Zan'},
                                   { city:'Chan Aye Thar Zan'},
                                   { city:'Mahar Aung Myay'},
                                   { city:'Chan Mya Thar Si'},
                                   { city:'Pyi Gyi Tan Kon'},
                                   { city:'Amarapura'},
                                   { city:'Pa Thein Gyi'},
                                   { city:'Nay Pyi Taw'},
                                   { city:'Pyinmana'},
                                   { city:'Tatkon'},
                                   { city:'Lewe'},
                                   { city:'Dekkhinathiri'},
                                   { city:'Ottarathiri'},
                                   { city:'Pobbathiri'},
                                   { city:'Zabuthiri'},
                                   { city:'Zeyathiri'},
                                   { city:'Pyin Oo Lwin'},
                                   { city:'Madaya'},
                                   { city:'Singu'},
                                   { city:'Thabeikkyin'},
                                   { city:'Mogok'},
                                   { city:'Kyaukpadaung'},
                                   { city:'Kyaukse'},
                                   { city:'Sintgaing'},
                                   { city:'Myittha'},
                                   { city:'Tada-U'},
                                   { city:'Myingyan'},
                                   { city:'Thaungtha'},
                                   { city:'Natogyi'},
                                   { city:'Nyaung-U'},
                                   { city:'Meiktila'},
                                   { city:'Mahlaing'},
                                   { city:'Thazi'},
                                   { city:'Wundwin'},
                                   { city:'Pyawbwe'},
                                   { city:'Yamethin'},
                                   { city:'Bago'},
                                   { city:'Daik-U'},
                                   { city:'Kawa'},
                                   { city:'Thanatpin'},
                                   { city:'Waw'},
                                   { city:'Nyaunglebin'},
                                   { city:'Shwegyin'},
                                   { city:'Pyay'},
                                   { city:'Paukkaung'},
                                   { city:'Thegon'},
                                   { city:'Shwedaung'},
                                   { city:'Padaung'},
                                 { city:'Paungde'},
                                 { city:'Nattalin'},
                                 { city:'Zigon'},
                                 { city:'Tharrawaddy'},
                                 { city:'Gyobingauk'},
                                 { city:'Letpadan'},
                                 { city:'Minhla'},
                                 { city:'Monyo'},
                                 { city:'Okpho'},
                                 { city:'Taungoo'},
                                 { city:'Oktwin'},
                                 { city:'Tantabin'},
                                 { city:'Yedashe'},
                                 { city:'Pyu'},
                                 { city:'Kyauktaga'},
                                 { city:'Kyaukkyi'},
                                 { city:'Hpa Yar Gyi'},
                              { city:'Bogale'},
                              { city:'Danubyu'},
                              { city:'Einme'},
                              { city:'Hinthada'},
                              { city:'Ingapu'},
                              { city:'Kangyidaunt'},
                              { city:'Kyaiklat'},
                              { city:'Kyangin'},
                              { city:'Kyaunggon'},
                              { city:'Kyonpyaw'},
                              { city:'Labutta'},
                              { city:'Lemyethna'},
                              { city:'Maubin'},
                              { city:'Mawlamyinegyun(Mawgyun)'},
                              { city:'Myanaung'},
                              { city:'Myaungmya'},
                              { city:'Ngapudaw'},
                              { city:'Nyaungdon'},
                              { city:'Pantanaw'},
                              { city:'Pathein'},
                              { city:'Pyapon'},
                              { city:'Thabaung'},
                              { city:'Wakema'},
                              { city:'Yegyi'},
                              { city:'Zalun'},
                                   { city:'Aunglan'},
                              { city:'Chauk'},
                              { city:'Gangaw'},
                              { city:'Kamma'},
                              { city:'Magway'},
                              { city:'Minbu'},
                              { city:'Mindon'},
                              { city:'Minhla'},
                              { city:'Myaing'},
                              { city:'Myothit'},
                              { city:'Natmauk'},
                              { city:'Ngape'},
                              { city:'Pakokku'},
                              { city:'Pauk'},
                              { city:'Pwintbyu'},
                              { city:'Salin'},
                              { city:'Saw'},
                              { city:'Seikphyu'},
                              { city:'Sidoktaya'},
                              { city:'Sinbaungwe'},
                              { city:'Taungdwingyi'},
                              { city:'Thayet'},
                              { city:'Tilin'},
                              { city:'Yenangyaung'},
                              { city:'Yesagyo'},
                              { city:'Sagaing'},
                              { city:'Monywa'},
                              { city:'Shwebo'},
                              { city:'Tabayin'},
                              { city:'Katha'},
                              { city:'Ayadaw'},
                              { city:'Banmauk'},
                              { city:'Budalin'},
                              { city:'Chaung-U'},
                              { city:'Hkamti'},
                              { city:'Homalin'},
                              { city:'Indaw'},
                              { city:'Kale'},
                              { city:'Kalewa'},
                              { city:'kanbalu'},
                              { city:'Kani'},
                              { city:'Kawlin'},
                              { city:'Khin-U'},
                              { city:'Kyunhla'},
                              { city:'Lahe'},
                              { city:'Mawlaik'},
                              { city:'Mingin'},
                              { city:'Myaung'},
                              { city:'Myinmu'},
                              { city:'Nanyun'},
                              { city:'Pale'},
                              { city:'Paungbyin'},
                              { city:'Pinlebu'},
                              { city:'Salingyi'},
                              { city:'Tamu'},
                              { city:'Taze'},
                              { city:'Tigyaing'},
                              { city:'Wetlet'},
                              { city:'Wuntho'},
                              { city:'Ye-U'},
                              { city:'Yinmabin'},
                                   { city:'Dawei'},
                              { city:'Kawthoung'},
                              { city:'Myeik'},
                              { city:'Bokpyin'},
                              { city:'Kyunsu'},
                              { city:'Palaw'},
                              { city:'Tanintharyi'},
                              { city:'Thayetchaung'},
                              { city:'Yebyu'},            
                              { city:'Taunggyi'},
                              { city:'Kengtung'},
                              { city:'Tachileik'},
                              { city:'Hsipaw'},
                              { city:'Kyuakme'},
                              { city:'Lashio'},
                              { city:'Muse'},
                              { city:'Nawnghkio'},
                              { city:'Hopong'},
                              { city:'Kalaw'},
                              { city:'Loilen'},
                              { city:'Nyaungshwe'},
                              { city:'Pindaya'},
                              { city:'Pinlaung'},
                              { city:'Matman'},
                              { city:'Monghpyak'},
                              { city:'Monghsat'},
                              { city:'Mongkhet'},
                              { city:'Mongla'},
                              { city:'Mongping'},
                              { city:'Mongton'},
                              { city:'Mongyang'},
                              { city:'Mongyawng'},
                              { city:'Hopang'},
                              { city:'Hseni'},
                              { city:'Konkyan'},
                              { city:'Kunlong'},
                              { city:'Kutkai'},
                              { city:'Laukkaing'},
                              { city:'Mabein'},
                              { city:'Mongmao'},
                              { city:'Mongmit'},
                              { city:'Mongyai'},
                              { city:'Namhsan'},
                              { city:'Namtu'},
                              { city:'Nanhkan'},
                              { city:'Pangsang'},
                              { city:'Pangwaun'},
                              { city:'Tangyan'},
                              { city:'Hsihseng'},
                              { city:'Kunhing'},
                              { city:'Kyethi'},
                              { city:'Laihka'},
                              { city:'Laihka'},
                              { city:'Lawksawk'},
                              { city:'Mawkmai'},
                              { city:'Monghsu'},
                              { city:'Mongkaung'},
                              { city:'Mongnai'},
                              { city:'Mongpan'},
                              { city:'Nansang'},
                              { city:'Pekon'},
                              { city:'Ywangan'},
                              { city:'Hpa-An'},
                              { city:'Kawkareik'},
                              { city:'Myawaddy'},
                              { city:'Thandaung'},
                              { city:'Hlaingbwe'},
                              { city:'Hpapun'},
                              { city:'Kyain Seikgyi'},
                              { city: 'Kyaikto'},
                              { city: 'Mawlamyine'},
                              { city: 'Thaton'},
                              { city: 'Bilin'},
                              { city: 'Chaungzon'},
                              { city: 'Kyaikmaraw'},
                              { city: 'Mudon'},
                              { city: 'Thanbyuzayat'},
                              { city: 'Paung'},
                              { city: 'Ye'},
                            { city: 'Sittwe'},
                            { city: 'Thandwe'},
                            { city: 'Toungup'},
                            { city: 'Ann'},
                            { city: 'Buthidaung'},
                            { city: 'Gwa'},
                            { city: 'Kyaukpyu'},
                            { city: 'Kyauktaw'},
                            { city: 'Maungdaw'},
                            { city: 'Minbya'},
                            { city: 'Mrauk-U'},
                            { city: 'Munaung'},
                            { city: 'Myebon'},
                            { city: 'Pauktaw'},
                            { city: 'Ponnagyun'},
                            { city: 'Ramree'},
                            { city: 'Rathedaung'},
                            { city: 'Hakha'},
                            { city: 'Mindat'},
                            { city: 'Falam'},
                            { city: 'Htantlang'},
                            { city: 'Kanpetlet'},
                            { city: 'Madupi'},
                            { city: 'Paletwa'},
                            { city: 'Tiddim'},
                            { city: 'Tonzang'},
                            { city: 'Myitkyina'},
                            { city: 'Puta-O'},
                            { city: 'Bhamo'},
                            { city: 'Hpakan'},
                            { city: 'Mogaung'},
                            { city: 'Mohnyin'},
                            { city: 'Momauk'},
                            { city: 'Shwegu'},
                            { city: 'Injangyang'},
                            { city: 'Kawnglanghpu'},
                            { city: 'Machanbaw'},
                            { city: 'Mansi'},
                            { city: 'Nogmung'},
                            { city: 'Sumprabum'},
                            { city: 'Tanai'},
                            { city: 'Tsawlaw'},
                            { city: 'Waingmaw'},
                            { city: 'Loikaw'},
                            { city: 'Bawlakhe'},
                            { city: 'Demoso'},
                            { city: 'Hpasawng'},
                            { city: 'Hpruso'},
                            { city: 'Mese'},
                            { city: 'Shadaw'},
               ]
           }
       },
       
       computed: {
       
           options: function() {
           
           let options = ''

                switch(this.selected.value) {

                    case 'Yangon Region':
                    options = this.optionsData.Yangon
                    break;
                    
                    case 'Mandalay Region':
                    options = this.optionsData.Mandalay
                    break;

                    case 'Bago Region':
                    options = this.optionsData.Bago
                    break;

                    case 'Ayeyarwady':
                    options = this.optionsData.Sagaing
                    break;

                    case 'Bago':
                    options = this.optionsData.Bago
                    break;

                    case 'Ayeyarwady Region':
                    options = this.optionsData.Ayeyarwady
                    break;

                    case 'Magway Region':
                    options = this.optionsData.Magway
                    break;

                    case 'Sagaing Region':
                    options = this.optionsData.Sagaing
                    break;

                    case 'Tanintharyi Region':
                    options = this.optionsData.Tanintharyi
                    break;

                    case 'Shan State':
                    options = this.optionsData.Shan
                    break;

                    case 'Kayin State':
                    options = this.optionsData.Kayin
                    break;

                    case 'Mon State':
                    options = this.optionsData.Mon
                    break;

                    case 'Rakhine State':
                    options = this.optionsData.Rakhin
                    break;

                    case 'Chin State':
                    options = this.optionsData.Chin
                    break;

                    case 'Kachin State':
                    options = this.optionsData.Kachin
                    break;

                    case 'Kayah State':
                    options = this.optionsData.Kayah
                    break;

                    default:
                    options = this.optionsData.All
                }

                return options
           
           }
       
       },
       
       methods: {
       
         onChange: function ()
         {
             this.options = this.options
         }
         
    }

})