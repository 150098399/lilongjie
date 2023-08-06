<template><div><h1 id="第一章-基础知识" tabindex="-1"><a class="header-anchor" href="#第一章-基础知识" aria-hidden="true">#</a> 第一章 基础知识</h1>
<h2 id="_1-1-css单位" tabindex="-1"><a class="header-anchor" href="#_1-1-css单位" aria-hidden="true">#</a> 1.1 CSS单位</h2>
<h3 id="_1-1-1-绝对单位" tabindex="-1"><a class="header-anchor" href="#_1-1-1-绝对单位" aria-hidden="true">#</a> 1.1.1 绝对单位</h3>
<p>在CSS中，绝对单位定义的大小是固定的物理度量单位，显示效果不会受到外界因素影响。多用于传统的平面印刷中，<strong>极少用于前端开发</strong></p>
<table>
<thead>
<tr>
<th>绝对单位</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>cm</td>
<td>厘米</td>
</tr>
<tr>
<td>mm</td>
<td>毫米</td>
</tr>
<tr>
<td>in</td>
<td>英寸</td>
</tr>
<tr>
<td>pt</td>
<td>磅</td>
</tr>
<tr>
<td>pc</td>
<td>pica, 1pc=12pt</td>
</tr>
</tbody>
</table>
<h3 id="_1-1-2-相对单位" tabindex="-1"><a class="header-anchor" href="#_1-1-2-相对单位" aria-hidden="true">#</a> 1.1.2 相对单位</h3>
<p>在CSS中，相对单位定义的大小是不固定的，一般是相对其他长度而言</p>
<table>
<thead>
<tr>
<th>相对单位</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>px</td>
<td>像素</td>
</tr>
<tr>
<td>%</td>
<td>百分比</td>
</tr>
<tr>
<td>em</td>
<td>1em = '当前元素'字体大小</td>
</tr>
<tr>
<td>rem</td>
<td>1rem = '根元素'字体大小</td>
</tr>
<tr>
<td>ex</td>
<td></td>
</tr>
<tr>
<td>vw</td>
<td></td>
</tr>
<tr>
<td>vh</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="_1-像素-px" tabindex="-1"><a class="header-anchor" href="#_1-像素-px" aria-hidden="true">#</a> 1. 像素（px）</h4>
<p>​	严格来说，px属于相对单位，因为<strong>屏幕分辨率不同，1px的大小也是不同的</strong>，例如：windows系统的分辨率每英寸96px，Mac系统的分辨率为每英寸72px。但是如果不考虑屏幕分辨率，我们也可以把px当作绝对单位来看待，这也是为什么很多地方说px是绝对单位的原因。</p>
<h4 id="_2-百分比" tabindex="-1"><a class="header-anchor" href="#_2-百分比" aria-hidden="true">#</a> 2. 百分比（%）</h4>
<p>​	在CSS中，支持百分比作为单位的属性大致分为3类</p>
<ul>
<li><strong>width、height、font-size</strong>的百分比是相对于父元素&quot;相同属性&quot;的值来计算的。</li>
<li><strong>line-height</strong>的百分比是相对与当前元素的font-size来计算的。</li>
<li>** vertical-aligin**的百分比是相对于当前元素的line-height来决定的。</li>
</ul>
<h4 id="_3-em" tabindex="-1"><a class="header-anchor" href="#_3-em" aria-hidden="true">#</a> 3. em</h4>
<p>​	em是相对于&quot;<strong>当前元素</strong>&quot;的字体大小而言的，1em = '当前元素'字体大小，如果当前元素的font-size没有定义，则当前元素会继承父元素的font-size。如果当前</p>
<p>元素的所有祖先元素都沒有定义font-size，则当前元素会继承浏览器默认的font-size。<strong>所有浏览器默认的font-size都是16px</strong>。</p>
<p>🏹技巧一：首行缩进使用text-indent:2em来实现</p>
<p>🏹使用em作为统一单位</p>
<ul>
<li>如果想要统一使用em作为单位，那么对于任何元素都不需要再设置font-size为px，而是根据根元素的font-size值换算为em单位；为了简化计算，在css中提前申明<code v-pre>body{font-size: 62.5%}</code>，此时默认字体大小变为16px * 62.5% = 10px；1em = 10px; 0.75em = 7.5px</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">p</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid silver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 使用px作为单位 */</span>
    <span class="token selector">#p1</span><span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
      <span class="token property">text-indent</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* 使用em作为单位 */</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 62.5%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">#p2</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 8em<span class="token punctuation">;</span>
      <span class="token property">text-indent</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>王朝已经建立，统治还在继续，恭喜JDG京东电子竞技俱乐部勇夺2023LPL夏季赛冠军，实现联赛三连冠。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>王朝已经建立，统治还在继续，恭喜JDG京东电子竞技俱乐部勇夺2023LPL夏季赛冠军，实现联赛三连冠。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在实际开发中，对于em，我们一般需要计算两次：</p>
<p>第一次：当前元素的font-size值 15px/10px = 1.5em</p>
<p>第二次：当前元素的width：150px /15px = 10em  当前元素的height: 120px/15px = 8em</p>
<p>🏹 使用em作为字体大小单位</p>
<ul>
<li>要控制一个页面的字体大小，使用px作为单位可扩展性不好，使用百分比作为单位又不符合习惯，<strong>最佳选择是使用em为单位来定义字体大小</strong>。当需要改变页面整体的文字大小时，只需要改变根元素的字体大小即可。</li>
</ul>
<h4 id="_4-rem" tabindex="-1"><a class="header-anchor" href="#_4-rem" aria-hidden="true">#</a> 4. rem</h4>
<p>rem是css3新引入的单位，rem布局是<strong>移动端</strong>最常见的布局方式之一。</p>
<p>rem和em很相似，但是也有很明显的区别，em是相对于当前元素的字体大小，而rem是相对于根元素（html）的字体大小</p>
</div></template>


