	new Vue({
    el: '#app',
    data: {


        isdisable : true,

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
                                city_my: "ကျိုင်းတုံမြို့နယ်"
                            },
                    		{ 
                                city:'Tachileik',
                                city_my: "တာချီလိတ်မြို့နယ်"
                            },
                    		{ 
                                city:'Hsipaw',
                                city_my: "သီပေါမြို့နယ်"
                            },
                    		{ 
                                city:'Kyaukme',
                                city_my: "ကျောက်မဲမြို့နယ်"
                            },
                    		{ 
                                city:'Lashio',
                                city_my: "လားရှိုးမြို့နယ်"
                            },
                    		{ 
                                city:'Muse',
                                city_my: "မူဆယ်မြို့နယ်"
                            },
                    		{ 
                                city:'Nawnghkio',
                                city_my: "နောင်ချိုမြို့နယ်"
                            },
                    		{ 
                                city:'Hopong',
                                city_my: "ဟိုပုံးမြို့နယ်"
                            },
                    		{ 
                                city:'Kalaw',
                                city_my: "ကလောမြို့နယ်"
                            },
                    		{ 
                                city:'Loilen',
                                city_my: "လွိုင်လင်မြို့နယ်"
                            },
                    		{ 
                                city:'Nyaungshwe',
                                city_my: "ညောင်ရွှေမြို့နယ်"
                            },
                    		{ 
                                city:'Pindaya',
                                city_my: "ပင်းတယမြို့နယ်"
                            },
                    		{ 
                                city:'Pinlaung',
                                city_my: "ပင်လောင်းမြို့နယ်"
                            },
                    		{ 
                                city:'Matman',
                                city_my: "မက်မန်းမြို့နယ်"
                            },
                    		{ 
                                city:'Monghpyak',
                                city_my: "မိုင်းဖြတ်မြို့နယ်"
                            },
                    		{ 
                                city:'Monghsat',
                                city_my: "မိုင်းဆတ်မြို့နယ်"
                            },
                    		{ 
                                city:'Mongkhet',
                                city_my: "မိုင်းခတ်မြို့နယ်"
                            },
                    		{ 
                                city:'Mongla',
                                city_my: "မိုင်းလားမြို့နယ်"
                            },
                    		{ 
                                city:'Mongping',
                                city_my: "မိုင်းပြင်းမြို့"
                            },
                    		{ 
                                city:'Mongton',
                                city_my: "မန်တုံမြို့နယ်"
                            },
                    		{ 
                                city:'Mongyang',
                                city_my: "မိုးညှင်း"
                            },
                    		{ 
                                city:'Mongyawng',
                                city_my: "မိုင်းယောင်းမြို့နယ်"
                            },
                    		{ 
                                city:'Hopang',
                                city_my: "ဟိုပန်မြို့နယ်"
                            },
                    		{ 
                                city:'Hseni',
                                city_my: "သိန္နီမြို့နယ်"
                            },
                    		{ 
                                city:'Konkyan',
                                city_my: "ကုန်းကြမ်းမြို့နယ်"
                            },
                    		{ 
                                city:'Kunlong',
                                city_my: "ကွမ်းလုံမြို့နယ်"
                            },
                    		{ 
                                city:'Kutkai',
                                city_my: "ကွတ်ခိုင်မြို့နယ်"
                            },
                    		{ 
                                city:'Laukkaing',
                                city_my: 'လောက်ကိုင်မြို့နယ်'
                            },
                    		{ 
                                city:'Mabein',
                                city_my: 'မဘိမ်းမြို့နယ်'
                            },
                    		{ 
                                city:'Mongmao',
                                city_my: 'မိုင်းမောမြို့နယ်'
                            },
                    		{ 
                                city:'Mongmit',
                                city_my: 'မိုးမိတ်မြို့နယ်'
                            },
                    		{ 
                                city:'Mongyai',
                                city_my: 'မိုင်းရယ်မြို့နယ်'
                            },
                    		{ 
                                city:'Namhsan',
                                city_my: 'နမ့်ဆန်မြို့နယ်'
                            },
                    		{ 
                                city:'Namtu',
                                city_my: 'နမ္မတူမြို့နယ်'
                            },
                    		{ 
                                city:'Nanhkan',
                                city_my: 'နမ့်ခမ်းမြို့'
                            },
                    		{ 
                                city:'Pangsang',
                                city_my: 'ပန်ဆန်းမြို့'
                            },
                    		{ 
                                city:'Pangwaun',
                                city_my: 'ပန်ဝိုင်မြို့'
                            },
                    		{ 
                                city:'Tangyan',
                                city_my: 'တန့်ယန်းမြို့'
                            },
                    		{ 
                                city:'Hsihseng',
                                city_my: 'ဆီဆိုင်မြို့'
                            },
                    		{ 
                                city:'Kunhing',
                                city_my: 'ကွန်ဟိန်းမြို့နယ်'
                            },
                    		{ 
                                city:'Kyethi',
                                city_my: 'ကျေးသီးမြို့'
                            },
                    		{ 
                                city:'Laihka',
                                city_my: 'လဲချားမြို့'
                            },
                    		{ 
                                city:'Lawksawk',
                                city_my: 'ရပ်စောက်မြို့'
                            },
                    		{ 
                                city:'Mawkmai',
                                city_my: 'မောက်မယ်မြို့'
                            },
                    		{ 
                                city:'Monghsu',
                                city_my: 'မိုင်းရှူးမြို့'
                            },
                    		{ 
                                city:'Mongkaung',
                                city_my: 'မိုင်းကိုင်မြို့နယ်'
                            },
                    		{ 
                                city:'Mongnai',
                                city_my: 'မိုးနဲမြို့'
                            },
                    		{ 
                                city:'Mongpan',
                                city_my: 'မိုင်းပန်မြို့'
                            },
                    		{ 
                                city:'Nansang',
                                city_my: 'နမ့်စန်မြို့'
                            },
                    		{ 
                                city:'Pekon',
                                city_my: 'ဖယ်ခုံမြို့နယ်'
                            },
                    		{ 
                                city:'Ywangan',
                                city_my: 'ရွာငံမြို့နယ်'
                            },
               ],
               Kayin : [
               				{ 
                                city:'Hpa-An',
                                city_my: 'ဘားအံမြို့'
                            },
                    		{ 
                                city:'Kawkareik',
                                city_my: 'ကော့ကရိတ်မြို့'
                            },
                    		{ 
                                city:'Myawaddy',
                                city_my: 'မြဝတီမြို့'
                            },
                    		{ 
                                city:'Thandaung',
                                city_my: 'သံတောင်မြို့'
                            },
                    		{ 
                                city:'Hlaingbwe',
                                city_my: 'လှိုင်းဘွဲ့မြို့'
                            },
                    		{ 
                                city:'Hpapun',
                                city_my: 'ဖာပွန်မြို့'
                            },
                    		{ 
                                city:'Kyain Seikgyi',
                                city_my: 'ကြာအင်းဆိပ်ကြီးမြို့'
                            },
               ],

               Mon : [
               				{ 
                                city: 'Kyaikto',
                                city_my: 'ကျိုက်ထိုမြို့'
                            },
                    		{ 
                                city: 'Mawlamyine',
                                city_my: 'မော်လမြိုင်'
                            },
                    		{ 
                                city: 'Thaton',
                                city_my: 'သထုံမြို့'
                            },
                    		{ 
                                city: 'Bilin',
                                city_my: 'ဘီးလင်းမြို့'
                            },
                    		{ 
                                city: 'Chaungzon',
                                city_my: 'ချောင်းဆုံမြို့'
                            },
                    		{ 
                                city: 'Kyaikmaraw',
                                city_my: 'ကျိုက်မရောမြို့'
                            },
                    		{ 
                                city: 'Mudon',
                                city_my: 'မုဒုံမြို့'
                            },
                    		{ 
                                city: 'Thanbyuzayat',
                                city_my: 'သံဖြူဇရပ်မြို့'
                            },
                    		{ 
                                city: 'Paung',
                                city_my: 'ပေါင်မြို့'
                            },
                    		{ 
                                city: 'Ye',
                                city_my: 'ရေးမြို့'
                            },
               ],
               Rakhin : [
                            { 
                                city: 'Sittwe',
                                city_my: 'စစ်တွေမြို့'
                            },
                            { 
                                city: 'Thandwe',
                                city_my: 'သံတွဲမြို့'
                            },
                            { 
                                city: 'Toungup',
                                city_my: 'တောင်ကုတ်မြို့'
                            },
                            { 
                                city: 'Ann',
                                city_my: 'အမ်းမြို့'
                            },
                            { 
                                city: 'Buthidaung',
                                city_my: 'ဘူးသီးတောင်မြို့'
                            },
                            { 
                                city: 'Gwa',
                                city_my: 'ဂွမြို့'
                            },
                            { 
                                city: 'Kyaukpyu',
                                city_my: 'ကျောက်ဖြူမြို့'
                            },
                            { 
                                city: 'Kyauktaw',
                                city_my: 'ကျောက်တော်မြို့'
                            },
                            { 
                                city: 'Maungdaw',
                                city_my: 'မောင်တောမြို့'
                            },
                            { 
                                city: 'Minbya',
                                city_my: 'မင်းပြားမြို့'
                            },
                            { 
                                city: 'Mrauk-U',
                                city_my: 'မြောက်ဦးမြို့'
                            },
                            { 
                                city: 'Munaung',
                                city_my: 'မာန်အောင်မြို့'
                            },
                            { 
                                city: 'Myebon',
                                city_my: 'မြေပုံမြို့'
                            },
                            { 
                                city: 'Pauktaw',
                                city_my: 'ပေါက်တောမြို့'
                            },
                            { 
                                city: 'Ponnagyun',
                                city_my: 'ပုဏ္ဏားကျွန်းမြို့'
                            },
                            { 
                                city: 'Ramree',
                                city_my: 'ရမ်းဗြဲကျွန်း'
                            },
                            { 
                                city: 'Rathedaung',
                                city_my: 'ရသေ့တောင်မြို့'
                            },
               ],
               Chin : [
                            { 
                                city: 'Hakha',
                                city_my: 'ဟားခါးမြို့'
                            },
                            { 
                                city: 'Mindat',
                                city_my: 'မင်းတပ်မြို့'
                            },
                            { 
                                city: 'Falam',
                                city_my: 'ဖလမ်းမြို့'
                            },
                            { 
                                city: 'Htantlang',
                                city_my: 'ထန်တလန်မြို့'
                            },
                            { 
                                city: 'Kanpetlet',
                                city_my: 'ကန်ပက်လက်မြို့'
                            },
                            { 
                                city: 'Madupi',
                                city_my: 'မတူပီမြို့'
                            },
                            { 
                                city: 'Paletwa',
                                city_my: 'ပလက်ဝမြို့'
                            },
                            { 
                                city: 'Tiddim',
                                city_my: 'တီးတိန်မြို့'
                            },
                            { 
                                city: 'Tonzang',
                                city_my: 'တွန်းဇံမြို့'
                            },
               ],
               Kachin : [
                            { 
                                city: 'Myitkyina',
                                city_my: 'မြစ်ကြီးနားမြို့'
                            },
                            { 
                                city: 'Puta-O',
                                city_my: 'ပူတာအိုမြို့'
                            },
                            { 
                                city: 'Bhamo',
                                city_my: 'ဗန်းမော်မြို့'
                            },
                            { 
                                city: 'Hpakan',
                                city_my: 'ဖားကန့်မြို့'
                            },
                            { 
                                city: 'Mogaung',
                                city_my: 'မိုးကောင်းမြို့'
                            },
                            { 
                                city: 'Mohnyin',
                                city_my: 'မိုးညှင်းမြို့'
                            },
                            { 
                                city: 'Momauk',
                                city_my: 'မိုးမောက်မြို့'
                            },
                            { 
                                city: 'Shwegu',
                                city_my: 'ရွှေကူမြို့'
                            },
                            { 
                                city: 'Injangyang',
                                city_my: 'အင်ဂျန်းယန်မြို့'
                            },
                            { 
                                city: 'Kawnglanghpu',
                                city_my: 'ခေါင်လန်ဖူးမြို့နယ်'
                            },
                            { 
                                city: 'Machanbaw',
                                city_my: 'မချမ်းဘောမြို့'
                            },
                            { 
                                city: 'Mansi',
                                city_my: 'မံစီမြို့'
                            },
                            { 
                                city: 'Nogmung',
                                city_my: 'နောင်မွန်းမြို့'
                            },
                            { 
                                city: 'Sumprabum',
                                city_my: 'ဆွမ်ပရာဘွမ်မြို့'
                            },
                            { 
                                city: 'Tanai',
                                city_my: 'တနိုင်းမြို့'
                            },
                            { 
                                city: 'Tsawlaw',
                                city_my: 'ဆော့လော်မြို့'
                            },
                            { 
                                city: 'Waingmaw',
                                city_my: 'ဝိုင်းမော်မြို့'
                            },
               ],
               Kayah : [
                            { 
                                city: 'Loikaw',
                                city_my: 'လွိုင်ကော်မြို့'
                            },
                            { 
                                city: 'Bawlakhe',
                                city_my: 'ဘော်လခဲမြို့'
                            },
                            { 
                                city: 'Demoso',
                                city_my: 'ဒီမောဆိုးမြို့'
                            },
                            { 
                                city: 'Hpasawng',
                                city_my: 'ဖားဆောင်းမြို့'
                            },
                            { 
                                city: 'Hpruso',
                                city_my: 'ဖရူးဆိုးမြို့'
                            },
                            { 
                                city: 'Mese',
                                city_my: 'မယ်စဲ့မြို့'
                            },
                            { 
                                city: 'Shadaw',
                                city_my: 'ရှားတောမြို့'
                            },
               ],
                               
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
             this.options = this.options;

             this.isdisable = false;
         }
         
    }

})