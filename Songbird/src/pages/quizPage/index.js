/* global document */
const body = document.querySelector('.body');
const audioPl = document.querySelector('.audio-pl');
const audioPlAdd = document.querySelector('.audio-pl-add');
const btnPlay = document.querySelector('.circle-btn-play');
const btnPlayAdd = document.querySelector('.circle-btn-play-add');
const imgPlay = document.querySelector('.btn-play-img');
const imgPlayAdd = document.querySelector('.btn-play-img-add'); 
const currSongDur = document.querySelector('.current-song-duration');
const durationRange = document.querySelector('.inp-range');
const volumeInput = document.querySelector('.inp-vol-range');
const volumeImg = document.querySelector('.volume-icon');
const listGroupBirds = document.querySelector('.list-groups-birds');
const birdGroupItem = Array.from(document.querySelectorAll('.group-birds'));
const birdItem = Array.from(document.querySelectorAll('.answer'));
const listAnswers = document.querySelector('.list-answers');
const wholeDuration = document.querySelector('.whole-duration');
const birdName = document.querySelector('.bird-name');
const sucsessAnswerImg = document.querySelector('.question-bird');
const btnNextLevel = document.querySelector('.btn-next-level');
const voiceOFMove = document.createElement('audio');
voiceOFMove.src = '../../assets/sounds/zvuk-pobedyi-vyiigryisha.mp3';
body.append(voiceOFMove);
const voiceOFMoveLose = document.createElement('audio');
voiceOFMoveLose.src = '../../assets/sounds/opoveschenie-o-proigryishe.mp3';
body.append(voiceOFMoveLose);
const scoreGame = document.querySelector('.score-game');
const elseBirdImg = document.querySelector('.any-bird-answer');
const nameBird = document.querySelector('.name-bird');
const speciesBird = document.querySelector('.species-bird');
const descriptionBird = document.querySelector('.description-bird');
const reSultWrapper = document.querySelector('.wrapper-btn-link');

btnNextLevel.disabled = true;

const birdsData = [
  [
    {
      id: 1,
      name: 'Ворон',
      species: 'Corvus corax',
      description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
      image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',
    },
    {
      id: 2,
      name: 'Журавль',
      species: 'Grus grus',
      description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
      image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3',
    },
    {
      id: 3,
      name: 'Ласточка',
      species: 'Delichon urbicum',
      description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
      image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3',
    },
    {
      id: 4,
      name: 'Козодой',
      species: 'Caprimulgus europaeus',
      description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
      image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3',
    },
    {
      id: 5,
      name: 'Кукушка',
      species: 'Cuculus canorus',
      description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
      image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3',
    },
    {
      id: 6,
      name: 'Синица',
      species: 'Parus major',
      description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
      image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Воробей',
      species: 'Passer domesticus',
      description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
      image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3',
    },
    {
      id: 2,
      name: 'Грач',
      species: 'Corvus frugilegus',
      description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
      image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3',
    },
    {
      id: 3,
      name: 'Галка',
      species: 'Coloeus monedula',
      description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
      image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3',
    },
    {
      id: 4,
      name: 'Певчий дрозд',
      species: 'Turdus philomelos',
      description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
      image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3',
    },
    {
      id: 5,
      name: 'Сорока',
      species: 'Pica pica',
      description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
      image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3',
    },
    {
      id: 6,
      name: 'Сойка',
      species: 'Garrulus glandarius',
      description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
      image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Зяблик',
      species: 'Fringilla coelebs',
      description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3',
    },
    {
      id: 2,
      name: 'Клёст',
      species: 'Loxia curvirostra',
      description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3',
    },
    {
      id: 3,
      name: 'Горлица',
      species: 'Streptopelia turtur',
      description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3',
    },
    {
      id: 4,
      name: 'Дятел',
      species: 'Dendrocopos major',
      description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3',
    },
    {
      id: 5,
      name: 'Удод',
      species: 'Upupa epops',
      description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3',
    },
    {
      id: 6,
      name: 'Стриж',
      species: 'Apus apus',
      description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Жаворонок',
      species: 'Alauda arvensis',
      description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3',
    },
    {
      id: 2,
      name: 'Соловей',
      species: 'Luscinia luscinia',
      description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3',
    },
    {
      id: 3,
      name: 'Скворец',
      species: 'Sturnus vulgaris',
      description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
      image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3',
    },
    {
      id: 4,
      name: 'Иволга',
      species: 'Oriolus oriolus',
      description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3',
    },
    {
      id: 5,
      name: 'Свиристель',
      species: 'Bombycilla garrulus',
      description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3',
    },
    {
      id: 6,
      name: 'Щегол',
      species: 'Carduelis carduelis',
      description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
      image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Орёл',
      species: 'Aquila nipalensis',
      description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3',
    },
    {
      id: 2,
      name: 'Коршун',
      species: 'Milvus migrans',
      description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3',
    },
    {
      id: 3,
      name: 'Лунь',
      species: 'Circus cyaneus',
      description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
      image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3',
    },
    {
      id: 4,
      name: 'Сокол',
      species: 'Falco peregrinus',
      description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3',
    },
    {
      id: 5,
      name: 'Ястреб',
      species: 'Accipiter gentilis',
      description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3',
    },
    {
      id: 6,
      name: 'Филин',
      species: 'Bubo bubo',
      description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Альбатрос',
      species: 'Diomedea exulans',
      description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3',
    },
    {
      id: 2,
      name: 'Олуша',
      species: 'Sula nebouxii',
      description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3',
    },
    {
      id: 3,
      name: 'Буревестник',
      species: 'Puffinus griseus',
      description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3',
    },
    {
      id: 4,
      name: 'Пеликан',
      species: 'Pelecanus',
      description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
      image: 'https://i.ibb.co/mqqxpKB/89644134.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3',
    },
    {
      id: 5,
      name: 'Пингвин',
      species: 'Aptenodytes forsteri',
      description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3',
    },
    {
      id: 6,
      name: 'Чайка',
      species: 'Larus argentatus',
      description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3',
    },
  ],
];

let flagWin = false;
let count = 0;
let flagWin1 = false;
let count1 = 0;
let flagWin2 = false;
let count2 = 0;
let flagWin3 = false;
let count3 = 0;
let flagWin4 = false;
let count4 = 0;
let flagWin5 = false;
let count5 = 0;
let score = 0;
listAnswers.addEventListener('click', (event) => {
  for (let i = 0; i < 6; i++) {
    if (event.target.textContent === birdsData[0][i].name && birdGroupItem[0].classList.contains('group-birds-active')) {
      audioPl.currentTime = 0;
      imgPlay.src = '../../assets/images/play-btn.png';
      birdGroupItem.forEach((x) => x.classList.remove('group-birds-active'));
      birdItem.forEach((y) => y.classList.remove('group-birds-active'));
      birdGroupItem[0].classList.add('group-birds-active');
      birdItem[i].textContent = birdsData[0][i].name;
      if (event.target.textContent === birdsData[0][i].name && birdsData[0][i].audio === audioPl.src) {
        event.target.classList.add('group-birds-active');
        birdName.textContent = birdsData[0][i].name;
        sucsessAnswerImg.src = birdsData[0][i].image;
        audioPlAdd.src = birdsData[0][i].audio;
        if(!flagWin) {
          score += 5;
        }
        flagWin = true;
        scoreGame.textContent = score;
        playAudioWin();
        count = 6;
        console.log(1);
        btnNextLevel.disabled = false;
        elseBirdImg.src = birdsData[0][i].image;
        nameBird.textContent = birdsData[0][i].name;
        speciesBird.textContent = birdsData[0][i].species;
        descriptionBird.textContent = birdsData[0][i].description;
        btnNextLevel.addEventListener('click', () => {
          birdGroupItem[0].classList.remove('group-birds-active');
          birdGroupItem[1].classList.add('group-birds-active');
          btnNextLevel.disabled = true;
          birdItem.forEach((x) => x.textContent = `${birdsData[1][birdItem.indexOf(x)].name}`);
          birdItem.forEach((x) => x.classList.remove('group-birds-active'));
          randomSong();
          birdName.textContent = '*********';
          sucsessAnswerImg.src = '../../assets/images/question-bird1.jpg';
          elseBirdImg.src = '';
          nameBird.textContent = 'Please, listen to the bird';
          speciesBird.textContent = 'Make your choice';
          descriptionBird.textContent = '';
          audioPlAdd.src = '';
        });
      }
      
      if (event.target.textContent !== birdsData[0][i].name || birdsData[0][i].audio !== audioPl.src) {
        playAudioLose();
        count = count + 1;
        if (count < 6) {
          score -= 1;
        }
        elseBirdImg.src = birdsData[0][i].image;
        nameBird.textContent = birdsData[0][i].name;
        speciesBird.textContent = birdsData[0][i].species;
        descriptionBird.textContent = birdsData[0][i].description;
        console.log(1);
        audioPlAdd.src = birdsData[0][i].audio;
      }
    }
  }
  for (let i = 0; i < 6; i++) {
    if (event.target.textContent === birdsData[1][i].name && birdGroupItem[1].classList.contains('group-birds-active')) {
      birdName.textContent = '*********';
      sucsessAnswerImg.src = '../../assets/images/question-bird1.jpg';
      audioPl.currentTime = 0;
      imgPlay.src = '../../assets/images/play-btn.png';
      birdGroupItem.forEach((x) => x.classList.remove('group-birds-active'));
      birdItem.forEach((y) => y.classList.remove('group-birds-active'));
      birdGroupItem[1].classList.add('group-birds-active');
      birdItem[i].textContent = birdsData[1][i].name;
      if (event.target.textContent === birdsData[1][i].name && birdsData[1][i].audio === audioPl.src) {
        event.target.classList.add('group-birds-active');
        birdName.textContent = birdsData[1][i].name;
        sucsessAnswerImg.src = birdsData[1][i].image;
        audioPlAdd.src = birdsData[1][i].audio;
       
        if(!flagWin1) {
          score += 5;
        }
        flagWin1 = true;
        scoreGame.textContent = score;
        playAudioWin();
        count1 = 6;
        console.log(1);
        btnNextLevel.disabled = false;
        elseBirdImg.src = birdsData[1][i].image;
        nameBird.textContent = birdsData[1][i].name;
        speciesBird.textContent = birdsData[1][i].species;
        descriptionBird.textContent = birdsData[1][i].description;
        btnNextLevel.addEventListener('click', () => {
          birdGroupItem[1].classList.remove('group-birds-active');
          birdGroupItem[2].classList.add('group-birds-active');
          btnNextLevel.disabled = true;
          birdItem.forEach((x) => x.textContent = `${birdsData[2][birdItem.indexOf(x)].name}`);
          birdItem.forEach((x) => x.classList.remove('group-birds-active'));
          randomSong();
          birdName.textContent = '*********';
          sucsessAnswerImg.src = '../../assets/images/question-bird1.jpg';
          elseBirdImg.src = '';
          nameBird.textContent = 'Please, listen to the bird';
          speciesBird.textContent = 'Make your choice';
          descriptionBird.textContent = '';
          audioPlAdd.src = '';
        });
      }
      if (event.target.textContent !== birdsData[1][i].name || birdsData[1][i].audio !== audioPl.src) {
        playAudioLose();
        count1 = count1 + 1;
        if (count1 < 6) {
          score -= 1;
        }
        console.log(1);
        elseBirdImg.src = birdsData[1][i].image;
        nameBird.textContent = birdsData[1][i].name;
        speciesBird.textContent = birdsData[1][i].species;
        descriptionBird.textContent = birdsData[1][i].description;
        audioPlAdd.src = birdsData[1][i].audio;
      }
    }
  }

  for (let i = 0; i < 6; i++) {
    if (event.target.textContent === birdsData[2][i].name && birdGroupItem[2].classList.contains('group-birds-active')) {
      birdName.textContent = '*********';
      sucsessAnswerImg.src = '../../assets/images/question-bird1.jpg';
      audioPl.currentTime = 0;
      imgPlay.src = '../../assets/images/play-btn.png';
      birdGroupItem.forEach((x) => x.classList.remove('group-birds-active'));
      birdItem.forEach((y) => y.classList.remove('group-birds-active'));
      birdGroupItem[2].classList.add('group-birds-active');
      birdItem[i].textContent = birdsData[2][i].name;
      if (event.target.textContent === birdsData[2][i].name && birdsData[2][i].audio === audioPl.src) {
        event.target.classList.add('group-birds-active');
        birdName.textContent = birdsData[2][i].name;
        sucsessAnswerImg.src = birdsData[2][i].image;
        audioPlAdd.src = birdsData[2][i].audio;
        if(!flagWin2) {
          score += 5;
        }
        flagWin2 = true;
        scoreGame.textContent = score;
        playAudioWin();
        count2 = 6;
        console.log(1);
        btnNextLevel.disabled = false;
        elseBirdImg.src = birdsData[2][i].image;
        nameBird.textContent = birdsData[2][i].name;
        speciesBird.textContent = birdsData[2][i].species;
        descriptionBird.textContent = birdsData[2][i].description;
        btnNextLevel.addEventListener('click', () => {
          birdGroupItem[2].classList.remove('group-birds-active');
          birdGroupItem[3].classList.add('group-birds-active');
          btnNextLevel.disabled = true;
          birdItem.forEach((x) => x.textContent = `${birdsData[3][birdItem.indexOf(x)].name}`);
          birdItem.forEach((x) => x.classList.remove('group-birds-active'));
          randomSong();
          birdName.textContent = '*********';
          sucsessAnswerImg.src = '../../assets/images/question-bird1.jpg';
          elseBirdImg.src = '';
          nameBird.textContent = 'Please, listen to the bird';
          speciesBird.textContent = 'Make your choice';
          descriptionBird.textContent = '';
          audioPlAdd.src = '';
        });
      }
      if (event.target.textContent !== birdsData[2][i].name || birdsData[2][i].audio !== audioPl.src) {
        playAudioLose();
        count2 = count2 + 1;
        if (count2 < 6) {
          score -= 1;
        }
        console.log(1);
        elseBirdImg.src = birdsData[2][i].image;
        nameBird.textContent = birdsData[2][i].name;
        speciesBird.textContent = birdsData[2][i].species;
        descriptionBird.textContent = birdsData[2][i].description;
        audioPlAdd.src = birdsData[2][i].audio;
      }
    }
  }

  for (let i = 0; i < 6; i++) {
    if (event.target.textContent === birdsData[3][i].name && birdGroupItem[3].classList.contains('group-birds-active')) {
      birdName.textContent = '*********';
      sucsessAnswerImg.src = '../../assets/images/question-bird1.jpg';
      audioPl.currentTime = 0;
      imgPlay.src = '../../assets/images/play-btn.png';
      birdGroupItem.forEach((x) => x.classList.remove('group-birds-active'));
      birdItem.forEach((y) => y.classList.remove('group-birds-active'));
      birdGroupItem[3].classList.add('group-birds-active');
      birdItem[i].textContent = birdsData[3][i].name;
      if (event.target.textContent === birdsData[3][i].name && birdsData[3][i].audio === audioPl.src) {
        event.target.classList.add('group-birds-active');
        birdName.textContent = birdsData[3][i].name;
        sucsessAnswerImg.src = birdsData[3][i].image;
        audioPlAdd.src = birdsData[3][i].audio;
        if(!flagWin3) {
          score += 5;
        }
        flagWin3 = true;
        scoreGame.textContent = score;
        playAudioWin();
        count3 = 6;
        console.log(1);
        btnNextLevel.disabled = false;
        elseBirdImg.src = birdsData[3][i].image;
        nameBird.textContent = birdsData[3][i].name;
        speciesBird.textContent = birdsData[3][i].species;
        descriptionBird.textContent = birdsData[3][i].description;
        btnNextLevel.addEventListener('click', () => {
          birdGroupItem[3].classList.remove('group-birds-active');
          birdGroupItem[4].classList.add('group-birds-active');
          btnNextLevel.disabled = true;
          birdItem.forEach((x) => x.textContent = `${birdsData[4][birdItem.indexOf(x)].name}`);
          birdItem.forEach((x) => x.classList.remove('group-birds-active'));
          randomSong();
          birdName.textContent = '*********';
          sucsessAnswerImg.src = '../../assets/images/question-bird1.jpg';
          elseBirdImg.src = '';
          nameBird.textContent = 'Please, listen to the bird';
          speciesBird.textContent = 'Make your choice';
          descriptionBird.textContent = '';
          audioPlAdd.src = '';
        });
      }
      if (event.target.textContent !== birdsData[3][i].name || birdsData[3][i].audio !== audioPl.src) {
        playAudioLose();
        count3 = count3 + 1;
        if (count3 < 6) {
          score -= 1;
        }
        console.log(1);
        elseBirdImg.src = birdsData[3][i].image;
        nameBird.textContent = birdsData[3][i].name;
        speciesBird.textContent = birdsData[3][i].species;
        descriptionBird.textContent = birdsData[3][i].description;
        audioPlAdd.src = birdsData[3][i].audio;
      }
    }
  }
  for (let i = 0; i < 6; i++) {
    if (event.target.textContent === birdsData[4][i].name && birdGroupItem[4].classList.contains('group-birds-active')) {
      birdName.textContent = '*********';
      sucsessAnswerImg.src = '../../assets/images/question-bird1.jpg';
      audioPl.currentTime = 0;
      imgPlay.src = '../../assets/images/play-btn.png';
      birdGroupItem.forEach((x) => x.classList.remove('group-birds-active'));
      birdItem.forEach((y) => y.classList.remove('group-birds-active'));
      birdGroupItem[4].classList.add('group-birds-active');
      birdItem[i].textContent = birdsData[4][i].name;
      if (event.target.textContent === birdsData[4][i].name && birdsData[4][i].audio === audioPl.src) {
        event.target.classList.add('group-birds-active');
        birdName.textContent = birdsData[4][i].name;
        sucsessAnswerImg.src = birdsData[4][i].image;
        audioPlAdd.src = birdsData[4][i].audio;
        if(!flagWin4) {
          score += 5;
        }
        flagWin4 = true;
        scoreGame.textContent = score;
        playAudioWin();
        count4 = 6;
        console.log(1);
        btnNextLevel.disabled = false;
        elseBirdImg.src = birdsData[4][i].image;
        nameBird.textContent = birdsData[4][i].name;
        speciesBird.textContent = birdsData[4][i].species;
        descriptionBird.textContent = birdsData[4][i].description;
        btnNextLevel.addEventListener('click', () => {
          birdGroupItem[4].classList.remove('group-birds-active');
          birdGroupItem[5].classList.add('group-birds-active');
          btnNextLevel.disabled = true;
          birdItem.forEach((x) => x.textContent = `${birdsData[5][birdItem.indexOf(x)].name}`);
          birdItem.forEach((x) => x.classList.remove('group-birds-active'));
          randomSong();
          birdName.textContent = '*********';
          sucsessAnswerImg.src = '../../assets/images/question-bird1.jpg';
          elseBirdImg.src = '';
          nameBird.textContent = 'Please, listen to the bird';
          speciesBird.textContent = 'Make your choice';
          descriptionBird.textContent = '';
          audioPlAdd.src = '';
        });
      }
      if (event.target.textContent !== birdsData[4][i].name || birdsData[4][i].audio !== audioPl.src) {
        playAudioLose();
        count4 = count4 + 1;
        if (count4 < 6) {
          score -= 1;
        }
        console.log(1);
        elseBirdImg.src = birdsData[4][i].image;
        nameBird.textContent = birdsData[4][i].name;
        speciesBird.textContent = birdsData[4][i].species;
        descriptionBird.textContent = birdsData[4][i].description;
        audioPlAdd.src = birdsData[4][i].audio;
      }
    }
  }
  for (let i = 0; i < 6; i++) {
    if (event.target.textContent === birdsData[5][i].name && birdGroupItem[5].classList.contains('group-birds-active')) {
      birdName.textContent = '*********';
      sucsessAnswerImg.src = '../../assets/images/question-bird1.jpg';
      audioPl.currentTime = 0;
      imgPlay.src = '../../assets/images/play-btn.png';
      birdGroupItem.forEach((x) => x.classList.remove('group-birds-active'));
      birdItem.forEach((y) => y.classList.remove('group-birds-active'));
      birdGroupItem[5].classList.add('group-birds-active');
      birdItem[i].textContent = birdsData[5][i].name;
      if (event.target.textContent === birdsData[5][i].name && birdsData[5][i].audio === audioPl.src) {
        event.target.classList.add('group-birds-active');
        birdName.textContent = birdsData[5][i].name;
        sucsessAnswerImg.src = birdsData[5][i].image;
        audioPlAdd.src = birdsData[5][i].audio;
        flagWin = false;
        if(!flagWin5) {
          score += 5;
        }
        flagWin5 = true;
        scoreGame.textContent = score;
        playAudioWin();
        count5 = 6;
        console.log(1);
        btnNextLevel.disabled = false;
        elseBirdImg.src = birdsData[5][i].image;
        nameBird.textContent = birdsData[5][i].name;
        speciesBird.textContent = birdsData[5][i].species;
        descriptionBird.textContent = birdsData[5][i].description;
        const linkResultGame = document.createElement('a');
          reSultWrapper.appendChild(linkResultGame);
          linkResultGame.appendChild(btnNextLevel);
          linkResultGame.href = '../resultsPage/index.html';
          let finalScore = scoreGame.textContent;
          localStorage.setItem('finaly',finalScore);
        btnNextLevel.addEventListener('click', () => {
          birdGroupItem[5].classList.remove('group-birds-active');
          birdItem.forEach((x) => x.classList.remove('group-birds-active'));
          randomSong();
          birdName.textContent = '*********';
          sucsessAnswerImg.src = '../../assets/images/question-bird1.jpg';
        });
      }
      if (event.target.textContent !== birdsData[5][i].name || birdsData[5][i].audio !== audioPl.src) {
        playAudioLose();
        count5 = count5 + 1;
        if (count5 < 6) {
          score -= 1;
        }
        console.log(1);
        elseBirdImg.src = birdsData[5][i].image;
        nameBird.textContent = birdsData[5][i].name;
        speciesBird.textContent = birdsData[5][i].species;
        descriptionBird.textContent = birdsData[5][i].description;
      }
    }
  }
});

body.onload = randomSong();

audioPl.onloadeddata = () => {
  if (Math.round(audioPl.duration % 60) < 10) {
    wholeDuration.textContent = `${Math.floor(audioPl.duration / 60)}:0${Math.round(audioPl.duration % 60)}`;
  } else {
    wholeDuration.textContent = `${Math.floor(audioPl.duration / 60)}:${Math.round(audioPl.duration % 60)}`;
  }
};

/* audioPl.onloadeddata = () => {
    const duration = audioPl.duration;
    console.log(duration);
    const currentPoint = audioPl.currentTime;
    console.log(currentPoint);
    durationRange.value = currentPoint * 100 / duration;
    console.log(currentPoint * 100 / duration);
  }; */

btnPlay.addEventListener('click', () => {
  imgPlay.src = '../../assets/images/pause-btn.png';
  playAudio();
});

btnPlayAdd.addEventListener('click', () => {
  imgPlayAdd.src = '../../assets/images/pause-btn.png';
  playAudioAdd()
})

let isPlay = false;
function playAudio() {
  if (!isPlay) {
    audioPl.play();
    isPlay = true;
  } else if (isPlay) {
    audioPl.pause();
    isPlay = false;
    imgPlay.src = '../../assets/images/play-btn.png';
  }
}

let isPlayAdd = false;
function playAudioAdd() {
  if (!isPlayAdd) {
    audioPlAdd.play();
    isPlayAdd = true;
  } else if (isPlayAdd) {
    audioPlAdd.pause();
    isPlayAdd = false;
    imgPlayAdd.src = '../../assets/images/play-btn.png';
  }
}

audioPl.addEventListener('timeupdate', () => {
  currSongDur.innerHTML = currentDuration(audioPl.currentTime);
}, false);

function currentDuration(time) {
  let min = Math.floor(time % 60);
  min = 0;
  let sec = Math.ceil((time / 60 * 60) % 60);
  if (sec === 60) {
    sec = 0;
    min += 1;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

volumeInput.addEventListener('input', () => {
  audioPl.volume = volumeInput.value;
  if (volumeInput.value === '0') {
    volumeImg.src = '../../assets/images/volume-off.png';
  } else {
    volumeImg.src = '../../assets/images/volume-on.png';
  }
}, false);

audioPl.addEventListener('ended', () => {
  audioPl.currentTime = 0;
  imgPlay.src = '../../assets/images/play-btn.png';
}, false);

durationRange.addEventListener('input', () => {
  audioPl.duration = durationRange.value;
  console.log(durationRange.value);
});

function randomSong() {
  const arr = [0, 1, 2, 3, 4, 5];
  const shufleArr = arr.sort(() => Math.random() - 0.5);
  for (let i = 0; i < shufleArr.length; i++) {
    for (let j = 0; j < birdsData[i].length; j++) {
      if (birdGroupItem[i].classList.contains('group-birds-active')) {
        audioPl.src = birdsData[i][shufleArr[j]].audio;
      }
    }
  }
}

function playAudioWin() {
  voiceOFMove.currentTime = 0;
  audioPl.currentTime = 0;
  audioPl.pause();
  imgPlay.src = '../../assets/images/play-btn.png';
  voiceOFMove.play();
}

function playAudioLose() {
  voiceOFMoveLose.currentTime = 0;
  voiceOFMoveLose.play();
  //imgPlay.src = '../../assets/images/pause-btn.png';
}
