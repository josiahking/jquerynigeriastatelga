/*! jQuery Nigeria StateLGA jquery.stateLga.js
 * ================
 * jQuery Nigeria StateLGA generate state and there corresponding LGA. 
 * This file should be included in required pages. 
 *
 * @Author  Josiah Gerald
 * @Support <>
 * @Email   <josiahaccounts@gmail.com>
 * @version 1.0.0
 * @license MIT <http://opensource.org/licenses/MIT>
 */

//Make sure jQuery has been loaded before app.js
if (typeof jQuery === "undefined") {
    throw new Error("stateLga requires jQuery");
}
(function ($) {
    "use strict";
    
    $.fn.extend({
        stateLga: function(options){
            var defaults = {
                stateId: 'state',
                lgaId: 'lga'
            }
            var opt = $.extend(defaults,options);
            var states = [
                '',
                'Abia',
                'Adamawa',
                'Akwa-Ibom',
                'Anambra',
                'Bauchi',
                'Bayelsa',
                'Benue',
                'Borno',
                'Cross-River',
                'Delta',
                'Ebonyi',
                'Edo',
                'Ekiti',
                'Enugu',
                'Federal Capital Territory',
                'Gombe',
                'Imo',
                'Jigawa',
                'Kaduna',
                'Kano',
                'Katsina',
                'Kebbi',
                'Kogi',
                'Kwara',
                'Lagos',
                'Nasarawa',
                'Niger',
                'Ogun',
                'Ondo',
                'Osun',
                'Oyo',
                'Plateau',
                'Rivers',
                'Sokoto',
                'Taraba',
                'Yobe',
                'Zamfara'
            ];
            var abiaLga = ['Aba North', 'Aba South', 'Arochukwu', 'Bende', 'Ikwuano', 'Isiala-Ngwa North', 'Isiala-Ngwa South', 'Isuikwato', 'Obi Nwa', 'Ohafia', 'Osisioma',
                'Ngwa', 'Ugwunagbo', 'Ukwa East', 'Ukwa West', 'Umuahia North', 'Umuahia South', 'Umu-Neochi'];
            var abujaLga = ['Abaji', 'Abuja Municipal', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali'];
            var adamawaLga = ['Demsa', 'Fufore', 'Ganaye', 'Gireri', 'Gombi', 'Guyuk', 'Hong', 'Jada', 'Lamurde', 'Madagali', 'Maiha', 'Mayo-Belwa', 'Michika', 'Mubi North',
                'Mubi South', 'Numan', 'Shelleng', 'Song', 'Toungo', 'Yola North', 'Yola South'];
            var akwaIbomLga = ['Abak', 'Eastern Obolo', 'Eket', 'Esit Eket', 'Essien Udim', 'Etim Ekpo', 'Etinan', 'Ibeno', 'Ibesikpo Asutan', 'Ibiono Ibom', 'Ika', 'Ikono',
                'Ikot Abasi', 'Ikot Ekpene', 'Ini', 'Itu', 'Mbo', 'Mkpat Enin', 'Nsit Atai', 'Nsit Ibom', 'Nsit Ubium', 'Obot Akara', 'Okobo', 'Onna', 'Oron', 'Oruk Anam',
                'Udung Uko', 'Ukanafun', 'Uruan', 'Urue-Offong/Oruko', 'Uyo'];
            var anambraLga = ['Aguata', 'Anambra East', 'Anambra West', 'Anaocha', 'Awka North', 'Awka South', 'Ayamelum', 'Dunukofia', 'Ekwusigo', 'Idemili North', 'Idemili south',
                'Ihiala', 'Njikoka', 'Nnewi North', 'Nnewi South', 'Ogbaru', 'Onitsha North', 'Onitsha South', 'Orumba North', 'Orumba South', 'Oyi'];
            var bauchiLga = ['Alkaleri', 'Bauchi', 'Bogoro', 'Damban', 'Darazo', 'Dass', 'Ganjuwa', 'Giade', 'Itas/Gadau', 'Jama\'are', 'Katagum', 'Kirfi', 'Misau',
                'Ningi', 'Shira', 'Tafawa-Balewa', 'Toro', 'Warji', 'Zaki'];
            var bayelsaLga = ['Brass', 'Ekeremor', 'Kolokuma/Opokuma', 'Nembe', 'Ogbia', 'Sagbama', 'Southern Jaw', 'Yenegoa'];
            var benueLga = ['Ado', 'Agatu', 'Apa', 'Buruku', 'Gboko', 'Guma', 'Gwer East', 'Gwer West', 'Katsina-Ala', 'Konshisha', 'Kwande', 'Logo', 'Makurdi', 'Obi',
                'Ogbadibo', 'Oju', 'Okpokwu', 'Ohimini', 'Oturkpo', 'Tarka', 'Ukum', 'Ushongo', 'Vandeikya'];
            var bornoLga = ['Abadam', 'Askira/Uba', 'Bama', 'Bayo', 'Biu', 'Chibok', 'Damboa', 'Dikwa', 'Gubio', 'Guzamala', 'Gwoza', 'Hawul', 'Jere', 'Kaga', 'Kala/Balge',
                'Konduga', 'Kukawa', 'Kwaya Kusar', 'Mafa', 'Magumeri', 'Maiduguri', 'Marte', 'Mobbar', 'Monguno', 'Ngala', 'Nganzai', 'Shani'];
            var crossRiverLga = ['Akpabuyo', 'Odukpani', 'Akamkpa', 'Biase', 'Abi', 'Ikom', 'Yarkur', 'Odubra', 'Boki', 'Ogoja', 'Yala', 'Obanliku', 'Obudu',
                'Calabar South', 'Etung', 'Bekwara', 'Bakassi', 'Calabar Municipality'];
            var deltaLga = ['Oshimili', 'Aniocha', 'Aniocha South', 'Ika South', 'Ika North-East', 'Ndokwa West', 'Ndokwa East', 'Isoko south', 'Isoko North', 'Bomadi',
                'Burutu', 'Ughelli South', 'Ughelli North', 'Ethiope West', 'Ethiope East', 'Sapele', 'Okpe', 'Warri North', 'Warri South', 'Uvwie', 'Udu', 'Warri Central',
                'Ukwani', 'Oshimili North', 'Patani'];
            var ebonyiLga = ['Afikpo South', 'Afikpo North', 'Onicha', 'Ohaozara', 'Abakaliki', 'Ishielu', 'lkwo', 'Ezza', 'Ezza South', 'Ohaukwu', 'Ebonyi', 'Ivo'];
            var edoLga = ['Esan North-East', 'Esan Central', 'Esan West', 'Egor', 'Ukpoba', 'Central', 'Etsako Central', 'Igueben', 'Oredo', 'Ovia SouthWest', 'Ovia South-East',
                'Orhionwon', 'Uhunmwonde', 'Etsako East', 'Esan South-East'];
            var ekitiLga = ['Ado', 'Ekiti-East', 'Ekiti-West', 'Emure/Ise/Orun', 'Ekiti South-West', 'Ikare', 'Irepodun', 'Ijero', 'Ido/Osi', 'Oye', 'Ikole', 'Moba',
                'Gbonyin', 'Efon', 'Ise/Orun', 'Ilejemeje'];
            var enuguLga = ['Enugu South', 'Igbo-Eze South', 'Enugu North', 'Nkanu', 'Udi Agwu', 'Oji-River', 'Ezeagu', 'IgboEze North', 'Isi-Uzo', 'Nsukka', 'Igbo-Ekiti',
                'Uzo-Uwani', 'Enugu East', 'Aninri', 'Nkanu East', 'Udenu'];
            var gombeLga = ['Akko', 'Balanga', 'Billiri', 'Dukku', 'Kaltungo', 'Kwami', 'Shomgom', 'Funakaye', 'Gombe', 'Nafada/Bajoga', 'Yamaltu/Delta'];
            var imoLga = ['Aboh-Mbaise', 'Ahiazu-Mbaise', 'Ehime-Mbano', 'Ezinihitte', 'Ideato North', 'Ideato South', 'Ihitte/Uboma', 'Ikeduru', 'Isiala Mbano', 'Isu',
                'Mbaitoli', 'Ngor-Okpala', 'Njaba', 'Nwangele', 'Nkwerre', 'Obowo', 'Oguta', 'Ohaji/Egbema', 'Okigwe', 'Orlu', 'Orsu', 'Oru East', 'Oru West', 'Owerri-Municipal',
                'Owerri North', 'Owerri West'];
            var jigawaLga = ['Auyo', 'Babura', 'Birni Kudu', 'Biriniwa', 'Buji', 'Dutse', 'Gagarawa', 'Garki', 'Gumel', 'Guri', 'Gwaram', 'Gwiwa', 'Hadejia', 'Jahun', 'Kafin Hausa',
                'Kaugama Kazaure', 'Kiri Kasamma', 'Kiyawa', 'Maigatari', 'Malam Madori', 'Miga', 'Ringim', 'Roni', 'Sule-Tankarkar', 'Taura', 'Yankwashi'];
            var kadunaLga = ['Birni-Gwari', 'Chikun', 'Giwa', 'Igabi', 'Ikara', 'Jaba', 'Jema\'a', 'Kachia', 'Kaduna North', 'Kaduna South', 'Kagarko', 'Kajuru', 'Kaura',
                'Kauru', 'Kubau', 'Kudan', 'Lere', 'Makarfi', 'Sabon-Gari', 'Sanga', 'Soba', 'Zango-Kataf', 'Zaria'];
            var kanoLga = ['Ajingi', 'Albasu', 'Bagwai', 'Bebeji', 'Bichi', 'Bunkure', 'Dala', 'Dambatta', 'Dawakin Kudu', 'Dawakin Tofa', 'Doguwa', 'Fagge', 'Gabasawa', 'Garko',
                'Garum', 'Mallam', 'Gaya', 'Gezawa', 'Gwale', 'Gwarzo', 'Kabo', 'Kano Municipal', 'Karaye', 'Kibiya', 'Kiru', 'Kumbotso', 'Kunchi', 'Kura', 'Madobi', 'Makoda',
                'Minjibir', 'Nasarawa', 'Rano', 'Rimin Gado', 'Rogo', 'Shanono', 'Sumaila', 'Takali', 'Tarauni', 'Tofa', 'Tsanyawa', 'Tudun Wada', 'Ungogo', 'Warawa', 'Wudil'];
            var katsinaLga = ['Bakori', 'Batagarawa', 'Batsari', 'Baure', 'Bindawa', 'Charanchi', 'Dandume', 'Danja', 'Dan Musa', 'Daura', 'Dutsi', 'Dutsin-Ma', 'Faskari', 'Funtua',
                'Ingawa', 'Jibia', 'Kafur', 'Kaita', 'Kankara', 'Kankia', 'Katsina', 'Kurfi', 'Kusada', 'Mai\'Adua', 'Malumfashi', 'Mani', 'Mashi', 'Matazuu', 'Musawa', 'Rimi',
                'Sabuwa', 'Safana', 'Sandamu', 'Zango'];
            var kebbiLga = ['Aleiro', 'Arewa-Dandi', 'Argungu', 'Augie', 'Bagudo', 'Birnin Kebbi', 'Bunza', 'Dandi', 'Fakai', 'Gwandu', 'Jega', 'Kalgo', 'Koko/Besse', 'Maiyama',
                'Ngaski', 'Sakaba', 'Shanga', 'Suru', 'Wasagu/Danko', 'Yauri', 'Zuru'];
            var kogiLga = ['Adavi', 'Ajaokuta', 'Ankpa', 'Bassa', 'Dekina', 'Ibaji', 'Idah', 'Igalamela-Odolu', 'Ijumu', 'Kabba/Bunu', 'Kogi', 'Lokoja', 'Mopa-Muro', 'Ofu',
                'Ogori/Mangongo', 'Okehi', 'Okene', 'Olamabolo', 'Omala', 'Yagba East', 'Yagba West'];
            var kwaraLga = ['Asa', 'Baruten', 'Edu', 'Ekiti', 'Ifelodun', 'Ilorin East', 'Ilorin West', 'Irepodun', 'Isin', 'Kaiama', 'Moro', 'Offa', 'Oke-Ero', 'Oyun', 'Pategi'];
            var lagosLga = ['Agege', 'Ajeromi-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti-Osa', 'Ibeju/Lekki', 'Ifako-Ijaye', 'Ikeja', 'Ikorodu',
                'Kosofe', 'Lagos Island', 'Lagos Mainland', 'Mushin', 'Ojo', 'Oshodi-Isolo', 'Shomolu', 'Surulere'];
            var nasarawaLga = ['Akwanga', 'Awe', 'Doma', 'Karu', 'Keana', 'Keffi', 'Kokona', 'Lafia', 'Nasarawa', 'Nasarawa-Eggon', 'Obi', 'Toto', 'Wamba'];
            var nigerLga = ['Agaie', 'Agwara', 'Bida', 'Borgu', 'Bosso', 'Chanchaga', 'Edati', 'Gbako', 'Gurara', 'Katcha', 'Kontagora', 'Lapai', 'Lavun', 'Magama', 'Mariga',
                'Mashegu', 'Mokwa', 'Muya', 'Pailoro', 'Rafi', 'Rijau', 'Shiroro', 'Suleja', 'Tafa', 'Wushishi'];
            var ogunLga = ['Abeokuta North', 'Abeokuta South', 'Ado-Odo/Ota', 'Egbado North', 'Egbado South', 'Ewekoro', 'Ifo', 'Ijebu East', 'Ijebu North', 'Ijebu North East',
                'Ijebu Ode', 'Ikenne', 'Imeko-Afon', 'Ipokia', 'Obafemi-Owode', 'Ogun Waterside', 'Odeda', 'Odogbolu', 'Remo North', 'Shagamu'];
            var ondoLga = ['Akoko North East', 'Akoko North West', 'Akoko South Akure East', 'Akoko South West', 'Akure North', 'Akure South', 'Ese-Odo', 'Idanre',
                'Ifedore', 'Ilaje', 'Ile-Oluji', 'Okeigbo', 'Irele', 'Odigbo', 'Okitipupa', 'Ondo East', 'Ondo West', 'Ose', 'Owo'];
            var osunLga = ['Aiyedade', 'Aiyedire', 'Atakumosa East', 'Atakumosa West', 'Boluwaduro', 'Boripe', 'Ede North', 'Ede South', 'Egbedore', 'Ejigbo', 'Ife Central',
                'Ife East', 'Ife North', 'Ife South', 'Ifedayo', 'Ifelodun', 'Ila', 'Ilesha East', 'Ilesha West', 'Irepodun', 'Irewole', 'Isokan', 'Iwo', 'Obokun', 'Odo-Otin',
                'Ola-Oluwa', 'Olorunda', 'Oriade', 'Orolu', 'Osogbo'];
            var oyoLga = ['Afijio', 'Akinyele', 'Atiba', 'Atigbo', 'Egbeda', 'IbadanCentral', 'Ibadan North', 'Ibadan North West', 'Ibadan South East', 'Ibadan South West',
                'Ibarapa Central', 'Ibarapa East', 'Ibarapa North', 'Ido', 'Irepo', 'Iseyin', 'Itesiwaju', 'Iwajowa', 'Kajola', 'Lagelu Ogbomosho North', 'Ogbmosho South',
                'Ogo Oluwa', 'Olorunsogo', 'Oluyole', 'Ona-Ara', 'Orelope', 'Ori Ire', 'Oyo East', 'Oyo West', 'Saki East', 'Saki West', 'Surulere'];
            var plateauLga = ['Barikin Ladi', 'Bassa', 'Bokkos', 'Jos East', 'Jos North', 'Jos South', 'Kanam', 'Kanke', 'Langtang North', 'Langtang South', 'Mangu', 'Mikang',
                'Pankshin', 'Qua\'an Pan', 'Riyom', 'Shendam', 'Wase'];
            var riversLga = ['Abua/Odual', 'Ahoada East', 'Ahoada West', 'Akuku Toru', 'Andoni', 'Asari-Toru', 'Bonny', 'Degema', 'Emohua', 'Eleme', 'Etche', 'Gokana', 'Ikwerre',
                'Khana', 'Obia/Akpor', 'Ogba/Egbema/Ndoni', 'Ogu/Bolo', 'Okrika', 'Omumma', 'Opobo/Nkoro', 'Oyigbo', 'Port-Harcourt', 'Tai'];
            var sokotoLga = ['Binji', 'Bodinga', 'Dange-shnsi', 'Gada', 'Goronyo', 'Gudu', 'Gawabawa', 'Illela', 'Isa', 'Kware', 'Kebbe', 'Rabah', 'Sabon birni', 'Shagari',
                'Silame', 'Sokoto North', 'Sokoto South', 'Tambuwal', 'Tqngaza', 'Tureta', 'Wamako', 'Wurno', 'Yabo'];
            var tarabaLga = ['Ardo-kola', 'Bali', 'Donga', 'Gashaka', 'Cassol', 'Ibi', 'Jalingo', 'Karin-Lamido', 'Kurmi', 'Lau', 'Sardauna', 'Takum', 'Ussa', 'Wukari',
                'Yorro', 'Zing'];
            var yobeLga = ['Bade', 'Bursari', 'Damaturu', 'Fika', 'Fune', 'Geidam', 'Gujba', 'Gulani', 'Jakusko', 'Karasuwa', 'Karawa', 'Machina', 'Nangere', 'Nguru Potiskum',
                'Tarmua', 'Yunusari', 'Yusufari'];
            var zamfaraLga = ['Anka', 'Bakura', 'Birnin Magaji', 'Bukkuyum', 'Bungudu', 'Gummi', 'Gusau', 'Kaura', 'Namoda', 'Maradun', 'Maru', 'Shinkafi', 'Talata Mafara',
                'Tsafe', 'Zurmi'];
            var lga = function (state) {
                switch (state) {
                    case 'Abia':
                        return abiaLga;
                        break;
                    case 'Adamawa':
                        return adamawaLga;
                        break;
                    case 'Akwa-Ibom':
                        return akwaIbomLga;
                        break;
                    case 'Anambra':
                        return anambraLga;
                        break;
                    case 'Bauchi':
                        return bauchiLga;
                        break;
                    case 'Bayelsa':
                        return bayelsaLga;
                        break;
                    case 'Benue':
                        return benueLga;
                        break;
                    case 'Borno':
                        return bornoLga;
                        break;
                    case 'Cross-River':
                        return crossRiverLga;
                        break;
                    case 'Delta':
                        return deltaLga;
                        break;
                    case 'Ebonyi':
                        return ebonyiLga;
                        break;
                    case 'Edo':
                        return edoLga;
                        break;
                    case 'Ekiti':
                        return ekitiLga;
                        break;
                    case 'Enugu':
                        return enuguLga;
                        break;
                    case 'Federal Capital Territory':
                        return abujaLga;
                        break;
                    case 'Gombe':
                        return gombeLga;
                        break;
                    case 'Imo':
                        return imoLga;
                        break;
                    case 'Jigawa':
                        return jigawaLga;
                        break;
                    case 'Kaduna':
                        return kadunaLga;
                        break;
                    case 'Kano':
                        return kanoLga;
                        break;
                    case 'Katsina':
                        return katsinaLga;
                        break;
                    case 'Kebbi':
                        return kebbiLga;
                        break;
                    case 'Kogi':
                        return kogiLga;
                        break;
                    case 'Kwara':
                        return kwaraLga;
                        break;
                    case 'Lagos':
                        return lagosLga;
                        break;
                    case 'Nasarawa':
                        return nasarawaLga;
                        break;
                    case 'Niger':
                        return nigerLga;
                        break;
                    case 'Ogun':
                        return ogunLga;
                        break;
                    case 'Ondo':
                        return ondoLga;
                        break;
                    case 'Osun':
                        return osunLga;
                        break;
                    case 'Oyo':
                        return oyoLga;
                        break;
                    case 'Plateau':
                        return plateauLga;
                        break;
                    case 'Rivers':
                        return riversLga;
                        break;
                    case 'Sokoto':
                        return sokotoLga;
                        break;
                    case 'Taraba':
                        return tarabaLga;
                        break;
                    case 'Yobe':
                        return yobeLga;
                        break;
                    case 'Zamfara':
                        return zamfaraLga;
                        break;
                    default:
                        return '';
                }
            }
            var lgaOptions = [];
            var stateOptions = '';
            if (opt.stateId.length) {
                var stateOpts = "";
                stateOpts += "<option value=''>Select State</option>";
                for (var count = 0; count <= states.length; count++) {
                    stateOpts += "<option value='" + states[count] + "'>" + states[count] + "</option>";
                }
                document.getElementById(opt.stateId).innerHTML = stateOpts;
                if (opt.lgaId.length) {
                    document.getElementById(opt.lgaId).setAttribute('disabled','disabled');
                    document.getElementById(opt.stateId).addEventListener("change",function () {
                        var stateId = document.getElementById(opt.stateId).value;
                        if (stateId !== '') {
                            for (var i = 0; i < states.length; i++) {
                                if (stateId === states[i]) {
                                    lgaOptions = lga(stateId);
                                }
                            }
                            stateOptions = '<option value="">Select LGA</option>';
                            for (var j = 0; j < lgaOptions.length; j++) {
                                stateOptions += '<option value="' + lgaOptions[j] + '">' + lgaOptions[j] + '</option>';
                            }
                            document.getElementById(opt.lgaId).innerHTML = stateOptions;
                            if (document.getElementById(opt.lgaId).hasAttribute('disabled')) {
                                document.getElementById(opt.lgaId).removeAttribute('disabled');
                            }
                        }
                    });
                }
                
            }
            return this;
        }
    });
})(jQuery,window,document);;