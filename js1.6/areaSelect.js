// JavaScript Document

//country methods
function Country(id,title,phone,hasProvince) {
	this.id = id;
	this.title=title;
	this.phone=phone;
	this.hasProvince=hasProvince;
	this.boardlist=new Array();
	this.addBoard=addBoard;
	this.getOptions = getOptions;
}

function addBoard(board) {
	this.boardlist = this.boardlist.concat(board);
}

function getOptions() {
	var tmp = new Array();
	for(var i=0; i < this.boardlist.length;i++) {
		var b = this.boardlist[i];
		tmp[i]= b.getOption();
	}
	return tmp;
}

//board methods
function Board(country,provinceId,province) {
	this.country=country;
	this.province=province;
	this.provinceId = provinceId ? provinceId : province;
	this.getOption=getOption;
}

function getOption() {
	if(this.country == "CN")
	return new Option(this.province,this.provinceId);
}

function provincesList(countryName,provinceId,provinceName){
	this.countryName = countryName;
	this.provinceId = provinceId ? provinceId : provinceName;
	this.provinceName = provinceName;
	this.provincesArr = new Array();
	this.addProvinces = addProvinces;
	this.getProvinces = getProvinces;
}

function addProvinces(province){
	this.provincesArr = this.provincesArr.concat(province);
}

function getProvinces(){
	var tmp = new Array();
	for(var i = 0;i < this.provincesArr.length;i++){
		var b = this.provincesArr[i];
		tmp[i] = b;
	}
	return tmp;
}
function provinceCN(provinceName,capitalCityId,capitalCityName) {
	this.provinceName = provinceName;
	this.capitalCityId = capitalCityId ? capitalCityId : capitalCityName;
	this.capitalCityName = capitalCityName;
	this.capitalCityArr = new Array();
	this.addCity = addCity;
	this.getCapitalCitys = getCapitalCitys;
}
function addCity(cityId,cityName) {
	if (!cityId) cityId = cityName;
	this.capitalCityArr = this.capitalCityArr.concat(new Option(cityName,cityId));
}
function getCapitalCitys() {
	var tmp = new Array();
	for(var i=0; i < this.capitalCityArr.length;i++) {
		var b = this.capitalCityArr[i];
		tmp[i]= b;
	}
	return tmp;
}

function initProvince(provinceDomId){
	var provincecnSelected = $(provinceDomId).selectedIndex;
	var boardscn = CountryArrCN[0].getOptions();
	for (var i=0;i< boardscn.length;i++) {
		$(provinceDomId).options[i+1] = boardscn[i];
		if( provincecnSelected > 0 && (provincecnSelected == i+1 ) ) {
			$(provinceDomId).options[i+1].selected=true;
		}
	}

}

function changeProvinceList(provinceList, capitalCNDomId, capitalCityDomId) {
	var index = provinceList.selectedIndex;
	var capitalCN = $(capitalCNDomId);
	var cityCN = $(capitalCityDomId);
	var len2 = capitalCN.options.length;

	for(var i = len2-1;i>0;i--){
		capitalCN.options[i] = null;
	}
	len2 = cityCN.options.length;
	for (var i = len2-1;i>0;i--){
		cityCN.options[i] = null;
	}
	if(index > 0) {
		var province = provinceList.options[index].value;
		SelectProvinceId = province;
		var len = provincesListArr.length;
		var tmpProvincesList;
		for(var i=0;i < len;i++){
			tmpProvincesList = provincesListArr[i];
			if(SelectProvinceId == tmpProvincesList.provinceId ) {
				//设置地级城市
				var len1 = capitalCN.options.length;
				for(var i = len1-1;i>0;i--){
					capitalCN.options[i] = null;
				}
				var capitals = tmpProvincesList.getProvinces();
				for(var i=0;i<capitals.length;i++){
					capitalCN.options[i+1] = new Option(capitals[i].capitalCityName,capitals[i].capitalCityId);
				}
				break;
			}
		}
		capitalCN.options[1].selected=true;
		changeCapitalCity(capitalCN, capitalCityDomId,provinceList.id);
	}
}

function changeCapitalCity(list, capitalCityDomId, provinceDomId) {
	var cityCN = $(capitalCityDomId);
	
	if (list.selectedIndex<=0) {
		$(capitalCityDomId).options[0].selected=true;
		var len = $(capitalCityDomId).options.length;
		for (var i=len-1;i>0;i--){
			$(capitalCityDomId).options[i]=null;
		}
	}
	else {
		var tmpProvincesList;
		var len = provincesListArr.length;
		var capital = list.options[list.selectedIndex].value;
		var SelectProvinceId = $(provinceDomId).value;//xoyo

		for(var i=0;i<len;i++){
			tmpProvincesList = provincesListArr[i];
			if(SelectProvinceId == tmpProvincesList.provinceId ) {
				//设置地级城市
				var capitals = tmpProvincesList.getProvinces();
				for(var i=0;i<capitals.length;i++){
					var c = capitals[i];
					if(c.capitalCityId == capital){
						var len1 = $(capitalCityDomId).options.length;
						for (var i=len1-1;i>0;i--){
							$(capitalCityDomId).options[i]=null;
						}
						var citys = c.getCapitalCitys();
						for(var i=0;i<citys.length;i++){
							$(capitalCityDomId).options[i+1] = citys[i];
						}
						break;
					}
				//capitalCN.options[i+1] = new Option(capitals[i].Name,capitals[i].Id);
				}
				break;
			}
		}
		cityCN.options[1].selected=true;
	}
}

function updateAreaList(domProvince, domCapital, domCity, province, captital, city){
	var provinceCN = $(domProvince);
	var capitalCN = $(domCapital);
	var cityCN = $(domCity);

	var len = provinceCN.options.length;
	for (var i=0;i<len;i++) {
		if(provinceCN.options[i].value == province || provinceCN.options[i].text == province) {
			provinceCN.options[i].selected=true;
		}
	}

	changeProvinceList(provinceCN, domCapital, domCity);

	len = capitalCN.options.length;

	for(var i = 0;i < len; i++) {
		if(capitalCN.options[i].value == captital){
			capitalCN.options[i].selected = true;
			changeCapitalCity(capitalCN,domCity,domProvince);
			len = cityCN.options.length;
			for(var i = 0;i < len; i++){
				if(cityCN.options[i].value == city) {
					cityCN.options[i].selected = true;
				}
			}
		}
	}
}

var CountryArrCN = new Array();
var cur;

cur = new Country("CN","中国", "86", "1");
CountryArrCN = CountryArrCN.concat(cur);


cur.addBoard(new Board("CN","","陕西"))
cur.addBoard(new Board("CN","","四川"))
cur.addBoard(new Board("CN","","天津"))
cur.addBoard(new Board("CN","","西藏"))
cur.addBoard(new Board("CN","","新疆"))
cur.addBoard(new Board("CN","","浙江"))
cur.addBoard(new Board("CN","","云南"))
cur.addBoard(new Board("CN","","湖北"))
cur.addBoard(new Board("CN","","江西"))
cur.addBoard(new Board("CN","","重庆"))
cur.addBoard(new Board("CN","","宁夏"))
cur.addBoard(new Board("CN","","青海"))
cur.addBoard(new Board("CN","","上海"))
cur.addBoard(new Board("CN","","广东"))
cur.addBoard(new Board("CN","","山西"))
cur.addBoard(new Board("CN","","山东"))
cur.addBoard(new Board("CN","","安徽"))
cur.addBoard(new Board("CN","","北京"))
cur.addBoard(new Board("CN","","福建"))
cur.addBoard(new Board("CN","","甘肃"))
cur.addBoard(new Board("CN","","广西"))
cur.addBoard(new Board("CN","","贵州"))
cur.addBoard(new Board("CN","","海南"))
cur.addBoard(new Board("CN","","河北"))
cur.addBoard(new Board("CN","","河南"))
cur.addBoard(new Board("CN","","黑龙江"))
cur.addBoard(new Board("CN","","湖南"))
cur.addBoard(new Board("CN","","吉林"))
cur.addBoard(new Board("CN","","江苏"))
cur.addBoard(new Board("CN","","辽宁"))
cur.addBoard(new Board("CN","","内蒙古"))
cur = new Country("TW","中国台湾", "886", "2");
CountryArrCN = CountryArrCN.concat(cur);
cur = new Country("HK","中国香港", "852", "2");
CountryArrCN = CountryArrCN.concat(cur);
	
var provincesListArr = new  Array();
var c;

/*
if($('capitalCN')!=null && typeof($('capitalCN'))=='object'){
    var lenCapitalCity = $('capitalCN').options.length;
    for (var i=lenCapitalCity - 1;i>0;i--){
        $('capitalCN').options[i] = null;
    }
}
*/
var p1 = new provincesList("CN","","陕西");
c = new provinceCN("陕西","","西安")
c.addCity("","西安市")
c.addCity("","高陵县")
c.addCity("","蓝田县")
c.addCity("","户县")
c.addCity("","周至县")
c.addCity("","西安市灞桥区")
c.addCity("","西安市长安区")
c.addCity("","西安市莲湖区")
c.addCity("","西安市临潼区")
c.addCity("","西安市未央区")
c.addCity("","西安市新城区")
c.addCity("","西安市阎良区")
c.addCity("","西安市雁塔区")
c.addCity("","西安市碑林区")
p1.addProvinces(c);
c = new provinceCN("陕西","","铜川")
c.addCity("","铜川市")
c.addCity("","宜君县")
c.addCity("","铜川市王益区")
c.addCity("","铜川市耀州区")
c.addCity("","铜川市印台区")
p1.addProvinces(c);
c = new provinceCN("陕西","","宝鸡")
c.addCity("","宝鸡市")
c.addCity("","岐山县")
c.addCity("","凤翔县")
c.addCity("","太白县")
c.addCity("","麟游县")
c.addCity("","扶风县")
c.addCity("","千阳县")
c.addCity("","眉县")
c.addCity("","凤县")
c.addCity("","陇县")
c.addCity("","宝鸡市陈仓区")
c.addCity("","宝鸡市渭滨区")
c.addCity("","宝鸡市金台区")
p1.addProvinces(c);
c = new provinceCN("陕西","","咸阳")
c.addCity("","咸阳市")
c.addCity("","兴平市")
c.addCity("","礼泉县")
c.addCity("","泾阳县")
c.addCity("","三原县")
c.addCity("彬县","彬县")
c.addCity("","旬邑县")
c.addCity("","长武县")
c.addCity("","乾县")
c.addCity("","武功县")
c.addCity("","淳化县")
c.addCity("","永寿县")
c.addCity("","咸阳市秦都区")
c.addCity("","咸阳市渭城区")
c.addCity("","咸阳市杨凌区")
p1.addProvinces(c);
c = new provinceCN("陕西","","渭南")
c.addCity("","渭南市")
c.addCity("","韩城市")
c.addCity("","华阴市")
c.addCity("","潼关县")
c.addCity("","白水县")
c.addCity("","澄城县")
c.addCity("","华县")
c.addCity("","合阳县")
c.addCity("","富平县")
c.addCity("","大荔县")
c.addCity("","蒲城县")
c.addCity("","渭南市临渭区")
p1.addProvinces(c);
c = new provinceCN("陕西","","延安")
c.addCity("","延安市")
c.addCity("","安塞县")
c.addCity("","洛川县")
c.addCity("","子长县")
c.addCity("","黄陵县")
c.addCity("","延川县")
c.addCity("","富县")
c.addCity("","延长县")
c.addCity("","甘泉县")
c.addCity("","宜川县")
c.addCity("","志丹县")
c.addCity("","黄龙县")
c.addCity("","吴起县")
c.addCity("","延安市宝塔区")
p1.addProvinces(c);
c = new provinceCN("陕西","","汉中")
c.addCity("","汉中市")
c.addCity("","留坝县")
c.addCity("","镇巴县")
c.addCity("","城固县")
c.addCity("","南郑县")
c.addCity("","洋县")
c.addCity("","宁强县")
c.addCity("","佛坪县")
c.addCity("","勉县")
c.addCity("","西乡县")
c.addCity("","略阳县")
c.addCity("","汉中市汉台区")
p1.addProvinces(c);
c = new provinceCN("陕西","","榆林")
c.addCity("","榆林市")
c.addCity("","清涧县")
c.addCity("","绥德县")
c.addCity("","神木县")
c.addCity("","佳县")
c.addCity("","子洲县")
c.addCity("","靖边县")
c.addCity("","横山县")
c.addCity("","米脂县")
c.addCity("","吴堡县")
c.addCity("","定边县")
c.addCity("","府谷县")
c.addCity("","榆林市榆阳区")
p1.addProvinces(c);
c = new provinceCN("陕西","","安康")
c.addCity("","安康市")
c.addCity("","紫阳县")
c.addCity("","岚皋县")
c.addCity("","旬阳县")
c.addCity("","平利县")
c.addCity("","石泉县")
c.addCity("","宁陕县")
c.addCity("","白河县")
c.addCity("","汉阴县")
c.addCity("","镇坪县")
c.addCity("","安康市汉滨区")
p1.addProvinces(c);
c = new provinceCN("陕西","","商洛")
c.addCity("","商洛市")
c.addCity("","镇安县")
c.addCity("","山阳县")
c.addCity("","洛南县")
c.addCity("","商南县")
c.addCity("","丹凤县")
c.addCity("","柞水县")
c.addCity("","商洛市商州区")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","四川");
c = new provinceCN("四川","","成都")
c.addCity("","成都市")
c.addCity("","都江堰市")
c.addCity("","彭州市")
c.addCity("","邛崃市")
c.addCity("","崇州市")
c.addCity("","金堂县")
c.addCity("","郫县")
c.addCity("","新津县")
c.addCity("","双流县")
c.addCity("","蒲江县")
c.addCity("","大邑县")
c.addCity("","成都市成华区")
c.addCity("","成都市金牛区")
c.addCity("","成都市锦江区")
c.addCity("","成都市龙泉驿区")
c.addCity("","成都市青白江区")
c.addCity("","成都市青羊区")
c.addCity("","成都市温江区")
c.addCity("","成都市武侯区")
c.addCity("","成都市新都区")
p1.addProvinces(c);
c = new provinceCN("四川","","自贡")
c.addCity("","自贡市")
c.addCity("","荣县")
c.addCity("","富顺县")
c.addCity("","自贡市大安区")
c.addCity("","自贡市贡井区")
c.addCity("","自贡市沿滩区")
c.addCity("","自贡市自流井区")
p1.addProvinces(c);
c = new provinceCN("四川","","攀枝花")
c.addCity("","攀枝花市")
c.addCity("","米易县")
c.addCity("","盐边县")
c.addCity("","攀枝花市东区")
c.addCity("","攀枝花市仁和区")
c.addCity("","攀枝花市西区")
p1.addProvinces(c);
c = new provinceCN("四川","","泸州")
c.addCity("","泸州市")
c.addCity("","泸县")
c.addCity("","合江县")
c.addCity("","叙永县")
c.addCity("","古蔺县")
c.addCity("","泸州市江阳区")
c.addCity("","泸州市龙马潭区")
c.addCity("","泸州市纳溪区")
p1.addProvinces(c);
c = new provinceCN("四川","","德阳")
c.addCity("","德阳市")
c.addCity("","广汉市")
c.addCity("","什邡市")
c.addCity("","绵竹市")
c.addCity("","罗江县")
c.addCity("","中江县")
c.addCity("","德阳市旌阳区")
p1.addProvinces(c);
c = new provinceCN("四川","","绵阳")
c.addCity("","绵阳市")
c.addCity("","江油市")
c.addCity("","盐亭县")
c.addCity("","三台县")
c.addCity("","平武县")
c.addCity("","北川羌族自治县")
c.addCity("","安县")
c.addCity("","梓潼县")
c.addCity("","绵阳市涪城区")
c.addCity("","绵阳市游仙区")
p1.addProvinces(c);
c = new provinceCN("四川","","广元")
c.addCity("","广元市")
c.addCity("","青川县")
c.addCity("","旺苍县")
c.addCity("","剑阁县")
c.addCity("","苍溪县")
c.addCity("","广元市朝天区")
c.addCity("","广元市市中区")
c.addCity("","广元市元坝区")
p1.addProvinces(c);
c = new provinceCN("四川","","遂宁")
c.addCity("","遂宁市")
c.addCity("","射洪县")
c.addCity("","大英县")
c.addCity("","蓬溪县")
c.addCity("","遂宁市安居区")
c.addCity("","遂宁市船山区")
p1.addProvinces(c);
c = new provinceCN("四川","","内江")
c.addCity("","内江市")
c.addCity("","资中县")
c.addCity("","隆昌县")
c.addCity("","威远县")
c.addCity("","内江市东兴区")
c.addCity("","内江市市中区")
p1.addProvinces(c);
c = new provinceCN("四川","","乐山")
c.addCity("","乐山市")
c.addCity("","峨眉山市")
c.addCity("","夹江县")
c.addCity("","井研县")
c.addCity("","犍为县")
c.addCity("","马边彝族自治县")
c.addCity("","峨边彝族自治县")
c.addCity("","沐川县")
c.addCity("","乐山市金口河区")
c.addCity("","乐山市沙湾区")
c.addCity("","乐山市市中区")
c.addCity("","乐山市五通桥区")
p1.addProvinces(c);
c = new provinceCN("四川","","南充")
c.addCity("","南充市")
c.addCity("","阆中市")
c.addCity("","营山县")
c.addCity("","蓬安县")
c.addCity("","仪陇县")
c.addCity("","南部县")
c.addCity("","西充县")
c.addCity("","南充市高坪区")
c.addCity("","南充市嘉陵区")
c.addCity("","南充市顺庆区")
p1.addProvinces(c);
c = new provinceCN("四川","","宜宾")
c.addCity("","宜宾市")
c.addCity("","宜宾县")
c.addCity("","兴文县")
c.addCity("","南溪县")
c.addCity("","珙县")
c.addCity("","长宁县")
c.addCity("","高县")
c.addCity("","江安县")
c.addCity("","筠连县")
c.addCity("","屏山县")
c.addCity("","宜宾市翠屏区")
p1.addProvinces(c);
c = new provinceCN("四川","","广安")
c.addCity("","广安市")
c.addCity("","华蓥市")
c.addCity("","岳池县")
c.addCity("","邻水县")
c.addCity("","武胜县")
c.addCity("","广安市广安区")
p1.addProvinces(c);
c = new provinceCN("四川","","达州")
c.addCity("","达州市")
c.addCity("","万源市")
c.addCity("","达县")
c.addCity("","渠县")
c.addCity("","宣汉县")
c.addCity("","开江县")
c.addCity("","大竹县")
c.addCity("","达州市通川区")
p1.addProvinces(c);
c = new provinceCN("四川","","巴中")
c.addCity("","巴中市")
c.addCity("","南江县")
c.addCity("","平昌县")
c.addCity("","通江县")
c.addCity("","巴中市巴州区")
p1.addProvinces(c);
c = new provinceCN("四川","","眉山")
c.addCity("","眉山市")
c.addCity("","仁寿县")
c.addCity("","洪雅县")
c.addCity("","丹棱县")
c.addCity("","青神县")
c.addCity("","彭山县")
c.addCity("","眉山市东坡区")
p1.addProvinces(c);
c = new provinceCN("四川","","资阳")
c.addCity("","资阳市")
c.addCity("","简阳市")
c.addCity("","安岳县")
c.addCity("","乐至县")
c.addCity("","资阳市雁江区")
p1.addProvinces(c);
c = new provinceCN("四川","","阿坝藏族羌族自治州")
c.addCity("","马尔康县")
c.addCity("","九寨沟县")
c.addCity("","红原县")
c.addCity("","汶川县")
c.addCity("","理县")
c.addCity("","若尔盖县")
c.addCity("","小金县")
c.addCity("","黑水县")
c.addCity("","金川县")
c.addCity("","松潘县")
c.addCity("","壤塘县")
c.addCity("","茂县")
c.addCity("","阿坝县")
p1.addProvinces(c);
c = new provinceCN("四川","","甘孜藏族自治州")
c.addCity("","康定县")
c.addCity("","丹巴县")
c.addCity("","炉霍县")
c.addCity("","九龙县")
c.addCity("","甘孜县")
c.addCity("","雅江县")
c.addCity("","新龙县")
c.addCity("","道孚县")
c.addCity("","白玉县")
c.addCity("","理塘县")
c.addCity("","德格县")
c.addCity("","乡城县")
c.addCity("","石渠县")
c.addCity("","稻城县")
c.addCity("","色达县")
c.addCity("","巴塘县")
c.addCity("","泸定县")
c.addCity("","得荣县")
p1.addProvinces(c);
c = new provinceCN("四川","","凉山彝族自治州")
c.addCity("","西昌市")
c.addCity("","美姑县")
c.addCity("","昭觉县")
c.addCity("","金阳县")
c.addCity("","甘洛县")
c.addCity("","布拖县")
c.addCity("","雷波县")
c.addCity("","普格县")
c.addCity("","宁南县")
c.addCity("","喜德县")
c.addCity("","会东县")
c.addCity("","越西县")
c.addCity("","会理县")
c.addCity("","盐源县")
c.addCity("","德昌县")
c.addCity("","冕宁县")
c.addCity("","木里藏族自治县")
p1.addProvinces(c);
c = new provinceCN("四川","","雅安")
c.addCity("","雅安市")
c.addCity("","芦山县")
c.addCity("","石棉县")
c.addCity("","名山县")
c.addCity("","天全县")
c.addCity("","荥经县")
c.addCity("","宝兴县")
c.addCity("","汉源县")
c.addCity("","雅安市雨城区")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","天津");
c = new provinceCN("天津","","天津")
c.addCity("","天津市")
c.addCity("","静海县")
c.addCity("","宁河县")
c.addCity("","蓟县")
c.addCity("","天津市宝坻区")
c.addCity("","天津市北辰区")
c.addCity("","天津市大港区")
c.addCity("","天津市东丽区")
c.addCity("","天津市汉沽区")
c.addCity("","天津市和平区")
c.addCity("","天津市河北区")
c.addCity("","天津市河东区")
c.addCity("","天津市河西区")
c.addCity("","天津市红桥区")
c.addCity("","天津市津南区")
c.addCity("","天津市南开区")
c.addCity("","天津市塘沽区")
c.addCity("","天津市武清区")
c.addCity("","天津市西青区")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","西藏");
c = new provinceCN("西藏","","拉萨")
c.addCity("","拉萨市")
c.addCity("","林周县")
c.addCity("","达孜县")
c.addCity("","尼木县")
c.addCity("","当雄县")
c.addCity("","曲水县")
c.addCity("","墨竹工卡县")
c.addCity("","堆龙德庆县")
c.addCity("","拉萨市城关区")
p1.addProvinces(c);
c = new provinceCN("西藏","","那曲")
c.addCity("","那曲县")
c.addCity("","嘉黎县")
c.addCity("","申扎县")
c.addCity("","巴青县")
c.addCity("","聂荣县")
c.addCity("","尼玛县")
c.addCity("","比如县")
c.addCity("","索县")
c.addCity("","班戈县")
c.addCity("","安多县")
p1.addProvinces(c);
c = new provinceCN("西藏","","昌都")
c.addCity("","昌都县")
c.addCity("","芒康县")
c.addCity("","贡觉县")
c.addCity("","八宿县")
c.addCity("","左贡县")
c.addCity("","边坝县")
c.addCity("","洛隆县")
c.addCity("","江达县")
c.addCity("","类乌齐县")
c.addCity("","丁青县")
c.addCity("","察雅县")
p1.addProvinces(c);
c = new provinceCN("西藏","","山南")
c.addCity("","乃东县")
c.addCity("","琼结县")
c.addCity("","措美县")
c.addCity("","加查县")
c.addCity("","贡嘎县")
c.addCity("","洛扎县")
c.addCity("","曲松县")
c.addCity("","桑日县")
c.addCity("","扎囊县")
c.addCity("","错那县")
c.addCity("","浪卡子县")
c.addCity("","隆子县")
p1.addProvinces(c);
c = new provinceCN("西藏","","日喀则")
c.addCity("","日喀则市")
c.addCity("","定结县")
c.addCity("","萨迦县")
c.addCity("","江孜县")
c.addCity("","拉孜县")
c.addCity("","定日县")
c.addCity("","康马县")
c.addCity("","聂拉木县")
c.addCity("","吉隆县")
c.addCity("","谢通门县")
c.addCity("","昂仁县")
c.addCity("","岗巴县")
c.addCity("","仲巴县")
c.addCity("","萨嘎县")
c.addCity("","仁布县")
c.addCity("","白朗县")
c.addCity("","南木林县")
c.addCity("","亚东县")
p1.addProvinces(c);
c = new provinceCN("西藏","","阿里")
c.addCity("","噶尔县")
c.addCity("","措勤县")
c.addCity("","普兰县")
c.addCity("","革吉县")
c.addCity("","日土县")
c.addCity("","札达县")
c.addCity("","改则县")
p1.addProvinces(c);
c = new provinceCN("西藏","","林芝")
c.addCity("","林芝县")
c.addCity("","墨脱县")
c.addCity("","朗县")
c.addCity("","米林县")
c.addCity("","察隅县")
c.addCity("","波密县")
c.addCity("","工布江达县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","新疆");
c = new provinceCN("新疆","","乌鲁木齐")
c.addCity("","乌鲁木齐市")
c.addCity("","乌鲁木齐县")
c.addCity("","乌鲁木齐市达坂城区")
c.addCity("","乌鲁木齐市东山区")
c.addCity("","乌鲁木齐市沙依巴克区")
c.addCity("","乌鲁木齐市水磨沟区")
c.addCity("","乌鲁木齐市天山区")
c.addCity("","乌鲁木齐市头屯河区")
c.addCity("","乌鲁木齐市新市区")
p1.addProvinces(c);
c = new provinceCN("新疆","","克拉玛依")
c.addCity("","克拉玛依市")
c.addCity("","克拉玛依市白碱滩区")
c.addCity("","克拉玛依市独山子区")
c.addCity("","克拉玛依市克拉玛依区")
c.addCity("","克拉玛依市乌尔禾区")
p1.addProvinces(c);
c = new provinceCN("新疆","","石河子")
c.addCity("","石河子市")
p1.addProvinces(c);
c = new provinceCN("新疆","","阿拉尔")
c.addCity("","阿拉尔市")
p1.addProvinces(c);
c = new provinceCN("新疆","","图木舒克")
c.addCity("","图木舒克市")
p1.addProvinces(c);
c = new provinceCN("新疆","","五家渠")
c.addCity("","五家渠市")
p1.addProvinces(c);
c = new provinceCN("新疆","","吐鲁番")
c.addCity("","吐鲁番市")
c.addCity("","托克逊县")
c.addCity("","鄯善县")
p1.addProvinces(c);
c = new provinceCN("新疆","","哈密")
c.addCity("","哈密市")
c.addCity("","伊吾县")
c.addCity("","巴里坤哈萨克自治县")
p1.addProvinces(c);
c = new provinceCN("新疆","","和田")
c.addCity("","和田市")
c.addCity("","和田县")
c.addCity("","洛浦县")
c.addCity("","民丰县")
c.addCity("","皮山县")
c.addCity("","策勒县")
c.addCity("","墨玉县")
c.addCity("","于田县")
p1.addProvinces(c);
c = new provinceCN("新疆","","阿克苏")
c.addCity("","阿克苏市")
c.addCity("","温宿县")
c.addCity("","沙雅县")
c.addCity("","拜城县")
c.addCity("","阿瓦提县")
c.addCity("","库车县")
c.addCity("","柯坪县")
c.addCity("","新和县")
c.addCity("","乌什县")
p1.addProvinces(c);
c = new provinceCN("新疆","","克孜勒苏柯尔克孜自治州")
c.addCity("","阿图什市")
c.addCity("","阿合奇县")
c.addCity("","乌恰县")
c.addCity("","阿克陶县")
p1.addProvinces(c);
c = new provinceCN("新疆","","巴音郭楞蒙古自治州")
c.addCity("","库尔勒市")
c.addCity("","和静县")
c.addCity("","尉犁县")
c.addCity("","和硕县")
c.addCity("","且末县")
c.addCity("","博湖县")
c.addCity("","轮台县")
c.addCity("","若羌县")
c.addCity("","焉耆回族自治县")
p1.addProvinces(c);
c = new provinceCN("新疆","","昌吉回族自治州")
c.addCity("","昌吉市")
c.addCity("","阜康市")
c.addCity("","米泉市")
c.addCity("","奇台县")
c.addCity("","玛纳斯县")
c.addCity("","吉木萨尔县")
c.addCity("","呼图壁县")
c.addCity("","木垒哈萨克自治县")
p1.addProvinces(c);
c = new provinceCN("新疆","","博尔塔拉蒙古自治州")
c.addCity("","博乐市")
c.addCity("","精河县")
c.addCity("","温泉县")
p1.addProvinces(c);
c = new provinceCN("新疆","","伊犁哈萨克自治州")
c.addCity("","奎屯市")
c.addCity("","伊宁县")
c.addCity("","特克斯县")
c.addCity("","尼勒克县")
c.addCity("","昭苏县")
c.addCity("","新源县")
c.addCity("","霍城县")
c.addCity("","巩留县")
c.addCity("","察布查尔锡伯自治县")
c.addCity("","伊宁市")
p1.addProvinces(c);
c = new provinceCN("新疆","","喀什")
c.addCity("","喀什市")
c.addCity("","巴楚县")
c.addCity("","泽普县")
c.addCity("","伽师县")
c.addCity("","叶城县")
c.addCity("","岳普湖县")
c.addCity("","疏勒县")
c.addCity("","麦盖提县")
c.addCity("","英吉沙县")
c.addCity("","莎车县")
c.addCity("","疏附县")
c.addCity("","塔什库尔干塔吉克自治县")
p1.addProvinces(c);
c = new provinceCN("新疆","","阿勒泰地区")
c.addCity("","阿勒泰市")
c.addCity("","青河县")
c.addCity("","吉木乃县")
c.addCity("","富蕴县")
c.addCity("","布尔津县")
c.addCity("","福海县")
c.addCity("","哈巴河县")
p1.addProvinces(c);
c = new provinceCN("新疆","","塔城地区")
c.addCity("","塔城市")
c.addCity("","乌苏市")
c.addCity("","额敏县")
c.addCity("","沙湾县")
c.addCity("","托里县")
c.addCity("","和布克赛尔蒙古自治县")
c.addCity("","裕民县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","浙江");
c = new provinceCN("浙江","","宁波")
c.addCity("","宁波市")
c.addCity("","余姚市")
c.addCity("","慈溪市")
c.addCity("","奉化市")
c.addCity("","宁海县")
c.addCity("","象山县")
c.addCity("","宁波市北仑区")
c.addCity("","宁波市海曙区")
c.addCity("","宁波市江北区")
c.addCity("","宁波市江东区")
c.addCity("","宁波市鄞州区")
c.addCity("","宁波市镇海区")
p1.addProvinces(c);
c = new provinceCN("浙江","","温州")
c.addCity("","温州市")
c.addCity("","瑞安市")
c.addCity("","乐清市")
c.addCity("","永嘉县")
c.addCity("","洞头县")
c.addCity("","平阳县")
c.addCity("","苍南县")
c.addCity("","文成县")
c.addCity("","泰顺县")
c.addCity("","温州市龙湾区")
c.addCity("","温州市鹿城区")
c.addCity("","温州市瓯海区")
p1.addProvinces(c);
c = new provinceCN("浙江","","嘉兴")
c.addCity("","嘉兴市")
c.addCity("","海宁市")
c.addCity("","平湖市")
c.addCity("","桐乡市")
c.addCity("","嘉善县")
c.addCity("","海盐县")
c.addCity("","嘉兴市秀城区")
c.addCity("","嘉兴市秀洲区")
p1.addProvinces(c);
c = new provinceCN("浙江","","湖州")
c.addCity("","湖州市")
c.addCity("","长兴县")
c.addCity("","德清县")
c.addCity("","安吉县")
c.addCity("","湖州市南浔区")
c.addCity("","湖州市吴兴区")
p1.addProvinces(c);
c = new provinceCN("浙江","","绍兴")
c.addCity("","绍兴市")
c.addCity("","诸暨市")
c.addCity("","嵊州市")
c.addCity("","绍兴县")
c.addCity("","新昌县")
c.addCity("","上虞市")
c.addCity("","绍兴市越城区")
p1.addProvinces(c);
c = new provinceCN("浙江","","金华")
c.addCity("","金华市")
c.addCity("","兰溪市")
c.addCity("","义乌市")
c.addCity("","东阳市")
c.addCity("","永康市")
c.addCity("","武义县")
c.addCity("","浦江县")
c.addCity("","磐安县")
c.addCity("","金华市金东区")
c.addCity("","金华市婺城区")
p1.addProvinces(c);
c = new provinceCN("浙江","","舟山")
c.addCity("","舟山市")
c.addCity("","岱山县")
c.addCity("","嵊泗县")
c.addCity("","舟山市定海区")
c.addCity("","舟山市普陀区")
p1.addProvinces(c);
c = new provinceCN("浙江","","台州")
c.addCity("","台州市")
c.addCity("","温岭市")
c.addCity("","玉环县")
c.addCity("","天台县")
c.addCity("","仙居县")
c.addCity("","三门县")
c.addCity("","临海市")
c.addCity("","台州市黄岩区")
c.addCity("","台州市椒江区")
c.addCity("","台州市路桥区")
p1.addProvinces(c);
c = new provinceCN("浙江","","丽水")
c.addCity("","丽水市")
c.addCity("","龙泉市")
c.addCity("","缙云县")
c.addCity("","青田县")
c.addCity("","云和县")
c.addCity("","遂昌县")
c.addCity("","松阳县")
c.addCity("","庆元县")
c.addCity("","景宁畲族自治县")
c.addCity("","丽水市莲都区")
p1.addProvinces(c);
c = new provinceCN("浙江","","杭州")

c.addCity("","杭州市")
c.addCity("","建德市")
c.addCity("","富阳市")
c.addCity("","临安市")
c.addCity("","桐庐县")
c.addCity("","淳安县")
c.addCity("","杭州市滨江区")
c.addCity("","杭州市拱墅区")
c.addCity("","杭州市江干区")
c.addCity("","杭州市上城区")
c.addCity("","杭州市西湖区")
c.addCity("","杭州市下城区")
c.addCity("","杭州市萧山区")
c.addCity("","杭州市余杭区")
p1.addProvinces(c);
c = new provinceCN("浙江","","衢州")
c.addCity("","衢州市")
c.addCity("","江山市")
c.addCity("","龙游县")
c.addCity("","常山县")
c.addCity("","开化县")
c.addCity("","衢州市柯城区")
c.addCity("","衢州市衢江区")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","云南");
c = new provinceCN("云南","","昆明")
c.addCity("","昆明市")
c.addCity("","安宁市")
c.addCity("","富民县")
c.addCity("","嵩明县")
c.addCity("","呈贡县")
c.addCity("","晋宁县")
c.addCity("","宜良县")
c.addCity("","禄劝彝族苗族自治县")
c.addCity("","石林彝族自治县")
c.addCity("","寻甸回族自治县")
c.addCity("","昆明市东川区")
c.addCity("","昆明市官渡区")
c.addCity("","昆明市盘龙区")
c.addCity("","昆明市五华区")
c.addCity("","昆明市西山区")
p1.addProvinces(c);
c = new provinceCN("云南","","曲靖")
c.addCity("","曲靖市")
c.addCity("","宣威市")
c.addCity("","陆良县")
c.addCity("","会泽县")
c.addCity("","富源县")
c.addCity("","罗平县")
c.addCity("","马龙县")
c.addCity("","师宗县")
c.addCity("","沾益县")
c.addCity("","曲靖市麒麟区")
p1.addProvinces(c);
c = new provinceCN("云南","","玉溪")
c.addCity("","玉溪市")
c.addCity("","华宁县")
c.addCity("","澄江县")
c.addCity("","易门县")
c.addCity("","通海县")
c.addCity("","江川县")
c.addCity("","元江哈尼族彝族傣族自治县")
c.addCity("","新平彝族傣族自治县")
c.addCity("","峨山彝族自治县")
c.addCity("","玉溪市红塔区")
p1.addProvinces(c);
c = new provinceCN("云南","","保山")
c.addCity("","保山市")
c.addCity("","施甸县")
c.addCity("","龙陵县")
c.addCity("","腾冲县")
c.addCity("","昌宁县")
c.addCity("","保山市隆阳区")
p1.addProvinces(c);
c = new provinceCN("云南","","昭通")
c.addCity("","昭通市")
c.addCity("","永善县")
c.addCity("","绥江县")
c.addCity("","镇雄县")
c.addCity("","大关县")
c.addCity("","盐津县")
c.addCity("","巧家县")
c.addCity("","彝良县")
c.addCity("","水富县")
c.addCity("","鲁甸县")
c.addCity("","威信县")
c.addCity("","昭通市昭阳区")
p1.addProvinces(c);
c = new provinceCN("云南","","普洱")
c.addCity("","普洱市")
c.addCity("","宁洱哈尼族彝族自治县")
c.addCity("","景东彝族自治县")
c.addCity("","镇沅彝族哈尼族拉祜族自治县")
c.addCity("","景谷傣族彝族自治县")
c.addCity("","墨江哈尼族自治县")
c.addCity("","澜沧拉祜族自治县")
c.addCity("","西盟佤族自治县")
c.addCity("","江城哈尼族彝族自治县")
c.addCity("","孟连傣族拉祜族佤族自治县")
c.addCity("","普洱市思茅区")
p1.addProvinces(c);
c = new provinceCN("云南","","临沧")
c.addCity("","临沧市临翔区")
c.addCity("","镇康县")
c.addCity("","凤庆县")
c.addCity("","云县")
c.addCity("","永德县")
c.addCity("","双江拉祜族佤族布朗族傣族自治县")
c.addCity("","沧源佤族自治县")
c.addCity("","耿马傣族佤族自治县")
c.addCity("","临沧市")
p1.addProvinces(c);
c = new provinceCN("云南","","丽江")
c.addCity("","丽江市")
c.addCity("","玉龙纳西族自治县")
c.addCity("","华坪县")
c.addCity("","永胜县")
c.addCity("","宁蒗彝族自治县")
c.addCity("","丽江市古城区")
p1.addProvinces(c);
c = new provinceCN("云南","","文山壮族苗族自治州")
c.addCity("","文山县")
c.addCity("","麻栗坡县")
c.addCity("","砚山县")
c.addCity("","广南县")
c.addCity("","马关县")
c.addCity("","富宁县")
c.addCity("","西畴县")
c.addCity("","丘北县")
p1.addProvinces(c);
c = new provinceCN("云南","","红河哈尼族彝族自治州")
c.addCity("","个旧市")
c.addCity("","开远市")
c.addCity("","弥勒县")
c.addCity("","红河县")
c.addCity("","绿春县")
c.addCity("","蒙自县")
c.addCity("","泸西县")
c.addCity("","建水县")
c.addCity("","元阳县")
c.addCity("","石屏县")
c.addCity("","河口瑶族自治县")
c.addCity("","屏边苗族自治县")
c.addCity("","金平苗族瑶族傣族自治县")
p1.addProvinces(c);
c = new provinceCN("云南","","西双版纳傣族自治州")
c.addCity("","景洪市")
c.addCity("","勐海县")
c.addCity("","勐腊县")
p1.addProvinces(c);
c = new provinceCN("云南","","楚雄彝族自治州")
c.addCity("","楚雄市")
c.addCity("","元谋县")
c.addCity("","南华县")
c.addCity("","牟定县")
c.addCity("","武定县")
c.addCity("","大姚县")
c.addCity("","双柏县")
c.addCity("","禄丰县")
c.addCity("","永仁县")
c.addCity("","姚安县")
p1.addProvinces(c);
c = new provinceCN("云南","","大理白族自治州")
c.addCity("","大理市")
c.addCity("","剑川县")
c.addCity("","弥渡县")
c.addCity("","云龙县")
c.addCity("","洱源县")
c.addCity("","鹤庆县")
c.addCity("","祥云县")
c.addCity("","宾川县")
c.addCity("","永平县")
c.addCity("","漾濞彝族自治县")
c.addCity("","巍山彝族回族自治县")
c.addCity("","南涧彝族自治县")
p1.addProvinces(c);
c = new provinceCN("云南","","德宏傣族景颇族自治州")
c.addCity("","潞西市")
c.addCity("","瑞丽市")
c.addCity("","盈江县")
c.addCity("","梁河县")
c.addCity("","陇川县")
p1.addProvinces(c);
c = new provinceCN("云南","","怒江傈傈族自治州")
c.addCity("","泸水县")
c.addCity("","福贡县")
c.addCity("","兰坪白族普米族自治县")
c.addCity("","贡山独龙族怒族自治县")
p1.addProvinces(c);
c = new provinceCN("云南","","迪庆藏族自治州")
c.addCity("","香格里拉县")
c.addCity("","德钦县")
c.addCity("","维西傈僳族自治县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","湖北");
c = new provinceCN("湖北","","武汉")
c.addCity("","武汉市江岸区")
c.addCity("","武汉市蔡甸区")
c.addCity("","武汉市东西湖区")
c.addCity("","武汉市汉南区")
c.addCity("","武汉市汉阳区")
c.addCity("","武汉市洪山区")
c.addCity("","武汉市黄陂区")
c.addCity("","武汉市江汉区")
c.addCity("","武汉市江夏区")
c.addCity("","武汉市硚口区")
c.addCity("","武汉市青山区")
c.addCity("","武汉市武昌区")
c.addCity("","武汉市新洲区")
c.addCity("","武汉市")
p1.addProvinces(c);
c = new provinceCN("湖北","","黄石")
c.addCity("","黄石市铁山区")
c.addCity("","黄石市黄石港区")
c.addCity("","黄石市西塞山区")
c.addCity("","黄石市下陆区")
c.addCity("","黄石市")
c.addCity("","大冶市")
c.addCity("","阳新县")
p1.addProvinces(c);
c = new provinceCN("湖北","","襄樊")
c.addCity("","南漳县")
c.addCity("","襄樊市樊城区")
c.addCity("","襄樊市襄城区")
c.addCity("","襄樊市襄阳区")
c.addCity("","襄樊市")
c.addCity("","老河口市")
c.addCity("","枣阳市")
c.addCity("","宜城市")
c.addCity("","谷城县")
c.addCity("","保康县")
p1.addProvinces(c);
c = new provinceCN("湖北","","十堰")
c.addCity("","十堰市张湾区")
c.addCity("","十堰市茅箭区")
c.addCity("","十堰市")
c.addCity("","丹江口市")
c.addCity("","郧县")
c.addCity("","竹山县")
c.addCity("","房县")
c.addCity("","郧西县")
c.addCity("","竹溪县")
p1.addProvinces(c);
c = new provinceCN("湖北","","荆州")
c.addCity("","洪湖市")
c.addCity("","荆州市荆州区")
c.addCity("","荆州市沙市区")
c.addCity("","荆州市")
c.addCity("","石首市")
c.addCity("","松滋市")
c.addCity("","监利县")
c.addCity("","公安县")
c.addCity("","江陵县")
p1.addProvinces(c);
c = new provinceCN("湖北","","宜昌")
c.addCity("","宜昌市点军区")
c.addCity("","宜昌市伍家岗区")
c.addCity("","宜昌市西陵区")
c.addCity("","宜昌市猇亭区")
c.addCity("","宜昌市夷陵区")
c.addCity("","宜昌市")
c.addCity("","宜都市")
c.addCity("","当阳市")
c.addCity("","枝江市")
c.addCity("","秭归县")
c.addCity("","远安县")
c.addCity("","兴山县")
c.addCity("","五峰土家族自治县")
c.addCity("","长阳土家族自治县")
p1.addProvinces(c);
c = new provinceCN("湖北","","荆门")
c.addCity("","荆门市东宝区")
c.addCity("","荆门市掇刀区")
c.addCity("","荆门市")
c.addCity("","钟祥市")
c.addCity("","京山县")
c.addCity("","沙洋县")
p1.addProvinces(c);
c = new provinceCN("湖北","","鄂州")
c.addCity("","鄂州市鄂城区")
c.addCity("","鄂州市华容区")
c.addCity("","鄂州市梁子湖区")
c.addCity("","鄂州市")
p1.addProvinces(c);
c = new provinceCN("湖北","","孝感")
c.addCity("","孝感市孝南区")
c.addCity("","孝感市")
c.addCity("","应城市")
c.addCity("","安陆市")
c.addCity("","汉川市")
c.addCity("","云梦县")
c.addCity("","大悟县")
c.addCity("","孝昌县")
p1.addProvinces(c);
c = new provinceCN("湖北","","黄冈")
c.addCity("","黄冈市黄州区")
c.addCity("","黄冈市")
c.addCity("","麻城市")
c.addCity("","武穴市")
c.addCity("","红安县")
c.addCity("","罗田县")
c.addCity("","浠水县")
c.addCity("","蕲春县")
c.addCity("","黄梅县")
c.addCity("","英山县")
c.addCity("","团风县")
p1.addProvinces(c);
c = new provinceCN("湖北","","咸宁")
c.addCity("","咸宁市咸安区")
c.addCity("","咸宁市")
c.addCity("","赤壁市")
c.addCity("","嘉鱼县")
c.addCity("","通山县")
c.addCity("","崇阳县")
c.addCity("","通城县")
p1.addProvinces(c);
c = new provinceCN("湖北","","随州")
c.addCity("","随州市")
c.addCity("","随州市曾都区")
c.addCity("","广水市")
p1.addProvinces(c);
c = new provinceCN("湖北","","仙桃")
c.addCity("","仙桃市")
p1.addProvinces(c);
c = new provinceCN("湖北","","天门")
c.addCity("","天门市")
p1.addProvinces(c);
c = new provinceCN("湖北","","潜江")
c.addCity("","潜江市")
p1.addProvinces(c);
c = new provinceCN("湖北","","神农架林区")
c.addCity("","神农架林区")
c.addCity("","神农架林区")
p1.addProvinces(c);
c = new provinceCN("湖北","","恩施土家族苗族自治州")
c.addCity("","建始县")
c.addCity("","恩施市")
c.addCity("","利川市")
c.addCity("","来凤县")
c.addCity("","巴东县")
c.addCity("","鹤峰县")
c.addCity("","宣恩县")
c.addCity("","咸丰县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","江西");
c = new provinceCN("江西","","南昌")
c.addCity("","南昌市东湖区")
c.addCity("","南昌市青山湖区")
c.addCity("","南昌市青云谱区")
c.addCity("","南昌市湾里区")
c.addCity("","南昌市西湖区")
c.addCity("","南昌市")
c.addCity("","新建县")
c.addCity("","南昌县")
c.addCity("","进贤县")
c.addCity("","安义县")
p1.addProvinces(c);
c = new provinceCN("江西","","景德镇")
c.addCity("","景德镇市昌江区")
c.addCity("","景德镇市珠山区")
c.addCity("","景德镇市")
c.addCity("","乐平市")
c.addCity("","浮梁县")
p1.addProvinces(c);
c = new provinceCN("江西","","萍乡")
c.addCity("","莲花县")
c.addCity("","萍乡市安源区")
c.addCity("","萍乡市湘东区")
c.addCity("","萍乡市")
c.addCity("","上栗县")
c.addCity("","芦溪县")
p1.addProvinces(c);
c = new provinceCN("江西","","新余")
c.addCity("","新余市渝水区")
c.addCity("","新余市")
c.addCity("","分宜县")
p1.addProvinces(c);
c = new provinceCN("江西","","九江")
c.addCity("","九江市浔阳区")
c.addCity("","九江市庐山区")
c.addCity("","九江市")
c.addCity("","瑞昌市")
c.addCity("","九江县")
c.addCity("","星子县")
c.addCity("","武宁县")
c.addCity("","彭泽县")
c.addCity("","永修县")
c.addCity("","修水县")
c.addCity("","湖口县")
c.addCity("","德安县")
c.addCity("","都昌县")
p1.addProvinces(c);
c = new provinceCN("江西","","鹰潭")
c.addCity("","鹰潭市月湖区")
c.addCity("","鹰潭市")
c.addCity("","贵溪市")
c.addCity("","余江县")
p1.addProvinces(c);
c = new provinceCN("江西","","赣州")
c.addCity("","赣州市章贡区")
c.addCity("","赣州市")
c.addCity("","瑞金市")
c.addCity("","南康市")
c.addCity("","石城县")
c.addCity("","安远县")
c.addCity("","赣县")
c.addCity("","宁都县")
c.addCity("","寻乌县")
c.addCity("","兴国县")
c.addCity("","定南县")
c.addCity("","上犹县")
c.addCity("","于都县")
c.addCity("","龙南县")
c.addCity("","崇义县")
c.addCity("","信丰县")
c.addCity("","全南县")
c.addCity("","大余县")
c.addCity("","会昌县")
p1.addProvinces(c);
c = new provinceCN("江西","","吉安")
c.addCity("","井冈山市")
c.addCity("","吉安市吉州区")
c.addCity("","吉安市青原区")
c.addCity("","吉安市")
c.addCity("","吉安县")
c.addCity("","永丰县")
c.addCity("","永新县")
c.addCity("","新干县")
c.addCity("","泰和县")
c.addCity("","峡江县")
c.addCity("","遂川县")
c.addCity("","安福县")
c.addCity("","吉水县")
c.addCity("","万安县")
p1.addProvinces(c);
c = new provinceCN("江西","","宜春")
c.addCity("","丰城市")
c.addCity("","宜春市袁州区")
c.addCity("","宜春市")
c.addCity("","樟树市")
c.addCity("","高安市")
c.addCity("","铜鼓县")
c.addCity("","靖安县")
c.addCity("","宜丰县")
c.addCity("","奉新县")
c.addCity("","万载县")
c.addCity("","上高县")
p1.addProvinces(c);
c = new provinceCN("江西","","抚州")
c.addCity("","金溪县")
c.addCity("","抚州市临川区")
c.addCity("","抚州市")
c.addCity("","南丰县")
c.addCity("","乐安县")
c.addCity("","南城县")
c.addCity("","东乡县")
c.addCity("","资溪县")
c.addCity("","宜黄县")
c.addCity("","广昌县")
c.addCity("","黎川县")
c.addCity("","崇仁县")
p1.addProvinces(c);
c = new provinceCN("江西","","上饶")
c.addCity("","上饶市信州区")
c.addCity("","上饶市")
c.addCity("","德兴市")
c.addCity("","上饶县")
c.addCity("","广丰县")
c.addCity("","鄱阳县")
c.addCity("","婺源县")
c.addCity("","铅山县")
c.addCity("","余干县")
c.addCity("","横峰县")
c.addCity("","弋阳县")
c.addCity("","玉山县")
c.addCity("","万年县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","重庆");
c = new provinceCN("重庆","","重庆")
c.addCity("","重庆市")
c.addCity("","重庆市永川区")
c.addCity("","重庆市合川区")
c.addCity("","重庆市江津区")
c.addCity("","重庆市南川区")
c.addCity("","綦江县")
c.addCity("","潼南县")
c.addCity("","荣昌县")
c.addCity("","璧山县")
c.addCity("","大足县")
c.addCity("","梁平县")
c.addCity("","城口县")
c.addCity("","垫江县")
c.addCity("","武隆县")
c.addCity("","丰都县")
c.addCity("","奉节县")
c.addCity("","开县")
c.addCity("","云阳县")
c.addCity("","忠县")
c.addCity("","巫溪县")
c.addCity("","巫山县")
c.addCity("","石柱土家族自治县")
c.addCity("","秀山土家族苗族自治县")
c.addCity("","酉阳土家族苗族自治县")
c.addCity("","彭水苗族土家族自治县")
c.addCity("","铜梁县")
c.addCity("","重庆市巴南区")
c.addCity("","重庆市北碚区")
c.addCity("","重庆市长寿区")
c.addCity("","重庆市大渡口区")
c.addCity("","重庆市涪陵区")
c.addCity("","重庆市江北区")
c.addCity("","重庆市九龙坡区")
c.addCity("","重庆市南岸区")
c.addCity("","重庆市黔江区")
c.addCity("","重庆市沙坪坝区")
c.addCity("","重庆市双桥区")
c.addCity("","重庆市万盛区")
c.addCity("","重庆市万州区")
c.addCity("","重庆市渝北区")
c.addCity("","重庆市渝中区")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","宁夏");
c = new provinceCN("宁夏","","银川")
c.addCity("","银川市金凤区")
c.addCity("","银川市西夏区")
c.addCity("","银川市兴庆区")
c.addCity("","银川市")
c.addCity("","永宁县")
c.addCity("","贺兰县")
c.addCity("","灵武市")
p1.addProvinces(c);
c = new provinceCN("宁夏","","石嘴山")
c.addCity("","石嘴山市大武口区")
c.addCity("","石嘴山市")
c.addCity("","平罗县")
c.addCity("","石嘴山市惠农区")
p1.addProvinces(c);
c = new provinceCN("宁夏","","吴忠")
c.addCity("","吴忠市利通区")
c.addCity("","吴忠市")
c.addCity("","青铜峡市")
c.addCity("","同心县")
c.addCity("","盐池县")
p1.addProvinces(c);
c = new provinceCN("宁夏","","中卫")
c.addCity("","中卫市")
c.addCity("","中卫市沙坡头区")
c.addCity("","中宁县")
c.addCity("","海原县")
p1.addProvinces(c);
c = new provinceCN("宁夏","","固原")
c.addCity("","固原市原州区")
c.addCity("","固原市")
c.addCity("","西吉县")
c.addCity("","隆德县")
c.addCity("","泾源县")
c.addCity("","彭阳县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","青海");
c = new provinceCN("青海","","西宁")
c.addCity("","西宁市城北区")
c.addCity("","西宁市城东区")
c.addCity("","西宁市城西区")
c.addCity("","西宁市城中区")
c.addCity("","西宁市")
c.addCity("","湟源县")
c.addCity("","湟中县")
c.addCity("","大通回族土族自治县")
p1.addProvinces(c);
c = new provinceCN("青海","","海东")
c.addCity("","平安县")
c.addCity("","乐都县")
c.addCity("","民和回族土族自治县")
c.addCity("","互助土族自治县")
c.addCity("","化隆回族自治县")
c.addCity("","循化撒拉族自治县")
p1.addProvinces(c);
c = new provinceCN("青海","","海北藏族自治州")
c.addCity("","海晏县")
c.addCity("","祁连县")
c.addCity("","刚察县")
c.addCity("","门源回族自治县")
p1.addProvinces(c);
c = new provinceCN("青海","","黄南藏族自治州")
c.addCity("","同仁县")
c.addCity("","泽库县")
c.addCity("","尖扎县")
c.addCity("","河南蒙古族自治县")
p1.addProvinces(c);
c = new provinceCN("青海","","海南藏族自治州")
c.addCity("","贵德县")
c.addCity("","共和县")
c.addCity("","同德县")
c.addCity("","兴海县")
c.addCity("","贵南县")
p1.addProvinces(c);
c = new provinceCN("青海","","果洛藏族自治州")
c.addCity("","玛沁县")
c.addCity("","班玛县")
c.addCity("","甘德县")
c.addCity("","达日县")
c.addCity("","久治县")
c.addCity("","玛多县")
p1.addProvinces(c);
c = new provinceCN("青海","","玉树藏族自治州")
c.addCity("","杂多县")
c.addCity("","玉树县")
c.addCity("","称多县")
c.addCity("","治多县")
c.addCity("","囊谦县")
c.addCity("","曲麻莱县")
p1.addProvinces(c);
c = new provinceCN("青海","","海西蒙古族藏族自治州")
c.addCity("","德令哈市")
c.addCity("","格尔木市")
c.addCity("","乌兰县")
c.addCity("","天峻县")
c.addCity("","都兰县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","上海");
c = new provinceCN("上海","","上海")
c.addCity("","上海市宝山区")
c.addCity("","上海市长宁区")
c.addCity("","上海市奉贤区")
c.addCity("","上海市虹口区")
c.addCity("","上海市黄浦区")
c.addCity("","上海市嘉定区")
c.addCity("","上海市金山区")
c.addCity("","上海市静安区")
c.addCity("","上海市卢湾区")
c.addCity("","上海市闵行区")
c.addCity("","上海市南汇区")
c.addCity("","上海市浦东新区")
c.addCity("","上海市普陀区")
c.addCity("","上海市青浦区")
c.addCity("","上海市松江区")
c.addCity("","上海市徐汇区")
c.addCity("","上海市杨浦区")
c.addCity("","上海市闸北区")
c.addCity("","上海市")
c.addCity("","崇明县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","广东");
c = new provinceCN("广东","","云浮")
c.addCity("","云浮市云城区")
c.addCity("","云浮市")
c.addCity("","罗定市")
c.addCity("","云安县")
c.addCity("","新兴县")
c.addCity("","郁南县")
p1.addProvinces(c);
c = new provinceCN("广东","","广州")
c.addCity("","广州市海珠区")
c.addCity("","广州市白云区")
c.addCity("","广州市番禺区")
c.addCity("","广州市花都区")
c.addCity("","广州市黄埔区")
c.addCity("","广州市荔湾区")
c.addCity("","广州市萝岗区")
c.addCity("","广州市南沙区")
c.addCity("","广州市天河区")
c.addCity("","广州市越秀区")
c.addCity("","广州市")
c.addCity("","从化市")
c.addCity("","增城市")
p1.addProvinces(c);
c = new provinceCN("广东","","深圳")
c.addCity("","深圳市南山区")
c.addCity("","深圳市宝安区")
c.addCity("","深圳市福田区")
c.addCity("","深圳市龙岗区")
c.addCity("","深圳市罗湖区")
c.addCity("","深圳市盐田区")
c.addCity("","深圳市")
p1.addProvinces(c);
c = new provinceCN("广东","","珠海")
c.addCity("","珠海市斗门区")
c.addCity("","珠海市金湾区")
c.addCity("","珠海市香洲区")
c.addCity("","珠海市")
p1.addProvinces(c);
c = new provinceCN("广东","","汕头")
c.addCity("","汕头市潮南区")
c.addCity("","汕头市潮阳区")
c.addCity("","汕头市澄海区")
c.addCity("","汕头市濠江区")
c.addCity("","汕头市金平区")
c.addCity("","汕头市龙湖区")
c.addCity("","汕头市")
c.addCity("","南澳县")
p1.addProvinces(c);
c = new provinceCN("广东","","韶关")
c.addCity("","韶关市武江区")
c.addCity("","韶关市浈江区")
c.addCity("","韶关市")
c.addCity("","乐昌市")
c.addCity("","南雄市")
c.addCity("","仁化县")
c.addCity("","始兴县")
c.addCity("","翁源县")
c.addCity("","韶关市曲江区")
c.addCity("","新丰县")
c.addCity("","乳源瑶族自治县")
p1.addProvinces(c);
c = new provinceCN("广东","","河源")
c.addCity("","连平县")
c.addCity("","河源市源城区")
c.addCity("","河源市")
c.addCity("","和平县")
c.addCity("","龙川县")
c.addCity("","紫金县")
c.addCity("","东源县")
p1.addProvinces(c);
c = new provinceCN("广东","","梅州")
c.addCity("","梅州市梅江区")
c.addCity("","梅州市")
c.addCity("","兴宁市")
c.addCity("","梅县")
c.addCity("","蕉岭县")
c.addCity("","大埔县")
c.addCity("","丰顺县")
c.addCity("","五华县")
c.addCity("","平远县")
p1.addProvinces(c);
c = new provinceCN("广东","","惠州")
c.addCity("","惠州市惠城区")
c.addCity("","惠州市惠阳区")
c.addCity("","惠州市")
c.addCity("","惠东县")
c.addCity("","博罗县")
c.addCity("","龙门县")
p1.addProvinces(c);
c = new provinceCN("广东","","汕尾")
c.addCity("","汕尾市城区")
c.addCity("","汕尾市")
c.addCity("","陆丰市")
c.addCity("","海丰县")
c.addCity("","陆河县")
p1.addProvinces(c);
c = new provinceCN("广东","","东莞")
c.addCity("","东莞市")
p1.addProvinces(c);
c = new provinceCN("广东","","中山")
c.addCity("","中山市")
p1.addProvinces(c);
c = new provinceCN("广东","","江门")
c.addCity("","江门市江海区")
c.addCity("","江门市蓬江区")
c.addCity("","江门市新会区")
c.addCity("","江门市")
c.addCity("","台山市")
c.addCity("","开平市")
c.addCity("","鹤山市")
c.addCity("","恩平市")
p1.addProvinces(c);
c = new provinceCN("广东","","佛山")
c.addCity("","佛山市禅城区")
c.addCity("","佛山市高明区")
c.addCity("","佛山市南海区")
c.addCity("","佛山市三水区")
c.addCity("","佛山市顺德区")
c.addCity("","佛山市")
p1.addProvinces(c);
c = new provinceCN("广东","","阳江")
c.addCity("","阳江市江城区")
c.addCity("","阳江市")
c.addCity("","阳春市")
c.addCity("","阳西县")
c.addCity("","阳东县")
p1.addProvinces(c);
c = new provinceCN("广东","","湛江")
c.addCity("","湛江市赤坎区")
c.addCity("","湛江市麻章区")
c.addCity("","湛江市坡头区")
c.addCity("","湛江市霞山区")
c.addCity("","湛江市")
c.addCity("","廉江市")
c.addCity("","雷州市")
c.addCity("","吴川市")
c.addCity("","遂溪县")
c.addCity("","徐闻县")
p1.addProvinces(c);
c = new provinceCN("广东","","茂名")
c.addCity("","茂名市茂港区")
c.addCity("","茂名市茂南区")
c.addCity("","茂名市")
c.addCity("","高州市")
c.addCity("","化州市")
c.addCity("","信宜市")
c.addCity("","电白县")
p1.addProvinces(c);
c = new provinceCN("广东","","肇庆")
c.addCity("","肇庆市鼎湖区")
c.addCity("","肇庆市端州区")
c.addCity("","肇庆市")
c.addCity("","高要市")
c.addCity("","四会市")
c.addCity("","广宁县")
c.addCity("","德庆县")
c.addCity("","封开县")
c.addCity("","怀集县")
p1.addProvinces(c);
c = new provinceCN("广东","","清远")
c.addCity("","清远市清城区")
c.addCity("","清远市")
c.addCity("","英德市")
c.addCity("","连州市")
c.addCity("","佛冈县")
c.addCity("","阳山县")
c.addCity("","清新县")
c.addCity("","连山壮族瑶族自治县")
c.addCity("","连南瑶族自治县")
p1.addProvinces(c);
c = new provinceCN("广东","","潮州")
c.addCity("","潮州市湘桥区")
c.addCity("","潮州市")
c.addCity("","潮安县")
c.addCity("","饶平县")
p1.addProvinces(c);
c = new provinceCN("广东","","揭阳")
c.addCity("","揭阳市榕城区")
c.addCity("","揭阳市")
c.addCity("","普宁市")
c.addCity("","揭东县")
c.addCity("","揭西县")
c.addCity("","惠来县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","山西");
c = new provinceCN("山西","","太原")
c.addCity("","娄烦县")
c.addCity("","太原市尖草坪区")
c.addCity("","太原市晋源区")
c.addCity("","太原市万柏林区")
c.addCity("","太原市小店区")
c.addCity("","太原市杏花岭区")
c.addCity("","太原市迎泽区")
c.addCity("","太原市")
c.addCity("","古交市")
c.addCity("","阳曲县")
c.addCity("","清徐县")
p1.addProvinces(c);
c = new provinceCN("山西","","大同")
c.addCity("","大同市城区")
c.addCity("","大同市矿区")
c.addCity("","大同市南郊区")
c.addCity("","大同市新荣区")
c.addCity("","大同市")
c.addCity("","大同县")
c.addCity("","天镇县")
c.addCity("","灵丘县")
c.addCity("","阳高县")
c.addCity("","左云县")
c.addCity("","广灵县")
c.addCity("","浑源县")
p1.addProvinces(c);
c = new provinceCN("山西","","阳泉")
c.addCity("","阳泉市城区")
c.addCity("","阳泉市郊区")
c.addCity("","阳泉市矿区")
c.addCity("","阳泉市")
c.addCity("","平定县")
c.addCity("","盂县")
p1.addProvinces(c);
c = new provinceCN("山西","","长治")
c.addCity("","长治市城区")
c.addCity("","长治市郊区")
c.addCity("","长治市")
c.addCity("","潞城市")
c.addCity("","长治县")
c.addCity("","长子县")
c.addCity("","平顺县")
c.addCity("","襄垣县")
c.addCity("","沁源县")
c.addCity("","屯留县")
c.addCity("","黎城县")
c.addCity("","武乡县")
c.addCity("","沁县")
c.addCity("","壶关县")
p1.addProvinces(c);
c = new provinceCN("山西","","晋城")
c.addCity("","晋城市城区")
c.addCity("","晋城市")
c.addCity("","高平市")
c.addCity("","泽州县")
c.addCity("","陵川县")
c.addCity("","阳城县")
c.addCity("","沁水县")
p1.addProvinces(c);
c = new provinceCN("山西","","朔州")
c.addCity("","朔州市平鲁区")
c.addCity("","朔州市朔城区")
c.addCity("","朔州市")
c.addCity("","山阴县")
c.addCity("","右玉县")
c.addCity("","应县")
c.addCity("","怀仁县")
p1.addProvinces(c);
c = new provinceCN("山西","","晋中")
c.addCity("","和顺县")
c.addCity("","晋中市榆次区")
c.addCity("","晋中市")
c.addCity("","介休市")
c.addCity("","昔阳县")
c.addCity("","灵石县")
c.addCity("","祁县")
c.addCity("","左权县")
c.addCity("","寿阳县")
c.addCity("","太谷县")
c.addCity("","平遥县")
c.addCity("","榆社县")
p1.addProvinces(c);
c = new provinceCN("山西","","忻州")
c.addCity("","静乐县")
c.addCity("","忻州市忻府区")
c.addCity("","忻州市")
c.addCity("","原平市")
c.addCity("","代县")
c.addCity("","神池县")
c.addCity("","五寨县")
c.addCity("","五台县")
c.addCity("","偏关县")
c.addCity("","宁武县")
c.addCity("","繁峙县")
c.addCity("","河曲县")
c.addCity("","保德县")
c.addCity("","定襄县")
c.addCity("","岢岚县")
p1.addProvinces(c);
c = new provinceCN("山西","","临汾")
c.addCity("","大宁县")
c.addCity("","临汾市尧都区")
c.addCity("","临汾市")
c.addCity("","侯马市")
c.addCity("","霍州市")
c.addCity("","汾西县")
c.addCity("","吉县")
c.addCity("","安泽县")
c.addCity("","浮山县")
c.addCity("","古县")
c.addCity("","隰县")
c.addCity("","襄汾县")
c.addCity("","翼城县")
c.addCity("","永和县")
c.addCity("","乡宁县")
c.addCity("","曲沃县")
c.addCity("","洪洞县")
c.addCity("","蒲县")
p1.addProvinces(c);
c = new provinceCN("山西","","运城")
c.addCity("","运城市盐湖区")
c.addCity("","运城市")
c.addCity("","河津市")
c.addCity("","永济市")
c.addCity("","闻喜县")
c.addCity("","新绛县")
c.addCity("","平陆县")
c.addCity("","垣曲县")
c.addCity("","绛县")
c.addCity("","稷山县")
c.addCity("","芮城县")
c.addCity("","夏县")
c.addCity("","万荣县")
c.addCity("","临猗县")
p1.addProvinces(c);
c = new provinceCN("山西","","吕梁")
c.addCity("","吕梁市")
c.addCity("","吕梁市离石区")
c.addCity("","孝义市")
c.addCity("","汾阳市")
c.addCity("","文水县")
c.addCity("","中阳县")
c.addCity("","兴县")
c.addCity("","临县")
c.addCity("","方山县")
c.addCity("","柳林县")
c.addCity("","岚县")
c.addCity("","交口县")
c.addCity("","交城县")
c.addCity("","石楼县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","山东");
c = new provinceCN("山东","","聊城")
c.addCity("","聊城市")
c.addCity("","临清市")
c.addCity("","高唐县")
c.addCity("","阳谷县")
c.addCity("","茌平县")
c.addCity("","莘县")
c.addCity("","东阿县")
c.addCity("","冠县")
c.addCity("","聊城市东昌府区")
p1.addProvinces(c);
c = new provinceCN("山东","","滨州")
c.addCity("","滨州市")
c.addCity("","邹平县")
c.addCity("","沾化县")
c.addCity("","惠民县")
c.addCity("","博兴县")
c.addCity("","阳信县")
c.addCity("","无棣县")
c.addCity("","滨州市滨城区")
p1.addProvinces(c);
c = new provinceCN("山东","","菏泽")
c.addCity("","菏泽市")
c.addCity("","鄄城县")
c.addCity("","单县")
c.addCity("","郓城县")
c.addCity("","曹县")
c.addCity("","定陶县")
c.addCity("","巨野县")
c.addCity("","东明县")
c.addCity("","成武县")
c.addCity("","菏泽市牡丹区")
p1.addProvinces(c);
c = new provinceCN("山东","","潍坊")
c.addCity("","潍坊市坊子区")
c.addCity("","潍坊市寒亭区")
c.addCity("","潍坊市潍城区")
c.addCity("","潍坊市奎文区")
c.addCity("","潍坊市")
c.addCity("","青州市")
c.addCity("","诸城市")
c.addCity("","寿光市")
c.addCity("","安丘市")
c.addCity("","高密市")
c.addCity("","昌邑市")
c.addCity("","昌乐县")
c.addCity("","临朐县")
p1.addProvinces(c);
c = new provinceCN("山东","","日照")
c.addCity("","日照市东港区")
c.addCity("","日照市岚山区")
c.addCity("","日照市")
c.addCity("","五莲县")
c.addCity("","莒县")
p1.addProvinces(c);
c = new provinceCN("山东","","济南")
c.addCity("","济南市")
c.addCity("","济南市长清区")
c.addCity("","济南市槐荫区")
c.addCity("","济南市历城区")
c.addCity("","济南市市中区")
c.addCity("","济南市天桥区")
c.addCity("","济南市历下区")
c.addCity("","章丘市")
c.addCity("","平阴县")
c.addCity("","济阳县")
c.addCity("","商河县")
p1.addProvinces(c);
c = new provinceCN("山东","","青岛")
c.addCity("","青岛市城阳区")
c.addCity("","青岛市黄岛区")
c.addCity("","青岛市崂山区")
c.addCity("","青岛市李沧区")
c.addCity("","青岛市市北区")
c.addCity("","青岛市四方区")
c.addCity("","青岛市市南区")
c.addCity("","青岛市")
c.addCity("","胶南市")
c.addCity("","胶州市")
c.addCity("","平度市")
c.addCity("","莱西市")
c.addCity("","即墨市")
p1.addProvinces(c);
c = new provinceCN("山东","","淄博")
c.addCity("","淄博市")
c.addCity("","淄博市博山区")
c.addCity("","淄博市临淄区")
c.addCity("","淄博市张店区")
c.addCity("","淄博市周村区")
c.addCity("","淄博市淄川区")
c.addCity("","桓台县")
c.addCity("","高青县")
c.addCity("","沂源县")
p1.addProvinces(c);
c = new provinceCN("山东","","枣庄")
c.addCity("","枣庄市山亭区")
c.addCity("","枣庄市市中区")
c.addCity("","枣庄市薛城区")
c.addCity("","枣庄市峄城区")
c.addCity("","枣庄市台儿庄区")
c.addCity("","枣庄市")
c.addCity("","滕州市")
p1.addProvinces(c);
c = new provinceCN("山东","","东营")
c.addCity("","东营市东营区")
c.addCity("","东营市河口区")
c.addCity("","东营市")
c.addCity("","垦利县")
c.addCity("","广饶县")
c.addCity("","利津县")
p1.addProvinces(c);
c = new provinceCN("山东","","烟台")
c.addCity("","烟台市福山区")
c.addCity("","烟台市莱山区")
c.addCity("","烟台市牟平区")
c.addCity("","烟台市芝罘区")
c.addCity("","烟台市")
c.addCity("","龙口市")
c.addCity("","莱阳市")
c.addCity("","莱州市")
c.addCity("","招远市")
c.addCity("","蓬莱市")
c.addCity("","栖霞市")
c.addCity("","海阳市")
c.addCity("","长岛县")
p1.addProvinces(c);
c = new provinceCN("山东","","威海")
c.addCity("","威海市环翠区")
c.addCity("","威海市")
c.addCity("","乳山市")
c.addCity("","文登市")
c.addCity("","荣成市")
p1.addProvinces(c);
c = new provinceCN("山东","","济宁")
c.addCity("","济宁市任城区")
c.addCity("","济宁市市中区")
c.addCity("","济宁市")
c.addCity("","曲阜市")
c.addCity("","兖州市")
c.addCity("","邹城市")
c.addCity("","鱼台县")
c.addCity("","金乡县")
c.addCity("","嘉祥县")
c.addCity("","微山县")
c.addCity("","汶上县")
c.addCity("","泗水县")
c.addCity("","梁山县")
p1.addProvinces(c);
c = new provinceCN("山东","","泰安")
c.addCity("","泰安市岱岳区")
c.addCity("","泰安市泰山区")
c.addCity("","泰安市")
c.addCity("","新泰市")
c.addCity("","肥城市")
c.addCity("","宁阳县")
c.addCity("","东平县")
p1.addProvinces(c);
c = new provinceCN("山东","","莱芜")
c.addCity("","莱芜市钢城区")
c.addCity("","莱芜市莱城区")
c.addCity("","莱芜市")
p1.addProvinces(c);
c = new provinceCN("山东","","德州")
c.addCity("","齐河县")
c.addCity("","德州市德城区")
c.addCity("","德州市")
c.addCity("","乐陵市")
c.addCity("","禹城市")
c.addCity("","陵县")
c.addCity("","宁津县")
c.addCity("","武城县")
c.addCity("","庆云县")
c.addCity("","平原县")
c.addCity("","夏津县")
c.addCity("","临邑县")
p1.addProvinces(c);
c = new provinceCN("山东","","临沂")
c.addCity("","沂水县")
c.addCity("","苍山县")
c.addCity("","平邑县")
c.addCity("","莒南县")
c.addCity("","蒙阴县")
c.addCity("","临沭县")
c.addCity("","费县")
c.addCity("","临沂市兰山区")
c.addCity("","临沂市罗庄区")
c.addCity("","临沂市河东区")
c.addCity("","临沂市")
c.addCity("","沂南县")
c.addCity("","郯城县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","安徽");
c = new provinceCN("安徽","","阜阳")
c.addCity("","阜阳市颍东区")
c.addCity("","阜阳市颍泉区")
c.addCity("","阜阳市颍州区")
c.addCity("","阜阳市")
c.addCity("","界首市")
c.addCity("","临泉县")
c.addCity("","颍上县")
c.addCity("","阜南县")
c.addCity("","太和县")
p1.addProvinces(c);
c = new provinceCN("安徽","","合肥")
c.addCity("","合肥市包河区")
c.addCity("","合肥市庐阳区")
c.addCity("","合肥市蜀山区")
c.addCity("","合肥市瑶海区")
c.addCity("","合肥市")
c.addCity("","长丰县")
c.addCity("","肥东县")
c.addCity("","肥西县")
p1.addProvinces(c);
c = new provinceCN("安徽","","芜湖")
c.addCity("","芜湖市镜湖区")
c.addCity("","芜湖市鸠江区")
c.addCity("","芜湖市三山区")
c.addCity("","芜湖市弋江区")
c.addCity("","芜湖市")
c.addCity("","芜湖县")
c.addCity("","南陵县")
c.addCity("","繁昌县")
p1.addProvinces(c);
c = new provinceCN("安徽","","蚌埠")
c.addCity("","蚌埠市蚌山区")
c.addCity("","蚌埠市淮上区")
c.addCity("","蚌埠市龙子湖区")
c.addCity("","蚌埠市禹会区")
c.addCity("","蚌埠市")
c.addCity("","怀远县")
c.addCity("","固镇县")
c.addCity("","五河县")
p1.addProvinces(c);
c = new provinceCN("安徽","","淮南")
c.addCity("","淮南市八公山区")
c.addCity("","淮南市大通区")
c.addCity("","淮南市潘集区")
c.addCity("","淮南市田家庵区")
c.addCity("","淮南市谢家集区")
c.addCity("","淮南市")
c.addCity("","凤台县")
p1.addProvinces(c);
c = new provinceCN("安徽","","马鞍山")
c.addCity("","马鞍山市雨山区")
c.addCity("","马鞍山市花山区")
c.addCity("","马鞍山市金家庄区")
c.addCity("","马鞍山市")
c.addCity("","当涂县")
p1.addProvinces(c);
c = new provinceCN("安徽","","淮北")
c.addCity("","淮北市杜集区")
c.addCity("","淮北市烈山区")
c.addCity("","淮北市相山区")
c.addCity("","淮北市")
c.addCity("","濉溪县")
p1.addProvinces(c);
c = new provinceCN("安徽","","铜陵")
c.addCity("","铜陵市铜官山区")
c.addCity("","铜陵市郊区")
c.addCity("","铜陵市狮子山区")
c.addCity("","铜陵市")
c.addCity("","铜陵县")
p1.addProvinces(c);
c = new provinceCN("安徽","","安庆")
c.addCity("","安庆市大观区")
c.addCity("","安庆市宜秀区")
c.addCity("","安庆市迎江区")
c.addCity("","安庆市")
c.addCity("","桐城市")
c.addCity("","宿松县")
c.addCity("","枞阳县")
c.addCity("","太湖县")
c.addCity("","怀宁县")
c.addCity("","岳西县")
c.addCity("","望江县")
c.addCity("","潜山县")
p1.addProvinces(c);
c = new provinceCN("安徽","","黄山")
c.addCity("","歙县")
c.addCity("","黄山市黄山区")
c.addCity("","黄山市徽州区")
c.addCity("","黄山市屯溪区")
c.addCity("","黄山市")
c.addCity("","休宁县")
c.addCity("","祁门县")
c.addCity("","黟县")
p1.addProvinces(c);
c = new provinceCN("安徽","","滁州")
c.addCity("","滁州市琅琊区")
c.addCity("","滁州市南谯区")
c.addCity("","滁州市")
c.addCity("","天长市")
c.addCity("","明光市")
c.addCity("","全椒县")
c.addCity("","来安县")
c.addCity("","定远县")
c.addCity("","凤阳县")
p1.addProvinces(c);
c = new provinceCN("安徽","","宿州")
c.addCity("","灵璧县")
c.addCity("","宿州市埇桥区")
c.addCity("","宿州市")
c.addCity("","萧县")
c.addCity("","泗县")
c.addCity("","砀山县")
p1.addProvinces(c);
c = new provinceCN("安徽","","巢湖")
c.addCity("","巢湖市居巢区")
c.addCity("","巢湖市")
c.addCity("","含山县")
c.addCity("","无为县")
c.addCity("","庐江县")
c.addCity("","和县")
p1.addProvinces(c);
c = new provinceCN("安徽","","六安")
c.addCity("","六安市金安区")
c.addCity("","六安市裕安区")
c.addCity("","六安市")
c.addCity("","寿县")
c.addCity("","霍山县")
c.addCity("","霍邱县")
c.addCity("","舒城县")
c.addCity("","金寨县")
p1.addProvinces(c);
c = new provinceCN("安徽","","亳州")
c.addCity("","亳州市谯城区")
c.addCity("","亳州市")
c.addCity("","利辛县")
c.addCity("","涡阳县")
c.addCity("","蒙城县")
p1.addProvinces(c);
c = new provinceCN("安徽","","池州")
c.addCity("","池州市贵池区")
c.addCity("","池州市")
c.addCity("","东至县")
c.addCity("","石台县")
c.addCity("","青阳县")
p1.addProvinces(c);
c = new provinceCN("安徽","","宣城")
c.addCity("","宣城市宣州区")
c.addCity("","宣城市")
c.addCity("","宁国市")
c.addCity("","广德县")
c.addCity("","郎溪县")
c.addCity("","泾县")
c.addCity("","旌德县")
c.addCity("","绩溪县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","北京");
c = new provinceCN("北京","","北京")
c.addCity("","北京市朝阳区")
c.addCity("","北京市崇文区")
c.addCity("","北京市大兴区")
c.addCity("","北京市东城区")
c.addCity("","北京市房山区")
c.addCity("","北京市丰台区")
c.addCity("","北京市海淀区")
c.addCity("","北京市门头沟区")
c.addCity("","北京市平谷区")
c.addCity("","北京市石景山区")
c.addCity("","北京市顺义区")
c.addCity("","北京市通州区")
c.addCity("","北京市西城区")
c.addCity("","北京市宣武区")
c.addCity("","北京市昌平区")
c.addCity("","北京市怀柔区")
c.addCity("","北京市")
c.addCity("","密云县")
c.addCity("","延庆县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","福建");
c = new provinceCN("福建","","福州")
c.addCity("","长乐市")
c.addCity("","福州市仓山区")
c.addCity("","福州市晋安区")
c.addCity("","福州市马尾区")
c.addCity("","福州市台江区")
c.addCity("","福州市鼓楼区")
c.addCity("","福州市")
c.addCity("","福清市")
c.addCity("","闽侯县")
c.addCity("","闽清县")
c.addCity("","永泰县")
c.addCity("","连江县")
c.addCity("","罗源县")
c.addCity("","平潭县")
p1.addProvinces(c);
c = new provinceCN("福建","","厦门")
c.addCity("","厦门市海沧区")
c.addCity("","厦门市湖里区")
c.addCity("","厦门市集美区")
c.addCity("","厦门市思明区")
c.addCity("","厦门市同安区")
c.addCity("","厦门市翔安区")
c.addCity("","厦门市")
p1.addProvinces(c);
c = new provinceCN("福建","","三明")
c.addCity("","将乐县")
c.addCity("","三明市梅列区")
c.addCity("","三明市三元区")
c.addCity("","三明市")
c.addCity("","永安市")
c.addCity("","明溪县")
c.addCity("","大田县")
c.addCity("","宁化县")
c.addCity("","建宁县")
c.addCity("","沙县")
c.addCity("","尤溪县")
c.addCity("","清流县")
c.addCity("","泰宁县")
p1.addProvinces(c);
c = new provinceCN("福建","","莆田")
c.addCity("","莆田市城厢区")
c.addCity("","莆田市荔城区")
c.addCity("","莆田市秀屿区")
c.addCity("","莆田市涵江区")
c.addCity("","莆田市")
c.addCity("","仙游县")
p1.addProvinces(c);
c = new provinceCN("福建","","泉州")
c.addCity("","泉州市")
c.addCity("","泉州市丰泽区")
c.addCity("","泉州市鲤城区")
c.addCity("","泉州市洛江区")
c.addCity("","泉州市泉港区")
c.addCity("","石狮市")
c.addCity("","晋江市")
c.addCity("","南安市")
c.addCity("","惠安县")
c.addCity("","永春县")
c.addCity("","安溪县")
c.addCity("","德化县")
c.addCity("","金门县")
p1.addProvinces(c);
c = new provinceCN("福建","","漳州")
c.addCity("","漳州市龙文区")
c.addCity("","漳州市芗城区")
c.addCity("","漳州市")
c.addCity("","龙海市")
c.addCity("","平和县")
c.addCity("","南靖县")
c.addCity("","诏安县")
c.addCity("","漳浦县")
c.addCity("","华安县")
c.addCity("","东山县")
c.addCity("","长泰县")
c.addCity("","云霄县")
p1.addProvinces(c);
c = new provinceCN("福建","","南平")
c.addCity("","南平市延平区")
c.addCity("","南平市")
c.addCity("","建瓯市")
c.addCity("","邵武市")
c.addCity("","武夷山市")
c.addCity("","建阳市")
c.addCity("","松溪县")
c.addCity("","光泽县")
c.addCity("","顺昌县")
c.addCity("","浦城县")
c.addCity("","政和县")
p1.addProvinces(c);
c = new provinceCN("福建","","龙岩")
c.addCity("","龙岩市新罗区")
c.addCity("","龙岩市")
c.addCity("","漳平市")
c.addCity("","长汀县")
c.addCity("","武平县")
c.addCity("","上杭县")
c.addCity("","永定县")
c.addCity("","连城县")
p1.addProvinces(c);
c = new provinceCN("福建","","宁德")
c.addCity("","福安市")
c.addCity("","宁德市蕉城区")
c.addCity("","宁德市")
c.addCity("","福鼎市")
c.addCity("","寿宁县")
c.addCity("","霞浦县")
c.addCity("","柘荣县")
c.addCity("","屏南县")
c.addCity("","古田县")
c.addCity("","周宁县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","甘肃");
c = new provinceCN("甘肃","","甘南藏族自治州")
c.addCity("","合作市")
c.addCity("","临潭县")
c.addCity("","卓尼县")
c.addCity("","舟曲县")
c.addCity("","迭部县")
c.addCity("","玛曲县")
c.addCity("","碌曲县")
c.addCity("","夏河县")
p1.addProvinces(c);
c = new provinceCN("甘肃","","兰州")
c.addCity("","皋兰县")
c.addCity("","兰州市七里河区")
c.addCity("","兰州市安宁区")
c.addCity("","兰州市城关区")
c.addCity("","兰州市红古区")
c.addCity("","兰州市西固区")
c.addCity("","兰州市")
c.addCity("","永登县")
c.addCity("","榆中县")
p1.addProvinces(c);
c = new provinceCN("甘肃","","金昌")
c.addCity("","金昌市金川区")
c.addCity("","金昌市")
c.addCity("","永昌县")
p1.addProvinces(c);
c = new provinceCN("甘肃","","白银")
c.addCity("","白银市白银区")
c.addCity("","白银市平川区")
c.addCity("","白银市")
c.addCity("","靖远县")
c.addCity("","景泰县")
c.addCity("","会宁县")
p1.addProvinces(c);
c = new provinceCN("甘肃","","天水")
c.addCity("","甘谷县")
c.addCity("","天水市北道区")
c.addCity("","天水市秦城区")
c.addCity("","天水市")
c.addCity("","武山县")
c.addCity("","清水县")
c.addCity("","秦安县")
c.addCity("","张家川回族自治县")
p1.addProvinces(c);
c = new provinceCN("甘肃","","嘉峪关")
c.addCity("","嘉峪关市")
p1.addProvinces(c);
c = new provinceCN("甘肃","","武威")
c.addCity("","武威市凉州区")
c.addCity("","武威市")
c.addCity("","民勤县")
c.addCity("","古浪县")
c.addCity("","天祝藏族自治县")
p1.addProvinces(c);
c = new provinceCN("甘肃","","张掖")
c.addCity("","张掖市甘州区")
c.addCity("","张掖市")
c.addCity("","民乐县")
c.addCity("","山丹县")
c.addCity("","临泽县")
c.addCity("","高台县")
c.addCity("","肃南裕固族自治县")
p1.addProvinces(c);
c = new provinceCN("甘肃","","平凉")
c.addCity("","平凉市崆峒区")
c.addCity("","平凉市")
c.addCity("","灵台县")
c.addCity("","静宁县")
c.addCity("","崇信县")
c.addCity("","华亭县")
c.addCity("","泾川县")
c.addCity("","庄浪县")
p1.addProvinces(c);
c = new provinceCN("甘肃","","酒泉")
c.addCity("","酒泉市肃州区")
c.addCity("","酒泉市")
c.addCity("","玉门市")
c.addCity("","敦煌市")
c.addCity("","瓜州县")
c.addCity("","金塔县")
c.addCity("","阿克塞哈萨克族自治县")
c.addCity("","肃北蒙古族自治县")
p1.addProvinces(c);
c = new provinceCN("甘肃","","庆阳")
c.addCity("","庆阳市西峰区")
c.addCity("","庆阳市")
c.addCity("","庆城县")
c.addCity("","镇原县")
c.addCity("","合水县")
c.addCity("","华池县")
c.addCity("","环县")
c.addCity("","宁县")
c.addCity("","正宁县")
p1.addProvinces(c);
c = new provinceCN("甘肃","","定西")
c.addCity("","漳县")
c.addCity("","定西市安定区")
c.addCity("","定西市")
c.addCity("","岷县")
c.addCity("","渭源县")
c.addCity("","陇西县")
c.addCity("","通渭县")
c.addCity("","临洮县")
p1.addProvinces(c);
c = new provinceCN("甘肃","","陇南")
c.addCity("","陇南市")
c.addCity("","成县")
c.addCity("","礼县")
c.addCity("","康县")
c.addCity("","陇南市武都区")
c.addCity("","文县")
c.addCity("","两当县")
c.addCity("","徽县")
c.addCity("","宕昌县")
c.addCity("","西和县")
p1.addProvinces(c);
c = new provinceCN("甘肃","","临夏回族自治州")
c.addCity("","广河县")
c.addCity("","临夏市")
c.addCity("","临夏县")
c.addCity("","康乐县")
c.addCity("","永靖县")
c.addCity("","和政县")
c.addCity("","东乡族自治县")
c.addCity("","积石山保安族东乡族撒拉族自治县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","广西");
c = new provinceCN("广西","","百色")
c.addCity("","百色市右江区")
c.addCity("","百色市")
c.addCity("","凌云县")
c.addCity("","平果县")
c.addCity("","西林县")
c.addCity("","乐业县")
c.addCity("","德保县")
c.addCity("","田林县")
c.addCity("","田阳县")
c.addCity("","靖西县")
c.addCity("","田东县")
c.addCity("","那坡县")
c.addCity("","隆林各族自治县")
p1.addProvinces(c);
c = new provinceCN("广西","","南宁")
c.addCity("","南宁市钦南区")
c.addCity("","南宁市江南区")
c.addCity("","南宁市良庆区")
c.addCity("","南宁市青秀区")
c.addCity("","南宁市西乡塘区")
c.addCity("","南宁市兴宁区")
c.addCity("","南宁市钦北区")
c.addCity("","南宁市长洲区")
c.addCity("","南宁市蝶山区")
c.addCity("","南宁市万秀区")
c.addCity("","南宁市玉州区")
c.addCity("","南宁市")
c.addCity("","南宁市邕宁区")
c.addCity("","武鸣县")
c.addCity("","隆安县")
c.addCity("","马山县")
c.addCity("","上林县")
c.addCity("","宾阳县")
c.addCity("","横县")
p1.addProvinces(c);
c = new provinceCN("广西","","柳州")
c.addCity("","柳州市柳南区")
c.addCity("","柳州市城中区")
c.addCity("","柳州市柳北区")
c.addCity("","柳州市鱼峰区")
c.addCity("","柳州市")
c.addCity("","柳江县")
c.addCity("","柳城县")
c.addCity("","鹿寨县")
c.addCity("","融安县")
c.addCity("","融水苗族自治县")
c.addCity("","三江侗族自治县")
p1.addProvinces(c);
c = new provinceCN("广西","","桂林")
c.addCity("","桂林市象山区")
c.addCity("","桂林市叠彩区")
c.addCity("","桂林市七星区")
c.addCity("","桂林市秀峰区")
c.addCity("","桂林市雁山区")
c.addCity("","桂林市")
c.addCity("","阳朔县")
c.addCity("","临桂县")
c.addCity("","灵川县")
c.addCity("","全州县")
c.addCity("","平乐县")
c.addCity("","兴安县")
c.addCity("","灌阳县")
c.addCity("","荔蒲县")
c.addCity("","资源县")
c.addCity("","永福县")
c.addCity("","龙胜各族自治县")
c.addCity("","恭城瑶族自治县")
p1.addProvinces(c);
c = new provinceCN("广西","","梧州")
c.addCity("","藤县")
c.addCity("","梧州市")
c.addCity("","岑溪市")
c.addCity("","苍梧县")
c.addCity("","蒙山县")
p1.addProvinces(c);
c = new provinceCN("广西","","北海")
c.addCity("","北海市海城区")
c.addCity("","北海市铁山港区")
c.addCity("","北海市银海区")
c.addCity("","北海市")
c.addCity("","合浦县")
p1.addProvinces(c);
c = new provinceCN("广西","","防城港")
c.addCity("","防城港市防城区")
c.addCity("","防城港市港口区")
c.addCity("","防城港市")
c.addCity("","东兴市")
c.addCity("","上思县")
p1.addProvinces(c);
c = new provinceCN("广西","","钦州")
c.addCity("","浦北县")
c.addCity("","钦州市")
c.addCity("","灵山县")
p1.addProvinces(c);
c = new provinceCN("广西","","贵港")
c.addCity("","贵港市港北区")
c.addCity("","贵港市港南区")
c.addCity("","贵港市覃塘区")
c.addCity("","贵港市")
c.addCity("","桂平市")
c.addCity("","平南县")
p1.addProvinces(c);
c = new provinceCN("广西","","玉林")
c.addCity("","玉林市")
c.addCity("","北流市")
c.addCity("","容县")
c.addCity("","陆川县")
c.addCity("","博白县")
c.addCity("","兴业县")
p1.addProvinces(c);
c = new provinceCN("广西","","贺州")
c.addCity("","贺州市八步区")
c.addCity("","贺州市")
c.addCity("","钟山县")
c.addCity("","昭平县")
c.addCity("","富川瑶族自治县")
p1.addProvinces(c);
c = new provinceCN("广西","","河池")
c.addCity("","河池市金城江区")
c.addCity("","河池市")
c.addCity("","宜州市")
c.addCity("","天峨县")
c.addCity("","凤山县")
c.addCity("","南丹县")
c.addCity("","东兰县")
c.addCity("","都安瑶族自治县")
c.addCity("","罗城仫佬族自治县")
c.addCity("","巴马瑶族自治县")
c.addCity("","环江毛南族自治县")
c.addCity("","大化瑶族自治县")
p1.addProvinces(c);
c = new provinceCN("广西","","来宾")
c.addCity("","来宾市兴宾区")
c.addCity("","来宾市")
c.addCity("","合山市")
c.addCity("","象州县")
c.addCity("","武宣县")
c.addCity("","忻城县")
c.addCity("","金秀瑶族自治县")
p1.addProvinces(c);
c = new provinceCN("广西","","崇左")
c.addCity("","崇左市江洲区")
c.addCity("","崇左市")
c.addCity("","凭祥市")
c.addCity("","扶绥县")
c.addCity("","大新县")
c.addCity("","天等县")
c.addCity("","宁明县")
c.addCity("","龙州县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","贵州");
c = new provinceCN("贵州","","黔东南苗族侗族自治州")
c.addCity("","丹寨县")
c.addCity("","凯里市")
c.addCity("","施秉县")
c.addCity("","从江县")
c.addCity("","锦屏县")
c.addCity("","镇远县")
c.addCity("","麻江县")
c.addCity("","台江县")
c.addCity("","天柱县")
c.addCity("","黄平县")
c.addCity("","榕江县")
c.addCity("","剑河县")
c.addCity("","三穗县")
c.addCity("","雷山县")
c.addCity("","黎平县")
c.addCity("","岑巩县")
p1.addProvinces(c);
c = new provinceCN("贵州","","贵阳")
c.addCity("","清镇市")
c.addCity("","贵阳市南明区")
c.addCity("","贵阳市白云区")
c.addCity("","贵阳市花溪区")
c.addCity("","贵阳市乌当区")
c.addCity("","贵阳市小河区")
c.addCity("","贵阳市云岩区")
c.addCity("","贵阳市")
c.addCity("","开阳县")
c.addCity("","修文县")
c.addCity("","息烽县")
p1.addProvinces(c);
c = new provinceCN("贵州","","六盘水")
c.addCity("","六盘水市六枝特区")
c.addCity("","六盘水市钟山区")
c.addCity("","六盘水市")
c.addCity("","水城县")
c.addCity("","盘县")
c.addCity("","六枝特区")
p1.addProvinces(c);
c = new provinceCN("贵州","","遵义")
c.addCity("","仁怀市")
c.addCity("","遵义市红花岗区")
c.addCity("","遵义市汇川区")
c.addCity("","遵义市")
c.addCity("","赤水市")
c.addCity("","遵义县")
c.addCity("","绥阳县")
c.addCity("","桐梓县")
c.addCity("","习水县")
c.addCity("","凤冈县")
c.addCity("","正安县")
c.addCity("","余庆县")
c.addCity("","湄潭县")
c.addCity("","道真仡佬族苗族自治县")
c.addCity("","务川仡佬族苗族自治县")
p1.addProvinces(c);
c = new provinceCN("贵州","","安顺")
c.addCity("","安顺市西秀区")
c.addCity("","安顺市")
c.addCity("","普定县")
c.addCity("","平坝县")
c.addCity("","镇宁布依族苗族自治县")
c.addCity("","紫云苗族布依族自治县")
c.addCity("","关岭布依族苗族自治县")
p1.addProvinces(c);
c = new provinceCN("贵州","","铜仁")
c.addCity("","铜仁地区万山特区")
c.addCity("","铜仁市")
c.addCity("","德江县")
c.addCity("","江口县")
c.addCity("","思南县")
c.addCity("","石阡县")
c.addCity("","玉屏侗族自治县")
c.addCity("","松桃苗族自治县")
c.addCity("","印江土家族苗族自治县")
c.addCity("","沿河土家族自治县")
c.addCity("","万山特区")
p1.addProvinces(c);
c = new provinceCN("贵州","","毕节")
c.addCity("","毕节市")
c.addCity("","黔西县")
c.addCity("","大方县")
c.addCity("","织金县")
c.addCity("","金沙县")
c.addCity("","赫章县")
c.addCity("","纳雍县")
c.addCity("","威宁彝族回族苗族自治县")
p1.addProvinces(c);
c = new provinceCN("贵州","","黔西南布依族苗族自治州")
c.addCity("","兴义市")
c.addCity("","望谟县")
c.addCity("","兴仁县")
c.addCity("","普安县")
c.addCity("","册亨县")
c.addCity("","晴隆县")
c.addCity("","贞丰县")
c.addCity("","安龙县")
p1.addProvinces(c);
c = new provinceCN("贵州","","黔南布依族苗族自治州")
c.addCity("","都匀市")
c.addCity("","福泉市")
c.addCity("","贵定县")
c.addCity("","惠水县")
c.addCity("","罗甸县")
c.addCity("","瓮安县")
c.addCity("","荔波县")
c.addCity("","龙里县")
c.addCity("","平塘县")
c.addCity("","长顺县")
c.addCity("","独山县")
c.addCity("","三都水族自治县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","海南");
c = new provinceCN("海南","","保亭黎族苗族自治县")
c.addCity("","保亭黎族苗族自治县")
p1.addProvinces(c);
c = new provinceCN("海南","","南沙群岛")
c.addCity("","南沙群岛")
p1.addProvinces(c);
c = new provinceCN("海南","","西沙群岛")
c.addCity("","西沙群岛")
p1.addProvinces(c);
c = new provinceCN("海南","","中沙群岛的岛礁及其海域")
c.addCity("","中沙群岛的岛礁及其海域")
p1.addProvinces(c);
c = new provinceCN("海南","","海口")
c.addCity("","海口市龙华区")
c.addCity("","海口市美兰区")
c.addCity("","海口市琼山区")
c.addCity("","海口市秀英区")
c.addCity("","海口市")
p1.addProvinces(c);
c = new provinceCN("海南","","三亚")
c.addCity("","三亚市")
p1.addProvinces(c);
c = new provinceCN("海南","","五指山")
c.addCity("","五指山市")
p1.addProvinces(c);
c = new provinceCN("海南","","琼海")
c.addCity("","琼海市")
p1.addProvinces(c);
c = new provinceCN("海南","","儋州")
c.addCity("","儋州市")
p1.addProvinces(c);
c = new provinceCN("海南","","文昌")
c.addCity("","文昌市")
p1.addProvinces(c);
c = new provinceCN("海南","","万宁")
c.addCity("","万宁市")
p1.addProvinces(c);
c = new provinceCN("海南","","东方")
c.addCity("","东方市")
p1.addProvinces(c);
c = new provinceCN("海南","","澄迈县")
c.addCity("","澄迈县")
p1.addProvinces(c);
c = new provinceCN("海南","","定安县")
c.addCity("","定安县")
p1.addProvinces(c);
c = new provinceCN("海南","","屯昌县")
c.addCity("","屯昌县")
p1.addProvinces(c);
c = new provinceCN("海南","","临高县")
c.addCity("","临高县")
p1.addProvinces(c);
c = new provinceCN("海南","","白沙黎族自治县")
c.addCity("","白沙黎族自治县")
p1.addProvinces(c);
c = new provinceCN("海南","","昌江黎族自治县")
c.addCity("","昌江黎族自治县")
p1.addProvinces(c);
c = new provinceCN("海南","","乐东黎族自治县")
c.addCity("","乐东黎族自治县")
p1.addProvinces(c);
c = new provinceCN("海南","","陵水黎族自治县")
c.addCity("","陵水黎族自治县")
p1.addProvinces(c);
c = new provinceCN("海南","","琼中黎族苗族自治县")
c.addCity("","琼中黎族苗族自治县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","河北");
c = new provinceCN("河北","","石家庄")
c.addCity("","行唐县")
c.addCity("","石家庄市桥西区")
c.addCity("","石家庄市长安区")
c.addCity("","石家庄市井陉矿区")
c.addCity("","石家庄市桥东区")
c.addCity("","石家庄市新华区")
c.addCity("","石家庄市裕华区")
c.addCity("","石家庄市")
c.addCity("","辛集市")
c.addCity("","藁城市")
c.addCity("","晋州市")
c.addCity("","新乐市")
c.addCity("","鹿泉市")
c.addCity("","平山县")
c.addCity("","井陉县")
c.addCity("","栾城县")
c.addCity("","正定县")
c.addCity("","灵寿县")
c.addCity("","高邑县")
c.addCity("","赵县")
c.addCity("","赞皇县")
c.addCity("","深泽县")
c.addCity("","无极县")
c.addCity("","元氏县")
p1.addProvinces(c);
c = new provinceCN("河北","","唐山")
c.addCity("","迁西县")
c.addCity("","唐山市丰南区")
c.addCity("","唐山市丰润区")
c.addCity("","唐山市古冶区")
c.addCity("","唐山市开平区")
c.addCity("","唐山市路北区")
c.addCity("","唐山市路南区")
c.addCity("","唐山市")
c.addCity("","遵化市")
c.addCity("","迁安市")
c.addCity("","滦南县")
c.addCity("","玉田县")
c.addCity("","唐海县")
c.addCity("","乐亭县")
c.addCity("","滦县")
p1.addProvinces(c);
c = new provinceCN("河北","","秦皇岛")
c.addCity("","秦皇岛市北戴河区")
c.addCity("","秦皇岛市海港区")
c.addCity("","秦皇岛市山海关区")
c.addCity("","秦皇岛市")
c.addCity("","昌黎县")
c.addCity("","卢龙县")
c.addCity("","抚宁县")
c.addCity("","青龙满族自治县")
p1.addProvinces(c);
c = new provinceCN("河北","","邯郸")
c.addCity("","邯郸市丛台区")
c.addCity("","邯郸市峰峰矿区")
c.addCity("","邯郸市复兴区")
c.addCity("","邯郸市邯山区")
c.addCity("","邯郸市")
c.addCity("","武安市")
c.addCity("","邯郸县")
c.addCity("","永年县")
c.addCity("","曲周县")
c.addCity("","馆陶县")
c.addCity("","魏县")
c.addCity("","成安县")
c.addCity("","大名县")
c.addCity("","涉县")
c.addCity("","鸡泽县")
c.addCity("","邱县")
c.addCity("","广平县")
c.addCity("","肥乡县")
c.addCity("","临漳县")
c.addCity("","磁县")
p1.addProvinces(c);
c = new provinceCN("河北","","邢台")
c.addCity("","隆尧县")
c.addCity("","邢台市桥东区")
c.addCity("","邢台市桥西区")
c.addCity("","邢台市")
c.addCity("","南宫市")
c.addCity("","沙河市")
c.addCity("","邢台县")
c.addCity("","柏乡县")
c.addCity("","任县")
c.addCity("","清河县")
c.addCity("","宁晋县")
c.addCity("","威县")
c.addCity("","临城县")
c.addCity("","广宗县")
c.addCity("","临西县")
c.addCity("","内丘县")
c.addCity("","平乡县")
c.addCity("","巨鹿县")
c.addCity("","新河县")
c.addCity("","南和县")
p1.addProvinces(c);
c = new provinceCN("河北","","保定")
c.addCity("","安国市")
c.addCity("","望都县")
c.addCity("","保定市北市区")
c.addCity("","保定市南市区")
c.addCity("","保定市新市区")
c.addCity("","保定市")
c.addCity("","涿州市")
c.addCity("","定州市")
c.addCity("","高碑店市")
c.addCity("","满城县")
c.addCity("","清苑县")
c.addCity("","涞水县")
c.addCity("","阜平县")
c.addCity("","徐水县")
c.addCity("","定兴县")
c.addCity("","唐县")
c.addCity("","高阳县")
c.addCity("","容城县")
c.addCity("","涞源县")
c.addCity("","安新县")
c.addCity("","易县")
c.addCity("","曲阳县")
c.addCity("","蠡县")
c.addCity("","顺平县")
c.addCity("","博野县")
c.addCity("","雄县")
p1.addProvinces(c);
c = new provinceCN("河北","","张家口")
c.addCity("","张家口市桥东区")
c.addCity("","张家口市桥西区")
c.addCity("","张家口市下花园区")
c.addCity("","张家口市宣化区")
c.addCity("","张家口市")
c.addCity("","宣化县")
c.addCity("","康保县")
c.addCity("","张北县")
c.addCity("","阳原县")
c.addCity("","赤城县")
c.addCity("","沽源县")
c.addCity("","怀安县")
c.addCity("","怀来县")
c.addCity("","崇礼县")
c.addCity("","尚义县")
c.addCity("","蔚县")
c.addCity("","涿鹿县")
c.addCity("","万全县")
p1.addProvinces(c);
c = new provinceCN("河北","","承德")
c.addCity("","承德市双滦区")
c.addCity("","承德市双桥区")
c.addCity("","承德市鹰手营子矿区")
c.addCity("","承德市")
c.addCity("","承德县")
c.addCity("","兴隆县")
c.addCity("","隆化县")
c.addCity("","平泉县")
c.addCity("","滦平县")
c.addCity("","丰宁满族自治县")
c.addCity("","围场满族蒙古族自治县")
c.addCity("","宽城满族自治县")
p1.addProvinces(c);
c = new provinceCN("河北","","沧州")
c.addCity("","吴桥县")
c.addCity("","沧州市新华区")
c.addCity("","沧州市运河区")
c.addCity("","沧州市")
c.addCity("","泊头市")
c.addCity("","任丘市")
c.addCity("","黄骅市")
c.addCity("","河间市")
c.addCity("","沧县")
c.addCity("","青县")
c.addCity("","献县")
c.addCity("","东光县")
c.addCity("","海兴县")
c.addCity("","盐山县")
c.addCity("","肃宁县")
c.addCity("","南皮县")
c.addCity("","孟村回族自治县")
p1.addProvinces(c);
c = new provinceCN("河北","","廊坊")
c.addCity("","廊坊市安次区")
c.addCity("","廊坊市广阳区")
c.addCity("","廊坊市")
c.addCity("","霸州市")
c.addCity("","三河市")
c.addCity("","固安县")
c.addCity("","永清县")
c.addCity("","香河县")
c.addCity("","大城县")
c.addCity("","文安县")
c.addCity("","大厂回族自治县")
p1.addProvinces(c);
c = new provinceCN("河北","","衡水")
c.addCity("","衡水市")
c.addCity("","衡水市桃城区")
c.addCity("","冀州市")
c.addCity("","深州市")
c.addCity("","饶阳县")
c.addCity("","枣强县")
c.addCity("","故城县")
c.addCity("","阜城县")
c.addCity("","安平县")
c.addCity("","武邑县")
c.addCity("","景县")
c.addCity("","武强县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","河南");
c = new provinceCN("河南","","郑州")
c.addCity("","郑州市二七区")
c.addCity("","郑州市管城回族区")
c.addCity("","郑州市惠济区")
c.addCity("","郑州市金水区")
c.addCity("","郑州市上街区")
c.addCity("","郑州市中原区")
c.addCity("","郑州市")
c.addCity("","巩义市")
c.addCity("","新郑市")
c.addCity("","新密市")
c.addCity("","登封市")
c.addCity("","荥阳市")
c.addCity("","中牟县")
p1.addProvinces(c);
c = new provinceCN("河南","","鹤壁")
c.addCity("","鹤壁市鹤山区")
c.addCity("","鹤壁市淇滨区")
c.addCity("","鹤壁市山城区")
c.addCity("","鹤壁市")
c.addCity("","浚县")
c.addCity("","淇县")
p1.addProvinces(c);
c = new provinceCN("河南","","开封")
c.addCity("","开封市鼓楼区")
c.addCity("","开封市金明区")
c.addCity("","开封市龙亭区")
c.addCity("","开封市顺河回族区")
c.addCity("","开封市禹王台区")
c.addCity("","开封市")
c.addCity("","开封县")
c.addCity("","尉氏县")
c.addCity("","兰考县")
c.addCity("","杞县")
c.addCity("","通许县")
p1.addProvinces(c);
c = new provinceCN("河南","","洛阳")
c.addCity("","洛阳市廛河回族区")
c.addCity("","洛阳市吉利区")
c.addCity("","洛阳市涧西区")
c.addCity("","洛阳市老城区")
c.addCity("","洛阳市洛龙区")
c.addCity("","洛阳市西工区")
c.addCity("","洛阳市")
c.addCity("","偃师市")
c.addCity("","孟津县")
c.addCity("","汝阳县")
c.addCity("","伊川县")
c.addCity("","洛宁县")
c.addCity("","嵩县")
c.addCity("","宜阳县")
c.addCity("","新安县")
c.addCity("","栾川县")
p1.addProvinces(c);
c = new provinceCN("河南","","平顶山")
c.addCity("","平顶山市石龙区")
c.addCity("","平顶山市卫东区")
c.addCity("","平顶山市新华区")
c.addCity("","平顶山市湛河区")
c.addCity("","平顶山市")
c.addCity("","汝州市")
c.addCity("","舞钢市")
c.addCity("","宝丰县")
c.addCity("","叶县")
c.addCity("","郏县")
c.addCity("","鲁山县")
p1.addProvinces(c);
c = new provinceCN("河南","","焦作")
c.addCity("","焦作市解放区")
c.addCity("","焦作市马村区")
c.addCity("","焦作市山阳区")
c.addCity("","焦作市中站区")
c.addCity("","焦作市")
c.addCity("","沁阳市")
c.addCity("","孟州市")
c.addCity("","修武县")
c.addCity("","温县")
c.addCity("","武陟县")
c.addCity("","博爱县")
c.addCity("","济源市")
p1.addProvinces(c);
c = new provinceCN("河南","","新乡")
c.addCity("","封丘县")
c.addCity("","新乡市凤泉区")
c.addCity("","新乡市红旗区")
c.addCity("","新乡市牧野区")
c.addCity("","新乡市卫滨区")
c.addCity("","新乡市")
c.addCity("","卫辉市")
c.addCity("","辉县市")
c.addCity("","新乡县")
c.addCity("","获嘉县")
c.addCity("","原阳县")
c.addCity("","长垣县")
c.addCity("","延津县")
p1.addProvinces(c);
c = new provinceCN("河南","","安阳")
c.addCity("","安阳市北关区")
c.addCity("","安阳市龙安区")
c.addCity("","安阳市文峰区")
c.addCity("","安阳市殷都区")
c.addCity("","安阳市")
c.addCity("","林州市")
c.addCity("","安阳县")
c.addCity("","滑县")
c.addCity("","内黄县")
c.addCity("","汤阴县")
p1.addProvinces(c);
c = new provinceCN("河南","","濮阳")
c.addCity("","南乐县")
c.addCity("","濮阳市华龙区")
c.addCity("","濮阳市")
c.addCity("","濮阳县")
c.addCity("","台前县")
c.addCity("","清丰县")
c.addCity("","范县")
p1.addProvinces(c);
c = new provinceCN("河南","","许昌")
c.addCity("","许昌市魏都区")
c.addCity("","许昌市")
c.addCity("","禹州市")
c.addCity("","长葛市")
c.addCity("","许昌县")
c.addCity("","鄢陵县")
c.addCity("","襄城县")
p1.addProvinces(c);
c = new provinceCN("河南","","漯河")
c.addCity("","漯河市源汇区")
c.addCity("","漯河市召陵区")
c.addCity("","漯河市")
c.addCity("","漯河市郾城区")
c.addCity("","临颍县")
c.addCity("","舞阳县")
p1.addProvinces(c);
c = new provinceCN("河南","","三门峡")
c.addCity("","三门峡市湖滨区")
c.addCity("","三门峡市")
c.addCity("","义马市")
c.addCity("","灵宝市")
c.addCity("","渑池县")
c.addCity("","卢氏县")
c.addCity("","陕县")
p1.addProvinces(c);
c = new provinceCN("河南","","南阳")
c.addCity("","南阳市宛城区")
c.addCity("","南阳市卧龙区")
c.addCity("","南阳市")
c.addCity("","邓州市")
c.addCity("","桐柏县")
c.addCity("","方城县")
c.addCity("","淅川县")
c.addCity("","镇平县")
c.addCity("","唐河县")
c.addCity("","南召县")
c.addCity("","内乡县")
c.addCity("","新野县")
c.addCity("","社旗县")
c.addCity("","西峡县")
p1.addProvinces(c);
c = new provinceCN("河南","","商丘")
c.addCity("","宁陵县")
c.addCity("","商丘市梁园区")
c.addCity("","商丘市睢阳区")
c.addCity("","商丘市")
c.addCity("","永城市")
c.addCity("","虞城县")
c.addCity("","民权县")
c.addCity("","夏邑县")
c.addCity("","柘城县")
c.addCity("","睢县")
p1.addProvinces(c);
c = new provinceCN("河南","","信阳")
c.addCity("","商城县")
c.addCity("","信阳市平桥区")
c.addCity("","信阳市浉河区")
c.addCity("","信阳市")
c.addCity("","潢川县")
c.addCity("","淮滨县")
c.addCity("","息县")
c.addCity("","新县")
c.addCity("","固始县")
c.addCity("","罗山县")
c.addCity("","光山县")
p1.addProvinces(c);
c = new provinceCN("河南","","周口")
c.addCity("","沈丘县")
c.addCity("","周口市川汇区")
c.addCity("","周口市")
c.addCity("","项城市")
c.addCity("","商水县")
c.addCity("","淮阳县")
c.addCity("","太康县")
c.addCity("","鹿邑县")
c.addCity("","西华县")
c.addCity("","扶沟县")
c.addCity("","郸城县")
p1.addProvinces(c);
c = new provinceCN("河南","","驻马店")
c.addCity("","驻马店市驿城区")
c.addCity("","驻马店市")
c.addCity("","确山县")
c.addCity("","新蔡县")
c.addCity("","上蔡县")
c.addCity("","西平县")
c.addCity("","泌阳县")
c.addCity("","平舆县")
c.addCity("","汝南县")
c.addCity("","遂平县")
c.addCity("","正阳县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","黑龙江");
c = new provinceCN("黑龙江","","哈尔滨")
c.addCity("","哈尔滨市南岗区")
c.addCity("","哈尔滨市道里区")
c.addCity("","哈尔滨市道外区")
c.addCity("","哈尔滨市平房区")
c.addCity("","哈尔滨市松北区")
c.addCity("","哈尔滨市香坊区")
c.addCity("","哈尔滨市")
c.addCity("","哈尔滨市阿城区")
c.addCity("","尚志市")
c.addCity("","双城市")
c.addCity("","五常市")
c.addCity("","哈尔滨市呼兰区")
c.addCity("","方正县")
c.addCity("","宾县")
c.addCity("","依兰县")
c.addCity("","巴彦县")
c.addCity("","通河县")
c.addCity("","木兰县")
c.addCity("","延寿县")
p1.addProvinces(c);
c = new provinceCN("黑龙江","","齐齐哈尔")
c.addCity("","齐齐哈尔市富拉尔基区")
c.addCity("","齐齐哈尔市昂昂溪区")
c.addCity("","齐齐哈尔市建华区")
c.addCity("","齐齐哈尔市龙沙区")
c.addCity("","齐齐哈尔市梅里斯达斡尔族区")
c.addCity("","齐齐哈尔市碾子山区")
c.addCity("","齐齐哈尔市铁锋区")
c.addCity("","齐齐哈尔市")
c.addCity("","讷河市")
c.addCity("","富裕县")
c.addCity("","拜泉县")
c.addCity("","甘南县")
c.addCity("","依安县")
c.addCity("","克山县")
c.addCity("","泰来县")
c.addCity("","克东县")
c.addCity("","龙江县")
p1.addProvinces(c);
c = new provinceCN("黑龙江","","鹤岗")
c.addCity("","鹤岗市东山区")
c.addCity("","鹤岗市工农区")
c.addCity("","鹤岗市南山区")
c.addCity("","鹤岗市向阳区")
c.addCity("","鹤岗市兴安区")
c.addCity("","鹤岗市兴山区")
c.addCity("","鹤岗市")
c.addCity("","萝北县")
c.addCity("","绥滨县")
p1.addProvinces(c);
c = new provinceCN("黑龙江","","双鸭山")
c.addCity("","宝清县")
c.addCity("","双鸭山市宝山区")
c.addCity("","双鸭山市尖山区")
c.addCity("","双鸭山市岭东区")
c.addCity("","双鸭山市四方台区")
c.addCity("","双鸭山市")
c.addCity("","集贤县")
c.addCity("","友谊县")
c.addCity("","饶河县")
p1.addProvinces(c);
c = new provinceCN("黑龙江","","鸡西")
c.addCity("","鸡西市城子河区")
c.addCity("","鸡西市滴道区")
c.addCity("","鸡西市恒山区")
c.addCity("","鸡西市鸡冠区")
c.addCity("","鸡西市梨树区")
c.addCity("","鸡西市麻山区")
c.addCity("","鸡西市")
c.addCity("","密山市")
c.addCity("","虎林市")
c.addCity("","鸡东县")
p1.addProvinces(c);
c = new provinceCN("黑龙江","","大庆")
c.addCity("","肇源县")
c.addCity("","大庆市大同区")
c.addCity("","大庆市红岗区")
c.addCity("","大庆市龙凤区")
c.addCity("","大庆市让胡路区")
c.addCity("","大庆市萨尔图区")
c.addCity("","大庆市")
c.addCity("","林甸县")
c.addCity("","肇州县")
c.addCity("","杜尔伯特蒙古族自治县")
p1.addProvinces(c);
c = new provinceCN("黑龙江","","伊春")
c.addCity("","伊春市红星区")
c.addCity("","伊春市西林区")
c.addCity("","伊春市翠峦区")
c.addCity("","伊春市带岭区")
c.addCity("","伊春市金山屯区")
c.addCity("","伊春市美溪区")
c.addCity("","伊春市南岔区")
c.addCity("","伊春市上甘岭区")
c.addCity("","伊春市汤旺河区")
c.addCity("","伊春市乌马河区")
c.addCity("","伊春市乌伊岭区")
c.addCity("","伊春市五营区")
c.addCity("","伊春市新青区")
c.addCity("","伊春市伊春区")
c.addCity("","伊春市友好区")
c.addCity("","伊春市")
c.addCity("","铁力市")
c.addCity("","嘉荫县")
p1.addProvinces(c);
c = new provinceCN("黑龙江","","牡丹江")
c.addCity("","东宁县")
c.addCity("","牡丹江市爱民区")
c.addCity("","牡丹江市东安区")
c.addCity("","牡丹江市西安区")
c.addCity("","牡丹江市阳明区")
c.addCity("","牡丹江市")
c.addCity("","绥芬河市")
c.addCity("","宁安市")
c.addCity("","海林市")
c.addCity("","穆棱市")
c.addCity("","林口县")
p1.addProvinces(c);
c = new provinceCN("黑龙江","","佳木斯")
c.addCity("","佳木斯市前进区")
c.addCity("","佳木斯市东风区")
c.addCity("","佳木斯市郊区")
c.addCity("","佳木斯市向阳区")
c.addCity("","佳木斯市")
c.addCity("","同江市")
c.addCity("","富锦市")
c.addCity("","桦川县")
c.addCity("","抚远县")
c.addCity("","桦南县")
c.addCity("","汤原县")
p1.addProvinces(c);
c = new provinceCN("黑龙江","","七台河")
c.addCity("","七台河市茄子河区")
c.addCity("","七台河市桃山区")
c.addCity("","七台河市新兴区")
c.addCity("","七台河市")
c.addCity("","勃利县")
p1.addProvinces(c);
c = new provinceCN("黑龙江","","黑河")
c.addCity("","黑河市爱辉区")
c.addCity("","黑河市")
c.addCity("","北安市")
c.addCity("","五大连池市")
c.addCity("","逊克县")
c.addCity("","嫩江县")
c.addCity("","孙吴县")
p1.addProvinces(c);
c = new provinceCN("黑龙江","","绥化")
c.addCity("","绥化市北林区")
c.addCity("","绥化市")
c.addCity("","安达市")
c.addCity("","肇东市")
c.addCity("","海伦市")
c.addCity("","绥棱县")
c.addCity("","兰西县")
c.addCity("","明水县")
c.addCity("","青冈县")
c.addCity("","庆安县")
c.addCity("","望奎县")
p1.addProvinces(c);
c = new provinceCN("黑龙江","","大兴安岭")
c.addCity("","大兴安岭地区加格达奇区")
c.addCity("","大兴安岭市")
c.addCity("","大兴安岭地区呼中区")
c.addCity("","大兴安岭地区松岭区")
c.addCity("","大兴安岭地区新林区")
c.addCity("","呼玛县")
c.addCity("","塔河县")
c.addCity("","漠河县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","湖南");
c = new provinceCN("湖南","","长沙")
c.addCity("","宁乡县")
c.addCity("","长沙市芙蓉区")
c.addCity("","长沙市开福区")
c.addCity("","长沙市天心区")
c.addCity("","长沙市雨花区")
c.addCity("","长沙市岳麓区")
c.addCity("","长沙市")
c.addCity("","浏阳市")
c.addCity("","长沙县")
c.addCity("","望城县")
p1.addProvinces(c);
c = new provinceCN("湖南","","株洲")
c.addCity("","株洲市天元区")
c.addCity("","株洲市荷塘区")
c.addCity("","株洲市芦淞区")
c.addCity("","株洲市石峰区")
c.addCity("","株洲市")
c.addCity("","醴陵市")
c.addCity("","株洲县")
c.addCity("","炎陵县")
c.addCity("","茶陵县")
c.addCity("","攸县")
p1.addProvinces(c);
c = new provinceCN("湖南","","湘潭")
c.addCity("","湘潭市雨湖区")
c.addCity("","湘潭市岳塘区")
c.addCity("","湘潭市")
c.addCity("","湘乡市")
c.addCity("","韶山市")
c.addCity("","湘潭县")
p1.addProvinces(c);
c = new provinceCN("湖南","","衡阳")
c.addCity("","衡阳市南岳区")
c.addCity("","衡阳市石鼓区")
c.addCity("","衡阳市雁峰区")
c.addCity("","衡阳市蒸湘区")
c.addCity("","衡阳市珠晖区")
c.addCity("","衡阳市")
c.addCity("","耒阳市")
c.addCity("","常宁市")
c.addCity("","衡阳县")
c.addCity("","衡东县")
c.addCity("","衡山县")
c.addCity("","衡南县")
c.addCity("","祁东县")
p1.addProvinces(c);
c = new provinceCN("湖南","","邵阳")
c.addCity("","邵阳市北塔区")
c.addCity("","邵阳市大祥区")
c.addCity("","邵阳市双清区")
c.addCity("","邵阳市")
c.addCity("","武冈市")
c.addCity("","邵东县")
c.addCity("","洞口县")
c.addCity("","新邵县")
c.addCity("","绥宁县")
c.addCity("","新宁县")
c.addCity("","邵阳县")
c.addCity("","隆回县")
c.addCity("","城步苗族自治县")
p1.addProvinces(c);
c = new provinceCN("湖南","","岳阳")
c.addCity("","汨罗市")
c.addCity("","岳阳市君山区")
c.addCity("","岳阳市岳阳楼区")
c.addCity("","岳阳市云溪区")
c.addCity("","岳阳市")
c.addCity("","临湘市")
c.addCity("","岳阳县")
c.addCity("","湘阴县")
c.addCity("","平江县")
c.addCity("","华容县")
p1.addProvinces(c);
c = new provinceCN("湖南","","常德")
c.addCity("","安乡县")
c.addCity("","常德市鼎城区")
c.addCity("","常德市武陵区")
c.addCity("","常德市")
c.addCity("","津市市")
c.addCity("","澧县")
c.addCity("","临澧县")
c.addCity("","桃源县")
c.addCity("","汉寿县")
c.addCity("","石门县")
p1.addProvinces(c);
c = new provinceCN("湖南","","张家界")
c.addCity("","张家界市武陵源区")
c.addCity("","张家界市永定区")
c.addCity("","张家界市")
c.addCity("","慈利县")
c.addCity("","桑植县")
p1.addProvinces(c);
c = new provinceCN("湖南","","益阳")
c.addCity("","益阳市赫山区")
c.addCity("","益阳市资阳区")
c.addCity("","益阳市")
c.addCity("","沅江市")
c.addCity("","桃江县")
c.addCity("","南县")
c.addCity("","安化县")
p1.addProvinces(c);
c = new provinceCN("湖南","","郴州")
c.addCity("","郴州市")
c.addCity("","郴州市苏仙区")
c.addCity("","郴州市北湖区")
c.addCity("","资兴市")
c.addCity("","宜章县")
c.addCity("","汝城县")
c.addCity("","安仁县")
c.addCity("","嘉禾县")
c.addCity("","临武县")
c.addCity("","桂东县")
c.addCity("","永兴县")
c.addCity("","桂阳县")
p1.addProvinces(c);
c = new provinceCN("湖南","","永州")
c.addCity("","永州市冷水滩区")
c.addCity("","永州市零陵区")
c.addCity("","永州市")
c.addCity("","祁阳县")
c.addCity("","蓝山县")
c.addCity("","宁远县")
c.addCity("","新田县")
c.addCity("","东安县")
c.addCity("","江永县")
c.addCity("","道县")
c.addCity("","双牌县")
c.addCity("","江华瑶族自治县")
p1.addProvinces(c);
c = new provinceCN("湖南","","怀化")
c.addCity("","怀化市鹤城区")
c.addCity("","怀化市")
c.addCity("","洪江市")
c.addCity("","会同县")
c.addCity("","沅陵县")
c.addCity("","辰溪县")
c.addCity("","溆浦县")
c.addCity("","中方县")
c.addCity("","新晃侗族自治县")
c.addCity("","芷江侗族自治县")
c.addCity("","通道侗族自治县")
c.addCity("","靖州苗族侗族自治县")
c.addCity("","麻阳苗族自治县")
p1.addProvinces(c);
c = new provinceCN("湖南","","娄底")
c.addCity("","娄底市娄星区")
c.addCity("","娄底市")
c.addCity("","冷水江市")
c.addCity("","涟源市")
c.addCity("","新化县")
c.addCity("","双峰县")
p1.addProvinces(c);
c = new provinceCN("湖南","","湘西土家族苗族自治州")
c.addCity("","吉首市")
c.addCity("","古丈县")
c.addCity("","龙山县")
c.addCity("","永顺县")
c.addCity("","凤凰县")
c.addCity("","泸溪县")
c.addCity("","保靖县")
c.addCity("","花垣县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","吉林");
c = new provinceCN("吉林","","长春")
c.addCity("","德惠市")
c.addCity("","长春市南关区")
c.addCity("","长春市朝阳区")
c.addCity("","长春市二道区")
c.addCity("","长春市宽城区")
c.addCity("","长春市绿园区")
c.addCity("","长春市双阳区")
c.addCity("","长春市")
c.addCity("","九台市")
c.addCity("","榆树市")
c.addCity("","农安县")
p1.addProvinces(c);
c = new provinceCN("吉林","","吉林")
c.addCity("","吉林市昌邑区")
c.addCity("","吉林市船营区")
c.addCity("","吉林市丰满区")
c.addCity("","吉林市龙潭区")
c.addCity("","吉林市")
c.addCity("","舒兰市")
c.addCity("","桦甸市")
c.addCity("","蛟河市")
c.addCity("","磐石市")
c.addCity("","永吉县")
p1.addProvinces(c);
c = new provinceCN("吉林","","四平")
c.addCity("","双辽市")
c.addCity("","四平市铁西区")
c.addCity("","四平市铁东区")
c.addCity("","四平市")
c.addCity("","公主岭市")
c.addCity("","梨树县")
c.addCity("","伊通满族自治县")
p1.addProvinces(c);
c = new provinceCN("吉林","","辽源")
c.addCity("","辽源市龙山区")
c.addCity("","辽源市西安区")
c.addCity("","辽源市")
c.addCity("","东辽县")
c.addCity("","东丰县")
p1.addProvinces(c);
c = new provinceCN("吉林","","通化")
c.addCity("","通化市东昌区")
c.addCity("","通化市二道江区")
c.addCity("","通化市")
c.addCity("","梅河口市")
c.addCity("","集安市")
c.addCity("","通化县")
c.addCity("","辉南县")
c.addCity("","柳河县")
p1.addProvinces(c);
c = new provinceCN("吉林","","白山")
c.addCity("","白山市八道江区")
c.addCity("","白山市")
c.addCity("","临江市")
c.addCity("","靖宇县")
c.addCity("","抚松县")
c.addCity("","白山市江源区")
c.addCity("","长白朝鲜族自治县")
p1.addProvinces(c);
c = new provinceCN("吉林","","松原")
c.addCity("","松原市宁江区")
c.addCity("","松原市")
c.addCity("","乾安县")
c.addCity("","长岭县")
c.addCity("","扶余县")
c.addCity("","前郭尔罗斯蒙古族自治县")
p1.addProvinces(c);
c = new provinceCN("吉林","","白城")
c.addCity("","白城市洮北区")
c.addCity("","白城市")
c.addCity("","大安市")
c.addCity("","洮南市")
c.addCity("","镇赉县")
c.addCity("","通榆县")
p1.addProvinces(c);
c = new provinceCN("吉林","","延边朝鲜族自治州")
c.addCity("","延吉市")
c.addCity("","图们市")
c.addCity("","敦化市")
c.addCity("","龙井市")
c.addCity("","珲春市")
c.addCity("","和龙市")
c.addCity("","安图县")
c.addCity("","汪清县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","江苏");
c = new provinceCN("江苏","","南京")
c.addCity("","南京市白下区")
c.addCity("","南京市鼓楼区")
c.addCity("","南京市建邺区")
c.addCity("","南京市江宁区")
c.addCity("","南京市六合区")
c.addCity("","南京市浦口区")
c.addCity("","南京市栖霞区")
c.addCity("","南京市秦淮区")
c.addCity("","南京市下关区")
c.addCity("","南京市玄武区")
c.addCity("","南京市雨花台区")
c.addCity("","南京市")
c.addCity("","溧水县")
c.addCity("","高淳县")
p1.addProvinces(c);
c = new provinceCN("江苏","","徐州")
c.addCity("","新沂市")
c.addCity("","徐州市鼓楼区")
c.addCity("","徐州市贾汪区")
c.addCity("","徐州市泉山区")
c.addCity("","徐州市云龙区")
c.addCity("","徐州市九里区")
c.addCity("","徐州市")
c.addCity("","邳州市")
c.addCity("","铜山县")
c.addCity("","睢宁县")
c.addCity("","沛县")
c.addCity("","丰县")
p1.addProvinces(c);
c = new provinceCN("江苏","","连云港")
c.addCity("","连云港市连云区")
c.addCity("","连云港市新浦区")
c.addCity("","连云港市海州区")
c.addCity("","连云港市")
c.addCity("","东海县")
c.addCity("","灌云县")
c.addCity("","赣榆县")
c.addCity("","灌南县")
p1.addProvinces(c);
c = new provinceCN("江苏","","淮安")
c.addCity("","涟水县")
c.addCity("","淮安市楚州区")
c.addCity("","淮安市淮阴区")
c.addCity("","淮安市清河区")
c.addCity("","淮安市清浦区")
c.addCity("","淮安市")
c.addCity("","洪泽县")
c.addCity("","金湖县")
c.addCity("","盱眙县")
p1.addProvinces(c);
c = new provinceCN("江苏","","宿迁")
c.addCity("","宿迁市宿城区")
c.addCity("","宿迁市")
c.addCity("","宿迁市宿豫区")
c.addCity("","沭阳县")
c.addCity("","泗阳县")
c.addCity("","泗洪县")
p1.addProvinces(c);
c = new provinceCN("江苏","","盐城")
c.addCity("","东台市")
c.addCity("","盐城市亭湖区")
c.addCity("","盐城市")
c.addCity("","大丰市")
c.addCity("","盐城市盐都区")
c.addCity("","建湖县")
c.addCity("","响水县")
c.addCity("","阜宁县")
c.addCity("","射阳县")
c.addCity("","滨海县")
p1.addProvinces(c);
c = new provinceCN("江苏","","扬州")
c.addCity("","扬州市广陵区")
c.addCity("","扬州市邗江区")
c.addCity("","扬州市维扬区")
c.addCity("","扬州市")
c.addCity("","高邮市")
c.addCity("","江都市")
c.addCity("","仪征市")
c.addCity("","宝应县")
p1.addProvinces(c);
c = new provinceCN("江苏","","泰州")
c.addCity("","泰州市高港区")
c.addCity("","泰州市海陵区")
c.addCity("","泰州市")
c.addCity("","泰兴市")
c.addCity("","姜堰市")
c.addCity("","靖江市")
c.addCity("","兴化市")
p1.addProvinces(c);
c = new provinceCN("江苏","","南通")
c.addCity("","南通市崇川区")
c.addCity("","南通市港闸区")
c.addCity("","南通市")
c.addCity("","如皋市")
c.addCity("","通州市")
c.addCity("","海门市")
c.addCity("","启东市")
c.addCity("","海安县")
c.addCity("","如东县")
p1.addProvinces(c);
c = new provinceCN("江苏","","镇江")
c.addCity("","镇江市丹徒区")
c.addCity("","镇江市润州区")
c.addCity("","镇江市京口区")
c.addCity("","镇江市")
c.addCity("","丹阳市")
c.addCity("","扬中市")
c.addCity("","句容市")
p1.addProvinces(c);
c = new provinceCN("江苏","","常州")
c.addCity("","溧阳市")
c.addCity("","常州市钟楼区")
c.addCity("","常州市戚墅堰区")
c.addCity("","常州市天宁区")
c.addCity("","常州市武进区")
c.addCity("","常州市新北区")
c.addCity("","常州市")
c.addCity("","金坛市")
p1.addProvinces(c);
c = new provinceCN("江苏","","无锡")
c.addCity("","无锡市北塘区")
c.addCity("","无锡市滨湖区")
c.addCity("","无锡市崇安区")
c.addCity("","无锡市惠山区")
c.addCity("","无锡市南长区")
c.addCity("","无锡市锡山区")
c.addCity("","无锡市")
c.addCity("","江阴市")
c.addCity("","宜兴市")
p1.addProvinces(c);
c = new provinceCN("江苏","","苏州")
c.addCity("","苏州市沧浪区")
c.addCity("","苏州市虎丘区")
c.addCity("","苏州市金阊区")
c.addCity("","苏州市平江区")
c.addCity("","苏州市吴中区")
c.addCity("","苏州市相城区")
c.addCity("","苏州市")
c.addCity("","常熟市")
c.addCity("","张家港市")
c.addCity("","太仓市")
c.addCity("","昆山市")
c.addCity("","吴江市")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","辽宁");
c = new provinceCN("辽宁","","本溪")
c.addCity("","本溪市南芬区")
c.addCity("","本溪市平山区")
c.addCity("","本溪市溪湖区")
c.addCity("","本溪市明山区")
c.addCity("","本溪市")
c.addCity("","本溪满族自治县")
c.addCity("","桓仁满族自治县")
p1.addProvinces(c);
c = new provinceCN("辽宁","","沈阳")
c.addCity("","沈阳市大东区")
c.addCity("","沈阳市东陵区")
c.addCity("","沈阳市和平区")
c.addCity("","沈阳市皇姑区")
c.addCity("","沈阳市沈北新区*")
c.addCity("","沈阳市沈河区")
c.addCity("","沈阳市苏家屯区")
c.addCity("","沈阳市于洪区")
c.addCity("","沈阳市铁西区")
c.addCity("","沈阳市")
c.addCity("","新民市")
c.addCity("","法库县")
c.addCity("","辽中县")
c.addCity("","康平县")
p1.addProvinces(c);
c = new provinceCN("辽宁","","大连")
c.addCity("","大连市甘井子区")
c.addCity("","大连市金州区")
c.addCity("","大连市沙河口区")
c.addCity("","大连市西岗区")
c.addCity("","大连市中山区")
c.addCity("","大连市旅顺口区")
c.addCity("","大连市")
c.addCity("","瓦房店市")
c.addCity("","普兰店市")
c.addCity("","庄河市")
c.addCity("","长海县")
p1.addProvinces(c);
c = new provinceCN("辽宁","","鞍山")
c.addCity("","鞍山市立山区")
c.addCity("","鞍山市千山区")
c.addCity("","鞍山市铁东区")
c.addCity("","鞍山市铁西区")
c.addCity("","鞍山市")
c.addCity("","海城市")
c.addCity("","台安县")
c.addCity("","岫岩满族自治县")
p1.addProvinces(c);
c = new provinceCN("辽宁","","抚顺")
c.addCity("","抚顺市东洲区")
c.addCity("","抚顺市顺城区")
c.addCity("","抚顺市新抚区")
c.addCity("","抚顺市望花区")
c.addCity("","抚顺市")
c.addCity("","抚顺县")
c.addCity("","清原满族自治县")
c.addCity("","新宾满族自治县")
p1.addProvinces(c);
c = new provinceCN("辽宁","","丹东")
c.addCity("","丹东市元宝区")
c.addCity("","丹东市振安区")
c.addCity("","丹东市振兴区")
c.addCity("","丹东市")
c.addCity("","东港市")
c.addCity("","凤城市")
c.addCity("","宽甸满族自治县")
p1.addProvinces(c);
c = new provinceCN("辽宁","","锦州")
c.addCity("","北镇市")
c.addCity("","锦州市古塔区")
c.addCity("","锦州市凌河区")
c.addCity("","锦州市太和区")
c.addCity("","锦州市")
c.addCity("","凌海市")
c.addCity("","黑山县")
c.addCity("","义县")
p1.addProvinces(c);
c = new provinceCN("辽宁","","葫芦岛")
c.addCity("","葫芦岛市连山区")
c.addCity("","葫芦岛市南票区")
c.addCity("","葫芦岛市龙港区")
c.addCity("","葫芦岛市")
c.addCity("","兴城市")
c.addCity("","绥中县")
c.addCity("","建昌县")
p1.addProvinces(c);
c = new provinceCN("辽宁","","营口")
c.addCity("","营口市鲅鱼圈区")
c.addCity("","营口市老边区")
c.addCity("","营口市西市区")
c.addCity("","营口市站前区")
c.addCity("","营口市")
c.addCity("","大石桥市")
c.addCity("","盖州市")
p1.addProvinces(c);
c = new provinceCN("辽宁","","盘锦")
c.addCity("","盘锦市")
c.addCity("","盘锦市兴隆台区")
c.addCity("","盘锦市双台子区")
c.addCity("","盘山县")
c.addCity("","大洼县")
p1.addProvinces(c);
c = new provinceCN("辽宁","","阜新")
c.addCity("","阜新市海州区")
c.addCity("","阜新市清河门区")
c.addCity("","阜新市太平区")
c.addCity("","阜新市细河区")
c.addCity("","阜新市新邱区")
c.addCity("","阜新市")
c.addCity("","彰武县")
c.addCity("","阜新蒙古族自治县")
p1.addProvinces(c);
c = new provinceCN("辽宁","","辽阳")
c.addCity("","辽阳市白塔区")
c.addCity("","辽阳市弓长岭区")
c.addCity("","辽阳市宏伟区")
c.addCity("","辽阳市太子河区")
c.addCity("","辽阳市文圣区")
c.addCity("","辽阳市")
c.addCity("","灯塔市")
c.addCity("","辽阳县")
p1.addProvinces(c);
c = new provinceCN("辽宁","","铁岭")
c.addCity("","铁岭市清河区")
c.addCity("","铁岭市银州区")
c.addCity("","铁岭市")
c.addCity("","调兵山市")
c.addCity("","开原市")
c.addCity("","铁岭县")
c.addCity("","昌图县")
c.addCity("","西丰县")
p1.addProvinces(c);
c = new provinceCN("辽宁","","朝阳")
c.addCity("","朝阳市龙城区")
c.addCity("","朝阳市双塔区")
c.addCity("","朝阳市")
c.addCity("","凌源市")
c.addCity("","北票市")
c.addCity("","朝阳县")
c.addCity("","建平县")
c.addCity("","喀喇沁左翼蒙古族自治县")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);
var p1 = new provincesList("CN","","内蒙古");
c = new provinceCN("内蒙古","","乌兰察布")
c.addCity("","乌兰察布市")
c.addCity("","乌兰察布市集宁区")
c.addCity("","丰镇市")
c.addCity("","兴和县")
c.addCity("","卓资县")
c.addCity("","商都县")
c.addCity("","凉城县")
c.addCity("","化德县")
c.addCity("","察哈尔右翼前旗")
c.addCity("","察哈尔右翼中旗")
c.addCity("","察哈尔右翼后旗")
c.addCity("","四子王旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","","锡林郭勒盟")
c.addCity("","锡林浩特市")
c.addCity("","二连浩特市")
c.addCity("","多伦县")
c.addCity("","阿巴嘎旗")
c.addCity("","西乌珠穆沁旗")
c.addCity("","东乌珠穆沁旗")
c.addCity("","苏尼特左旗")
c.addCity("","苏尼特右旗")
c.addCity("","太仆寺旗")
c.addCity("","正镶白旗")
c.addCity("","正蓝旗")
c.addCity("","镶黄旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","","巴彦淖尔")
c.addCity("","乌拉特后旗")
c.addCity("","巴彦淖尔市")
c.addCity("","巴彦淖尔市临河区")
c.addCity("","五原县")
c.addCity("","磴口县")
c.addCity("","杭锦后旗")
c.addCity("","乌拉特中旗")
c.addCity("","乌拉特前旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","","阿拉善盟")
c.addCity("","阿拉善左旗")
c.addCity("","阿拉善右旗")
c.addCity("","额济纳旗")

p1.addProvinces(c);
c = new provinceCN("内蒙古","","兴安盟")
c.addCity("","乌兰浩特市")
c.addCity("","阿尔山市")
c.addCity("","突泉县")
c.addCity("","扎赉特旗")
c.addCity("","科尔沁右翼前旗")
c.addCity("","科尔沁右翼中旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","","呼和浩特")
c.addCity("","呼和浩特市赛罕区")
c.addCity("","呼和浩特市新城区")
c.addCity("","呼和浩特市玉泉区")
c.addCity("","呼和浩特市回民区")
c.addCity("","呼和浩特市")
c.addCity("","托克托县")
c.addCity("","清水河县")
c.addCity("","武川县")
c.addCity("","和林格尔县")
c.addCity("","土默特左旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","","包头")
c.addCity("","包头市东河区")
c.addCity("","包头市九原区")
c.addCity("","包头市昆都仑区")
c.addCity("","包头市青山区")
c.addCity("","包头市石拐区")
c.addCity("","包头市白云矿区")
c.addCity("","包头市")
c.addCity("","固阳县")
c.addCity("","土默特右旗")
c.addCity("","达尔罕茂明安联合旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","","乌海")
c.addCity("","乌海市海勃湾区")
c.addCity("","乌海市海南区")
c.addCity("","乌海市乌达区")
c.addCity("","乌海市")
p1.addProvinces(c);
c = new provinceCN("内蒙古","","赤峰")
c.addCity("","巴林右旗")
c.addCity("","赤峰市红山区")
c.addCity("","赤峰市松山区")
c.addCity("","赤峰市元宝山区")
c.addCity("","赤峰市")
c.addCity("","宁城县")
c.addCity("","林西县")
c.addCity("","喀喇沁旗")
c.addCity("","巴林左旗")
c.addCity("","敖汉旗")
c.addCity("","阿鲁科尔沁旗")
c.addCity("","翁牛特旗")
c.addCity("","克什克腾旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","","通辽")
c.addCity("","通辽市科尔沁区")
c.addCity("","通辽市")
c.addCity("","霍林郭勒市")
c.addCity("","开鲁县")
c.addCity("","科尔沁左翼中旗")
c.addCity("","科尔沁左翼后旗")
c.addCity("","库伦旗")
c.addCity("","奈曼旗")
c.addCity("","扎鲁特旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","","鄂尔多斯")
c.addCity("","乌审旗")
c.addCity("","鄂尔多斯市东胜区")
c.addCity("","鄂尔多斯市")
c.addCity("","准格尔旗")
c.addCity("","伊金霍洛旗")
c.addCity("","鄂托克旗")
c.addCity("","鄂托克前旗")
c.addCity("","杭锦旗")
c.addCity("","达拉特旗")
p1.addProvinces(c);
c = new provinceCN("内蒙古","","呼伦贝尔")
c.addCity("","鄂温克族自治旗")
c.addCity("","呼伦贝尔市海拉尔区")
c.addCity("","呼伦贝尔市")
c.addCity("","满洲里市")
c.addCity("","牙克石市")
c.addCity("","扎兰屯市")
c.addCity("","根河市")
c.addCity("","额尔古纳市")
c.addCity("","陈巴尔虎旗")
c.addCity("","阿荣旗")
c.addCity("","新巴尔虎左旗")
c.addCity("","新巴尔虎右旗")
c.addCity("","鄂伦春自治旗")
c.addCity("","莫力达瓦达斡尔族自治旗")
p1.addProvinces(c);
provincesListArr = provincesListArr.concat(p1);





//新建活动 添加问题




// JavaScript Document
//
//ajax初始化
//

var xmlHttp=false;
function getAjax(){ 
     try{
	      xmlHttp=new  ActiveXObject("Msxml2.XMLHTTP");
	    }
	    catch(e){
	       try{
	         xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	       }catch(e2){
	          xmlHttp = false; 
	       } 
	    }
	   if(!xmlHttp && typeof XMLHttpRequest!= 'undefined'){
	         xmlHttp = new XMLHttpRequest();
	   }
	   return xmlHttp;	    
}
function getValue(){	
	var bool=null;
    if(xmlHttp.readyState==4){
  	  if(xmlHttp.status == 200){
    	bool=xmlHttp.responseText;
	  }
    }
    return bool;
}
//
//去掉左右空格
//
function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
}
//
//电话验证
//
function ifPhone(str)
{
	slen=getLength(str);
	if (slen==0) return false;
	for (i=0; i<slen; i++){
		cc = str.charAt(i);
		if ((cc <"0" || cc >"9") && cc != "-" && cc!="+" && cc!="(" && cc !=")" && cc !="/")
		{
			return false;
		}
	}
	return true;
}
/**
以下是第三类
*/
//建立者:任勇
//加入了汉字的长度判断
// c-1 getLength(String)
function getLength(str){
	var templen=str.length;
	if(navigator.appName=='Netscape') return templen;
	for(var i=0;i<str.length;i++){
    		var rstr=escape(str.substring(i,i+1)); 
    		if (rstr.substring(0,2)=="%u"){ 
       			templen++;
    		} 
  	}
	return templen;
}
//
//邮箱验证
//
function isMail(str){
	var regu=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	if(regu.test(str)){
		return true;
	}else{
		return false;
	}
}
//
//活动类型删除事件
//obj,操作类型 local，访问根url  cla,要删除的类型
//
function ac_TypeDel(obj,local,cla){
	if(!confirm("确定要删除吗")){
		return;
	}
	var type;
	for (var i = 0; i < obj.options.length; i++) {        
       if (obj.options[i].selected == true) {
       	  type=obj.options[i]; 
          break;        
       }        
    }
	if(type.value!=""){
		xmlHttp=getAjax();
		var url=local+"/ac/acTypeDel.do?id="+type.value+"&type="+cla;
	    xmlHttp.open("GET",url,false);
	    xmlHttp.onreadystatechange=getValue;
	    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=GBK");
	    xmlHttp.send(null);
	    if(getValue()!=null&&getValue()!=""){
	    	 //为选项删除节点
		    obj.removeChild(type);
		    alert("删除成功！");
	    }else
	    	alert("此选项已被占用不能删除！");
	    xmlHttp=false;
	}else{
		alert("请选择要删除的类型");
	}
}
//
//活动类型添加事件
//
function ac_TypeAdd(obj,local){
	if(trim(obj.value)==""||trim(obj.value)==null){
		alert("添加内容不能为空!");
		obj.value="";
		return;
	}
	var activitiesType=document.getElementById("activitiesType");
	for(var i=0;i<activitiesType.options.length;i++){
		if(obj.value==activitiesType.options[i].text){
			alert("此类型已存在");
			return;
		}
	}
	xmlHttp=getAjax();
	var url=local+"/ac/acTypeAdd.do?typeName="+escape(escape(obj.value));
    xmlHttp.open("GET",url,false);
    xmlHttp.onreadystatechange=getValue;
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=GBK");
    xmlHttp.send(null);
    if(getValue()!=null&&getValue()!=""){
    	 //为选项添加节点
	    var option = document.createElement("option");
	    var text = document.createTextNode(obj.value);
	    option.appendChild(text);
	    document.getElementById("activitiesType").appendChild(option);
	    obj.value="";
	    option.selected=true;
	    option.value=getValue();
	    alert("添加成功！");
    }else
    	alert("添加失败！");
    xmlHttp=false;
}
//
//活动对象添加事件
//
function ac_ObjectAdd(obj,local){
	if(trim(obj.value)==""||trim(obj.value)==null){
		alert("添加对象不能为空!");
		obj.value="";
		return;
	}
	var activitiesObject=document.getElementById("activitiesObject");
	for(var i=0;i<activitiesObject.options.length;i++){
		if(obj.value==activitiesObject.options[i].text){
			alert("此对象已存在");
			return;
		}
	}
	xmlHttp=getAjax();
	var url=local+"/ac/acObjectAdd.do?objectName="+escape(escape(obj.value));
    xmlHttp.open("GET",url,false);
    xmlHttp.onreadystatechange=getValue;
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=GBK");
    xmlHttp.send(null);
    if(getValue()!=null&&getValue()!=""){
    	 //为选项添加节点
	    var option = document.createElement("option");
	    var text = document.createTextNode(obj.value);
	    option.appendChild(text);
	    document.getElementById("activitiesObject").appendChild(option);
	    obj.value="";
	    option.selected=true;
	    option.value=getValue();
	    alert("添加成功！");
    }else
    	alert("添加失败！");
    xmlHttp=false;
}
//
//活动品牌添加事件
//
function ac_BrandAdd(obj,local){
	if(trim(obj.value)==""||trim(obj.value)==null){
		alert("添加品牌不能为空!");
		obj.value="";
		return;
	}
	var activitiesBrand=document.getElementById("activitiesBrand");
	for(var i=0;i<activitiesBrand.options.length;i++){
		if(obj.value==activitiesBrand.options[i].text){
			alert("此品牌已存在");
			return;
		}
	}
	xmlHttp=getAjax();
	var typeName=escape(escape(obj.value));
	var url=local+"/ac/acBrandAdd.do?brandName="+typeName;
    xmlHttp.open("GET",url,false);
    xmlHttp.onreadystatechange=getValue;
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=GBK");
    xmlHttp.send(null);
    if(getValue()!=null&&getValue()!=""){
    	 //为选项添加节点
	    var option = document.createElement("option");
	    var text = document.createTextNode(obj.value);
	    option.appendChild(text);
	    document.getElementById("activitiesBrand").appendChild(option);
	    obj.value="";
	    option.selected=true;
	    option.value=getValue();
	    alert("添加成功！");
    }else
    	alert("添加失败！");
    xmlHttp=false;
}

//
//活动范围添加事件
//
function ac_BoundAdd(obj,local){
	if(trim(obj.value)==""||trim(obj.value)==null){
		alert("添加范围不能为空!");
		obj.value="";
		return;
	}
	var activitiesBound=document.getElementById("activitiesBound");
	for(var i=0;i<activitiesBound.options.length;i++){
		if(obj.value==activitiesBound.options[i].text){
			alert("此范围已存在");
			return;
		}
	}
	xmlHttp=getAjax();
	var url=local+"/ac/acBoundAdd.do?boundName="+escape(escape(obj.value));
    xmlHttp.open("GET",url,false);
    xmlHttp.onreadystatechange=getValue;
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=GBK");
    xmlHttp.send(null);
    if(getValue()!=null&&getValue()!=""){
    	 //为选项添加节点
	    var option = document.createElement("option");
	    var text = document.createTextNode(obj.value);
	    option.appendChild(text);
	    document.getElementById("activitiesBound").appendChild(option);
	    obj.value="";
	    option.selected=true;
	    option.value=getValue();
	    alert("添加成功！");
    }else
    	alert("添加失败！");
    xmlHttp=false;
}
function myFather(){
	alert("get");
}
//显示发布申请
function showChannelList(local){
 	var url = local+"/cms/channel/treeCmsChannelSingleSelect.do?selectNodeNo=";
	var retValue = window.showModalDialog(url,window,"dialogWidth:500px;dialogHeight:500px;center:yes;");
	if( retValue!=null ){
		document.getElementById("channelId").value=retValue[0];
		document.getElementById("channelName").value=retValue[1];
	}
}
//显示模板申请
function showTemplateList(local){
 	var url = local+"/ac/acTemplate.do";
	var retValue = window.showModalDialog(url,window,"dialogWidth:500px;dialogHeight:500px;center:yes;");
	if( retValue!=null ){
		document.getElementById("templateId").value=retValue[0];
		document.getElementById("templateName").value=retValue[1];
	}
}
/*兼容的在节点位置插入HTML代码的函数
*where：插入在哪里,BeforeBegin表示插入在标签之前，AfterBegin表示插入在标签之后，BeforeEnd表示在标签结束前，AfterEnd表示在标签结束后
* el：需要操作的节点
* html：需要插入的HTML代码
*/
function insertHtml(where, el, html)
{
    where = where.toLowerCase();
    //IE
    if(el.insertAdjacentHTML)
    {
        switch(where)
        {
            case "beforebegin":
                el.insertAdjacentHTML('BeforeBegin', html);
                return el.previousSibling;
            case "afterbegin":
                el.insertAdjacentHTML('AfterBegin', html);
                return el.firstChild;
            case "beforeend":
                el.insertAdjacentHTML('BeforeEnd', html);
                return el.lastChild;
            case "afterend":
                el.insertAdjacentHTML('AfterEnd', html);
                return el.nextSibling;
        }
        throw '无效的位置"' + where + '"';
    }
    //Fifefox
    var range = el.ownerDocument.createRange();
    var frag;
    switch(where)
    {
        case "beforebegin":
            range.setStartBefore(el);
            frag = range.createContextualFragment(html);
            el.parentNode.insertBefore(frag, el);
            return el.previousSibling;
        case "afterbegin":
            if(el.firstChild){
                range.setStartBefore(el.firstChild);
                frag = range.createContextualFragment(html);
                el.insertBefore(frag, el.firstChild);
                return el.firstChild;
            }else{
                el.innerHTML = html;
                return el.firstChild;
            }
        case "beforeend":
            if(el.lastChild){
                range.setStartAfter(el.lastChild);
                frag = range.createContextualFragment(html);
                el.appendChild(frag);
                return el.lastChild;
            }else{
                el.innerHTML = html;
                return el.lastChild;
            }
        case "afterend":
            range.setStartAfter(el);
            frag = range.createContextualFragment(html);
            el.parentNode.insertBefore(frag, el.nextSibling);
            return el.nextSibling;
    }
        throw '无效的位置"' + where + '"';
}
//
//判断相同的选项
//
function sameQuest(obj){
	var mytable=obj.parentNode.parentNode.parentNode.parentNode;
	var options=new Array();
	var trs=mytable.rows;
	for(var k=0;k<trs.length;k++){
		var tds=trs[k].cells;
		for(var j=0;j<tds.length;j++){
			if(tds[j].id=="option"){
				options[options.length]=tds[j].children[0];
				options[options.length]=tds[j].children[1];
			}
		}
	}
	for(var i=0;i<options.length;i++){
		if(options[i]==obj)
			continue;
		else if(options[i].value!=""&&options[i].value==obj.value){
			alert("是否确认添加重复选项");
			return;
		}
	}
}
//
// 兼容IE FF的ByName方法
//
function elementsByName(tag, name){
	var returns = document.getElementsByName(name);
	if(returns.length > 0) return returns;
	returns = new Array();
	var e = document.getElementsByTagName(tag);
	for(var i = 0; i < e.length; i++){
		if(e[i].getAttribute("name") == name){
			returns[returns.length] = e[i];
	  }
	}
	return returns;
}
//
//添加问题事件
//
var sign=0;
function addQuestion(){
		if(!confirm("确定要添加问题吗？")){
			return;
		}
   		var str='<table id="table'+sign+'" width="100%"  border="0" align="center" cellpadding="5" cellspacing="0" bgcolor="#ffffff">';
	    str+='<tr align="left" bgcolor="#ffffff">';
	    str+='	<td style="border-bottom:1px solid #c9dca6;width:160px;" align="right">问题标题：</td>';
        str+=' 	  <td style="border-bottom:1px solid #c9dca6;width:auto;"> <input name="questList['+sign+'].questionTitle" type="text"  maxlength="50" title="" maxlength="50">     <img src="images/menu_shanwen.gif" class="hand" type="button" value="删除问题" onclick="delQuestion(this)" style="position:absolute;margin-top:-3px;" class="hand"/></td>';
        str+='  </tr>';
		str+='<tr align="left" bgcolor="#ffffff">';
	    str+='	<td style="border-bottom:1px solid #c9dca6;width:160px;color:#fff;" align="right">　</td>';
        str+=' 	  <td style="border-bottom:1px solid #c9dca6;width:auto;color:#ff6600;">最大长度不超过200字符</td>';
        str+='  </tr>';
		str+='<tbody>';
        str+=' <tr align="left" bgcolor="#ffffff" >';
        str+='   <td style="border-bottom:1px solid #c9dca6;" align="right">问题展现方式：</td>';
        str+='    <td style="border-bottom:1px solid #c9dca6;"><input name="questList['+sign+'].typeName" type="radio" value="单选" onClick="quControl(1,this)" checked>单选';
  		str+='		<input name="questList['+sign+'].typeName" type="radio" value="多选" onClick="quControl(1,this)"/>多选';
		str+='	    <!--<input name="questList['+sign+'].typeName" type="radio" value="填空"  onClick="quControl(2,this)"/>填空-->';
		str+='		<!--<input name="questList['+sign+'].typeName" type="radio" value="单选加填空" onClick="quControl(3,this)"/>单选加填空-->';
		str+='		<!--<input name="questList['+sign+'].typeName" type="radio" value="多选加填空" onClick="quControl(3,this)"/>多选加填空-->';
		str+='		<input name="questList['+sign+'].typeName" type="radio" value="填空" onClick="quControl(2,this)"/>填空';
		str+='	</td>';
        str+=' </tr>';
        str+='</tbody>';
        str+='<tbody>';
        str+=' <tr align="left" bgcolor="#ffffff" >';
        str+='   <td style="border-bottom:1px solid #c9dca6;" rowspan="3" align="right" valign="top">选项内容形式一：</td>';
        str+='   <td id="option">A. <input onblur="sameQuest(this)" name="questList['+sign+'].optionA" type="text" class="input280" maxlength="50">';
        str+='       B. <input onblur="sameQuest(this)" name="questList['+sign+'].optionB" type="text" class="input280" maxlength="50"></td>';
        str+=' </tr>';
        str+=' <tr align="left" bgcolor="#ffffff" >';
        str+='   <td id="option">C. <input onblur="sameQuest(this)" name="questList['+sign+'].optionC" type="text" class="input280" maxlength="50">';
        str+='       D. <input onblur="sameQuest(this)" name="questList['+sign+'].optionD" type="text" class="input280" maxlength="50"></td>';
        str+=' </tr>';
        str+=' <tr align="left" bgcolor="#ffffff" >';
        str+='   <td style="border-bottom:1px solid #c9dca6;" id="option">E. <input onblur="sameQuest(this)" name="questList['+sign+'].optionE" type="text" class="input280" maxlength="50">';
        str+='       F. <input onblur="sameQuest(this)" name="questList['+sign+'].optionF" type="text" class="input280" maxlength="50"　" style="margin-left:3px;"></td>';
        str+=' </tr>';
        str+='</tbody>';
        str+='<tbody  style="display: none;">';
        str+=' <tr align="left" bgcolor="#ffffff" >';
        str+='   <td style="border-bottom:1px solid #c9dca6;" align="right" valign="top">选项内容形式二：</td>';
        str+='   <td style="border-bottom:1px solid #c9dca6;"><textarea name="questList['+sign+'].answer" cols="60" rows="4"></textarea></td>';
        str+=' </tr>';
        str+='</tbody>';
        str+=' <tr align="left" bgcolor="#ffffff" >';
        str+='   <td style="border-bottom:1px solid #c9dca6;" align="right">　</td>';
        str+='  <td style="border-bottom:1px solid #c9dca6;color:#ff6600;">';
        str+='       最大长度不超过100字符';
        str+='   </td>';
        str+=' </tr>';

		str+=' <tr align="left" bgcolor="#ffffff" >';
        str+='   <td style="border-bottom:1px solid #c9dca6;" align="right"> 是否必选： </td>';
        str+='  <td style="border-bottom:1px solid #c9dca6;"><input name="questList['+sign+'].isMustAnswer" type="radio" value="true" checked>是';
        str+='       <input name="questList['+sign+'].isMustAnswer" type="radio" value="false">否';
        str+='   </td>';
        str+=' </tr>';
        str+=' </table>';
	    //document.getElementById("test").insertAdjacentHTML("beforeBegin",str);
	    insertHtml('beforebegin',document.getElementById("test"),str);
	    sign++;
}
//
//修改问题事件
//
var index=0;//计数器
var edit=0;
function editQuestion(editindex){
		if(index==0)
			edit=editindex;
		if(!confirm("确定要添加问题吗？")){
			return;
		}
   		var str='<table id="table'+sign+'" width="100%"  border="0" align="center" cellpadding="5" cellspacing="0" bgcolor="#ffffff">';
	    str+='<tr align="left" bgcolor="#ffffff">';
	    str+='	<td style="border-bottom:1px solid #c9dca6;width:160px;"  align="right">问题标题：</td>';
        str+=' 	  <td style="border-bottom:1px solid #c9dca6;width:auto;"> <input name="questList['+sign+'].questionTitle" type="text" class="input280" maxlength="50" title="请输入选项内容形式不超过50字符" maxlength="50">     <img src="images/menu_shanwen.gif" class="hand" type="button" value="删除问题" onclick="delQuestion(this)" style="position:absolute;margin-top:-3px;" class="hand"/></td>';
        str+='  </tr>';
		str+='<tbody>';
        str+=' <tr align="left" bgcolor="#ffffff" >';
        str+='   <td style="border-bottom:1px solid #c9dca6;" align="right">问题展现方式：</td>';
        str+='    <td style="border-bottom:1px solid #c9dca6;"><input name="questList['+sign+'].typeName" type="radio" value="单选" onClick="quControl(1,this)" checked>单选';
  		str+='		<input name="questList['+sign+'].typeName" type="radio" value="多选" onClick="quControl(1,this)"/>多选';
		str+='	    <!--<input name="questList['+sign+'].typeName" type="radio" value="填空"  onClick="quControl(2,this)"/>填空-->';
		str+='		<!--<input name="questList['+sign+'].typeName" type="radio" value="单选加填空" onClick="quControl(3,this)"/>单选加填空-->';
		str+='		<!--<input name="questList['+sign+'].typeName" type="radio" value="多选加填空" onClick="quControl(3,this)"/>多选加填空-->';
		str+='		<input name="questList['+sign+'].typeName" type="radio" value="评论" onClick="quControl(2,this)"/>评论';
		str+='	</td>';
        str+=' </tr>';
        str+='</tbody>';
        str+='<tbody>';
        str+=' <tr align="left" bgcolor="#ffffff" >';
        str+='   <td style="border-bottom:1px solid #c9dca6;" rowspan="3" align="right" valign="top">选项内容形式一：</td>';
        str+='   <td id="option">A. <input onblur="sameQuest(this)" name="questList['+sign+'].optionA" type="text" class="input280" maxlength="50">';
        str+='       B. <input onblur="sameQuest(this)" name="questList['+sign+'].optionB" type="text" class="input280" maxlength="50"></td>';
        str+=' </tr>';
        str+=' <tr align="left" bgcolor="#ffffff" >';
        str+='   <td id="option">C. <input onblur="sameQuest(this)" name="questList['+sign+'].optionC" type="text" class="input280" maxlength="50">';
        str+='       D. <input onblur="sameQuest(this)" name="questList['+sign+'].optionD" type="text" class="input280" maxlength="50"></td>';
        str+=' </tr>';
        str+=' <tr align="left" bgcolor="#ffffff" >';
        str+='   <td style="border-bottom:1px solid #c9dca6;" id="option">E. <input onblur="sameQuest(this)" name="questList['+sign+'].optionE" type="text" class="input280" maxlength="50">';
        str+='       F. <input onblur="sameQuest(this)" name="questList['+sign+'].optionF" type="text" class="input280" maxlength="50"></td>';
        str+=' </tr>';
        str+='</tbody>';
        str+='<tbody  style="display: none;">';
        str+=' <tr align="left" bgcolor="#ffffff" >';
        str+='   <td style="border-bottom:1px solid #c9dca6;" align="right" valign="top">选项内容形式二：</td>';
        str+='   <td style="border-bottom:1px solid #c9dca6;"><textarea name="questList['+sign+'].answer" cols="60" rows="4"></textarea></td>';
        str+=' </tr>';
        str+='</tbody>';
        str+=' <tr align="left" bgcolor="#ffffff" >';
        str+='   <td style="border-bottom:1px solid #c9dca6;" align="right"> 是否必选项： </td>';
        str+='  <td style="border-bottom:1px solid #c9dca6;"><input name="questList['+sign+'].isMustAnswer" type="radio" value="true" checked>是';
        str+='       <input name="questList['+sign+'].isMustAnswer" type="radio" value="false">否';
        str+='   </td>';
        str+=' </tr>';
        str+=' </table>';
	    //document.getElementById("test").insertAdjacentHTML("beforeBegin",str);
	    insertHtml('beforebegin',document.getElementById("test"),str);
	    edit++;
	    index++;
}
//
//添加删除问题
//
function delQuestion(obj){
	if(confirm("确定要删除此问题吗？")){
		var tab=obj.parentNode.parentNode.parentNode.parentNode;
		tab.parentNode.removeChild(tab);
	}
	return;
}
//
//修改删除问题
//
function delQuestionEdit(obj,id,local){
	if(confirm("确定要删除此问题吗？")){
		var tab=obj.parentNode.parentNode.parentNode.parentNode;
		
		xmlHttp=getAjax();
		var url=local+"/ac/acQuestDel.do?id="+id;
	    xmlHttp.open("GET",url,false);
	    xmlHttp.onreadystatechange=getValue;
	    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=GBK");
	    xmlHttp.send(null);
	    if(getValue()!=null&&getValue()!=""){
	    	tab.parentNode.removeChild(tab);
		    alert("删除成功！");
	    }else
	    	alert("删除失败！");
	    xmlHttp=false;
	}
	return;
}
//
//问题展现方式控制
//
function quControl(num,obj){
	var op_tbody=obj.parentNode.parentNode.parentNode.nextSibling;
	var con_tbody=op_tbody.nextSibling;
	switch(num){
	  	case 1://单选|多选
	   		op_tbody.style.display="";
	   		con_tbody.style.display="none";
	   		break;
	  	case 2://填空|评论
	    	op_tbody.style.display="none";
	   		con_tbody.style.display="";
	   		break;
	   	case 3://单选加填空|对选加填空
	    	op_tbody.style.display="";
	   		con_tbody.style.display="";
	   		break;
	}
}
//
//添加操作控制
//
function subControl(str){
	var activitiesName=document.getElementsByName("activitiesName")[0];//活动名称
	var beginTime=document.getElementsByName("beginTime")[0];//开始时间
	var endTime=document.getElementsByName("endTime")[0];//结束时间
	var description=document.getElementsByName("description")[0];//活动描述
	var telephone=document.getElementsByName("telephone")[0];//活动电话
	var email=document.getElementsByName("email")[0];//活动邮箱
	var boundId=document.getElementsByName("boundId")[0];//活动范围主键
	var brandId=document.getElementsByName("brandId")[0];//品牌id
	var objectId=document.getElementsByName("objectId")[0];//对象id
	var typeId=document.getElementsByName("typeId")[0];//活动类型Id
	var pubLevel=document.getElementsByName("pubLevel")[0];//发布级别
	var templateId=document.getElementsByName("templateId")[0];//模板id
	var channelId=document.getElementsByName("channelId")[0];//频道id
	var functionInfo=document.getElementsByName("functionInfo")[0];//活动说明
	var areaMark=document.getElementsByName("areaMark")[0];//地区
	if(trim(activitiesName.value)==""){
		alert("请填写活动名称");
		activitiesName.focus();
		return false;
	}
	if(typeId.value==""){
		alert("请选择活动类型");
		typeId.focus();
		return false;
	}
	if(objectId.value==""){
		alert("请选择活动对象");
		objectId.focus();
		return false;
	}
	if(beginTime.value==""){
		alert("请选择活动开始时间");
		beginTime.focus();
		return false;
	}
	if(endTime.value==""){
		alert("请选择活动结束时间");
		endTime.focus();
		return false;
	}
	var beginDate=beginTime.value.replace("-","");    
    var endDate=endTime.value.replace("-","");
	if(beginDate>endDate){
		alert("时间范围不符合逻辑");
		beginTime.focus();
		return false;
	}
	if(trim(description.value)==""){
		alert("请填写活动描述");
		description.focus();
		return false;
	}
	if(description.value.length>1000){
		alert("活动描述不能超过1000字");
		description.focus();
		return false;
	}
	if(trim(channelId.value)==""){
		alert("请选择发布频道");
		document.getElementById("channelName").focus();
		return false;
	}
	if(trim(templateId.value)==""){
		alert("请选择发布模板");
		document.getElementById("templateName").focus();
		return false;
	}
	if(trim(telephone.value)==""){
		alert("请填写活动电话");
		telephone.focus();
		return false;
	}
	if(!ifPhone(telephone.value)){
		alert("请填写正确的电话号码");
		telephone.focus();
		return false;
	}
	if(trim(email.value)==""){
		alert("请填写活动邮箱");
		email.focus();
		return false;
	}
	if(!isMail(email.value)){
		alert("请填写正确的邮箱格式");
		email.focus();
		return false;
	}
	if(trim(functionInfo.value)==""){
		alert("请填写活动内容");
		functionInfo.focus();
		return false;
	}
	if(functionInfo.value.length>1000){
		alert("活动内容不能超过1000字");
		functionInfo.focus();
		return false;
	}
	if(str=="pre"){
		document.getElementById("acForm").action="acPreview.do";
		document.getElementById("acForm").target="_brank";
	}
	if(str=="sub"){
		document.getElementById("acForm").action="acCreat.do";
		document.getElementById("acForm").target="_self";
	}
	
	if(areaMark.checked==true){
		var embody=document.getElementsByName("embody");
		for(var i=0;i<embody.length;i++){
			if(embody[i].value=="省市"&&embody[i].checked==true){
				if(document.getElementById("provinceCN1").value==""||document.getElementById("provinceCN1").value=="省份"){
					alert("请选择省市");
					document.getElementById("provinceCN1").focus();
					return false;
				}
			}else if(embody[i].value=="地市"&&embody[i].checked==true){
				if(document.getElementById("provinceCN").value==""||document.getElementById("provinceCN").value=="省份"){
					alert("请选择省份");
					document.getElementById("provinceCN").focus();
					return false;
				}
				if(document.getElementById("capitalCN").value==""||document.getElementById("capitalCN").value=="地级市"){
					alert("请选择地级市");
					document.getElementById("capitalCN").focus();
					return false;
				}
			}
		}
	}
	return true;
}
//
//修改操作控制
//
function editControl(str){
	var activitiesName=document.getElementsByName("activitiesName")[0];//活动名称
	var beginTime=document.getElementsByName("beginTime")[0];//开始时间
	var endTime=document.getElementsByName("endTime")[0];//结束时间
	var description=document.getElementsByName("description")[0];//活动描述
	var telephone=document.getElementsByName("telephone")[0];//活动电话
	var email=document.getElementsByName("email")[0];//活动邮箱
	var boundId=document.getElementsByName("boundId")[0];//活动范围主键
	var brandId=document.getElementsByName("brandId")[0];//品牌id
	var objectId=document.getElementsByName("objectId")[0];//对象id
	var typeId=document.getElementsByName("typeId")[0];//活动类型Id
	var pubLevel=document.getElementsByName("pubLevel")[0];//发布级别
	var templateId=document.getElementsByName("templateId")[0];//模板id
	var channelId=document.getElementsByName("channelId")[0];//频道id
	var functionInfo=document.getElementsByName("functionInfo")[0];//活动说明
	var areaMark=document.getElementsByName("areaMark")[0];//地区
	if(trim(activitiesName.value)==""){
		alert("请填写活动名称");
		activitiesName.focus();
		return false;
	}
	if(typeId.value==""){
		alert("请选择活动类型");
		typeId.focus();
		return false;
	}
	if(objectId.value==""){
		alert("请选择活动对象");
		objectId.focus();
		return false;
	}
	if(beginTime.value==""){
		alert("请选择活动开始时间");
		beginTime.focus();
		return false;
	}
	if(endTime.value==""){
		alert("请选择活动结束时间");
		endTime.focus();
		return false;
	}
	var beginDate=beginTime.value.replace("-","");    
    var endDate=endTime.value.replace("-","");
	if(beginDate>endDate){
		alert("时间范围不符合逻辑");
		beginTime.focus();
		return false;
	}
	if(trim(description.value)==""){
		alert("请填写活动描述");
		description.focus();
		return false;
	}
	if(description.value.length>1000){
		alert("活动描述不能超过1000字");
		description.focus();
		return false;
	}
	if(trim(channelId.value)==""){
		alert("请选择发布频道");
		document.getElementById("channelName").focus();
		return false;
	}
	if(trim(templateId.value)==""){
		alert("请选择发布模板");
		document.getElementById("templateName").focus();
		return false;
	}
	if(trim(telephone.value)==""){
		alert("请填写活动电话");
		telephone.focus();
		return false;
	}
	if(!ifPhone(telephone.value)){
		alert("请填写正确的电话号码");
		telephone.focus();
		return false;
	}
	if(trim(email.value)==""){
		alert("请填写活动邮箱");
		email.focus();
		return false;
	}
	if(!isMail(email.value)){
		alert("请填写正确的邮箱格式");
		email.focus();
		return false;
	}
	if(trim(functionInfo.value)==""){
		alert("请填写活动内容");
		functionInfo.focus();
		return false;
	}
	if(functionInfo.value.length>1000){
		alert("活动内容不能超过1000字");
		functionInfo.focus();
		return false;
	}
	if(str=="pre"){
		document.getElementById("acForm").action="acPreview.do";
		document.getElementById("acForm").target="_brank";
	}
	if(str=="sub"){
		document.getElementById("acForm").action="doAcFailedEdit.do";
		document.getElementById("acForm").target="_self";
	}
	
	if(areaMark.checked==true){
		var embody=document.getElementsByName("embody");
		for(var i=0;i<embody.length;i++){
			if(embody[i].value=="省市"&&embody[i].checked==true){
				if(document.getElementById("provinceCN1").value==""||document.getElementById("provinceCN1").value=="省份"){
					alert("请选择省市");
					document.getElementById("provinceCN1").focus();
					return false;
				}
			}else if(embody[i].value=="地市"&&embody[i].checked==true){
				if(document.getElementById("provinceCN").value==""||document.getElementById("provinceCN").value=="省份"){
					alert("请选择省份");
					document.getElementById("provinceCN").focus();
					return false;
				}
				if(document.getElementById("capitalCN").value==""||document.getElementById("capitalCN").value=="地级市"){
					alert("请选择地级市");
					document.getElementById("capitalCN").focus();
					return false;
				}
			}
		}
	}
	return true;
}
//
//判断地区隐藏显现
//
function areaDis(obj){
	if(obj.checked==true){
		var embody=document.getElementsByName("embody");
		for(var i=0;i<embody.length;i++){
			if(embody[i].value=="省市"&&embody[i].checked==true){
				document.getElementById("provinceCN1").disabled=false;
				document.getElementById("provinceCN").disabled=true;
				document.getElementById("capitalCN").disabled=true;
			}else if(embody[i].value=="地市"&&embody[i].checked==true){
				document.getElementById("provinceCN1").disabled=true;
				document.getElementById("provinceCN").disabled=false;
				document.getElementById("capitalCN").disabled=false;
			}else if(embody[i].value=="全国"&&embody[i].checked==true){
				document.getElementById("provinceCN1").disabled=true;
				document.getElementById("provinceCN").disabled=true;
				document.getElementById("capitalCN").disabled=true;
			}
		}
	}else{
		document.getElementById("provinceCN1").disabled=true;
		document.getElementById("provinceCN").disabled=true;
		document.getElementById("capitalCN").disabled=true;
	}
}
//
//重置清空地区
//
function resetArea(){
	document.getElementById("provinceCN1").disabled=true;
	document.getElementById("provinceCN").disabled=true;
	document.getElementById("capitalCN").disabled=true;
}
/*兼容的在节点位置插入HTML代码的函数
*where：插入在哪里,BeforeBegin表示插入在标签之前，AfterBegin表示插入在标签之后，BeforeEnd表示在标签结束前，AfterEnd表示在标签结束后
* el：需要操作的节点
* html：需要插入的HTML代码
*/
function insertHtml(where, el, html)
{
    where = where.toLowerCase();
    //IE
    if(el.insertAdjacentHTML)
    {
        switch(where)
        {
            case "beforebegin":
                el.insertAdjacentHTML('BeforeBegin', html);
                return el.previousSibling;
            case "afterbegin":
                el.insertAdjacentHTML('AfterBegin', html);
                return el.firstChild;
            case "beforeend":
                el.insertAdjacentHTML('BeforeEnd', html);
                return el.lastChild;
            case "afterend":
                el.insertAdjacentHTML('AfterEnd', html);
                return el.nextSibling;
        }
        throw '无效的位置"' + where + '"';
    }
    //Fifefox
    var range = el.ownerDocument.createRange();
    var frag;
    switch(where)
    {
        case "beforebegin":
            range.setStartBefore(el);
            frag = range.createContextualFragment(html);
            el.parentNode.insertBefore(frag, el);
            return el.previousSibling;
        case "afterbegin":
            if(el.firstChild){
                range.setStartBefore(el.firstChild);
                frag = range.createContextualFragment(html);
                el.insertBefore(frag, el.firstChild);
                return el.firstChild;
            }else{
                el.innerHTML = html;
                return el.firstChild;
            }
        case "beforeend":
            if(el.lastChild){
                range.setStartAfter(el.lastChild);
                frag = range.createContextualFragment(html);
                el.appendChild(frag);
                return el.lastChild;
            }else{
                el.innerHTML = html;
                return el.lastChild;
            }
        case "afterend":
            range.setStartAfter(el);
            frag = range.createContextualFragment(html);
            el.parentNode.insertBefore(frag, el.nextSibling);
            return el.nextSibling;
    }
        throw '无效的位置"' + where + '"';
}





// JavaScript Document


var gdCtrl = new Object();
var goSelectTag = new Array();
var gcGray = "#808080";
var gcToggle = "#ffff00";
var gcBG = "#eeeeee";
var gdCurDate = new Date();
var giYear = gdCurDate.getFullYear();
var giMonth = gdCurDate.getMonth()+1;
var giDay = gdCurDate.getDate();
function fPopCalendar(popCtrl, dateCtrl){
  event.cancelBubble=true;
  gdCtrl = dateCtrl;
  fSetYearMon(giYear, giMonth);
  var point = fGetXY(popCtrl);
  with (VicPopCal.style) {
  	left = point.x;
	top  = point.y+popCtrl.offsetHeight+1;
	width = VicPopCal.offsetWidth;
	height = VicPopCal.offsetHeight;
	fToggleTags(point);
	visibility = 'visible';
  }  VicPopCal.focus();
}
function fSetDate(iYear, iMonth, iDay){
  if(iMonth<10)
     iMonth='0'+iMonth;
  if(iDay<10)
     iDay='0'+iDay;
  gdCtrl.value = iYear+"-"+iMonth+"-"+iDay;
  fHideCalendar();
}
function fHideCalendar(){
  VicPopCal.style.visibility = "hidden";
  for (i in goSelectTag)
  	// goSelectTag[i].style.visibility = "visible";
  goSelectTag.length = 0;
}
function fSetSelected(aCell){
  var iOffset = 0;
  var iYear = parseInt(tbSelYear.value);
  var iMonth = parseInt(tbSelMonth.value);
  aCell.bgColor = gcBG;
  with (aCell.children["cellText"]){
  	var iDay = parseInt(innerText);
  	if (color==gcGray)
		iOffset = (Victor<10)?-1:1;
	iMonth += iOffset;
	if (iMonth<1) {
		iYear--;
		iMonth = 12;
	}else if (iMonth>12){
		iYear++;
		iMonth = 1;
	}
  }  fSetDate(iYear, iMonth, iDay);
}
function Point(iX, iY){
	this.x = iX;
	this.y = iY;
}
function fBuildCal(iYear, iMonth) {
  var aMonth=new Array();
  for(i=1;i<7;i++)
  	aMonth[i]=new Array(i);
  var dCalDate=new Date(iYear, iMonth-1, 1);
  var iDayOfFirst=dCalDate.getDay();
  var iDaysInMonth=new Date(iYear, iMonth, 0).getDate();
  var iOffsetLast=new Date(iYear, iMonth-1, 0).getDate()-iDayOfFirst+1;
  var iDate = 1;  var iNext = 1;  for (d = 0; d < 7; d++)
	aMonth[1][d] = (d<iDayOfFirst)?-(iOffsetLast+d):iDate++;
  for (w = 2; w < 7; w++)
  	for (d = 0; d < 7; d++)
		aMonth[w][d] = (iDate<=iDaysInMonth)?iDate++:-(iNext++);
  return aMonth;
}
function fDrawCal(iYear, iMonth, iCellHeight, iDateTextSize) {
  var WeekDay = new Array("日","一","二","三","四","五","六");
  var styleTD = " bgcolor='"+gcBG+"' bordercolor='"+gcBG+"' valign='middle' align='center' height='"+iCellHeight+"' style='font:bold "+iDateTextSize+" 宋体;";
          with (document) {
	write("<tr>");
	for(i=0; i<7; i++)
		write("<td "+styleTD+" color:#990000' >" + WeekDay[i] + "</td>");
	write("</tr>");
  	for (w = 1; w < 7; w++) {
		write("<tr>");
		for (d = 0; d < 7; d++) {
			write("<td id=calCell "+styleTD+"cursor:hand;' onMouseOver='this.bgColor=gcToggle' onMouseOut='this.bgColor=gcBG' onclick='fSetSelected(this)'>");			write("<font id=cellText Victor='Liming Weng'> </font>");			write("</td>")		}
		write("</tr>");
	}
  }
}
function fUpdateCal(iYear, iMonth) {
  myMonth = fBuildCal(iYear, iMonth);
  var i = 0;
  for (w = 0; w < 6; w++)
	for (d = 0; d < 7; d++)
		with (cellText[(7*w)+d]) {
			Victor = i++;
			if (myMonth[w+1][d]<0) {
				color = gcGray;
				innerText = -myMonth[w+1][d];
			}else{
				color = ((d==0)||(d==6))?"red":"black";
				innerText = myMonth[w+1][d];
			}
		}
}
function fSetYearMon(iYear, iMon){
  tbSelMonth.options[iMon-1].selected = true;
  for (i = 0; i < tbSelYear.length; i++)
	if (tbSelYear.options[i].value == iYear)
		tbSelYear.options[i].selected = true;
  fUpdateCal(iYear, iMon);
}
function fPrevMonth(){
  var iMon = tbSelMonth.value;
  var iYear = tbSelYear.value;  if (--iMon<1) {	  iMon = 12;	  iYear--;  }  fSetYearMon(iYear, iMon);
}
function fNextMonth(){
  var iMon = tbSelMonth.value;
  var iYear = tbSelYear.value;
  if (++iMon>12) {
	  iMon = 1;
	  iYear++;
  }
  fSetYearMon(iYear, iMon);
}
//bug:当页面中存在其他select标签时，并将那个select标签屏蔽掉(即隐藏)
function fToggleTags(){
  with (document.all.tags("SELECT")){
 	for (i=0; i<length; i++)
 		if ((item(i).Victor!="Won")&&fTagInBound(item(i))){
 			item(i).style.visibility = "hidden";
 			goSelectTag[goSelectTag.length] = item(i);
 		}
  }
}

function fTagInBound(aTag){
  with (VicPopCal.style){
  	var l = parseInt(left);
  	var t = parseInt(top);
  	var r = l+parseInt(width);
  	var b = t+parseInt(height);
	var ptLT = fGetXY(aTag);
	return !((ptLT.x>r)||(ptLT.x+aTag.offsetWidth<l)||(ptLT.y>b)||(ptLT.y+aTag.offsetHeight<t));
  }
}

function fGetXY(aTag){
  var oTmp = aTag;
  var pt = new Point(0,0);
  do {
  	pt.x += oTmp.offsetLeft;
  	pt.y += oTmp.offsetTop;
  	oTmp = oTmp.offsetParent;
  } while(oTmp.tagName!="BODY");
  return pt;
}

var gMonths = new Array("&nbsp;一月","&nbsp;二月","&nbsp;三月","&nbsp;四月","&nbsp;五月","&nbsp;六月","&nbsp;七月","&nbsp;八月","&nbsp;九月","&nbsp;十月","十一月","十二月");

with (document) {
write("<Div id='VicPopCal' onclick='event.cancelBubble=true' style='POSITION:absolute;visibility:hidden;border:2px ridge;width:10;z-index:100;'>");
write("<table border='0' bgcolor='cccccc'>");
write("<TR>");
write("<td valign='middle' align='center'><input type='button' name='PrevMonth' value='<' style='height:20;width:20;FONT:bold' onClick='fPrevMonth()'>");
write("&nbsp;<SELECT name='tbSelYear' onChange='fUpdateCal(tbSelYear.value, tbSelMonth.value)' Victor='Won'>");
for(i=1900;i<2015;i++)
	write("<OPTION value='"+i+"'>"+i+"年</OPTION>");
write("</SELECT>");
write("&nbsp;<select name='tbSelMonth' onChange='fUpdateCal(tbSelYear.value, tbSelMonth.value)' Victor='Won'>");
for (i=0; i<12; i++)
	write("<option value='"+(i+1)+"'>"+gMonths[i]+"</option>");
write("</SELECT>");
write("&nbsp;<input type='button' name='PrevMonth' value='>' style='height:20;width:20;FONT:bold' onclick='fNextMonth()'>");
write("</td>");
write("</TR><TR>");
write("<td align='center'>");
write("<DIV style='background-color:teal'><table width='100%' border='0' cellpadding='2'>");
fDrawCal(giYear, giMonth, 12, 12);
write("</table></DIV>");
write("</td>");
write("</TR><TR><TD align='center'>");
write("<B style='cursor:hand;font:bold 12 宋体' onclick='fSetDate(giYear,giMonth,giDay)' onMouseOver='this.style.color=gcToggle' onMouseOut='this.style.color=0'>今天："+giYear+"年"+giMonth+"月"+giDay+"日</B>  <a href='javascript:fHideCalendar()' >关闭</a>");
write("</TD></TR>");
write("</TABLE></Div>");
}

function keepCal() {
	event.cancelBubble = true;
}



