(this.webpackJsonpcharagen=this.webpackJsonpcharagen||[]).push([[0],{13:function(a,e,r){},14:function(a,e,r){},15:function(a,e,r){"use strict";r.r(e);var n=r(0),i=r.n(n),t=r(2),l=r.n(t),o=(r(13),r(3)),s=r(4),c=r(6),h=r(5),u=r(7),g=(r(14),["Aarakocra","Aasimar / Deva","Alaghi","Armand","Asherati","Aurak","Aventi","Azer","Azurin","Baaz","Bariaur","Beastman","Bhuka","Bladeling","Blue (Goblin)","Bozak","Bugbear","Bullywug","Buomman","Catfolk","Centaur","Changeling","Chaos Gnome","Chitine","Crucian","Darfellan","Deep Imaskarri","Diopsid","Drow","Dire Wereboar (Lycanthrope)","Doppelganger","Draconic creature","Dracotaur","Dragonborn","Dragonkin","Dromite","Duergar / Gray Dwarf","Duskling","Dvati","Dwarf","Eladrin","Elan","Elf","Feral Gargun","Fey'ri","Firbolg","Flind","Fremlin","Frost Giant","Gargoyle","Genasi","Ghost","Githyanki","Githzerai","Gloaming","Gnoll","Gnome","Goblin","Goblinoid","Goliath","Grimlock","Hadozee","Hagspawn","Half-Celestial","Half-Dragon","Half-Elf","Half-Fiend","Half-Giant","Half-Ogre","Half-Orc","Halfling","Hamadryad","Hellbred","Hengeyokai","Hill Giant","Hobgoblin","Human","Illumian","Jaebrin","Janni (Genie)","Kalashtar","Kapak","Kender","Kenku","Killoren","Kir-Lanan","Kobold","Korobokuru","Kuo-toa","Lich","Lizardfolk / Lizardman","Loxo","Loxodon","Lupin","Maenad","Mephling","Illithid","Minotaur","Modron, Rogue","Mongrelfolk","Mul","Neanderthal","Neraphim","Nezumi","Ogre","Orc","Phrenic creature","Pixie","Pterran","Rakasta","Rakshasa","Raptoran","Revenant","Rilkan","Satyr","Saurial","Sea Elf","Sea Kin","Shadar-kai","Shade","Shadowswyft","Sharakim","Shardmind","Shifter","Simic Hybrid","Sivak","Skarn","Skulk","Slyth","Spellscale","Spiker","Spirit Folk","Stonechild","Svirfneblin / Deep Gnome","Swanmay","Synad","Tabaxi","Taer","Tanarukk","Thri-Kreen","Tibbit","Tiefling","Triton","Troglodyte","Troll","Uldra","Unbodied","Underfolk","Vampire","Vanara","Vedalken","Verdan","Voadkyn","Volodni","Vryloka","Warforged","Wemic","Wilden","Wildren","Xeph","Yuan-t"]),m=["Barbarian/Berserker","Knight/Cavalier","Swashbuckler","Paladin","Dark Knight/Blackguard/Antipaladin/Death Knight","Samurai/Yojimbo/Kensai/Weapon Master","Warlord:General/Tactician/Marshal","Inherent Gift Magician/Sorcerer","Theurgist Magician/Warlock","Summoner Magician/Conjurer","Vancian Magician","The Red Mage","Necromantic Magician","Illusionist Magician","Nature Magician","Elemental Magician","Druid Magician","Shamanic Magician","Thief","Assassin","Gambler","Ninja","Shadow","Pirate/Corsair/Privateer/Swashbuckler","Scout/The Operative","Priest/Healer/White Mage","Battle Priest","Witch Doctor","Templar/Inquisitor","Sniper Ranger","Bow and Blade Ranger","Beastmaster Ranger","Dual Wielding Ranger","Trapper Ranger","Magical Ranger","Hero","Magic Knight","Bard","Dancer","Monk","Engineer","Alchemist","Psychic","Mime/Mimic/Blue Mage","Gunslinger"],d=["Messy","Fancy","Dyed Hair","Unique eye or hair color","Extremely short or tall","Some discerning physical mark \u2014 birthmark, freckles, mole, or scar","Wears unusual glasses","Large feet \u2014 may mean they\u2019re clumsy","Bites their nails/lips or chews on their hair","Constantly fidgeting and can\u2019t sit still","Acne, eczema, or other skin problems","Many tattoos or piercings","Often sick or has allergies (constantly sniffling/blowing their nose)","Talks very loudly or quietly","Says everything like it\u2019s a question","Gets sweaty easily (especially when nervous)","Unusually hairy arms or legs","Has a stutter or other speech impediment","Often tucks their hair behind their ears","Smokes and has a raspy voice","Breathes heavily or snores","Is extremely muscular","Walks very slowly or quickly","Left-handed or ambidextrous","Constantly scratching themselves","Has a twitch","Always wears a distinct item of clothing or accessory \u2014 a favorite pair of socks, a lucky jersey, or even a particular shade of lipstick"],k=function(a){function e(){var a,r;Object(o.a)(this,e);for(var n=arguments.length,i=new Array(n),t=0;t<n;t++)i[t]=arguments[t];return(r=Object(c.a)(this,(a=Object(h.a)(e)).call.apply(a,[this].concat(i)))).state={race:"",rank:"",trait:""},r.doSomething=function(){var a=g[Math.floor(g.length*Math.random())],e=m[Math.floor(m.length*Math.random())],n=d[Math.floor(d.length*Math.random())];r.setState({race:a,rank:e,trait:n})},r}return Object(u.a)(e,a),Object(s.a)(e,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"charagen"),i.a.createElement("div",{className:"App"},i.a.createElement("button",{onClick:this.doSomething},"Create Character"),i.a.createElement("p",null," ",i.a.createElement("b",null," Race: ")," ",this.state.race," "),i.a.createElement("p",null," ",i.a.createElement("b",null," Class: ")," ",this.state.rank," "),i.a.createElement("p",null," ",i.a.createElement("b",null," Trait: ")," ",this.state.trait," ")))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()}))},8:function(a,e,r){a.exports=r(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.37df9b90.chunk.js.map