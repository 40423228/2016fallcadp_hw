Title: other
Date: 2016-09-2 12:00
Category: Misc
Tags: 設定
Author: 40423228

<h2>使用環境設定</h2>
<pre>
git config --global user.email "40423228@gm.nfu.edu.tw"
git config --global user.name "40423228"</pre>
git add -A
git commit -m "add all"
git pull origin gh-pages
pit push origin gh-pages

<h2>子模組</h2>
<p>用40423228的名稱把https://github.com/40423228/2016fallcadp_hw的倉儲加入為子模組</p>
<pre>git submodule add -b gh-pages <u>子模組網址</u> <u>子模組名稱</u>
(例如:git submodule add -b gh-pages https://github.com/40423228/2016fallcadp_hw 40423228)</pre>
<p>抓對應子模組的版本</p>
<pre>git submodule update --init --recursive</pre>
<p>更新子模組的資料,甚至更新子模組裡子模組的資料</p>
<pre>git submodule foreach "(git checkout gh-pages; git pull)&"</pre>

<h2>HTML文字語法</h2>
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>
<pre>
&lt;h1>h1&lt;/h1>
&lt;h2>h2&lt;/h2>
&lt;h3>h3&lt;/h3>
&lt;h4>h4&lt;/h4>
&lt;h5>h5&lt;/h5>
&lt;h6>h6&lt;/h6>
</pre>
<p align="center">置中</p>
<pre>&lt;p align="center">置中&lt;/p></pre>
<p align="right">靠右</p>
<pre>&lt;p align="right">靠右&lt;/p></pre>
<p><b>粗體</b></p>
<pre>&lt;b>粗體&lt;/b></pre>
<p><i>斜體</i></p>
<pre>&lt;i>斜體&lt;/i></pre>
<p><u>底線</u></p>
<pre>&lt;u>底線&lt;/u></pre>