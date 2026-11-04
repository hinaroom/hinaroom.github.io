window.CATCOUNTS={"tawagoto": 1656, "haru": 567, "himari": 393, "soccer": 202, "hinako": 184, "food": 175, "stone": 109, "suncatcher": 72, "travel": 68, "other": 41, "bujo": 33, "invest": 11};
window.CALHTML="<div class=\"cal-nav\"><a href=\"%REL%archive/2026-10/index.html\">«</a><a class=\"cal-m\" href=\"%REL%archive/2026-11/index.html\">2026年11月</a></div>\n<table class=\"cal\"><tr><th class=\"sun\">日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th class=\"sat\">土</th></tr><tr><td>1</td><td><a href=\"%REL%posts/3510.html\">2</a></td><td>3</td><td><a href=\"%REL%posts/3511.html\">4</a></td><td>5</td><td>6</td><td>7</td></tr><tr><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr><tr><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td></tr><tr><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td></tr><tr><td>29</td><td>30</td><td></td><td></td><td></td><td></td><td></td></tr></table>";
(function(){
var c=window.CATCOUNTS||{};
var els=document.querySelectorAll('span.n[data-cat]');
for(var i=0;i<els.length;i++){var v=c[els[i].getAttribute('data-cat')];if(v!==undefined)els[i].textContent=v;}
var slots=document.querySelectorAll('.cal-slot');
for(var j=0;j<slots.length;j++){
slots[j].innerHTML=window.CALHTML.split('%REL%').join(slots[j].getAttribute('data-rel')||'');}
})();
