(function(c,f){var g=-1;!c.PKAudioList&&(c.PKAudioList=[]);c.PKAudioEditor=new function(){var a=this;a.el=null;a.id=++g;a._deps={};c.PKAudioList[a.id]=a;var d={};a.fireEvent=function(a,e,h){a=d[a];if(!a)return!1;for(var b=a.length;0<b--;)a[b]&&a[b](e,h)};a.listenFor=function(a,e){d[a]?d[a].unshift(e):d[a]=[e]};a.stopListeningFor=function(a,e){var b=d[a];if(!b)return!1;for(var c=b.length;0<c--;)if(b[c]&&b[c]===e){b[c]=null;break}};a.stopListeningForName=function(a){if(!d[a])return!1;d[a]=null};a.init=
function(b){if(b=f.getElementById(b))return a.el=b,a.ui=new a._deps.ui(a),a._deps.uifx(a),a.engine=new a._deps.engine(a),a.state=new a._deps.state(4,a),a.rec=new a._deps.rec(a),a;console.log("invalid element")};a.isMobile=/iphone|ipod|ipad|android/.test(navigator.userAgent.toLowerCase())};PKAudioList.push(c.PKAudioEditor)})(window,document);