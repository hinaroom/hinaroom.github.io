window.CATCOUNTS={"tawagoto": 1641, "haru": 567, "himari": 388, "soccer": 202, "hinako": 184, "food": 175, "stone": 109, "suncatcher": 72, "travel": 64, "other": 41, "bujo": 33, "invest": 11};
window.CALHTML="<div class=\"cal-nav\"><a href=\"%REL%archive/2026-08/index.html\">«</a><a class=\"cal-m\" href=\"%REL%archive/2026-09/index.html\">2026年9月</a></div>\n<table class=\"cal\"><tr><th class=\"sun\">日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th class=\"sat\">土</th></tr><tr><td></td><td></td><td><a href=\"%REL%posts/3477.html\">1</a></td><td><a href=\"%REL%posts/3478.html\">2</a></td><td><a href=\"%REL%posts/3479.html\">3</a></td><td>4</td><td>5</td></tr><tr><td>6</td><td><a href=\"%REL%posts/3480.html\">7</a></td><td><a href=\"%REL%posts/3481.html\">8</a></td><td>9</td><td><a href=\"%REL%posts/3482.html\">10</a></td><td><a href=\"%REL%posts/3483.html\">11</a></td><td>12</td></tr><tr><td>13</td><td>14</td><td><a href=\"%REL%posts/3484.html\">15</a></td><td><a href=\"%REL%posts/3485.html\">16</a></td><td><a href=\"%REL%posts/3486.html\">17</a></td><td><a href=\"%REL%posts/3487.html\">18</a></td><td>19</td></tr><tr><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td></tr><tr><td>27</td><td>28</td><td>29</td><td>30</td><td></td><td></td><td></td></tr></table>";
(function(){
var c=window.CATCOUNTS||{};
var els=document.querySelectorAll('span.n[data-cat]');
for(var i=0;i<els.length;i++){var v=c[els[i].getAttribute('data-cat')];if(v!==undefined)els[i].textContent=v;}
var slots=document.querySelectorAll('.cal-slot');
for(var j=0;j<slots.length;j++){
slots[j].innerHTML=window.CALHTML.split('%REL%').join(slots[j].getAttribute('data-rel')||'');}
})();
