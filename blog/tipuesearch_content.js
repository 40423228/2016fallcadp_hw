var tipuesearch = {"pages":[{"title":"About","tags":"misc","url":"./pages/about/","text":"2016Fallcadpb_bg4 成員簡報 組長 40423204 組員 40423221 組員 40423228 組員 40423243 組員 40423253 組員 40423254 2016Fallcadpb_bg4 成員網誌 組長 40423204 組員 40423221 組員 40423228 組員 40423243 組員 40423253 組員 40423254"},{"title":"20161230W16","tags":"Misc","url":"./20161230w16.html","text":"oneshape繪圖、組裝 零件:"},{"title":"20161209W13","tags":"Misc","url":"./20161209w13.html","text":""},{"title":"20161202W12","tags":"Misc","url":"./20161202w12.html","text":"bandicam 2016-12-09 11-16-51-645 from 40423228 on Vimeo . bandicam 2016-12-09 11-43-54-406 from 40423228 on Vimeo . bandicam 2016-12-09 11-30-23-965 from 40423228 on Vimeo ."},{"title":"20161125W11","tags":"Misc","url":"./20161125w11.html","text":"校慶週~"},{"title":"20161118W10","tags":"Misc","url":"./20161118w10.html","text":"Solvespace 平面四連桿機構模擬 將所得到的點座標 .csv 以 Excel 畫圖"},{"title":"20161111W9","tags":"Misc","url":"./20161111w9.html","text":"自評系統"},{"title":"20161104W8","tags":"Misc","url":"./20161104w8.html","text":"期中課程評量系統"},{"title":"20161028W7","tags":"Misc","url":"./20161028w7.html","text":"使用Trace Point計算路徑"},{"title":"20161021W6","tags":"Misc","url":"./20161021w6.html","text":"解決子模組在對應上的問題"},{"title":"20161014W5","tags":"Misc","url":"./20161014w5.html","text":"初步認識SolveSpace"},{"title":"20161007W4","tags":"Misc","url":"./20161007w4.html","text":"設定使用者資料,讓可攜程式更方便 用2016fallcadp_bg6的名稱,建立小組倉儲"},{"title":"20160930W3","tags":"Misc","url":"./20160930w3.html","text":"複製網誌和簡報的設定檔到2016fallcadp_hw的倉儲 更改2016fallcadp_hw的README.md檔案 簡報: https://40423228.github.io/2016fallcadp_hw 網址: https://40423228.github.io/2016fallcadp_hw/blog/ 解決近端設定代理主機的問題 每次上課須執行以下指令 git config --global http.proxy http://proxy.mde.tw:3128 git config --global https.proxy http://proxy.mde.tw:3128 輸入完之後出現了這個問題 warning: http.proxy has multiple values error: cannot overwrite multiple values with a single value Use a regexp, --add or --replace-all to change http.proxy. 發現在Y:\\home的.gitconfig檔案出現問題,從SciTE打開.gitconfig [http] proxy = proxy = proxy = proxy = http://proxy.mde.tw:3128 [https] proxy = http://proxy.mde.tw:3128 [user] email = 40423228@gm.nfu.edu.tw name = 40423228 更正後儲存 [http] proxy = http://proxy.mde.tw:3128 [https] proxy = http://proxy.mde.tw:3128 [user] email = 40423228@gm.nfu.edu.tw name = 40423228"},{"title":"20160923W2","tags":"Misc","url":"./20160923w2.html","text":"建立40423228.github.io名稱的倉儲 →登入自己的github →於右上角的+號旁有個小倒三角形 →New repository →Repository name輸入40423228.github.io →\"Initialize this repository with a README\"打勾 →Create repository 建立2016fallcadp_hw名稱的倉儲 →登入自己的github →於右上角的+號旁有個小倒三角形 →New repository →Repository name輸入2016fallcadp_hw →\"Initialize this repository with a README\"打勾 →Create repository 把分支的預設值改為gh-pages →進入2016fallcadp_hw →Branch:master旁的倒三角形箭頭 →Find or create a branch 輸入 gh-pages →上面的Settings →左方Branches →Default branch→gh-pages→Update"},{"title":"20160916W1","tags":"Misc","url":"./20160916w1.html","text":"中秋連假 切換到2016fallcadp_hw的分支 cd 分支名稱 (例如:cd 2016fallcadp_hw) 回到上一個分支 cd .. 會新建一個40423228的資料夾,並把遠端資料存在裡面 git clone 倉儲網址 分支名稱 (例如:git clone https://github.com/40423228/2016fallcadp_hw.git ) 檢查分支 git branch 建立一個gh-pages名稱的分支 git branch 分支名稱 (例如:git branch gh-pages) 切換到指定的gh-pages分支 git checkout 分支名稱 (例如:git checkout gh-pages) git add -A git commit -m\" 改版內容 \" (例如:git commit -m\"add all\") 推送進端資料到遠端,並且指定推送到gh-pages的分支 git push origin 分支名稱 (例如:git push origin gh-pages) git pull 收尋該檔案名稱,並逐一確認是否刪除 git rm 檔案名稱 回到之前072e3af的版本資料 git reset --hard 版本代碼 (例如:git reset --hard 072e3af) 直接刪除所有該檔案名稱的檔案 git rm 檔案名稱 -f"},{"title":"other","tags":"Misc","url":"./other.html","text":"使用環境設定 git config --global user.email \"40423228@gm.nfu.edu.tw\" git config --global user.name \"40423228\" git add -A git commit -m \"add all\" git pull origin gh-pages pit push origin gh-pages 子模組 用40423228的名稱把https://github.com/40423228/2016fallcadp_hw的倉儲加入為子模組 git submodule add -b gh-pages 子模組網址 子模組名稱 (例如:git submodule add -b gh-pages https://github.com/40423228/2016fallcadp_hw 40423228) 抓對應子模組的版本 git submodule update --init --recursive 更新子模組的資料,甚至更新子模組裡子模組的資料 git submodule foreach \"(git checkout gh-pages; git pull)&\" HTML文字語法 h1 h2 h3 h4 h5 h6 <h1>h1</h1> <h2>h2</h2> <h3>h3</h3> <h4>h4</h4> <h5>h5</h5> <h6>h6</h6> 置中 <p align=\"center\">置中</p> 靠右 <p align=\"right\">靠右</p> 粗體 <b>粗體</b> 斜體 <i>斜體</i> 底線 <u>底線</u>"}]};