{
    "author":"takagen99",
    "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    "homeUrl": "https://cokemv.me/",
    "dcVipFlag": "true",
    "dcPlayUrl": "true",
    "dcShow2Vip": {},
    "pCfgJs": "https://cokemv.me/static/js/playerconfig.js",
    "pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
    "cateManual": {
      "抖音电影": "5",
      "电影": "1",
      "大陸劇": "13",
      "香港剧": "14",
      "韩国剧": "15",
      "欧美剧": "16",
      "日本剧": "20",
      "台灣劇": "21",
      "泰國劇": "22",
      "动漫": "4",
      "综艺": "3"
    },
  
  // Home Summary ====================================================
    "homeVodNode": "//a[@class='module-poster-item module-item']",
    "homeVodName": "/@title",
    "homeVodId": "/@href",
    "homeVodIdR": "/(\\w+).html",
    "homeVodImg": "//img[@class='lazy lazyload']/@data-original",
    "homeVodMark": "//div[@class='module-item-note']/text()",
  
  // Category Summary ================================================
    "cateUrl": "https://cokemv.me/vodshow/{cateId}-{area}---{lang}----{catePg}---{year}.html",
    "cateVodNode": "//a[@class='module-poster-item module-item']",
    "cateVodName": "/@title",
    "cateVodId": "/@href",
    "cateVodIdR": "/(\\w+).html",
    "cateVodImg": "//img[@class='lazy lazyload']/@data-original",
    "cateVodMark": "//div[@class='module-item-note']/text()",
  
  // Category Details ================================================
    "dtUrl": "https://cokemv.me/voddetail/{vid}.html",
    "dtNode": "//div[@class='module module-info']",
    "dtName": "//div[@class='module-info-main']/div[@class='module-info-heading']/h1/text()",
    "dtNameR": "",
    "dtImg": "//div[@class='module-info-poster']//div[@class='module-item-pic']/img/@data-original",
    "dtImgR": "\\S+(http\\S+)",
    "dtCate": "//div[@class='module-info-tag']//div[@class='module-info-tag-link'][3]/following-sibling::*/text()",
    "dtYear": "//div[@class='module-info-tag']//div[@class='module-info-tag-link'][1]/following-sibling::a/text()",
    "dtArea": "//div[@class='module-info-tag']//div[@class='module-info-tag-link'][2]/following-sibling::a/text()",
    "dtActor": "//div[@class='module-info-items']//span[contains(@class,'module-info-item-title') and contains(text(), '主演：')]/following-sibling::div/a/text()",
    "dtDirector": "//div[@class='module-info-items']//span[contains(@class,'module-info-item-title') and contains(text(), '导演：')]/following-sibling::div/a/text()",
    "dtDesc": "//div[@class='module-info-introduction-content']/p/text()",
  
  // Playlist ========================================================
    "dtFromNode": "//div[contains(@class, 'module-tab-items-box')]/div[contains(@class, 'module-tab-item')]/span",
    "dtFromName": "/text()",
    "dtUrlNode": "//div[contains(@class, 'module-play-list')]",
    "dtUrlSubNode": "/div/a",
    "dtUrlId": "/@href",
    "dtUrlIdR": "/vodplay/(\\S+).html",
    "dtUrlName": "/span/text()",
    "dtUrlNameR": "",
    "playUrl": "https://cokemv.me/vodplay/{playUrl}.html",
    "playUa": "",
  
  // Search Results ==================================================
    "searchUrl": "https://cokemv.me/vodsearch/-------------.html?wd={wd}",
    "scVodNode": "json:list",
    "scVodName": "name",
    "scVodId": "id",
    "scVodIdR": "",
    "scVodImg": "pic",
    "scVodMark": "",
  
  // Filters =======================================================
    "filter": {
      "5": [      // 抖音电影
        {
          "key": "lang",
          "name": "语言",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "国语", "v": "國語" },
            { "n": "英语", "v": "英語" },
            { "n": "粤语", "v": "粵語" },
            { "n": "闽南语", "v": "閩南語" },
            { "n": "韩语", "v": "韓語" },
            { "n": "日语", "v": "日語" },
            { "n": "法语", "v": "法語" },
            { "n": "德语", "v": "德語" },
            { "n": "其它", "v": "其它" }
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "2022", "v": "2022" },          
            { "n": "2021", "v": "2021" },
            { "n": "2020", "v": "2020" },
            { "n": "2019", "v": "2019" },
            { "n": "2018", "v": "2018" },
            { "n": "2017", "v": "2017" },
            { "n": "2016", "v": "2016" },
            { "n": "2015", "v": "2015" },
            { "n": "2014", "v": "2014" },
            { "n": "2013", "v": "2013" },
            { "n": "2012", "v": "2012" },
            { "n": "2011", "v": "2011" },
            { "n": "2010", "v": "2010" }
          ]
        }
      ],
      "1": [      // 电影
        {
          "key": "area",
          "name": "地区",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "中国大陆", "v": "中国大陆" },
            { "n": "韩国", "v": "韩国" },
            { "n": "中国香港", "v": "中国香港" },
            { "n": "中国台湾", "v": "中国台湾" },
            { "n": "日本", "v": "日本" },
            { "n": "美国", "v": "美国" },
            { "n": "加拿大", "v": "加拿大" },
            { "n": "泰国", "v": "泰国" },
            { "n": "英国", "v": "英国" },
            { "n": "新加坡", "v": "新加坡" },
            { "n": "其他", "v": "其他" }
          ]
        },
        {
          "key": "lang",
          "name": "语言",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "国语", "v": "国语" },
            { "n": "英语", "v": "英语" },
            { "n": "粤语", "v": "粤语" },
            { "n": "闽南语", "v": "闽南语" },
            { "n": "韩语", "v": "韩语" },
            { "n": "日语", "v": "日语" },
            { "n": "法语", "v": "法语" },
            { "n": "德语", "v": "德语" },
            { "n": "其它", "v": "其它" }
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "2022", "v": "2022" },           
            { "n": "2021", "v": "2021" },
            { "n": "2020", "v": "2020" },
            { "n": "2019", "v": "2019" },
            { "n": "2018", "v": "2018" },
            { "n": "2017", "v": "2017" },
            { "n": "2016", "v": "2016" },
            { "n": "2015", "v": "2015" },
            { "n": "2014", "v": "2014" },
            { "n": "2013", "v": "2013" },
            { "n": "2012", "v": "2012" },
            { "n": "2011", "v": "2011" },
            { "n": "2010", "v": "2010" }
          ]
        }
      ],
      "13": [      // 大陸劇
        {
          "key": "year",
          "name": "年份",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "2022", "v": "2022" },          
            { "n": "2021", "v": "2021" },
            { "n": "2020", "v": "2020" },
            { "n": "2019", "v": "2019" },
            { "n": "2018", "v": "2018" },
            { "n": "2017", "v": "2017" },
            { "n": "2016", "v": "2016" },
            { "n": "2015", "v": "2015" },
            { "n": "2014", "v": "2014" },
            { "n": "2013", "v": "2013" },
            { "n": "2012", "v": "2012" },
            { "n": "2011", "v": "2011" },
            { "n": "2010", "v": "2010" },
            { "n": "2009", "v": "2009" },
            { "n": "2008", "v": "2008" },
            { "n": "2007", "v": "2007" },
            { "n": "2006", "v": "2006" },
            { "n": "2005", "v": "2005" },
            { "n": "2004", "v": "2004" }
          ]
        }
      ],
      "14": [      // 香港剧
        {
          "key": "year",
          "name": "年份",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "2022", "v": "2022" },          
            { "n": "2021", "v": "2021" },
            { "n": "2020", "v": "2020" },
            { "n": "2019", "v": "2019" },
            { "n": "2018", "v": "2018" },
            { "n": "2017", "v": "2017" },
            { "n": "2016", "v": "2016" },
            { "n": "2015", "v": "2015" },
            { "n": "2014", "v": "2014" },
            { "n": "2013", "v": "2013" },
            { "n": "2012", "v": "2012" },
            { "n": "2011", "v": "2011" },
            { "n": "2010", "v": "2010" },
            { "n": "2009", "v": "2009" },
            { "n": "2008", "v": "2008" },
            { "n": "2007", "v": "2007" },
            { "n": "2006", "v": "2006" },
            { "n": "2005", "v": "2005" },
            { "n": "2004", "v": "2004" }
          ]
        }
      ],
      "15": [      // 韩国剧
        {
          "key": "year",
          "name": "年份",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "2022", "v": "2022" },          
            { "n": "2021", "v": "2021" },
            { "n": "2020", "v": "2020" },
            { "n": "2019", "v": "2019" },
            { "n": "2018", "v": "2018" },
            { "n": "2017", "v": "2017" },
            { "n": "2016", "v": "2016" },
            { "n": "2015", "v": "2015" },
            { "n": "2014", "v": "2014" },
            { "n": "2013", "v": "2013" },
            { "n": "2012", "v": "2012" },
            { "n": "2011", "v": "2011" },
            { "n": "2010", "v": "2010" },
            { "n": "2009", "v": "2009" },
            { "n": "2008", "v": "2008" },
            { "n": "2007", "v": "2007" },
            { "n": "2006", "v": "2006" },
            { "n": "2005", "v": "2005" },
            { "n": "2004", "v": "2004" }
          ]
        }
      ],
      "16": [      // 欧美剧
        {
          "key": "year",
          "name": "年份",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "2022", "v": "2022" },          
            { "n": "2021", "v": "2021" },
            { "n": "2020", "v": "2020" },
            { "n": "2019", "v": "2019" },
            { "n": "2018", "v": "2018" },
            { "n": "2017", "v": "2017" },
            { "n": "2016", "v": "2016" },
            { "n": "2015", "v": "2015" },
            { "n": "2014", "v": "2014" },
            { "n": "2013", "v": "2013" },
            { "n": "2012", "v": "2012" },
            { "n": "2011", "v": "2011" },
            { "n": "2010", "v": "2010" },
            { "n": "2009", "v": "2009" },
            { "n": "2008", "v": "2008" },
            { "n": "2007", "v": "2007" },
            { "n": "2006", "v": "2006" },
            { "n": "2005", "v": "2005" },
            { "n": "2004", "v": "2004" }
          ]
        }
      ],
      "20": [      // 日本剧
        {
          "key": "year",
          "name": "年份",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "2022", "v": "2022" },          
            { "n": "2021", "v": "2021" },
            { "n": "2020", "v": "2020" },
            { "n": "2019", "v": "2019" },
            { "n": "2018", "v": "2018" },
            { "n": "2017", "v": "2017" },
            { "n": "2016", "v": "2016" },
            { "n": "2015", "v": "2015" },
            { "n": "2014", "v": "2014" },
            { "n": "2013", "v": "2013" },
            { "n": "2012", "v": "2012" },
            { "n": "2011", "v": "2011" },
            { "n": "2010", "v": "2010" },
            { "n": "2009", "v": "2009" },
            { "n": "2008", "v": "2008" },
            { "n": "2007", "v": "2007" },
            { "n": "2006", "v": "2006" },
            { "n": "2005", "v": "2005" },
            { "n": "2004", "v": "2004" }
          ]
        }
      ],
      "21": [      // 台灣劇
        {
          "key": "year",
          "name": "年份",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "2022", "v": "2022" },          
            { "n": "2021", "v": "2021" },
            { "n": "2020", "v": "2020" },
            { "n": "2019", "v": "2019" },
            { "n": "2018", "v": "2018" },
            { "n": "2017", "v": "2017" },
            { "n": "2016", "v": "2016" },
            { "n": "2015", "v": "2015" },
            { "n": "2014", "v": "2014" },
            { "n": "2013", "v": "2013" },
            { "n": "2012", "v": "2012" },
            { "n": "2011", "v": "2011" },
            { "n": "2010", "v": "2010" },
            { "n": "2009", "v": "2009" },
            { "n": "2008", "v": "2008" },
            { "n": "2007", "v": "2007" },
            { "n": "2006", "v": "2006" },
            { "n": "2005", "v": "2005" },
            { "n": "2004", "v": "2004" }
          ]
        }
      ],
      "22": [      // 泰國劇
        {
          "key": "year",
          "name": "年份",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "2022", "v": "2022" },          
            { "n": "2021", "v": "2021" },
            { "n": "2020", "v": "2020" },
            { "n": "2019", "v": "2019" },
            { "n": "2018", "v": "2018" },
            { "n": "2017", "v": "2017" },
            { "n": "2016", "v": "2016" },
            { "n": "2015", "v": "2015" },
            { "n": "2014", "v": "2014" },
            { "n": "2013", "v": "2013" },
            { "n": "2012", "v": "2012" },
            { "n": "2011", "v": "2011" },
            { "n": "2010", "v": "2010" },
            { "n": "2009", "v": "2009" },
            { "n": "2008", "v": "2008" },
            { "n": "2007", "v": "2007" },
            { "n": "2006", "v": "2006" },
            { "n": "2005", "v": "2005" },
            { "n": "2004", "v": "2004" }
          ]
        }
      ],
      "3": [      // 综艺
        {
          "key": "area",
          "name": "地区",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "中国大陆", "v": "中国大陆" },
            { "n": "韩国", "v": "韩国" }
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "2022", "v": "2022" },           
            { "n": "2021", "v": "2021" },
            { "n": "2020", "v": "2020" },
            { "n": "2019", "v": "2019" },
            { "n": "2018", "v": "2018" },
            { "n": "2017", "v": "2017" },
            { "n": "2016", "v": "2016" },
            { "n": "2015", "v": "2015" },
            { "n": "2014", "v": "2014" },
            { "n": "2013", "v": "2013" },
            { "n": "2012", "v": "2012" },
            { "n": "2011", "v": "2011" },
            { "n": "2010", "v": "2010" },
            { "n": "2009", "v": "2009" },
            { "n": "2008", "v": "2008" },
            { "n": "2007", "v": "2007" },
            { "n": "2006", "v": "2006" },
            { "n": "2005", "v": "2005" },
            { "n": "2004", "v": "2004" }
          ]
        }
      ],
      "4": [      // 动漫
        {
          "key": "area",
          "name": "地区",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "中国大陆", "v": "中国大陆" },
            { "n": "日本", "v": "日本" },
            { "n": "美国", "v": "美国" }
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            { "n": "全部", "v": "" },
            { "n": "2022", "v": "2022" },           
            { "n": "2021", "v": "2021" },
            { "n": "2020", "v": "2020" },
            { "n": "2019", "v": "2019" },
            { "n": "2018", "v": "2018" },
            { "n": "2017", "v": "2017" },
            { "n": "2016", "v": "2016" },
            { "n": "2015", "v": "2015" },
            { "n": "2014", "v": "2014" },
            { "n": "2013", "v": "2013" },
            { "n": "2012", "v": "2012" },
            { "n": "2011", "v": "2011" },
            { "n": "2010", "v": "2010" },
            { "n": "2009", "v": "2009" },
            { "n": "2008", "v": "2008" },
            { "n": "2007", "v": "2007" },
            { "n": "2006", "v": "2006" },
            { "n": "2005", "v": "2005" },
            { "n": "2004", "v": "2004" }
          ]
        }
      ]
    }
  }